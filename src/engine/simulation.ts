import { findPath, type PathCell } from "./path";
import { TICK_DT, TICK_HZ, SKILL_NAMES, type Activity, type ColonistColumns, type ColonistRoster, type ColonistSave, type Contract, type CreateSimulationOptions, type HaulItemState, type Inventory, type Mind, type NavGrid, type Needs, type ProductionOrder, type ResearchState, type SaveGame, type SimEvent, type Simulation, type Skills } from "./types";
import { stepWander } from "./wander";

interface HaulItem {
  id: string;
  x: number;
  z: number;
  w: number;
  d: number;
  blocks: boolean;
  carrierId: number;
}

type PlayerOrder =
  | { kind: "move"; x: number; z: number }
  | { kind: "pickup"; itemId: string }
  | { kind: "place"; x: number; z: number };

const CAPACITY = 64;

/**
 * Reference backend. It keeps colonist transforms in columns so a Zig module
 * can replace this class without a change to the renderer.
 * Work is never assigned unless the colonist has accepted the contract.
 */
export class TypeScriptSimulation implements Simulation {
  readonly backend = "typescript" as const;

  tick = 0;
  time = 0;

  private readonly nav;
  private readonly ids: number[];
  private readonly keys: string[];
  private readonly names: string[];
  private readonly needs: Needs[];
  private readonly skills: Skills[];
  private readonly purseCents: Int32Array;
  private readonly contractId: (number | null)[];
  private readonly activity: Activity[];
  private readonly wait: Float32Array;
  private readonly paths: { x: number; z: number }[][];
  private readonly contracts: Contract[] = [];
  private readonly events: SimEvent[] = [];
  private readonly minds: Mind[];
  private research: ResearchState = { unlocked: [], active: null, progress: 0 };
  private orders: ProductionOrder[] = [];
  private readonly playerOrders: (PlayerOrder | null)[];
  private readonly haulWalking: Uint8Array;
  private readonly haulItems: HaulItem[];
  private readonly fixedBlocked: Uint8Array;
  private readonly columns: ColonistColumns;
  private accumulator = 0;
  private seed: number;
  private rngState: number;

  constructor(options: CreateSimulationOptions) {
    const spawns = options.spawns;
    if (spawns.length > CAPACITY) {
      throw new Error(`This build simulates at most ${CAPACITY} colonists.`);
    }
    this.nav = options.nav;
    this.seed = options.seed ?? 0x6a1c;
    this.rngState = this.seed >>> 0;
    const count = spawns.length;
    this.ids = spawns.map((spawn) => spawn.id);
    this.keys = spawns.map((spawn) => spawn.key);
    this.names = spawns.map((spawn) => spawn.name);
    this.needs = spawns.map((spawn, index) => spawn.needs ?? {
      food: clamp01(0.92 - index * 0.03),
      rest: clamp01(0.88 - index * 0.02),
      recreation: clamp01(0.9 - index * 0.04),
    });
    this.skills = spawns.map((spawn) => spawn.skills ?? skillsFor(spawn.id));
    this.minds = spawns.map((spawn, index) => spawn.mind ?? founderMind(index));
    this.purseCents = new Int32Array(CAPACITY);
    this.contractId = spawns.map(() => null);
    this.activity = spawns.map(() => "wander" as const);
    this.wait = new Float32Array(CAPACITY);
    this.paths = spawns.map(() => []);
    this.playerOrders = spawns.map(() => null);
    this.haulWalking = new Uint8Array(CAPACITY);
    this.fixedBlocked = new Uint8Array(options.nav.blocked);
    this.haulItems = (options.items ?? []).map((item) => ({
      id: item.id,
      x: item.x,
      z: item.z,
      w: Math.max(1, item.w),
      d: Math.max(1, item.d),
      blocks: item.blocks,
      carrierId: 0,
    }));
    this.paintItems();
    spawns.forEach((spawn, index) => {
      this.purseCents[index] = spawn.purseCents ?? 8_000 + index * 1_500;
      this.wait[index] = index * 0.35;
    });

    const column = () => new Float32Array(CAPACITY);
    this.columns = {
      generation: 0,
      count,
      prevX: column(),
      prevZ: column(),
      prevYaw: column(),
      prevPhase: column(),
      x: column(),
      z: column(),
      yaw: column(),
      phase: column(),
      moving: new Uint8Array(CAPACITY),
    };
    spawns.forEach((spawn, index) => {
      this.columns.x[index] = spawn.x;
      this.columns.z[index] = spawn.z;
      this.columns.yaw[index] = spawn.yaw;
      this.columns.phase[index] = index;
      this.copyCurrentToPrevious(index);
    });
  }

  advance(frameSeconds: number): void {
    this.accumulator += Math.min(Math.max(0, frameSeconds), 0.25);
    let steps = 0;
    while (this.accumulator >= TICK_DT && steps < TICK_HZ) {
      this.snapshot();
      this.step(TICK_DT);
      this.tick += 1;
      this.time += TICK_DT;
      this.accumulator -= TICK_DT;
      steps += 1;
    }
  }

  alpha(): number {
    return this.accumulator / TICK_DT;
  }

  colonists(): ColonistColumns {
    return this.columns;
  }

  roster(): ColonistRoster {
    return { ids: this.ids, keys: this.keys, names: this.names };
  }

  totalGoldCents(): number {
    let total = 0;
    for (let i = 0; i < this.columns.count; i++) total += this.purseCents[i];
    return total;
  }

  pollEvents(): SimEvent[] {
    return this.events.splice(0, this.events.length);
  }

  save(): SaveGame {
    const colonists: ColonistSave[] = [];
    for (let i = 0; i < this.columns.count; i++) {
      colonists.push({
        id: this.ids[i],
        key: this.keys[i],
        name: this.names[i],
        x: this.columns.x[i],
        z: this.columns.z[i],
        yaw: this.columns.yaw[i],
        phase: this.columns.phase[i],
        wait: this.wait[i],
        needs: { ...this.needs[i] },
        skills: { ...this.skills[i] },
        purseCents: this.purseCents[i],
        contractId: this.contractId[i],
        activity: this.activity[i],
        mind: copyMind(this.minds[i]),
      });
    }
    return {
      version: 1,
      seed: this.seed,
      rngState: this.rngState,
      tick: this.tick,
      time: this.time,
      colonists,
      contracts: this.contracts.map((contract) => ({ ...contract })),
      research: { ...this.research, unlocked: [...this.research.unlocked] },
      orders: this.orders.map((order) => ({ ...order })),
    };
  }

  load(save: SaveGame): void {
    if (save.version !== 1) throw new Error(`Unknown save version ${save.version}`);
    if (save.colonists.length !== this.columns.count) {
      throw new Error("This build cannot load a valley with a different number of colonists.");
    }
    this.seed = save.seed;
    this.rngState = save.rngState >>> 0;
    this.tick = save.tick;
    this.time = save.time;
    this.accumulator = 0;
    this.contracts.splice(0, this.contracts.length, ...save.contracts.map((contract) => ({ ...contract })));
    this.research = { ...save.research, unlocked: [...save.research.unlocked] };
    this.orders = save.orders.map((order) => ({ ...order }));
    for (let i = 0; i < save.colonists.length; i++) {
      const colonist = save.colonists[i];
      this.ids[i] = colonist.id;
      this.keys[i] = colonist.key;
      this.names[i] = colonist.name;
      this.columns.x[i] = colonist.x;
      this.columns.z[i] = colonist.z;
      this.columns.yaw[i] = colonist.yaw;
      this.columns.phase[i] = colonist.phase;
      this.wait[i] = colonist.wait;
      this.needs[i] = { ...colonist.needs };
      this.skills[i] = { ...colonist.skills };
      this.purseCents[i] = colonist.purseCents;
      this.contractId[i] = colonist.contractId;
      this.minds[i] = copyMind(colonist.mind);
      this.activity[i] = accepted(this.contracts, colonist.contractId) ? "work" : "wander";
      this.playerOrders[i] = null;
      this.haulWalking[i] = 0;
      this.paths[i] = [];
      this.columns.moving[i] = 0;
      this.copyCurrentToPrevious(i);
    }
  }

  private step(dt: number): void {
    // Beliefs, receptivity, inventories, research, and production orders are
    // stored and saved. They are not stepped. See docs/ENGINE.md.
    this.schedule();
    this.stepHaul(dt);
    this.syncCarried();
    stepWander(
      {
        count: this.columns.count,
        x: this.columns.x,
        z: this.columns.z,
        yaw: this.columns.yaw,
        phase: this.columns.phase,
        wait: this.wait,
        moving: this.columns.moving,
        paths: this.paths,
        activity: this.activity,
        random: () => this.random(),
      },
      this.nav,
      dt,
    );
    this.stepNeeds(dt);
  }

  /**
   * A colonist works only a contract they accepted. With no contracts,
   * everyone wanders. Nothing here drafts a person into a job.
   */
  private schedule(): void {
    for (let i = 0; i < this.columns.count; i++) {
      if (this.playerOrders[i]) this.activity[i] = "haul";
      else if (accepted(this.contracts, this.contractId[i])) this.activity[i] = "work";
      else this.activity[i] = "wander";
    }
  }

  orderMove(colonistId: number, x: number, z: number): boolean {
    const index = this.indexOf(colonistId);
    if (index < 0 || !this.openCell(x, z)) return false;
    this.setOrder(index, { kind: "move", x, z });
    return true;
  }

  orderPickup(colonistId: number, itemId: string): boolean {
    const index = this.indexOf(colonistId);
    const item = this.haulItems.find((entry) => entry.id === itemId);
    if (index < 0 || !item || item.carrierId !== 0) return false;
    if (this.carriedBy(colonistId)) return false;
    if (!this.standBeside(index, item)) return false;
    this.setOrder(index, { kind: "pickup", itemId });
    return true;
  }

  orderPlace(colonistId: number, x: number, z: number): boolean {
    const index = this.indexOf(colonistId);
    const item = this.carriedBy(colonistId);
    if (index < 0 || !item) return false;
    if (!this.footprintFree(x, z, item.w, item.d)) return false;
    if (!this.standBeside(index, { x, z, w: item.w, d: item.d, blocks: item.blocks })) return false;
    this.setOrder(index, { kind: "place", x, z });
    return true;
  }

  items(): readonly HaulItemState[] {
    return this.haulItems.map((item) => ({ ...item }));
  }

  blocked(x: number, z: number): boolean {
    if (x < 0 || z < 0 || x >= this.nav.width || z >= this.nav.height) return true;
    return this.nav.blocked[z * this.nav.width + x] === 1;
  }

  private setOrder(index: number, order: PlayerOrder): void {
    this.playerOrders[index] = order;
    this.paths[index] = [];
    this.haulWalking[index] = 0;
    this.activity[index] = "haul";
  }

  private indexOf(colonistId: number): number {
    return this.ids.indexOf(colonistId);
  }

  private carriedBy(colonistId: number): HaulItem | undefined {
    return this.haulItems.find((item) => item.carrierId === colonistId);
  }

  private openCell(x: number, z: number): boolean {
    if (x < 0 || z < 0 || x >= this.nav.width || z >= this.nav.height) return false;
    return this.nav.blocked[z * this.nav.width + x] === 0;
  }

  private footprintFree(x: number, z: number, w: number, d: number): boolean {
    for (let dz = 0; dz < d; dz++) {
      for (let dx = 0; dx < w; dx++) {
        const px = x + dx;
        const pz = z + dz;
        if (px < 0 || pz < 0 || px >= this.nav.width || pz >= this.nav.height) return false;
        if (this.fixedBlocked[pz * this.nav.width + px]) return false;
        for (const item of this.haulItems) {
          if (item.carrierId !== 0 || !item.blocks) continue;
          if (px >= item.x && px < item.x + item.w && pz >= item.z && pz < item.z + item.d) return false;
        }
      }
    }
    return true;
  }

  private standBeside(index: number, item: { x: number; z: number; w: number; d: number; blocks: boolean }): boolean {
    return this.approach(index, item) !== null;
  }

  private approach(index: number, item: { x: number; z: number; w: number; d: number; blocks: boolean }): PathCell | null {
    const here = { x: Math.floor(this.columns.x[index]), z: Math.floor(this.columns.z[index]) };
    const goals: PathCell[] = [];
    if (!item.blocks) goals.push({ x: item.x, z: item.z });
    for (let dz = 0; dz < item.d; dz++) {
      for (let dx = 0; dx < item.w; dx++) {
        const x = item.x + dx;
        const z = item.z + dz;
        for (const [ox, oz] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
          const nx = x + ox;
          const nz = z + oz;
          if (nx >= item.x && nx < item.x + item.w && nz >= item.z && nz < item.z + item.d) continue;
          if (!this.openCell(nx, nz)) continue;
          if (!goals.some((goal) => goal.x === nx && goal.z === nz)) goals.push({ x: nx, z: nz });
        }
      }
    }
    goals.sort((a, b) => Math.abs(a.x - here.x) + Math.abs(a.z - here.z) - (Math.abs(b.x - here.x) + Math.abs(b.z - here.z)));
    const nav = this.navAround(index);
    for (const goal of goals) {
      if (goal.x === here.x && goal.z === here.z) return goal;
      if (findPath(here, goal, nav)) return goal;
    }
    return null;
  }

  /** Walk grid with every other colonist's cell blocked, so a path goes around them. */
  private navAround(index: number): NavGrid {
    const blocked = this.nav.blocked.slice();
    const width = this.nav.width;
    for (let other = 0; other < this.columns.count; other++) {
      if (other === index) continue;
      const x = Math.floor(this.columns.x[other]);
      const z = Math.floor(this.columns.z[other]);
      if (x < 0 || z < 0 || x >= width || z >= this.nav.height) continue;
      blocked[z * width + x] = 1;
    }
    return { width, height: this.nav.height, blocked };
  }

  private stepHaul(dt: number): void {
    for (let i = 0; i < this.columns.count; i++) {
      if (this.activity[i] !== "haul" || !this.playerOrders[i]) continue;
      if (this.paths[i].length === 0) {
        if (this.haulWalking[i]) {
          this.finishOrder(i);
          continue;
        }
        const goal = this.goalFor(i);
        if (!goal) {
          this.clearOrder(i);
          continue;
        }
        const here = { x: Math.floor(this.columns.x[i]), z: Math.floor(this.columns.z[i]) };
        if (here.x === goal.x && here.z === goal.z) {
          this.finishOrder(i);
          continue;
        }
        const path = findPath(here, goal, this.navAround(i));
        if (!path || path.length === 0) {
          this.clearOrder(i);
          continue;
        }
        this.paths[i] = path;
        this.haulWalking[i] = 1;
      }
      this.walkPath(i, dt);
    }
  }

  private goalFor(index: number): PathCell | null {
    const order = this.playerOrders[index];
    if (!order) return null;
    if (order.kind === "move") return this.openCell(order.x, order.z) ? { x: order.x, z: order.z } : null;
    if (order.kind === "pickup") {
      const item = this.haulItems.find((entry) => entry.id === order.itemId);
      if (!item || item.carrierId !== 0) return null;
      return this.approach(index, item);
    }
    const item = this.carriedBy(this.ids[index]);
    if (!item || !this.footprintFree(order.x, order.z, item.w, item.d)) return null;
    return this.approach(index, { ...item, x: order.x, z: order.z });
  }

  private walkPath(index: number, dt: number): void {
    const path = this.paths[index];
    const next = path[0];
    if (!next) return;
    const tx = next.x + 0.5;
    const tz = next.z + 0.5;
    const x = this.columns.x;
    const z = this.columns.z;
    for (let other = 0; other < this.columns.count; other++) {
      if (other === index) continue;
      const nearNext = Math.hypot(x[other] - tx, z[other] - tz) < 0.42;
      const nearMe = Math.hypot(x[other] - x[index], z[other] - z[index]) < 1;
      if (nearNext && nearMe) {
        this.paths[index] = [];
        this.haulWalking[index] = 0;
        this.columns.moving[index] = 0;
        return;
      }
    }
    const dx = tx - x[index];
    const dz = tz - z[index];
    const dist = Math.hypot(dx, dz);
    if (dist < 0.05) {
      x[index] = tx;
      z[index] = tz;
      path.shift();
      this.columns.moving[index] = 0;
      return;
    }
    const step = Math.min(dist, 1.45 * dt);
    x[index] += (dx / dist) * step;
    z[index] += (dz / dist) * step;
    this.columns.phase[index] += dt * 9;
    const desired = Math.atan2(dx, dz);
    const from = this.columns.yaw[index];
    const delta = Math.atan2(Math.sin(desired - from), Math.cos(desired - from));
    this.columns.yaw[index] = from + delta * (1 - Math.exp(-10 * dt));
    this.columns.moving[index] = 1;
  }

  private finishOrder(index: number): void {
    const order = this.playerOrders[index];
    if (order?.kind === "pickup") {
      const item = this.haulItems.find((entry) => entry.id === order.itemId);
      if (item && item.carrierId === 0) item.carrierId = this.ids[index];
    } else if (order?.kind === "place") {
      const item = this.carriedBy(this.ids[index]);
      if (item && this.footprintFree(order.x, order.z, item.w, item.d)) {
        item.x = order.x;
        item.z = order.z;
        item.carrierId = 0;
      }
    }
    this.paintItems();
    this.clearOrder(index);
  }

  private clearOrder(index: number): void {
    this.playerOrders[index] = null;
    this.paths[index] = [];
    this.haulWalking[index] = 0;
    this.activity[index] = "wander";
  }

  private syncCarried(): void {
    for (const item of this.haulItems) {
      if (item.carrierId === 0) continue;
      const index = this.indexOf(item.carrierId);
      if (index < 0) continue;
      item.x = Math.floor(this.columns.x[index]);
      item.z = Math.floor(this.columns.z[index]);
    }
  }

  private paintItems(): void {
    this.nav.blocked.set(this.fixedBlocked);
    const width = this.nav.width;
    for (const item of this.haulItems) {
      if (!item.blocks || item.carrierId !== 0) continue;
      for (let dz = 0; dz < item.d; dz++) {
        for (let dx = 0; dx < item.w; dx++) {
          const x = item.x + dx;
          const z = item.z + dz;
          if (x < 0 || z < 0 || x >= width || z >= this.nav.height) continue;
          this.nav.blocked[z * width + x] = 1;
        }
      }
    }
  }

  private stepNeeds(dt: number): void {
    const food = dt / (50 * 60);
    const rest = dt / (40 * 60);
    const recreation = dt / (45 * 60);
    for (let i = 0; i < this.columns.count; i++) {
      const needs = this.needs[i];
      needs.food = clamp01(needs.food - food);
      needs.rest = clamp01(needs.rest - rest);
      needs.recreation = clamp01(needs.recreation - recreation);
    }
  }

  private snapshot(): void {
    for (let i = 0; i < this.columns.count; i++) this.copyCurrentToPrevious(i);
  }

  private copyCurrentToPrevious(index: number): void {
    this.columns.prevX[index] = this.columns.x[index];
    this.columns.prevZ[index] = this.columns.z[index];
    this.columns.prevYaw[index] = this.columns.yaw[index];
    this.columns.prevPhase[index] = this.columns.phase[index];
  }

  /** mulberry32. The state is saved so a WASM port can replay the same stream. */
  private random(): number {
    let a = this.rngState | 0;
    a = (a + 0x6d2b79f5) | 0;
    this.rngState = a >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
}

export function createSimulation(options: CreateSimulationOptions): Simulation {
  const backend = options.backend ?? "typescript";
  if (backend === "wasm") {
    throw new Error("The Zig WebAssembly backend is not linked into this build. See docs/ENGINE.md.");
  }
  return new TypeScriptSimulation(options);
}

function accepted(contracts: readonly Contract[], id: number | null): boolean {
  if (id === null) return false;
  return contracts.some((contract) => contract.id === id && contract.state === "accepted");
}

function founderMind(index: number): Mind {
  return {
    stated: "objectivism",
    certainty: clamp01(0.9 - index * 0.03),
    seeds: [],
    charisma: 0.35 + (index % 3) * 0.12,
    suggestibility: 0.22 + (index % 4) * 0.06,
    receptivity: 0.82,
    residence: "founder",
    integrity: 1,
    morale: clamp01(0.86 - index * 0.02),
    force: "none",
    laborHoursLeft: 14,
    inventory: emptyInventory(),
  };
}

function emptyInventory(): Inventory {
  return { food: 0, timber: 0, stone: 0, ore: 0, power: 0, goldOre: 0 };
}

function copyMind(mind: Mind): Mind {
  return {
    ...mind,
    seeds: mind.seeds.map((seed) => ({ ...seed })),
    inventory: { ...mind.inventory },
  };
}

function skillsFor(id: number): Skills {
  const skills = {} as Skills;
  SKILL_NAMES.forEach((name, index) => {
    skills[name] = (id * 3 + index * 5) % 9;
  });
  return skills;
}

function clamp01(value: number): number {
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
}

import { findPath, type PathCell } from "./path";
import { TICK_DT, TICK_HZ, SKILL_NAMES, type Activity, type ColonistColumns, type ColonistRoster, type ColonistSave, type Contract, type CreateSimulationOptions, type DigCell, type DigProgress, type DigState, type HaulItemState, type Inventory, type Mind, type Needs, type ProductionOrder, type ResearchState, type SaveGame, type SimEvent, type Simulation, type Skills } from "./types";
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
  | { kind: "place"; x: number; z: number }
  | { kind: "dig"; cells: DigCell[]; work: number; target: DigCell | null };

const CAPACITY = 64;
/** Seconds to open one rock cell at mining 0. Higher mining shortens it. */
const DIG_SECONDS = 1.75;
const DIG_CAP = 96;

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
  private readonly originalBlocked: Uint8Array;
  private readonly fixedBlocked: Uint8Array;
  private readonly rock: Uint8Array;
  private readonly dug = new Set<string>();
  private digRevision = 0;
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
    this.originalBlocked = new Uint8Array(options.nav.blocked);
    this.fixedBlocked = new Uint8Array(options.nav.blocked);
    this.rock = new Uint8Array(options.nav.width * options.nav.height);
    for (const cell of options.rock ?? []) {
      const x = Math.floor(cell.x);
      const z = Math.floor(cell.z);
      if (x < 0 || z < 0 || x >= options.nav.width || z >= options.nav.height) continue;
      this.rock[z * options.nav.width + x] = 1;
    }
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
      dug: this.dugCells(),
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
    this.dug.clear();
    this.fixedBlocked.set(this.originalBlocked);
    for (const cell of save.dug ?? []) {
      const x = Math.floor(cell.x);
      const z = Math.floor(cell.z);
      if (!this.rockCell(x, z)) continue;
      this.dug.add(cellKey(x, z));
      this.fixedBlocked[z * this.nav.width + x] = 0;
    }
    this.paintItems();
    this.digRevision += 1;
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

  orderDig(colonistId: number, cells: readonly DigCell[]): boolean {
    const index = this.indexOf(colonistId);
    if (index < 0) return false;
    const chosen = capDig(this.normalizeDig(cells), DIG_CAP);
    if (chosen.length === 0) return false;
    if (!this.designationReaches(index, chosen)) return false;
    this.setOrder(index, { kind: "dig", cells: chosen, work: 0, target: null });
    return true;
  }

  digState(): DigState {
    const pending: DigCell[] = [];
    let active: DigProgress | null = null;
    for (let i = 0; i < this.columns.count; i++) {
      const order = this.playerOrders[i];
      if (!order || order.kind !== "dig") continue;
      for (const cell of order.cells) pending.push({ x: cell.x, z: cell.z });
      if (order.target && !active) {
        const need = this.digSeconds(i);
        active = {
          x: order.target.x,
          z: order.target.z,
          progress: need <= 0 ? 1 : Math.max(0, Math.min(1, order.work / need)),
        };
      }
    }
    return { revision: this.digRevision, dug: this.dugCells(), pending, active };
  }

  buildable(x: number, z: number): boolean {
    return this.dug.has(cellKey(Math.floor(x), Math.floor(z)));
  }

  diggable(x: number, z: number): boolean {
    const cx = Math.floor(x);
    const cz = Math.floor(z);
    return this.rockCell(cx, cz) && !this.dug.has(cellKey(cx, cz));
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
    for (const goal of goals) {
      if (goal.x === here.x && goal.z === here.z) return goal;
      if (findPath(here, goal, this.nav)) return goal;
    }
    return null;
  }

  private stepHaul(dt: number): void {
    for (let i = 0; i < this.columns.count; i++) {
      if (this.activity[i] !== "haul" || !this.playerOrders[i]) continue;
      if (this.playerOrders[i]?.kind === "dig") {
        this.stepDig(i, dt);
        continue;
      }
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
        const path = findPath(here, goal, this.nav);
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
    if (!order || order.kind === "dig") return null;
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
        this.wait[index] = 0.15;
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

  private stepDig(index: number, dt: number): void {
    const order = this.playerOrders[index];
    if (!order || order.kind !== "dig") return;
    if (this.paths[index].length > 0) {
      this.walkPath(index, dt);
      return;
    }
    this.haulWalking[index] = 0;

    let target = order.target;
    const current = target;
    if (current && !order.cells.some((cell) => cell.x === current.x && cell.z === current.z)) target = null;
    const open = this.floodFrom(index);
    if (target && !this.standFor(index, target, open)) target = null;
    if (!target) {
      target = this.nextDigTarget(index, order.cells, open);
      order.target = target;
      order.work = 0;
    }
    if (!target) {
      this.clearOrder(index);
      return;
    }
    const stand = this.standFor(index, target, open);
    if (!stand) {
      order.cells = order.cells.filter((cell) => cell.x !== target.x || cell.z !== target.z);
      order.target = null;
      order.work = 0;
      return;
    }
    const hereX = Math.floor(this.columns.x[index]);
    const hereZ = Math.floor(this.columns.z[index]);
    if (hereX !== stand.x || hereZ !== stand.z) {
      const path = findPath({ x: hereX, z: hereZ }, stand, this.nav);
      if (!path || path.length === 0) {
        order.target = null;
        return;
      }
      this.paths[index] = path;
      this.haulWalking[index] = 1;
      this.walkPath(index, dt);
      return;
    }

    this.columns.moving[index] = 0;
    this.faceCell(index, target, dt);
    order.work += dt;
    if (order.work + 1e-9 < this.digSeconds(index)) return;
    this.openDug(target.x, target.z);
    order.cells = order.cells.filter((cell) => cell.x !== target.x || cell.z !== target.z);
    order.target = null;
    order.work = 0;
    if (order.cells.length === 0) this.clearOrder(index);
  }

  private digSeconds(index: number): number {
    const skill = Math.max(0, Math.min(8, this.skills[index].mining));
    return DIG_SECONDS * (8 / (8 + skill));
  }

  private normalizeDig(cells: readonly DigCell[]): DigCell[] {
    const seen = new Set<string>();
    const chosen: DigCell[] = [];
    for (const cell of cells) {
      const x = Math.floor(cell.x);
      const z = Math.floor(cell.z);
      if (!this.diggable(x, z)) continue;
      const key = cellKey(x, z);
      if (seen.has(key)) continue;
      seen.add(key);
      chosen.push({ x, z });
    }
    return chosen;
  }

  private designationReaches(index: number, cells: readonly DigCell[]): boolean {
    const open = this.floodFrom(index);
    const width = this.nav.width;
    for (const cell of cells) {
      for (const [nx, nz] of neighborsOf(cell.x, cell.z)) {
        if (nx < 0 || nz < 0 || nx >= width || nz >= this.nav.height) continue;
        if (open[nz * width + nx]) return true;
      }
    }
    return false;
  }

  private nextDigTarget(index: number, cells: readonly DigCell[], open: Uint8Array): DigCell | null {
    const hx = Math.floor(this.columns.x[index]);
    const hz = Math.floor(this.columns.z[index]);
    let best: DigCell | null = null;
    let bestMan = Infinity;
    for (const cell of cells) {
      if (!this.standFor(index, cell, open)) continue;
      const man = Math.abs(cell.x - hx) + Math.abs(cell.z - hz);
      if (!best || man < bestMan || (man === bestMan && (cell.x < best.x || (cell.x === best.x && cell.z < best.z)))) {
        best = cell;
        bestMan = man;
      }
    }
    return best;
  }

  private standFor(index: number, cell: DigCell, open: Uint8Array): DigCell | null {
    const width = this.nav.width;
    const height = this.nav.height;
    const hx = Math.floor(this.columns.x[index]);
    const hz = Math.floor(this.columns.z[index]);
    let best: DigCell | null = null;
    let bestMan = Infinity;
    for (const [nx, nz] of neighborsOf(cell.x, cell.z)) {
      if (nx < 0 || nz < 0 || nx >= width || nz >= height) continue;
      if (!open[nz * width + nx]) continue;
      const man = Math.abs(nx - hx) + Math.abs(nz - hz);
      if (!best || man < bestMan || (man === bestMan && (nx < best.x || (nx === best.x && nz < best.z)))) {
        best = { x: nx, z: nz };
        bestMan = man;
      }
    }
    return best;
  }

  private floodFrom(index: number): Uint8Array {
    const width = this.nav.width;
    const height = this.nav.height;
    const seen = new Uint8Array(width * height);
    const hx = Math.floor(this.columns.x[index]);
    const hz = Math.floor(this.columns.z[index]);
    if (!this.openCell(hx, hz)) return seen;
    const queue = [hz * width + hx];
    seen[hz * width + hx] = 1;
    for (let q = 0; q < queue.length; q++) {
      const id = queue[q] ?? 0;
      const x = id % width;
      const z = (id / width) | 0;
      for (const [nx, nz] of neighborsOf(x, z)) {
        if (!this.openCell(nx, nz)) continue;
        const next = nz * width + nx;
        if (seen[next]) continue;
        seen[next] = 1;
        queue.push(next);
      }
    }
    return seen;
  }

  private openDug(x: number, z: number): void {
    if (!this.rockCell(x, z) || this.dug.has(cellKey(x, z))) return;
    this.dug.add(cellKey(x, z));
    this.fixedBlocked[z * this.nav.width + x] = 0;
    this.paintItems();
    this.digRevision += 1;
  }

  private rockCell(x: number, z: number): boolean {
    if (x < 0 || z < 0 || x >= this.nav.width || z >= this.nav.height) return false;
    return this.rock[z * this.nav.width + x] === 1;
  }

  private dugCells(): DigCell[] {
    const cells: DigCell[] = [];
    for (const key of this.dug) {
      const [x, z] = key.split(",").map(Number);
      cells.push({ x, z });
    }
    cells.sort((a, b) => a.z - b.z || a.x - b.x);
    return cells;
  }

  private faceCell(index: number, cell: DigCell, dt: number): void {
    const dx = cell.x + 0.5 - this.columns.x[index];
    const dz = cell.z + 0.5 - this.columns.z[index];
    const desired = Math.atan2(dx, dz);
    const from = this.columns.yaw[index];
    const delta = Math.atan2(Math.sin(desired - from), Math.cos(desired - from));
    this.columns.yaw[index] = from + delta * (1 - Math.exp(-10 * dt));
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

function cellKey(x: number, z: number): string {
  return `${x},${z}`;
}

function neighborsOf(x: number, z: number): [number, number][] {
  return [[x + 1, z], [x - 1, z], [x, z + 1], [x, z - 1]];
}

function capDig(cells: DigCell[], limit: number): DigCell[] {
  if (cells.length <= limit) return cells;
  const anchor = cells[0];
  if (!anchor) return cells;
  return [...cells].sort((a, b) => {
    const da = Math.abs(a.x - anchor.x) + Math.abs(a.z - anchor.z);
    const db = Math.abs(b.x - anchor.x) + Math.abs(b.z - anchor.z);
    if (da !== db) return da - db;
    if (a.x !== b.x) return a.x - b.x;
    return a.z - b.z;
  }).slice(0, limit);
}

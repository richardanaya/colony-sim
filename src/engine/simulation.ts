import { TICK_DT, TICK_HZ, SKILL_NAMES, type Activity, type ColonistColumns, type ColonistRoster, type ColonistSave, type Contract, type CreateSimulationOptions, type Inventory, type Mind, type Needs, type ProductionOrder, type ResearchState, type SaveGame, type SimEvent, type Simulation, type Skills } from "./types";
import { stepWander } from "./wander";

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
    this.needs = spawns.map((_, index) => ({
      food: clamp01(0.92 - index * 0.03),
      rest: clamp01(0.88 - index * 0.02),
      recreation: clamp01(0.9 - index * 0.04),
    }));
    this.skills = spawns.map((spawn) => skillsFor(spawn.id));
    this.minds = spawns.map((_, index) => founderMind(index));
    this.purseCents = new Int32Array(CAPACITY);
    this.contractId = spawns.map(() => null);
    this.activity = spawns.map(() => "wander" as const);
    this.wait = new Float32Array(CAPACITY);
    this.paths = spawns.map(() => []);
    spawns.forEach((_, index) => {
      this.purseCents[index] = 8_000 + index * 1_500;
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
      this.paths[i] = [];
      this.columns.moving[i] = 0;
      this.copyCurrentToPrevious(i);
    }
  }

  private step(dt: number): void {
    // Beliefs, receptivity, inventories, research, and production orders are
    // stored and saved. They are not stepped. See docs/ENGINE.md.
    this.schedule();
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
      this.activity[i] = accepted(this.contracts, this.contractId[i]) ? "work" : "wander";
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

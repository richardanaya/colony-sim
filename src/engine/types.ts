/**
 * Simulation state. Rendering reads the typed-array columns and nothing else
 * per frame. A Zig wasm32 build is meant to fill the same columns in linear
 * memory. See docs/ENGINE.md.
 */

/** Twenty simulation steps per second, independent of the display refresh. */
export const TICK_HZ = 20;
export const TICK_DT = 1 / TICK_HZ;

/** Gold is an integer count of cents. One gold dollar is 100 cents. */
export const GOLD_CENTS_PER_DOLLAR = 100;

export const SKILL_NAMES = [
  "construction",
  "plants",
  "mining",
  "cooking",
  "medicine",
  "intellectual",
  "social",
  "crafting",
] as const;

export type SkillName = (typeof SKILL_NAMES)[number];

/** Skill levels are small integers. They rise by doing the work, later. */
export type Skills = Record<SkillName, number>;

/**
 * Personal needs, each in [0, 1]. 1 is sated. There is no shared colony mood
 * and no penalty imposed on one person for another's lack.
 */
export interface Needs {
  food: number;
  rest: number;
  recreation: number;
}

export const JOB_KINDS = ["haul", "construct", "plant", "cook", "mine", "research", "tend", "craft"] as const;

export type JobKind = (typeof JOB_KINDS)[number];

/**
 * What a colonist is doing. `wander` is the idle of a free person.
 * `work` is set only after they have accepted a contract.
 * `haul` is a player order: walk, pick up, or set something down.
 */
export type Activity = "wander" | "work" | "haul";

export type ContractState = "offered" | "accepted" | "refused" | "fulfilled" | "withdrawn";

export interface Contract {
  id: number;
  offeredBy: number;
  offeredTo: number;
  job: JobKind;
  /** Paid in gold cents when the work is fulfilled. */
  wageCents: number;
  state: ContractState;
}

export type SimEvent =
  | { type: "contract-offered"; tick: number; contractId: number }
  | { type: "contract-accepted"; tick: number; contractId: number }
  | { type: "contract-refused"; tick: number; contractId: number }
  | { type: "contract-fulfilled"; tick: number; contractId: number }
  | { type: "trade"; tick: number; contractId: number };

/**
 * Philosophies a person can hold. Opposing ideas are factions in the design
 * doc. This build records them and does not spread them.
 */
export const PHILOSOPHIES = ["objectivism", "fascism", "collectivism", "anarchism", "anarcho-capitalism"] as const;

export type Philosophy = (typeof PHILOSOPHIES)[number];

/** How far a foreign idea has taken hold. `clear` means it is not present. */
export type InfectionStage = "clear" | "exposed" | "sympathetic" | "convinced" | "acting";

/**
 * What the player can see. Visibility lags the true stage, so an early seed
 * can still be `hidden` or a weak `hint`.
 */
export type IdeaVisibility = "hidden" | "hint" | "rumor" | "plain";

/** One foreign idea planted in a person. Not stepped in this build. */
export interface IdeaSeed {
  philosophy: Philosophy;
  stage: InfectionStage;
  visibility: IdeaVisibility;
  /** Ticks since the seed was planted. Signals are allowed to lag this. */
  age: number;
}

/**
 * How a person stands in the valley. Arrivals are `visitor`, `recruit`,
 * `trader`, or `passing` until they leave or join. Nobody is drafted in.
 */
export type Residence = "founder" | "member" | "recruit" | "trader" | "visitor" | "passing" | "departed";

/**
 * Force is never inferred from a philosophy.
 * `initiation` starts force. `retaliation` answers an initiation.
 * Speech and belief are `none`.
 */
export type ForceRole = "none" | "initiation" | "retaliation";

/** Owned goods. Counts belong to one entity. There is no common pile. */
export const GOODS = ["food", "timber", "stone", "ore", "power", "goldOre"] as const;

export type Good = (typeof GOODS)[number];

export type Inventory = Record<Good, number>;

/**
 * Mind, standing, and property for one entity. Stored so later systems have
 * a place to write. This build does not run persuasion, contagion, or crafting.
 */
export interface Mind {
  /** The philosophy they would name, once they are willing to say it. */
  stated: Philosophy;
  /** Certainty in `stated`, from 0 to 1. */
  certainty: number;
  seeds: IdeaSeed[];
  /** How readily they sway others, 0 to 1. */
  charisma: number;
  /** How readily a new idea gets in, 0 to 1. */
  suggestibility: number;
  /**
   * Trust in voluntary argument, 0 to 1. Coercive persuasion lowers it
   * and makes later arguments, including true ones, less effective.
   */
  receptivity: number;
  residence: Residence;
  /** 0 to 1. Falls if this person initiates force or helps a rights violation. */
  integrity: number;
  /** Willingness to remain, 0 to 1. Personal, not a colony average. */
  morale: number;
  force: ForceRole;
  /** Hours they can still commit today. */
  laborHoursLeft: number;
  inventory: Inventory;
}

export interface ResearchState {
  /** Tech ids whose owners have licensed them inside the valley. */
  unlocked: string[];
  /** The project currently funded, or null. */
  active: string | null;
  /** 0 to 1 progress on `active`. */
  progress: number;
}

export type ProductionState = "offered" | "accepted" | "working" | "done" | "cancelled";

/** A crafting job. It does not run until the owner or a hired worker accepts it. */
export interface ProductionOrder {
  recipeId: string;
  ownerId: number;
  workerId: number | null;
  progress: number;
  state: ProductionState;
}

/** One colonist placed into the simulation by the game. */
export interface ColonistSpawn {
  /** Stable entity id. Zero is reserved for "none". */
  id: number;
  /** Map key, such as the figure id `nell`. */
  key: string;
  name: string;
  /** World position in cells. */
  x: number;
  z: number;
  yaw: number;
  /** Present when the valley generator rolled this person. Otherwise the backend fills a founder. */
  skills?: Skills;
  mind?: Mind;
  needs?: Needs;
  purseCents?: number;
}

/**
 * Walk grid. `blocked` is row-major, length width * height, 1 where a
 * colonist may not stand. This is the layout a WASM module would copy once.
 */
export interface NavGrid {
  width: number;
  height: number;
  blocked: Uint8Array;
}

/**
 * Structure-of-arrays transforms for every colonist slot.
 * Index `i` is one entity. Arrays are valid for the prefix `count`.
 * `generation` increments if a backend reallocates the buffers.
 */
export interface ColonistColumns {
  generation: number;
  count: number;
  prevX: Float32Array;
  prevZ: Float32Array;
  prevYaw: Float32Array;
  prevPhase: Float32Array;
  x: Float32Array;
  z: Float32Array;
  yaw: Float32Array;
  phase: Float32Array;
  /** 1 while walking, 0 while waiting. */
  moving: Uint8Array;
}

/** Names and ids parallel to the columns. Stable for the life of the world. */
export interface ColonistRoster {
  ids: readonly number[];
  keys: readonly string[];
  names: readonly string[];
}

export interface ColonistSave {
  id: number;
  key: string;
  name: string;
  x: number;
  z: number;
  yaw: number;
  phase: number;
  wait: number;
  needs: Needs;
  skills: Skills;
  purseCents: number;
  contractId: number | null;
  activity: Activity;
  mind: Mind;
}

export interface SaveGame {
  version: 1;
  seed: number;
  rngState: number;
  tick: number;
  time: number;
  colonists: ColonistSave[];
  contracts: Contract[];
  research: ResearchState;
  orders: ProductionOrder[];
}

export type SimulationBackendName = "typescript" | "wasm";

/**
 * What the renderer and the UI are allowed to call.
 * `advance` is synchronous. A worker-hosted WASM module would publish a
 * snapshot into these arrays; the render loop would not await a tick.
 */
export interface Simulation {
  readonly backend: SimulationBackendName;
  readonly tick: number;
  /** Seconds of simulation time since the valley started. */
  readonly time: number;
  advance(frameSeconds: number): void;
  /** Progress from the previous tick toward the next, in [0, 1). */
  alpha(): number;
  colonists(): ColonistColumns;
  roster(): ColonistRoster;
  /** Sum of purses. There is no separate treasury that can levy this. */
  totalGoldCents(): number;
  pollEvents(): SimEvent[];
  save(): SaveGame;
  load(save: SaveGame): void;
  /** Walk `colonistId` to a cell. The renderer does not move them. */
  orderMove(colonistId: number, x: number, z: number): boolean;
  /** Walk to a movable object and carry it. */
  orderPickup(colonistId: number, itemId: string): boolean;
  /** Walk to a cell and set down the object this colonist is carrying. */
  orderPlace(colonistId: number, x: number, z: number): boolean;
  items(): readonly HaulItemState[];
  blocked(x: number, z: number): boolean;
}

/** A map object the player can tell someone to carry. Walls and trees are not these. */
export interface HaulItemSpawn {
  id: string;
  x: number;
  z: number;
  w: number;
  d: number;
  blocks: boolean;
}

export interface HaulItemState {
  id: string;
  x: number;
  z: number;
  w: number;
  d: number;
  blocks: boolean;
  /** Colonist id, or 0 while the object sits on the ground. */
  carrierId: number;
}

export interface CreateSimulationOptions {
  spawns: readonly ColonistSpawn[];
  nav: NavGrid;
  /** Defaults to a fixed seed so a tick sequence can be replayed. */
  seed?: number;
  backend?: SimulationBackendName;
  /** Movable objects. The nav grid should not already mark their cells. */
  items?: readonly HaulItemSpawn[];
}

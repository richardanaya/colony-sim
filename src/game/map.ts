/** One cell is one world unit. +X is east, +Z is north, +Y is up. */

export type TerrainKind =
  | "grass"
  | "grassRich"
  | "soil"
  | "soilRich"
  | "dirt"
  | "sand"
  | "mud"
  | "marsh"
  | "moss"
  | "gravel"
  | "ice"
  | "roughHewn"
  | "roughStone"
  | "smoothStone"
  | "woodFloor"
  | "stoneTile"
  | "carpet"
  | "concrete"
  | "flagstone"
  | "metalFloor"
  | "paved"
  | "sterile"
  | "water"
  | "stream";

export type Stuff = "Wood" | "Stone" | "Metal" | "Fabric";

export type WallKind = "planks" | "bricks" | "stone" | "metal" | "rock" | "rockOre" | "sandbags";

/** World units for one elevation step. Cliff faces are this tall. */
export const TIER_HEIGHT = 4.2;

/** Tiers at or above this close the gulch. The valley floor is 0. */
export const GULCH_RIM = 3;

export type RoofStyle = "terracotta" | "thatch" | "tin" | "slate";

/** A side of a building the camera can stand on. */
export type Side = "n" | "s" | "e" | "w";

export interface Wall {
  x: number;
  z: number;
  kind: WallKind;
}

export interface Door {
  id: string;
  x: number;
  z: number;
  /** Clockwise degrees from north. 0 sits in an east-west wall. */
  yaw?: number;
  stuff?: Stuff;
  /** Exterior side. Hidden while the camera looks in from that side. */
  facade: Side;
}

export interface Roof {
  id: string;
  /** Southwest corner, in cells. */
  x: number;
  z: number;
  w: number;
  d: number;
  style: RoofStyle;
  /** Ridge direction. Slopes face the two perpendicular sides. */
  ridge: "x" | "z";
}

export interface Prop {
  id: string;
  /** Model file name without `.obj`. */
  model: string;
  /** Southwest cell of the footprint. May be fractional for a stacked part. */
  x: number;
  z: number;
  /** Footprint in cells. The model is centred on it. Defaults to 1×1. */
  w?: number;
  d?: number;
  /** Added to the footprint centre. */
  y?: number;
  /** Degrees around Y. 0 faces the model's +Z north. */
  yaw?: number;
  /** Uniform scale applied before `stretch`. */
  scale?: number;
  stretch?: [number, number, number];
  stuff?: Stuff;
  /** Extra multiply on materials whose name starts with "stuff" (hex, e.g. "#c4885a"). */
  tint?: string;
  /** When false, colonists may walk this footprint. Defaults to true. */
  blocks?: boolean;
  /** Furniture and small goods. Walls, cliffs, trees, and boulders stay put. */
  movable?: boolean;
  /** Material-name prefixes to leave out (bare-winter twigs, for example). */
  skipPrefix?: string[];
}

export interface Figure {
  id: string;
  /** Empty for an unlabeled mannequin. */
  name: string;
  x: number;
  z: number;
  yaw?: number;
  /** When true, the figure walks the open ground and keeps a name label. */
  wander: boolean;
  /** Model names without `.obj`, drawn in order. */
  parts: string[];
  /** Multiply colour for each part. */
  tints: string[];
}

export interface Animal {
  id: string;
  name: string;
  model: string;
  /** Absent for animals that have no separate leg mesh, such as the cobra. */
  leg: string | null;
  x: number;
  z: number;
  w: number;
  d: number;
  yaw: number;
  hips: [number, number, number][];
  legLength: number;
  legSwing: number;
  legSplay: number;
}

export interface Mark {
  x: number;
  z: number;
}

/**
 * Static map the viewer draws. The simulation does not live in this object.
 * `generateValley` builds one of these from a seed. `tools/build_layout.py`
 * can still write the old full-catalog Hearthstead layout; the game does not load it.
 */
export interface Colony {
  name: string;
  width: number;
  height: number;
  /** Row-major, index = z * width + x. z = 0 is the south edge. */
  terrain: TerrainKind[];
  /**
   * Height of each cell in cliff tiers. 0 is the valley floor.
   * The renderer stacks rock faces from this; it is not a flat wall ring.
   */
  elevation: Uint8Array;
  walls: Wall[];
  doors: Door[];
  roofs: Roof[];
  props: Prop[];
  figures: Figure[];
  animals: Animal[];
  marks: Mark[];
}

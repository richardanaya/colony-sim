/** One cell is one world unit. +X is east, +Z is north, +Y is up. */

export type TerrainKind =
  | "grass"
  | "soil"
  | "dirt"
  | "sand"
  | "woodFloor"
  | "stoneTile"
  | "water";

export type Stuff = "Wood" | "Stone" | "Metal" | "Fabric";

export type WallKind = "planks" | "bricks" | "stone";

export type RoofStyle = "terracotta" | "thatch" | "tin";

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
  /** Southwest cell of the footprint. */
  x: number;
  z: number;
  /** Footprint in cells. The model is centred on it. Defaults to 1×1. */
  w?: number;
  d?: number;
  /** Clockwise degrees from north. */
  yaw?: number;
  /** Uniform scale applied before `stretch`. */
  scale?: number;
  stretch?: [number, number, number];
  stuff?: Stuff;
  /** Extra multiply on materials whose name starts with "stuff" (hex, e.g. "#c4885a"). */
  tint?: string;
  /** When false, colonists may walk this footprint. Defaults to true. */
  blocks?: boolean;
  /** Material-name prefixes to leave out (bare-winter twigs, for example). */
  skipPrefix?: string[];
}

export type Body = "male" | "female" | "thin";

export type Hair = "short" | "long" | "bun" | "ponytail" | "mohawk";

export interface Colonist {
  id: string;
  name: string;
  /** Starting cell. */
  x: number;
  z: number;
  body: Body;
  hair: Hair;
  beard?: boolean;
  hat?: boolean;
  skin: string;
  hairColor: string;
  shirt: string;
  pants: string;
  hatColor?: string;
}

/**
 * Plain description of a colony. A simulation can replace this object later;
 * the viewer only reads it.
 */
export interface Colony {
  name: string;
  width: number;
  height: number;
  /** Row-major, index = z * width + x. z = 0 is the south edge. */
  terrain: TerrainKind[];
  walls: Wall[];
  doors: Door[];
  roofs: Roof[];
  props: Prop[];
  colonists: Colonist[];
}

import type { SkillName, Skills, Mind, Inventory, ColonistSpawn } from "../engine/types";
import { SKILL_NAMES } from "../engine/types";
import type { Colony, Door, Figure, Prop, Roof, TerrainKind, Wall, WallKind } from "./map";
import { GULCH_RIM } from "./map";

/** Same default the wander tick uses, so a fresh page is one seed end to end. */
export const DEFAULT_SEED = 0x6a1c;

/** East-west. Peaks occupy most of this; the floor is a narrow slot. */
export const VALLEY_WIDTH = 120;
/** North-south. This is the length of the gulch. */
export const VALLEY_HEIGHT = 210;

/** Earlier compact valley, kept so tests can require several times that area. */
export const COMPACT_VALLEY_AREA = 64 * 56;

const CAMP_W = 18;
const CAMP_H = 14;

export interface Cell {
  x: number;
  z: number;
}

export interface GeneratedValley {
  seed: number;
  colony: Colony;
  spawns: ColonistSpawn[];
  /** Open ground beside the cabin. A new valley has to be able to build here. */
  clearing: Cell[];
}

interface FounderDef {
  id: string;
  name: string;
  body: "female" | "male" | "thin" | "fat" | "hulk";
  hair: string;
  beard?: string;
  hat?: string;
  specialty: SkillName;
}

const FOUNDERS: FounderDef[] = [
  { id: "nell", name: "Nell", body: "female", hair: "long", specialty: "plants" },
  { id: "amos", name: "Amos", body: "male", hair: "short", beard: "goatee", hat: "cap", specialty: "construction" },
  { id: "wren", name: "Wren", body: "thin", hair: "bun", hat: "brim", specialty: "medicine" },
  { id: "idris", name: "Idris", body: "fat", hair: "ponytail", hat: "hood", specialty: "social" },
  { id: "bram", name: "Bram", body: "hulk", hair: "mohawk", beard: "full", hat: "tall", specialty: "mining" },
];

const TREES = ["tree_pine_1", "tree_pine_2", "tree_poplar_1", "tree_oak_1", "tree_birch_1"];
const BOULDERS = ["boulder_1", "boulder_2", "boulder_3", "boulder_4", "boulder_5", "boulder_6"];

const SKINS = ["#e0b090", "#c68658", "#8d5a3c", "#f0d0b0", "#a56b45"];
const HAIRS = ["#241c18", "#6b3a22", "#c4a15a", "#3a3430", "#141210"];
const SHIRTS = ["#8d3d45", "#3d5c8d", "#3d6b4f", "#c4a15a", "#5c4a3a", "#6e4a62"];
const PANTS = ["#3a3f4a", "#4a3a32", "#2c3834", "#534838"];

/** Hex for the title and the corner frame. */
export function formatSeed(seed: number): string {
  return (seed >>> 0).toString(16).padStart(4, "0");
}

/**
 * Build one valley from `seed`. The same seed returns the same map, the same
 * deposits, and the same founders. The renderer does not call this.
 */
export function generateValley(seed: number): GeneratedValley {
  const rng = mulberry32(seed >>> 0);
  const founderCount = 3 + Math.floor(rng() * 3);
  const grid = new Grid();
  grid.carve(rng);
  const camp = grid.campSite();
  grid.creek(rng, camp);
  grid.banks();
  grid.meadows(rng, camp);
  grid.soil(rng, camp);
  grid.forests(rng, camp);
  grid.stone(rng, camp);
  const site = grid.startingSite(camp);
  grid.seal(camp.x + 2, camp.z + 8);
  const founders = chooseFounders(rng, founderCount);
  const figures: Figure[] = [];
  const spawns: ColonistSpawn[] = [];
  founders.forEach((founder, index) => {
    const cell = { x: camp.x + 2 + index * 2, z: camp.z + 8 };
    figures.push(figureFor(founder, cell));
    spawns.push(spawnFor(rng, founder, index, cell));
  });

  const colony: Colony = {
    name: "Galt's Gulch",
    width: VALLEY_WIDTH,
    height: VALLEY_HEIGHT,
    terrain: grid.terrain,
    elevation: grid.elevation,
    walls: grid.walls,
    doors: grid.doors,
    roofs: grid.roofs,
    props: grid.props,
    figures,
    animals: [],
    marks: [{ x: site.doorX, z: site.doorZ }],
  };

  return { seed: seed >>> 0, colony, spawns, clearing: grid.clearing(camp, site) };
}

function chooseFounders(rng: () => number, count: number): FounderDef[] {
  const rest = FOUNDERS.slice(1);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const swap = rest[i];
    rest[i] = rest[j];
    rest[j] = swap;
  }
  return [FOUNDERS[0], ...rest.slice(0, count - 1)];
}

function figureFor(founder: FounderDef, cell: Cell): Figure {
  const tone = hash(founder.name);
  const parts = [
    `person_${founder.body}_lower`,
    `person_${founder.body}_upper`,
    "person_head",
    "person_face",
    `person_hair_${founder.hair}`,
  ];
  const tints = [
    PANTS[tone % PANTS.length],
    SHIRTS[tone % SHIRTS.length],
    SKINS[tone % SKINS.length],
    "#ffffff",
    HAIRS[tone % HAIRS.length],
  ];
  if (founder.beard) {
    parts.push(`person_beard_${founder.beard}`);
    tints.push(HAIRS[tone % HAIRS.length]);
  }
  if (founder.hat) {
    parts.push(`person_hat_${founder.hat}`);
    tints.push(SHIRTS[(tone + 2) % SHIRTS.length]);
  }
  return {
    id: founder.id,
    name: founder.name,
    x: cell.x,
    z: cell.z,
    yaw: 0,
    wander: true,
    parts,
    tints,
  };
}

function spawnFor(rng: () => number, founder: FounderDef, index: number, cell: Cell): ColonistSpawn {
  return {
    id: index + 1,
    key: founder.id,
    name: founder.name,
    x: cell.x + 0.5,
    z: cell.z + 0.5,
    yaw: 0,
    skills: skillsFor(rng, founder.specialty),
    mind: mindFor(rng, index),
    needs: {
      food: clamp01(0.86 + rng() * 0.1),
      rest: clamp01(0.8 + rng() * 0.12),
      recreation: clamp01(0.84 + rng() * 0.1),
    },
    purseCents: 6_000 + index * 1_200 + Math.floor(rng() * 800),
  };
}

function skillsFor(rng: () => number, specialty: SkillName): Skills {
  const skills = {} as Skills;
  for (const name of SKILL_NAMES) {
    const base = name === specialty ? 6 : 1;
    const extra = name === specialty ? Math.floor(rng() * 3) : Math.floor(rng() * 4);
    skills[name] = base + extra;
  }
  return skills;
}

function mindFor(rng: () => number, index: number): Mind {
  const inventory: Inventory = {
    food: 8 + Math.floor(rng() * 8),
    timber: 10 + Math.floor(rng() * 16),
    stone: 4 + Math.floor(rng() * 8),
    ore: index === 0 ? 0 : Math.floor(rng() * 3),
    power: 0,
    goldOre: 0,
  };
  return {
    stated: "objectivism",
    certainty: clamp01(0.78 + rng() * 0.18),
    seeds: [],
    charisma: clamp01(0.3 + rng() * 0.5),
    suggestibility: clamp01(0.15 + rng() * 0.35),
    receptivity: clamp01(0.7 + rng() * 0.25),
    residence: "founder",
    integrity: 1,
    morale: clamp01(0.75 + rng() * 0.2),
    force: "none",
    laborHoursLeft: 14,
    inventory,
  };
}

class Grid {
  readonly terrain: TerrainKind[] = Array.from({ length: VALLEY_WIDTH * VALLEY_HEIGHT }, () => "grass");
  readonly elevation = new Uint8Array(VALLEY_WIDTH * VALLEY_HEIGHT);
  readonly walls: Wall[] = [];
  readonly doors: Door[] = [];
  readonly roofs: Roof[] = [];
  readonly props: Prop[] = [];
  private readonly wallAt = new Set<string>();
  private readonly occupied = new Uint8Array(VALLEY_WIDTH * VALLEY_HEIGHT);
  private readonly axisX = new Float64Array(VALLEY_HEIGHT);
  private seq = 0;
  private phase = 0;
  private wobble = 1;
  private campZ = 64;
  private mouthX = 0;
  private readonly openZ = 16;

  /**
   * A long slot of floor, granite rising a tier per cell on both sides,
   * peaks around the rim, and one two-cell cleft in the south wall.
   */
  carve(rng: () => number): void {
    this.phase = rng() * Math.PI * 2;
    this.wobble = 0.6 + rng() * 1.4;
    this.campZ = 58 + Math.floor(rng() * 14);
    let x = VALLEY_WIDTH * 0.5 + (rng() - 0.5) * 6;
    for (let z = 0; z < VALLEY_HEIGHT; z++) {
      this.axisX[z] = x;
      x += Math.sin(z * 0.045 + this.phase) * 0.18 + (rng() - 0.5) * 0.28;
      x = clamp(x, VALLEY_WIDTH * 0.4, VALLEY_WIDTH * 0.6);
    }
    this.mouthX = Math.round(this.axisX[this.openZ]);

    for (let z = 0; z < VALLEY_HEIGHT; z++) {
      const half = this.halfWidth(z);
      const center = this.axisX[z];
      for (let cx = 0; cx < VALLEY_WIDTH; cx++) {
        let elev = this.relief(cx, z, center, half);
        if (this.onBorder(cx, z) && !this.inCleft(cx, z)) {
          const jag = 8 + Math.round(Math.sin(cx * 0.31 + z * 0.17 + this.phase) * 2);
          elev = Math.max(elev, jag);
        }
        if (this.inCleft(cx, z)) elev = 0;
        this.setElev(cx, z, elev);
      }
    }
    this.crags(rng);
  }

  campSite(): { x: number; z: number; w: number; h: number } {
    const z = this.campZ;
    const center = Math.round(this.axisX[z + 4] ?? VALLEY_WIDTH / 2);
    const x = clamp(center - 11, 2, VALLEY_WIDTH - CAMP_W - 2);
    for (let zz = z; zz < z + CAMP_H; zz++) {
      for (let xx = x; xx < x + CAMP_W; xx++) this.setElev(xx, zz, 0);
    }
    return { x, z, w: CAMP_W, h: CAMP_H };
  }

  creek(rng: () => number, camp: Cell & { w: number; h: number }): void {
    let pondX = 0;
    let pondZ = 0;
    for (let z = this.openZ + 4; z < VALLEY_HEIGHT - 12; z++) {
      const center = this.axisX[z];
      let x = Math.round(center + Math.min(8, this.halfWidth(z) - 2));
      if (inRect(x, z, camp)) x = camp.x + camp.w;
      if (!inside(x, z) || this.elevation[z * VALLEY_WIDTH + x] !== 0) x = Math.round(center);
      if (!inside(x, z) || inRect(x, z, camp) || this.wallAt.has(key(x, z))) continue;
      if (this.elevation[z * VALLEY_WIDTH + x] !== 0) continue;
      this.setTerrain(x, z, "stream");
      const beside = x - 1;
      if (
        inside(beside, z)
        && this.elevation[z * VALLEY_WIDTH + beside] === 0
        && !inRect(beside, z, camp)
        && !this.wallAt.has(key(beside, z))
        && rng() > 0.35
      ) {
        this.setTerrain(beside, z, "stream");
      }
      pondX = x;
      pondZ = z;
    }
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        const px = pondX + dx;
        const pz = pondZ + dz;
        if (!inside(px, pz) || inRect(px, pz, camp) || this.wallAt.has(key(px, pz))) continue;
        if (this.elevation[pz * VALLEY_WIDTH + px] !== 0) continue;
        if (this.onBorder(px, pz)) continue;
        this.setTerrain(px, pz, "water");
      }
    }
  }

  banks(): void {
    for (let z = 1; z < VALLEY_HEIGHT - 1; z++) {
      for (let x = 1; x < VALLEY_WIDTH - 1; x++) {
        const kind = this.terrain[z * VALLEY_WIDTH + x];
        if (kind !== "grass" && kind !== "gravel") continue;
        if (!this.nearWater(x, z)) continue;
        if (edgeDist(x, z) <= 2) continue;
        this.terrain[z * VALLEY_WIDTH + x] = kind === "gravel" ? "gravel" : "mud";
      }
    }
  }

  meadows(rng: () => number, camp: Cell & { w: number; h: number }): void {
    for (let n = 0; n < 8; n++) {
      const z = this.openZ + 8 + Math.floor(rng() * (VALLEY_HEIGHT - this.openZ - 24));
      const x = Math.round(this.axisX[z] + (rng() - 0.5) * 8);
      this.disk(x, z, 4 + Math.floor(rng() * 3), camp);
    }
  }

  soil(rng: () => number, camp: Cell & { w: number; h: number }): void {
    this.fillRect(camp.x + 1, camp.z + camp.h + 1, 8, 4, "soilRich", true);
    for (let n = 0; n < 5; n++) {
      const z = this.openZ + 10 + Math.floor(rng() * (VALLEY_HEIGHT - this.openZ - 28));
      const x = Math.round(this.axisX[z] - 4 - rng() * 4);
      this.fillRect(x, z, 5, 3, n === 0 ? "soil" : "soilRich", true);
    }
  }

  forests(rng: () => number, camp: Cell & { w: number; h: number }): void {
    for (let n = 0; n < 18; n++) {
      const z = this.openZ + 6 + Math.floor(rng() * (VALLEY_HEIGHT - this.openZ - 22));
      const side = rng() < 0.5 ? -1 : 1;
      const x = Math.round(this.axisX[z] + side * (4 + rng() * 5));
      let placed = 0;
      for (let dz = -2; dz <= 2; dz += 2) {
        for (let dx = -2; dx <= 2; dx += 2) {
          if (rng() > 0.62) continue;
          if (this.tryTree(rng, x + dx, z + dz, camp)) placed += 1;
        }
      }
      if (placed === 0) this.tryTree(rng, x, z, camp);
    }
  }

  stone(rng: () => number, camp: Cell & { w: number; h: number }): void {
    for (let z = this.openZ + 8; z < VALLEY_HEIGHT - 14; z += 12) {
      for (const dir of [-1, 1] as const) {
        const cliff = this.cliffX(z, dir, 1);
        if (cliff < 0) continue;
        const x = cliff - dir;
        if (inRect(x, z, camp) || inRect(x, z + 1, camp)) continue;
        const model = BOULDERS[Math.floor(rng() * BOULDERS.length)];
        this.tryProp({
          model,
          x,
          z,
          w: 1,
          d: 1,
          stuff: "Stone",
          blocks: true,
        });
      }
    }
  }

  startingSite(camp: Cell & { w: number; h: number }): { doorX: number; doorZ: number } {
    const cabin = { x: camp.x + 1, z: camp.z + 1, w: 7, d: 6 };
    const shed = { x: camp.x + 10, z: camp.z + 1, w: 5, d: 4 };
    this.building(cabin, "thatch", "cabin");
    this.building(shed, "slate", "shed");
    this.tryProp({ model: "bedroll", x: cabin.x + 1, z: cabin.z + 4, w: 1, d: 1, stuff: "Fabric", blocks: true, movable: true });
    this.tryProp({ model: "table_1x2", x: cabin.x + 4, z: cabin.z + 2, w: 1, d: 2, stuff: "Wood", blocks: true, movable: true });
    this.tryProp({ model: "dining_chair", x: cabin.x + 5, z: cabin.z + 2, w: 1, d: 1, stuff: "Wood", blocks: true, movable: true });
    this.tryProp({ model: "shelf", x: shed.x + 1, z: shed.z + 2, w: 1, d: 1, stuff: "Wood", blocks: true, movable: true });
    this.tryProp({ model: "barrel", x: shed.x + 3, z: shed.z + 2, w: 1, d: 1, stuff: "Wood", blocks: true, movable: true });
    this.tryProp({ model: "barrel", x: shed.x + 3, z: shed.z + 1, w: 1, d: 1, stuff: "Wood", blocks: true, movable: true });
    for (let z = camp.z + 7; z < camp.z + camp.h; z++) {
      for (let x = camp.x; x < camp.x + camp.w; x++) {
        if (this.wallAt.has(key(x, z))) continue;
        if (this.terrain[z * VALLEY_WIDTH + x] === "water" || this.terrain[z * VALLEY_WIDTH + x] === "stream") continue;
        this.terrain[z * VALLEY_WIDTH + x] = "flagstone";
      }
    }
    this.tryProp({
      model: "campfire",
      x: camp.x + 8,
      z: camp.z + 9,
      w: 1,
      d: 1,
      blocks: false,
      movable: true,
    });
    return { doorX: cabin.x + 3, doorZ: cabin.z };
  }

  /** Turn open cells that cannot be reached from the yard into creek, so the basin stays one walk. */
  seal(sx: number, sz: number): void {
    const seen = new Uint8Array(VALLEY_WIDTH * VALLEY_HEIGHT);
    const stack: Cell[] = [{ x: sx, z: sz }];
    while (stack.length > 0) {
      const cell = stack.pop();
      if (!cell || !inside(cell.x, cell.z)) continue;
      const index = cell.z * VALLEY_WIDTH + cell.x;
      if (seen[index] || this.blocked(cell.x, cell.z)) continue;
      seen[index] = 1;
      stack.push(
        { x: cell.x + 1, z: cell.z },
        { x: cell.x - 1, z: cell.z },
        { x: cell.x, z: cell.z + 1 },
        { x: cell.x, z: cell.z - 1 },
      );
    }
    for (let z = 0; z < VALLEY_HEIGHT; z++) {
      for (let x = 0; x < VALLEY_WIDTH; x++) {
        const index = z * VALLEY_WIDTH + x;
        if (seen[index] || this.blocked(x, z)) continue;
        this.terrain[index] = "stream";
      }
    }
  }

  clearing(camp: Cell & { w: number; h: number }, site: { doorX: number; doorZ: number }): Cell[] {
    const cells: Cell[] = [];
    for (let z = camp.z + 7; z < camp.z + camp.h; z++) {
      for (let x = camp.x; x < camp.x + camp.w; x++) {
        if (this.blocked(x, z)) continue;
        cells.push({ x, z });
      }
    }
    if (!this.blocked(site.doorX, site.doorZ)) cells.push({ x: site.doorX, z: site.doorZ });
    return cells;
  }

  private halfWidth(z: number): number {
    if (z < this.openZ || z > VALLEY_HEIGHT - 10) return 0;
    const opened = (z - this.openZ) / 14;
    if (opened < 1) return 2 + opened * 8;
    const camp0 = this.campZ - 2;
    const camp1 = this.campZ + CAMP_H + 6;
    if (z >= camp0 && z < camp1) return 17;
    return 10 + Math.sin(z * 0.05 + this.phase) * this.wobble;
  }

  private relief(x: number, z: number, center: number, half: number): number {
    const dx = Math.abs(x - center);
    if (dx <= half) return 0;
    const rise = dx - half;
    let elev = rise < 1.15 ? 1 : Math.min(9, 3 + Math.ceil((rise - 1.15) * 1.8));
    if (elev >= 3) {
      const ridge = Math.sin(x * 0.23 + this.phase) * Math.cos(z * 0.08 + this.phase * 0.4);
      const crest = Math.sin((x + z) * 0.045 + this.phase);
      elev = clamp(Math.round(elev + ridge * 2.4 + crest * 1.8), 3, 11);
    }
    return elev;
  }

  private inCleft(x: number, z: number): boolean {
    if (z > this.openZ + 1) return false;
    return x === this.mouthX || x === this.mouthX + 1;
  }

  private onBorder(x: number, z: number): boolean {
    return x === 0 || z === 0 || x === VALLEY_WIDTH - 1 || z === VALLEY_HEIGHT - 1;
  }

  private setElev(x: number, z: number, elev: number): void {
    if (!inside(x, z)) return;
    const tier = clamp(elev, 0, 11);
    const index = z * VALLEY_WIDTH + x;
    this.elevation[index] = tier;
    if (tier === 0) this.terrain[index] = "grass";
    else if (tier === 1) this.terrain[index] = "gravel";
    else this.terrain[index] = "roughStone";
  }

  private crags(rng: () => number): void {
    for (const dir of [-1, 1] as const) {
      for (let n = 0; n < 4; n++) {
        const z0 = 28 + Math.floor(rng() * (VALLEY_HEIGHT - 56));
        for (let dz = 0; dz < 6; dz++) {
          const x = this.cliffX(z0 + dz, dir, GULCH_RIM);
          if (x >= 0) this.addWall(x, z0 + dz, "rockOre");
        }
      }
    }
    for (let z = 24; z < VALLEY_HEIGHT - 16; z += 7) {
      const west = this.cliffX(z, -1, 2);
      if (west >= 0) this.addWall(west, z, "rock");
      const east = this.cliffX(z + 3, 1, 2);
      if (east >= 0) this.addWall(east, z + 3, "rock");
    }
  }

  private cliffX(z: number, dir: number, minElev: number): number {
    if (z < 0 || z >= VALLEY_HEIGHT) return -1;
    const center = Math.round(this.axisX[z] ?? 0);
    for (let step = 1; step < 48; step++) {
      const x = center + dir * step;
      if (!inside(x, z)) return -1;
      if (this.elevation[z * VALLEY_WIDTH + x] >= minElev) return x;
    }
    return -1;
  }

  private building(box: { x: number; z: number; w: number; d: number }, style: Roof["style"], id: string): void {
    const door = { x: box.x + Math.floor(box.w / 2), z: box.z };
    for (let z = box.z; z < box.z + box.d; z++) {
      for (let x = box.x; x < box.x + box.w; x++) {
        const border = x === box.x || z === box.z || x === box.x + box.w - 1 || z === box.z + box.d - 1;
        if (border) {
          if (x === door.x && z === door.z) continue;
          this.addWall(x, z, "planks");
          continue;
        }
        this.setTerrain(x, z, "woodFloor");
      }
    }
    this.doors.push({
      id: `${id}-door`,
      x: door.x,
      z: door.z,
      yaw: 0,
      stuff: "Wood",
      facade: "s",
    });
    this.roofs.push({
      id: `${id}-roof`,
      x: box.x,
      z: box.z,
      w: box.w,
      d: box.d,
      style,
      ridge: "x",
    });
  }

  private disk(cx: number, cz: number, radius: number, camp: Cell & { w: number; h: number }): void {
    for (let z = cz - radius; z <= cz + radius; z++) {
      for (let x = cx - radius; x <= cx + radius; x++) {
        if ((x - cx) ** 2 + (z - cz) ** 2 > radius * radius) continue;
        if (!inside(x, z) || this.elevation[z * VALLEY_WIDTH + x] !== 0 || inRect(x, z, camp)) continue;
        const kind = this.terrain[z * VALLEY_WIDTH + x];
        if (kind === "grass") this.terrain[z * VALLEY_WIDTH + x] = "grassRich";
      }
    }
  }

  private fillRect(x0: number, z0: number, w: number, d: number, kind: TerrainKind, skipReserved: boolean): void {
    for (let z = z0; z < z0 + d; z++) {
      for (let x = x0; x < x0 + w; x++) {
        if (!inside(x, z) || this.elevation[z * VALLEY_WIDTH + x] !== 0) continue;
        const current = this.terrain[z * VALLEY_WIDTH + x];
        if (current === "water" || current === "stream" || current === "roughStone") continue;
        if (skipReserved && current === "woodFloor") continue;
        this.terrain[z * VALLEY_WIDTH + x] = kind;
      }
    }
  }

  private tryTree(rng: () => number, x: number, z: number, camp: Cell & { w: number; h: number }): boolean {
    if (inRect(x, z, camp) || inRect(x + 1, z, camp) || inRect(x, z + 1, camp) || inRect(x + 1, z + 1, camp)) {
      return false;
    }
    if (!this.treeFits(x, z)) return false;
    const model = TREES[Math.floor(rng() * TREES.length)];
    return this.tryProp({ model, x, z, w: 2, d: 2, scale: 2.2, blocks: true });
  }

  /** Keep the middle of the floor open so the gulch stays one walk. */
  private treeFits(x: number, z: number): boolean {
    for (let dz = 0; dz < 2; dz++) {
      for (let dx = 0; dx < 2; dx++) {
        const px = x + dx;
        const pz = z + dz;
        if (!inside(px, pz) || this.elevation[pz * VALLEY_WIDTH + px] !== 0) return false;
        if (Math.abs(px - this.axisX[pz]) < 3.2) return false;
      }
    }
    return true;
  }

  private tryProp(prop: Omit<Prop, "id">): boolean {
    const w = prop.w ?? 1;
    const d = prop.d ?? 1;
    const x = Math.floor(prop.x);
    const z = Math.floor(prop.z);
    if (!this.fits(x, z, w, d)) return false;
    const blocks = prop.blocks !== false;
    if (blocks) {
      for (let dz = 0; dz < d; dz++) {
        for (let dx = 0; dx < w; dx++) this.occupied[(z + dz) * VALLEY_WIDTH + (x + dx)] = 1;
      }
    }
    this.props.push({ ...prop, id: `${prop.model}-${this.seq++}`, x, z });
    return true;
  }

  private fits(x: number, z: number, w: number, d: number): boolean {
    for (let dz = 0; dz < d; dz++) {
      for (let dx = 0; dx < w; dx++) {
        const px = x + dx;
        const pz = z + dz;
        if (!inside(px, pz)) return false;
        if (this.blocked(px, pz)) return false;
        const kind = this.terrain[pz * VALLEY_WIDTH + px];
        if (kind === "water" || kind === "stream") return false;
      }
    }
    return true;
  }

  private blocked(x: number, z: number): boolean {
    if (!inside(x, z)) return true;
    if (this.wallAt.has(key(x, z))) return true;
    if (this.elevation[z * VALLEY_WIDTH + x] >= 1) return true;
    if (this.occupied[z * VALLEY_WIDTH + x]) return true;
    const kind = this.terrain[z * VALLEY_WIDTH + x];
    return kind === "water" || kind === "stream";
  }

  private addWall(x: number, z: number, kind: WallKind): void {
    if (!inside(x, z) || this.wallAt.has(key(x, z))) return;
    this.wallAt.add(key(x, z));
    this.walls.push({ x, z, kind });
  }

  private setTerrain(x: number, z: number, kind: TerrainKind): void {
    if (!inside(x, z)) return;
    this.terrain[z * VALLEY_WIDTH + x] = kind;
  }

  private nearWater(x: number, z: number): boolean {
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dz === 0) continue;
        const px = x + dx;
        const pz = z + dz;
        if (!inside(px, pz)) continue;
        const kind = this.terrain[pz * VALLEY_WIDTH + px];
        if (kind === "water" || kind === "stream") return true;
      }
    }
    return false;
  }
}

function inRect(x: number, z: number, rect: { x: number; z: number; w: number; h: number }): boolean {
  return x >= rect.x && z >= rect.z && x < rect.x + rect.w && z < rect.z + rect.h;
}

function edgeDist(x: number, z: number): number {
  return Math.min(x, z, VALLEY_WIDTH - 1 - x, VALLEY_HEIGHT - 1 - z);
}

function inside(x: number, z: number): boolean {
  return x >= 0 && z >= 0 && x < VALLEY_WIDTH && z < VALLEY_HEIGHT;
}

function key(x: number, z: number): string {
  return `${x},${z}`;
}

function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

function clamp01(value: number): number {
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
}

function hash(text: string): number {
  let value = 0;
  for (const char of text) value = (Math.imul(value, 33) + char.charCodeAt(0)) >>> 0;
  return value;
}

/** mulberry32. Generation keeps its own stream. The simulation starts again from the seed. */
export function mulberry32(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

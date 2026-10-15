import * as THREE from "three";
import { ISORIM } from "../assets/paths";
import type { Colony, Side, WallKind } from "../game/map";
import { geometryFrom, pushQuad } from "./geometry";
import { loadTexture } from "./materials";

const ASSET = `${ISORIM}/textures`;
const WALL_H = 1.2;
const SIDE_TEX_H = 1.25;

const WALL_FILES: Record<WallKind, { side: string; top: string; color: number; height: number }> = {
  planks: { side: "walls/PlanksSide.png", top: "walls/PlanksTop.png", color: 0xc48a52, height: WALL_H },
  bricks: { side: "walls/BricksSide.png", top: "walls/BricksTop.png", color: 0xb56a48, height: WALL_H },
  stone: { side: "walls/SmoothStoneSide.png", top: "walls/SmoothStoneTop.png", color: 0xc8c2b6, height: WALL_H },
  metal: { side: "walls/MetalSide.png", top: "walls/MetalTop.png", color: 0x8e98a4, height: WALL_H },
  rock: { side: "walls/RockSide.png", top: "walls/RockTop.png", color: 0x9a9186, height: WALL_H },
  rockOre: { side: "walls/RockOreSide.png", top: "walls/RockOreTop.png", color: 0x8a7058, height: WALL_H },
  sandbags: { side: "walls/SandbagsSide.png", top: "walls/SandbagsTop.png", color: 0xc4b48a, height: 0.55 },
};

const ROOF_FILES = {
  terracotta: { file: "roofs/Terracotta.png", color: 0xc4623c },
  thatch: { file: "roofs/Thatch.png", color: 0xc4a15a },
  tin: { file: "roofs/Tin.png", color: 0x8e98a4 },
  slate: { file: "roofs/Slate.png", color: 0x5e6770 },
} as const;

const INTERIOR: ReadonlySet<string> = new Set([
  "woodFloor",
  "stoneTile",
  "carpet",
  "concrete",
  "flagstone",
  "metalFloor",
  "sterile",
  "roughHewn",
]);

export interface CutawayPiece {
  object: THREE.Object3D;
  side: Side;
}

export interface StructureResult {
  group: THREE.Group;
  /** Wall cells, keyed `x,z`. */
  walls: Set<string>;
  cutaway: CutawayPiece[];
}

export function buildStructures(colony: Colony): StructureResult {
  const group = new THREE.Group();
  group.name = "structures";
  const walls = new Set(colony.walls.map((w) => `${w.x},${w.z}`));
  const cutaway: CutawayPiece[] = [];

  const sideTex = {} as Record<WallKind, THREE.Texture>;
  const topTex = {} as Record<WallKind, THREE.Texture>;
  for (const kind of Object.keys(WALL_FILES) as WallKind[]) {
    sideTex[kind] = loadTexture(`${ASSET}/${WALL_FILES[kind].side}`, true);
    topTex[kind] = loadTexture(`${ASSET}/${WALL_FILES[kind].top}`, true);
  }

  const interior = interiorCells(colony);
  const cliffSides = new Map<WallKind, { pos: number[]; nrm: number[]; uv: number[] }>();
  const cliffTops = new Map<WallKind, { pos: number[]; nrm: number[]; uv: number[] }>();
  const cliffBucket = (map: Map<WallKind, { pos: number[]; nrm: number[]; uv: number[] }>, kind: WallKind) => {
    let found = map.get(kind);
    if (!found) {
      found = { pos: [], nrm: [], uv: [] };
      map.set(kind, found);
    }
    return found;
  };

  for (const wall of colony.walls) {
    const { x, z, kind } = wall;
    const height = WALL_FILES[kind].height;
    if (kind === "rock" || kind === "rockOre") {
      writeWallSides(x, z, height, walls, cliffBucket(cliffSides, kind));
      writeWallTop(x, z, height, cliffBucket(cliffTops, kind));
      continue;
    }
    const sides = new THREE.Mesh(
      wallSidesGeometry(x, z, height, walls),
      new THREE.MeshLambertMaterial({ color: WALL_FILES[kind].color, map: sideTex[kind] }),
    );
    const top = new THREE.Mesh(
      wallTopGeometry(x, z, height),
      new THREE.MeshLambertMaterial({ color: WALL_FILES[kind].color, map: topTex[kind] }),
    );
    sides.castShadow = true;
    sides.receiveShadow = true;
    top.castShadow = true;
    top.receiveShadow = true;
    const cell = new THREE.Group();
    cell.add(sides, top);
    group.add(cell);

    const facade = facadeOf(x, z, interior);
    if (facade) cutaway.push({ object: cell, side: facade });
  }

  for (const [kind, data] of cliffSides) {
    if (data.pos.length === 0) continue;
    const mesh = new THREE.Mesh(
      geometryFrom(THREE, data.pos, data.nrm, data.uv),
      new THREE.MeshLambertMaterial({ color: WALL_FILES[kind].color, map: sideTex[kind] }),
    );
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.frustumCulled = true;
    mesh.name = `${kind}-sides`;
    group.add(mesh);
  }
  for (const [kind, data] of cliffTops) {
    if (data.pos.length === 0) continue;
    const mesh = new THREE.Mesh(
      geometryFrom(THREE, data.pos, data.nrm, data.uv),
      new THREE.MeshLambertMaterial({ color: WALL_FILES[kind].color, map: topTex[kind] }),
    );
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.frustumCulled = true;
    mesh.name = `${kind}-tops`;
    group.add(mesh);
  }

  for (const roof of colony.roofs) {
    const style = ROOF_FILES[roof.style];
    const map = loadTexture(`${ASSET}/${style.file}`, true);
    const material = new THREE.MeshLambertMaterial({
      color: style.color,
      map,
      side: THREE.DoubleSide,
    });
    const slopes = roofSlopes(roof.x, roof.z, roof.w, roof.d, roof.ridge);
    for (const slope of slopes) {
      const mesh = new THREE.Mesh(slope.geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      cutaway.push({ object: mesh, side: slope.side });
    }
  }

  return { group, walls, cutaway };
}

function interiorCells(colony: Colony): Set<string> {
  const cells = new Set<string>();
  for (let z = 0; z < colony.height; z++) {
    for (let x = 0; x < colony.width; x++) {
      const kind = colony.terrain[z * colony.width + x];
      if (INTERIOR.has(kind)) cells.add(`${x},${z}`);
    }
  }
  return cells;
}

/** The outside direction of a wall cell, if exactly one side faces the outdoors of a room. */
function facadeOf(x: number, z: number, interior: Set<string>): Side | null {
  const sides: Side[] = [];
  if (interior.has(`${x},${z + 1}`) && !interior.has(`${x},${z - 1}`)) sides.push("s");
  if (interior.has(`${x},${z - 1}`) && !interior.has(`${x},${z + 1}`)) sides.push("n");
  if (interior.has(`${x - 1},${z}`) && !interior.has(`${x + 1},${z}`)) sides.push("e");
  if (interior.has(`${x + 1},${z}`) && !interior.has(`${x - 1},${z}`)) sides.push("w");
  if (sides.length === 1) return sides[0];
  // Corners take the first exterior we found; cutaway still opens that face.
  return sides[0] ?? null;
}

function wallSidesGeometry(x: number, z: number, h: number, walls: Set<string>): THREE.BufferGeometry {
  const data = { pos: [] as number[], nrm: [] as number[], uv: [] as number[] };
  writeWallSides(x, z, h, walls, data);
  return geometryFrom(THREE, data.pos, data.nrm, data.uv);
}

function writeWallSides(
  x: number,
  z: number,
  h: number,
  walls: Set<string>,
  dest: { pos: number[]; nrm: number[]; uv: number[] },
): void {
  const { pos, nrm, uv } = dest;
  const v1 = h / SIDE_TEX_H;

  const faces: { nx: number; nz: number; corners: [number, number, number][]; u0: number; u1: number }[] = [];
  if (!walls.has(`${x},${z - 1}`)) {
    faces.push({
      nx: 0,
      nz: -1,
      u0: x * 0.5,
      u1: (x + 1) * 0.5,
      corners: [
        [x, 0, z],
        [x + 1, 0, z],
        [x + 1, h, z],
        [x, h, z],
      ],
    });
  }
  if (!walls.has(`${x},${z + 1}`)) {
    faces.push({
      nx: 0,
      nz: 1,
      u0: (x + 1) * 0.5,
      u1: x * 0.5,
      corners: [
        [x + 1, 0, z + 1],
        [x, 0, z + 1],
        [x, h, z + 1],
        [x + 1, h, z + 1],
      ],
    });
  }
  if (!walls.has(`${x + 1},${z}`)) {
    faces.push({
      nx: 1,
      nz: 0,
      u0: z * 0.5,
      u1: (z + 1) * 0.5,
      corners: [
        [x + 1, 0, z],
        [x + 1, 0, z + 1],
        [x + 1, h, z + 1],
        [x + 1, h, z],
      ],
    });
  }
  if (!walls.has(`${x - 1},${z}`)) {
    faces.push({
      nx: -1,
      nz: 0,
      u0: (z + 1) * 0.5,
      u1: z * 0.5,
      corners: [
        [x, 0, z + 1],
        [x, 0, z],
        [x, h, z],
        [x, h, z + 1],
      ],
    });
  }

  for (const face of faces) {
    pushQuad(pos, nrm, uv, face.corners, [
      [face.u0, 0],
      [face.u1, 0],
      [face.u1, v1],
      [face.u0, v1],
    ]);
  }
}

function wallTopGeometry(x: number, z: number, h: number): THREE.BufferGeometry {
  const data = { pos: [] as number[], nrm: [] as number[], uv: [] as number[] };
  writeWallTop(x, z, h, data);
  return geometryFrom(THREE, data.pos, data.nrm, data.uv);
}

function writeWallTop(x: number, z: number, h: number, dest: { pos: number[]; nrm: number[]; uv: number[] }): void {
  const { pos, nrm, uv } = dest;
  pushQuad(
    pos,
    nrm,
    uv,
    [
      [x, h, z],
      [x, h, z + 1],
      [x + 1, h, z + 1],
      [x + 1, h, z],
    ],
    [
      [x * 0.5, z * 0.5],
      [x * 0.5, (z + 1) * 0.5],
      [(x + 1) * 0.5, (z + 1) * 0.5],
      [(x + 1) * 0.5, z * 0.5],
    ],
  );
}

function roofSlopes(
  x: number,
  z: number,
  w: number,
  d: number,
  ridge: "x" | "z",
): { geometry: THREE.BufferGeometry; side: Side }[] {
  const overhang = 0.18;
  const eave = 1.28;
  const peak = 1.92;
  const x0 = x - overhang;
  const x1 = x + w + overhang;
  const z0 = z - overhang;
  const z1 = z + d + overhang;
  const slopes: { geometry: THREE.BufferGeometry; side: Side }[] = [];

  if (ridge === "x") {
    const mid = (z0 + z1) / 2;
    slopes.push(slopeGeometry("s", [
      [x0, eave, z0],
      [x0, peak, mid],
      [x1, peak, mid],
      [x1, eave, z0],
    ], x0, x1, z0, mid));
    slopes.push(slopeGeometry("n", [
      [x1, eave, z1],
      [x1, peak, mid],
      [x0, peak, mid],
      [x0, eave, z1],
    ], x0, x1, mid, z1));
  } else {
    const mid = (x0 + x1) / 2;
    slopes.push(slopeGeometry("w", [
      [x0, eave, z1],
      [mid, peak, z1],
      [mid, peak, z0],
      [x0, eave, z0],
    ], z0, z1, x0, mid));
    slopes.push(slopeGeometry("e", [
      [x1, eave, z0],
      [mid, peak, z0],
      [mid, peak, z1],
      [x1, eave, z1],
    ], z0, z1, mid, x1));
  }
  return slopes;
}

function slopeGeometry(
  side: Side,
  corners: [number, number, number][],
  u0: number,
  u1: number,
  v0: number,
  v1: number,
): { geometry: THREE.BufferGeometry; side: Side } {
  const pos: number[] = [];
  const nrm: number[] = [];
  const uv: number[] = [];
  // If the supplied order points downward, flip it so the slope faces up.
  const ax = corners[1][0] - corners[0][0];
  const az = corners[1][2] - corners[0][2];
  const bx = corners[2][0] - corners[0][0];
  const bz = corners[2][2] - corners[0][2];
  const ny = az * bx - ax * bz;
  const ordered = ny >= 0 ? corners : [corners[0], corners[3], corners[2], corners[1]];
  const uvs: [number, number][] = ny >= 0
    ? [[u0 * 0.5, v0 * 0.5], [u0 * 0.5, v1 * 0.5], [u1 * 0.5, v1 * 0.5], [u1 * 0.5, v0 * 0.5]]
    : [[u0 * 0.5, v0 * 0.5], [u1 * 0.5, v0 * 0.5], [u1 * 0.5, v1 * 0.5], [u0 * 0.5, v1 * 0.5]];
  pushQuad(pos, nrm, uv, ordered, uvs);
  return { geometry: geometryFrom(THREE, pos, nrm, uv), side };
}

/** True when this exterior side is the one the camera is looking from. */
export function cameraFaces(side: Side, camSouth: boolean, camEast: boolean): boolean {
  if (side === "s") return camSouth;
  if (side === "n") return !camSouth;
  if (side === "e") return camEast;
  return !camEast;
}

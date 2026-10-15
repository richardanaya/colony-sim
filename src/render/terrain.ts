import * as THREE from "three";
import { ISORIM } from "../assets/paths";
import { TIER_HEIGHT, type Colony, type TerrainKind } from "../game/map";
import { geometryFrom, pushQuad } from "./geometry";
import { loadTexture } from "./materials";

const ASSET = `${ISORIM}/textures`;
const SIDE_TEX_H = 1.25;

interface TerrainStyle {
  file: string;
  color: number;
  repeat: number;
  raised: boolean;
}

const STYLES: Record<Exclude<TerrainKind, "water" | "stream">, TerrainStyle> = {
  grass: { file: "ground/Grass.png", color: 0xffffff, repeat: 0.28, raised: false },
  grassRich: { file: "ground/GrassRich.png", color: 0xffffff, repeat: 0.28, raised: false },
  soil: { file: "ground/Soil.png", color: 0xffffff, repeat: 0.28, raised: false },
  soilRich: { file: "ground/SoilRich.png", color: 0xffffff, repeat: 0.28, raised: false },
  dirt: { file: "ground/PackedDirt.png", color: 0xffffff, repeat: 0.32, raised: false },
  sand: { file: "ground/Sand.png", color: 0xffffff, repeat: 0.28, raised: false },
  mud: { file: "ground/Mud.png", color: 0xffffff, repeat: 0.32, raised: false },
  marsh: { file: "ground/Marsh.png", color: 0xffffff, repeat: 0.32, raised: false },
  moss: { file: "ground/Moss.png", color: 0xffffff, repeat: 0.32, raised: false },
  gravel: { file: "ground/Gravel.png", color: 0xffffff, repeat: 0.32, raised: false },
  ice: { file: "ground/Ice.png", color: 0xffffff, repeat: 0.28, raised: false },
  roughHewn: { file: "ground/RoughHewn.png", color: 0x8a8074, repeat: 0.5, raised: true },
  roughStone: { file: "ground/RoughStone.png", color: 0x9c988f, repeat: 0.4, raised: false },
  smoothStone: { file: "ground/SmoothStone.png", color: 0xc8c4bc, repeat: 0.4, raised: false },
  woodFloor: { file: "ground/FloorWood.png", color: 0xb07a48, repeat: 0.5, raised: true },
  stoneTile: { file: "ground/FloorStoneTile.png", color: 0xc2b8a4, repeat: 0.5, raised: true },
  carpet: { file: "ground/FloorCarpet.png", color: 0x8d3d45, repeat: 0.5, raised: true },
  concrete: { file: "ground/FloorConcrete.png", color: 0xb7b7b4, repeat: 0.45, raised: true },
  flagstone: { file: "ground/FloorFlagstone.png", color: 0xa39a8c, repeat: 0.5, raised: true },
  metalFloor: { file: "ground/FloorMetal.png", color: 0x9aa6b0, repeat: 0.5, raised: true },
  paved: { file: "ground/FloorPaved.png", color: 0x8d8a84, repeat: 0.4, raised: true },
  sterile: { file: "ground/FloorSterile.png", color: 0xd5ddd8, repeat: 0.5, raised: true },
};

export interface TerrainResult {
  group: THREE.Group;
  /** Cells a colonist cannot enter (pond and stream). */
  water: Set<string>;
  ripples: THREE.Texture;
  flow: THREE.Texture;
}

export function buildTerrain(colony: Colony): TerrainResult {
  const group = new THREE.Group();
  group.name = "terrain";
  const water = new Set<string>();

  const buckets = new Map<Exclude<TerrainKind, "water" | "stream">, { pos: number[]; nrm: number[]; uv: number[] }>();
  const pond = empty();
  const stream = empty();
  const rockFaces = empty();
  const oreFaces = empty();
  const oreCells = new Set(colony.walls.filter((wall) => wall.kind === "rockOre").map((wall) => `${wall.x},${wall.z}`));
  let peaked = false;

  for (let z = 0; z < colony.height; z++) {
    for (let x = 0; x < colony.width; x++) {
      const index = z * colony.width + x;
      const kind = colony.terrain[index];
      const elev = colony.elevation[index] ?? 0;
      if (elev > 0) peaked = true;
      if (kind === "water" || kind === "stream") {
        water.add(`${x},${z}`);
        const dest = kind === "water" ? pond : stream;
        const u = kind === "water" ? 0.35 : 0.5;
        const y = elev * TIER_HEIGHT + (kind === "water" ? 0.035 : 0.03);
        pushQuad(dest.pos, dest.nrm, dest.uv, quad(x, y, z), uv(x, z, u));
        continue;
      }
      let bucket = buckets.get(kind);
      if (!bucket) {
        bucket = empty();
        buckets.set(kind, bucket);
      }
      const style = STYLES[kind];
      const y = elev * TIER_HEIGHT + (style.raised ? 0.02 : 0.005);
      pushQuad(bucket.pos, bucket.nrm, bucket.uv, quad(x, y, z), uv(x, z, style.repeat));
      const faces = oreCells.has(`${x},${z}`) ? oreFaces : rockFaces;
      writeCliffFaces(colony, x, z, elev, y, faces);
    }
  }

  for (const [kind, data] of buckets) {
    const style = STYLES[kind];
    const map = loadTexture(`${ASSET}/${style.file}`, true);
    const mesh = new THREE.Mesh(
      geometryFrom(THREE, data.pos, data.nrm, data.uv),
      new THREE.MeshLambertMaterial({ color: style.color, map }),
    );
    mesh.receiveShadow = true;
    mesh.name = kind;
    group.add(mesh);
  }

  addCliffMesh(group, "cliff-rock", rockFaces, "walls/RockSide.png", 0x9a9186);
  addCliffMesh(group, "cliff-ore", oreFaces, "walls/RockOreSide.png", 0x8a7058);

  if (!peaked) {
    const pad = 3;
    const strata = loadTexture(`${ASSET}/edge/Strata.png`, true);
    strata.repeat.set((colony.width + pad * 2) / 8, (colony.height + pad * 2) / 8);
    const skirt = new THREE.Mesh(
      new THREE.PlaneGeometry(colony.width + pad * 2, colony.height + pad * 2),
      new THREE.MeshLambertMaterial({ color: 0xc4b49a, map: strata }),
    );
    skirt.rotation.x = -Math.PI / 2;
    skirt.position.set(colony.width / 2, -0.04, colony.height / 2);
    skirt.receiveShadow = true;
    skirt.name = "strata";
    group.add(skirt);
  }

  addWater(group, "water", pond, 0x3c7380, 0);
  addWater(group, "stream", stream, 0x4a8490, 0);
  const ripples = loadTexture(`${ASSET}/water/Ripples.png`, true);
  const shine = new THREE.Mesh(
    geometryFrom(THREE, pond.pos, pond.nrm, pond.uv),
    new THREE.MeshBasicMaterial({ map: ripples, transparent: true, depthWrite: false, color: 0xd5e4ea }),
  );
  shine.position.y = 0.012;
  shine.name = "ripples";
  group.add(shine);

  const flow = loadTexture(`${ASSET}/water/Flow.png`, true);
  const current = new THREE.Mesh(
    geometryFrom(THREE, stream.pos, stream.nrm, stream.uv),
    new THREE.MeshBasicMaterial({ map: flow, transparent: true, depthWrite: false, color: 0xd5e4ea, opacity: 0.85 }),
  );
  current.position.y = 0.012;
  current.name = "flow";
  group.add(current);

  if (colony.marks.length > 0) {
    const marks = empty();
    for (const mark of colony.marks) {
      pushQuad(marks.pos, marks.nrm, marks.uv, quad(mark.x, 0.045, mark.z), [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
      ]);
    }
    const map = loadTexture(`${ASSET}/damage/Marks.png`);
    const mesh = new THREE.Mesh(
      geometryFrom(THREE, marks.pos, marks.nrm, marks.uv),
      new THREE.MeshLambertMaterial({ map, transparent: true, depthWrite: false }),
    );
    mesh.name = "marks";
    group.add(mesh);
  }

  return { group, water, ripples, flow };
}

function writeCliffFaces(
  colony: Colony,
  x: number,
  z: number,
  elev: number,
  y1: number,
  dest: { pos: number[]; nrm: number[]; uv: number[] },
): void {
  const { pos, nrm, uv } = dest;
  const sides: { elev: number; corners: [number, number, number][]; u0: number; u1: number }[] = [
    {
      elev: neighborElev(colony, x + 1, z),
      u0: (z + 1) * 0.5,
      u1: z * 0.5,
      corners: [
        [x + 1, 0, z + 1],
        [x + 1, 0, z],
        [x + 1, y1, z],
        [x + 1, y1, z + 1],
      ],
    },
    {
      elev: neighborElev(colony, x - 1, z),
      u0: z * 0.5,
      u1: (z + 1) * 0.5,
      corners: [
        [x, 0, z],
        [x, 0, z + 1],
        [x, y1, z + 1],
        [x, y1, z],
      ],
    },
    {
      elev: neighborElev(colony, x, z + 1),
      u0: x * 0.5,
      u1: (x + 1) * 0.5,
      corners: [
        [x, 0, z + 1],
        [x + 1, 0, z + 1],
        [x + 1, y1, z + 1],
        [x, y1, z + 1],
      ],
    },
    {
      elev: neighborElev(colony, x, z - 1),
      u0: (x + 1) * 0.5,
      u1: x * 0.5,
      corners: [
        [x + 1, 0, z],
        [x, 0, z],
        [x, y1, z],
        [x + 1, y1, z],
      ],
    },
  ];
  for (const side of sides) {
    if (elev <= side.elev) continue;
    const y0 = side.elev * TIER_HEIGHT;
    const v1 = (y1 - y0) / SIDE_TEX_H;
    const corners = side.corners.map((corner) => [corner[0], corner[1] === 0 ? y0 : y1, corner[2]] as [number, number, number]);
    pushQuad(pos, nrm, uv, corners, [
      [side.u0, 0],
      [side.u1, 0],
      [side.u1, v1],
      [side.u0, v1],
    ]);
  }
}

function neighborElev(colony: Colony, x: number, z: number): number {
  if (x < 0 || z < 0 || x >= colony.width || z >= colony.height) return 0;
  return colony.elevation[z * colony.width + x] ?? 0;
}

function addCliffMesh(
  group: THREE.Group,
  name: string,
  data: { pos: number[]; nrm: number[]; uv: number[] },
  file: string,
  color: number,
): void {
  if (data.pos.length === 0) return;
  const map = loadTexture(`${ASSET}/${file}`, true);
  const mesh = new THREE.Mesh(
    geometryFrom(THREE, data.pos, data.nrm, data.uv),
    new THREE.MeshLambertMaterial({ color, map }),
  );
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  mesh.frustumCulled = true;
  mesh.name = name;
  group.add(mesh);
}

function empty(): { pos: number[]; nrm: number[]; uv: number[] } {
  return { pos: [], nrm: [], uv: [] };
}

function quad(x: number, y: number, z: number): [number, number, number][] {
  return [
    [x, y, z],
    [x, y, z + 1],
    [x + 1, y, z + 1],
    [x + 1, y, z],
  ];
}

function uv(x: number, z: number, scale: number): [number, number][] {
  return [
    [x * scale, z * scale],
    [x * scale, (z + 1) * scale],
    [(x + 1) * scale, (z + 1) * scale],
    [(x + 1) * scale, z * scale],
  ];
}

function addWater(
  group: THREE.Group,
  name: string,
  data: { pos: number[]; nrm: number[]; uv: number[] },
  color: number,
  lift: number,
): void {
  if (data.pos.length === 0) return;
  const body = new THREE.Mesh(
    geometryFrom(THREE, data.pos, data.nrm, data.uv),
    new THREE.MeshLambertMaterial({ color }),
  );
  body.position.y = lift;
  body.receiveShadow = true;
  body.name = name;
  group.add(body);
}

import * as THREE from "three";
import type { Colony, TerrainKind } from "../types";
import { geometryFrom, pushQuad } from "./geometry";
import { loadTexture } from "./materials";

const ASSET = "/assets/isorim/textures";

interface TerrainStyle {
  file: string;
  color: number;
  repeat: number;
}

const STYLES: Record<Exclude<TerrainKind, "water">, TerrainStyle> = {
  grass: { file: "ground/Grass.png", color: 0xffffff, repeat: 0.28 },
  soil: { file: "ground/Soil.png", color: 0xffffff, repeat: 0.28 },
  dirt: { file: "ground/PackedDirt.png", color: 0xffffff, repeat: 0.32 },
  sand: { file: "ground/Sand.png", color: 0xffffff, repeat: 0.28 },
  woodFloor: { file: "ground/FloorWood.png", color: 0xb07a48, repeat: 0.5 },
  stoneTile: { file: "ground/FloorStoneTile.png", color: 0xc2b8a4, repeat: 0.5 },
};

export interface TerrainResult {
  group: THREE.Group;
  /** Cells a colonist cannot enter (water, later combined with walls and props). */
  water: Set<string>;
  ripples: THREE.Texture;
}

export function buildTerrain(colony: Colony): TerrainResult {
  const group = new THREE.Group();
  group.name = "terrain";
  const water = new Set<string>();

  const buckets = new Map<Exclude<TerrainKind, "water">, { pos: number[]; nrm: number[]; uv: number[] }>();
  const waterPos: number[] = [];
  const waterNrm: number[] = [];
  const waterUv: number[] = [];

  for (let z = 0; z < colony.height; z++) {
    for (let x = 0; x < colony.width; x++) {
      const kind = colony.terrain[z * colony.width + x];
      if (kind === "water") {
        water.add(`${x},${z}`);
        const u = 0.35;
        pushQuad(
          waterPos,
          waterNrm,
          waterUv,
          [
            [x, 0.035, z],
            [x, 0.035, z + 1],
            [x + 1, 0.035, z + 1],
            [x + 1, 0.035, z],
          ],
          [
            [x * u, z * u],
            [x * u, (z + 1) * u],
            [(x + 1) * u, (z + 1) * u],
            [(x + 1) * u, z * u],
          ],
        );
        continue;
      }
      let bucket = buckets.get(kind);
      if (!bucket) {
        bucket = { pos: [], nrm: [], uv: [] };
        buckets.set(kind, bucket);
      }
      const u = STYLES[kind].repeat;
      const y = kind === "woodFloor" || kind === "stoneTile" ? 0.02 : 0.005;
      pushQuad(
        bucket.pos,
        bucket.nrm,
        bucket.uv,
        [
          [x, y, z],
          [x, y, z + 1],
          [x + 1, y, z + 1],
          [x + 1, y, z],
        ],
        [
          [x * u, z * u],
          [x * u, (z + 1) * u],
          [(x + 1) * u, (z + 1) * u],
          [(x + 1) * u, z * u],
        ],
      );
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

  const pad = 2;
  const skirt = new THREE.Mesh(
    new THREE.PlaneGeometry(colony.width + pad * 2, colony.height + pad * 2),
    new THREE.MeshLambertMaterial({ color: 0x6d5b40 }),
  );
  skirt.rotation.x = -Math.PI / 2;
  skirt.position.set(colony.width / 2, -0.03, colony.height / 2);
  skirt.receiveShadow = true;
  group.add(skirt);

  const body = new THREE.Mesh(
    geometryFrom(THREE, waterPos, waterNrm, waterUv),
    new THREE.MeshLambertMaterial({ color: 0x3c7380 }),
  );
  body.receiveShadow = true;
  body.name = "water";
  group.add(body);

  const ripples = loadTexture(`${ASSET}/water/Ripples.png`, true);
  const shine = new THREE.Mesh(
    geometryFrom(THREE, waterPos, waterNrm, waterUv),
    new THREE.MeshBasicMaterial({ map: ripples, transparent: true, depthWrite: false, color: 0xd5e4ea }),
  );
  shine.position.y = 0.01;
  shine.name = "ripples";
  group.add(shine);

  return { group, water, ripples };
}

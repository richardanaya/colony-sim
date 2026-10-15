import * as THREE from "three";

export interface ModelPart {
  material: string;
  geometry: THREE.BufferGeometry;
  edges: THREE.EdgesGeometry;
}

export interface LoadedModel {
  parts: ModelPart[];
}

const EDGE_ANGLE = 38;

/**
 * Read a Wavefront OBJ the way IsoRim writes them: Y up, and -Z is north in the file.
 * Z is flipped so the result uses +Z north, matching the colony grid.
 * Faces keep their original order; the mirror is what turns the winding back out.
 */
export function parseObj(text: string): LoadedModel {
  const positions: number[] = [];
  const uvs: number[] = [];
  const buckets = new Map<string, { pos: number[]; nrm: number[]; uv: number[] }>();
  let current = "default";

  const bucket = (name: string) => {
    let found = buckets.get(name);
    if (!found) {
      found = { pos: [], nrm: [], uv: [] };
      buckets.set(name, found);
    }
    return found;
  };

  const lines = text.split(/\r?\n/);
  for (const raw of lines) {
    const line = raw.trim();
    if (line.length === 0 || line.startsWith("#")) continue;
    const parts = line.split(/\s+/);
    const tag = parts[0];
    if (tag === "v" && parts.length >= 4) {
      positions.push(Number(parts[1]), Number(parts[2]), -Number(parts[3]));
    } else if (tag === "vt" && parts.length >= 3) {
      uvs.push(Number(parts[1]), Number(parts[2]));
    } else if (tag === "usemtl") {
      current = parts[1] ?? "default";
    } else if (tag === "f" && parts.length >= 4) {
      const corners: { pi: number; ti: number }[] = [];
      let bad = false;
      for (let i = 1; i < parts.length; i++) {
        const bits = parts[i].split("/");
        const pi = resolveIndex(bits[0], positions.length / 3);
        const ti = bits.length > 1 && bits[1].length > 0 ? resolveIndex(bits[1], uvs.length / 2) : -1;
        if (pi < 0) {
          bad = true;
          break;
        }
        corners.push({ pi, ti });
      }
      if (bad || corners.length < 3) continue;
      const dest = bucket(current);
      for (let i = 1; i + 1 < corners.length; i++) {
        pushTriangle(dest, positions, uvs, corners[0], corners[i], corners[i + 1]);
      }
    }
  }

  const modelParts: ModelPart[] = [];
  for (const [material, data] of buckets) {
    if (data.pos.length === 0) continue;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(data.pos, 3));
    geometry.setAttribute("normal", new THREE.Float32BufferAttribute(data.nrm, 3));
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(data.uv, 2));
    modelParts.push({
      material,
      geometry,
      edges: new THREE.EdgesGeometry(geometry, EDGE_ANGLE),
    });
  }
  return { parts: modelParts };
}

function resolveIndex(token: string, count: number): number {
  if (!token) return -1;
  const n = Number(token);
  if (!Number.isFinite(n) || n === 0) return -1;
  const idx = n < 0 ? count + n : n - 1;
  return idx >= 0 && idx < count ? idx : -1;
}

function pushTriangle(
  dest: { pos: number[]; nrm: number[]; uv: number[] },
  positions: number[],
  uvs: number[],
  a: { pi: number; ti: number },
  b: { pi: number; ti: number },
  c: { pi: number; ti: number },
): void {
  const ax = positions[a.pi * 3];
  const ay = positions[a.pi * 3 + 1];
  const az = positions[a.pi * 3 + 2];
  const bx = positions[b.pi * 3];
  const by = positions[b.pi * 3 + 1];
  const bz = positions[b.pi * 3 + 2];
  const cx = positions[c.pi * 3];
  const cy = positions[c.pi * 3 + 1];
  const cz = positions[c.pi * 3 + 2];
  const ux = bx - ax;
  const uy = by - ay;
  const uz = bz - az;
  const vx = cx - ax;
  const vy = cy - ay;
  const vz = cz - az;
  let nx = uy * vz - uz * vy;
  let ny = uz * vx - ux * vz;
  let nz = ux * vy - uy * vx;
  const len = Math.hypot(nx, ny, nz);
  if (len < 1e-8) return;
  nx /= len;
  ny /= len;
  nz /= len;

  const corners = [a, b, c];
  const xyz = [
    [ax, ay, az],
    [bx, by, bz],
    [cx, cy, cz],
  ];
  for (let i = 0; i < 3; i++) {
    dest.pos.push(xyz[i][0], xyz[i][1], xyz[i][2]);
    dest.nrm.push(nx, ny, nz);
    const ti = corners[i].ti;
    if (ti >= 0) dest.uv.push(uvs[ti * 2], uvs[ti * 2 + 1]);
    else dest.uv.push(0, 0);
  }
}

export const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x221c18 });

export interface InstanceOptions {
  stuff?: import("../game/map").Stuff;
  tint?: THREE.Color | null;
  scale?: number;
  stretch?: [number, number, number];
  yaw?: number;
  skipPrefix?: string[];
  materials: MaterialSource;
}

export interface MaterialSource {
  get(name: string, stuff: import("../game/map").Stuff, tint: THREE.Color | null): THREE.Material;
}

export function instantiate(model: LoadedModel, opts: InstanceOptions): THREE.Group {
  const group = new THREE.Group();
  const stuff = opts.stuff ?? "Wood";
  const skip = opts.skipPrefix ?? [];
  for (const part of model.parts) {
    if (skip.some((prefix) => part.material.startsWith(prefix))) continue;
    const material = opts.materials.get(part.material, stuff, opts.tint ?? null);
    const mesh = new THREE.Mesh(part.geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    const lines = new THREE.LineSegments(part.edges, edgeMaterial);
    lines.castShadow = false;
    group.add(lines);
  }
  const s = opts.scale ?? 1;
  const stretch = opts.stretch ?? [1, 1, 1];
  group.scale.set(s * stretch[0], s * stretch[1], s * stretch[2]);
  group.rotation.y = THREE.MathUtils.degToRad(opts.yaw ?? 0);
  return group;
}

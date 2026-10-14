import * as THREE from "three";
import type { Colonist } from "../types";
import type { MaterialLibrary } from "./materials";
import { instantiate, type LoadedModel } from "./obj";

export function buildColonist(
  colonist: Colonist,
  models: Map<string, LoadedModel>,
  materials: MaterialLibrary,
): THREE.Group {
  const group = new THREE.Group();
  group.name = colonist.id;

  const add = (model: string, tint: string) => {
    const loaded = models.get(model);
    if (!loaded) {
      console.warn(`Missing colonist part ${model}`);
      return;
    }
    group.add(
      instantiate(loaded, {
        materials,
        stuff: "Fabric",
        tint: new THREE.Color(tint),
      }),
    );
  };

  add(`person_${colonist.body}_lower`, colonist.pants);
  add(`person_${colonist.body}_upper`, colonist.shirt);
  add("person_head", colonist.skin);
  add("person_face", "#ffffff");
  add(`person_hair_${colonist.hair}`, colonist.hairColor);
  if (colonist.beard) add("person_beard_goatee", colonist.hairColor);
  if (colonist.hat) add("person_hat_cap", colonist.hatColor ?? colonist.shirt);

  group.position.set(colonist.x + 0.5, 0, colonist.z + 0.5);
  return group;
}

export interface Walker {
  name: string;
  group: THREE.Group;
  label: HTMLDivElement;
  x: number;
  z: number;
  yaw: number;
  path: { x: number; z: number }[];
  wait: number;
  phase: number;
}

export function stepWalkers(
  walkers: Walker[],
  blocked: Set<string>,
  width: number,
  height: number,
  dt: number,
  time: number,
): void {
  for (const walker of walkers) {
    if (walker.wait > 0) {
      walker.wait -= dt;
      walker.group.rotation.y = walker.yaw + Math.sin(time * 1.4 + walker.phase) * 0.12;
      walker.group.position.y = 0;
      continue;
    }

    if (walker.path.length === 0) {
      const here = { x: Math.floor(walker.x), z: Math.floor(walker.z) };
      const goal = pickGoal(here, blocked, width, height);
      walker.path = goal ? bfs(here, goal, blocked, width, height) ?? [] : [];
      if (walker.path.length === 0) {
        walker.wait = 0.8;
        continue;
      }
    }

    const next = walker.path[0];
    const tx = next.x + 0.5;
    const tz = next.z + 0.5;
    if (blockedAhead(walker, walkers, tx, tz)) {
      walker.wait = 0.2;
      continue;
    }

    const dx = tx - walker.x;
    const dz = tz - walker.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.05) {
      walker.x = tx;
      walker.z = tz;
      walker.path.shift();
      if (walker.path.length === 0) walker.wait = 0.7 + Math.random() * 2.2;
      continue;
    }

    const speed = 1.45;
    const step = Math.min(dist, speed * dt);
    walker.x += (dx / dist) * step;
    walker.z += (dz / dist) * step;
    walker.phase += dt * 9;
    const desired = Math.atan2(dx, dz);
    walker.yaw = lerpAngle(walker.yaw, desired, 1 - Math.exp(-10 * dt));
    walker.group.position.set(walker.x, Math.abs(Math.sin(walker.phase)) * 0.04, walker.z);
    walker.group.rotation.y = walker.yaw;
  }
}

function blockedAhead(walker: Walker, all: Walker[], tx: number, tz: number): boolean {
  for (const other of all) {
    if (other === walker) continue;
    const nearNext = Math.hypot(other.x - tx, other.z - tz) < 0.42;
    const nearMe = Math.hypot(other.x - walker.x, other.z - walker.z) < 1;
    if (nearNext && nearMe) return true;
  }
  return false;
}

function pickGoal(
  here: { x: number; z: number },
  blocked: Set<string>,
  width: number,
  height: number,
): { x: number; z: number } | null {
  let fallback: { x: number; z: number } | null = null;
  for (let i = 0; i < 40; i++) {
    const x = Math.floor(Math.random() * width);
    const z = Math.floor(Math.random() * height);
    if (blocked.has(`${x},${z}`)) continue;
    const dist = Math.abs(x - here.x) + Math.abs(z - here.z);
    if (dist >= 4) return { x, z };
    fallback = { x, z };
  }
  return fallback;
}

function bfs(
  start: { x: number; z: number },
  goal: { x: number; z: number },
  blocked: Set<string>,
  width: number,
  height: number,
): { x: number; z: number }[] | null {
  const key = (x: number, z: number) => `${x},${z}`;
  const startKey = key(start.x, start.z);
  const goalKey = key(goal.x, goal.z);
  if (startKey === goalKey) return [];
  const prev = new Map<string, string | null>();
  prev.set(startKey, null);
  const queue = [start];
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length > 0) {
    const cur = queue.shift();
    if (!cur) break;
    if (cur.x === goal.x && cur.z === goal.z) break;
    for (const [dx, dz] of dirs) {
      const x = cur.x + dx;
      const z = cur.z + dz;
      if (x < 0 || z < 0 || x >= width || z >= height) continue;
      const k = key(x, z);
      if (prev.has(k) || blocked.has(k)) continue;
      prev.set(k, key(cur.x, cur.z));
      queue.push({ x, z });
    }
  }
  if (!prev.has(goalKey)) return null;
  const path: { x: number; z: number }[] = [];
  let cursor: string | null = goalKey;
  while (cursor && cursor !== startKey) {
    const [x, z] = cursor.split(",").map(Number);
    path.push({ x, z });
    cursor = prev.get(cursor) ?? null;
  }
  path.reverse();
  return path;
}

function lerpAngle(from: number, to: number, t: number): number {
  const delta = Math.atan2(Math.sin(to - from), Math.cos(to - from));
  return from + delta * t;
}

import type { NavGrid } from "./types";

interface Cell {
  x: number;
  z: number;
}

/**
 * Move colonists who are wandering. Paths stay on the TypeScript side of the
 * reference backend; the WASM build would keep them in linear memory and
 * write only the columns the renderer samples.
 */
export function stepWander(state: WanderState, nav: NavGrid, dt: number): void {
  const { count, x, z, yaw, phase, wait, moving, paths, activity } = state;
  for (let i = 0; i < count; i++) {
    if (activity[i] !== "wander") {
      moving[i] = 0;
      continue;
    }
    if (wait[i] > 0) {
      wait[i] -= dt;
      moving[i] = 0;
      continue;
    }

    let path = paths[i];
    if (path.length === 0) {
      const here = { x: Math.floor(x[i]), z: Math.floor(z[i]) };
      const goal = pickGoal(state, here, nav);
      path = goal ? bfs(here, goal, nav) ?? [] : [];
      paths[i] = path;
      if (path.length === 0) {
        wait[i] = 0.8;
        moving[i] = 0;
        continue;
      }
    }

    const next = path[0];
    const tx = next.x + 0.5;
    const tz = next.z + 0.5;
    if (blockedAhead(i, x, z, count, tx, tz)) {
      wait[i] = 0.2;
      moving[i] = 0;
      continue;
    }

    const dx = tx - x[i];
    const dz = tz - z[i];
    const dist = Math.hypot(dx, dz);
    if (dist < 0.05) {
      x[i] = tx;
      z[i] = tz;
      path.shift();
      moving[i] = 0;
      if (path.length === 0) wait[i] = 0.7 + state.random() * 2.2;
      continue;
    }

    const speed = 1.45;
    const step = Math.min(dist, speed * dt);
    x[i] += (dx / dist) * step;
    z[i] += (dz / dist) * step;
    phase[i] += dt * 9;
    const desired = Math.atan2(dx, dz);
    yaw[i] = lerpAngle(yaw[i], desired, 1 - Math.exp(-10 * dt));
    moving[i] = 1;
  }
}

export interface WanderState {
  count: number;
  x: Float32Array;
  z: Float32Array;
  yaw: Float32Array;
  phase: Float32Array;
  wait: Float32Array;
  moving: Uint8Array;
  paths: Cell[][];
  activity: ("wander" | "work")[];
  random(): number;
}

function blockedAhead(index: number, x: Float32Array, z: Float32Array, count: number, tx: number, tz: number): boolean {
  for (let other = 0; other < count; other++) {
    if (other === index) continue;
    const nearNext = Math.hypot(x[other] - tx, z[other] - tz) < 0.42;
    const nearMe = Math.hypot(x[other] - x[index], z[other] - z[index]) < 1;
    if (nearNext && nearMe) return true;
  }
  return false;
}

function pickGoal(state: WanderState, here: Cell, nav: NavGrid): Cell | null {
  let fallback: Cell | null = null;
  for (let i = 0; i < 40; i++) {
    const x = Math.floor(state.random() * nav.width);
    const z = Math.floor(state.random() * nav.height);
    if (isBlocked(nav, x, z)) continue;
    const dist = Math.abs(x - here.x) + Math.abs(z - here.z);
    if (dist >= 4) return { x, z };
    fallback = { x, z };
  }
  return fallback;
}

function bfs(start: Cell, goal: Cell, nav: NavGrid): Cell[] | null {
  const key = (x: number, z: number) => z * nav.width + x;
  const startKey = key(start.x, start.z);
  const goalKey = key(goal.x, goal.z);
  if (startKey === goalKey) return [];
  const prev = new Map<number, number | null>();
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
      if (x < 0 || z < 0 || x >= nav.width || z >= nav.height) continue;
      const k = key(x, z);
      if (prev.has(k) || isBlocked(nav, x, z)) continue;
      prev.set(k, key(cur.x, cur.z));
      queue.push({ x, z });
    }
  }
  if (!prev.has(goalKey)) return null;
  const path: Cell[] = [];
  let cursor: number | null = goalKey;
  while (cursor !== null && cursor !== startKey) {
    path.push({ x: cursor % nav.width, z: Math.floor(cursor / nav.width) });
    cursor = prev.get(cursor) ?? null;
  }
  path.reverse();
  return path;
}

function isBlocked(nav: NavGrid, x: number, z: number): boolean {
  return nav.blocked[z * nav.width + x] === 1;
}

function lerpAngle(from: number, to: number, t: number): number {
  const delta = Math.atan2(Math.sin(to - from), Math.cos(to - from));
  return from + delta * t;
}

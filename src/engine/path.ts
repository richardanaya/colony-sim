import type { NavGrid } from "./types";

export interface PathCell {
  x: number;
  z: number;
}

const DIRS: readonly (readonly [number, number])[] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

/**
 * 4-connected A* over walkable cells. The path excludes the start cell and
 * includes the goal. An empty path means the colonist is already there.
 */
export function findPath(start: PathCell, goal: PathCell, nav: NavGrid): PathCell[] | null {
  const width = nav.width;
  const height = nav.height;
  if (start.x === goal.x && start.z === goal.z) return [];
  if (!inside(nav, start.x, start.z) || !inside(nav, goal.x, goal.z)) return null;
  const startI = start.z * width + start.x;
  const goalI = goal.z * width + goal.x;
  if (nav.blocked[startI] || nav.blocked[goalI]) return null;

  const size = width * height;
  const gScore = new Int32Array(size);
  gScore.fill(-1);
  const parent = new Int32Array(size);
  parent.fill(-1);
  gScore[startI] = 0;

  const heap: number[] = [];
  const priority: number[] = [];
  const push = (index: number, score: number) => {
    heap.push(index);
    priority.push(score);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (priority[p] <= priority[i]) break;
      swap(heap, priority, i, p);
      i = p;
    }
  };
  const pop = () => {
    const index = heap[0];
    const last = heap.pop();
    const lastPriority = priority.pop();
    if (heap.length > 0 && last !== undefined && lastPriority !== undefined) {
      heap[0] = last;
      priority[0] = lastPriority;
      let i = 0;
      for (;;) {
        const left = i * 2 + 1;
        const right = left + 1;
        let best = i;
        if (left < heap.length && priority[left] < priority[best]) best = left;
        if (right < heap.length && priority[right] < priority[best]) best = right;
        if (best === i) break;
        swap(heap, priority, i, best);
        i = best;
      }
    }
    return index;
  };

  const closed = new Uint8Array(size);
  push(startI, Math.abs(goal.x - start.x) + Math.abs(goal.z - start.z));
  while (heap.length > 0) {
    const current = pop();
    if (closed[current]) continue;
    closed[current] = 1;
    if (current === goalI) break;
    const cx = current % width;
    const cz = (current / width) | 0;
    const base = gScore[current];
    for (const [dx, dz] of DIRS) {
      const x = cx + dx;
      const z = cz + dz;
      if (x < 0 || z < 0 || x >= width || z >= height) continue;
      const next = z * width + x;
      if (nav.blocked[next] || closed[next]) continue;
      const nextG = base + 1;
      if (gScore[next] !== -1 && nextG >= gScore[next]) continue;
      gScore[next] = nextG;
      parent[next] = current;
      push(next, nextG + Math.abs(goal.x - x) + Math.abs(goal.z - z));
    }
  }

  if (gScore[goalI] < 0) return null;
  const path: PathCell[] = [];
  let cursor = goalI;
  while (cursor !== startI) {
    path.push({ x: cursor % width, z: (cursor / width) | 0 });
    cursor = parent[cursor];
    if (cursor < 0) return null;
  }
  path.reverse();
  return path;
}

function inside(nav: NavGrid, x: number, z: number): boolean {
  return x >= 0 && z >= 0 && x < nav.width && z < nav.height;
}

function swap(heap: number[], priority: number[], a: number, b: number): void {
  const index = heap[a];
  heap[a] = heap[b];
  heap[b] = index;
  const score = priority[a];
  priority[a] = priority[b];
  priority[b] = score;
}

import type { NavGrid } from "../engine/types";
import type { Colony, Prop } from "./map";

/** Cells a colonist cannot enter, derived from the map alone. */
export function walkability(colony: Colony): NavGrid {
  const blocked = new Uint8Array(colony.width * colony.height);
  const mark = (x: number, z: number) => {
    if (x < 0 || z < 0 || x >= colony.width || z >= colony.height) return;
    blocked[z * colony.width + x] = 1;
  };

  for (let z = 0; z < colony.height; z++) {
    for (let x = 0; x < colony.width; x++) {
      const kind = colony.terrain[z * colony.width + x];
      if (kind === "water" || kind === "stream") mark(x, z);
    }
  }
  for (const wall of colony.walls) mark(wall.x, wall.z);
  for (const prop of colony.props) {
    if (prop.blocks === false) continue;
    for (const [x, z] of footprint(prop)) mark(x, z);
  }
  for (const animal of colony.animals) {
    for (let dz = 0; dz < animal.d; dz++) {
      for (let dx = 0; dx < animal.w; dx++) mark(animal.x + dx, animal.z + dz);
    }
  }
  for (const figure of colony.figures) {
    if (figure.wander) continue;
    mark(figure.x, figure.z);
  }

  return { width: colony.width, height: colony.height, blocked };
}

function footprint(prop: Prop): [number, number][] {
  const cells: [number, number][] = [];
  const w = prop.w ?? 1;
  const d = prop.d ?? 1;
  for (let dz = 0; dz < d; dz++) {
    for (let dx = 0; dx < w; dx++) cells.push([prop.x + dx, prop.z + dz]);
  }
  return cells;
}

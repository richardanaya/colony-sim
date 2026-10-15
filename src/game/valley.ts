import type { ColonistSpawn } from "../engine/types";
import { createColony } from "../data/colony";
import type { Colony } from "./map";

export const VALLEY_NAME = "Galt's Gulch";

/**
 * The playable map. Geometry still comes from the Hearthstead layout; the
 * valley is that ground, framed as the hidden place in Colorado.
 */
export function createValley(): Colony {
  return { ...createColony(), name: VALLEY_NAME };
}

/** People who walk. Mannequins in the barracks stay scenery. */
export function valleySpawns(colony: Colony): ColonistSpawn[] {
  const spawns: ColonistSpawn[] = [];
  let id = 1;
  for (const figure of colony.figures) {
    if (!figure.wander || figure.name.length === 0) continue;
    spawns.push({
      id,
      key: figure.id,
      name: figure.name,
      x: figure.x + 0.5,
      z: figure.z + 0.5,
      yaw: 0,
    });
    id += 1;
  }
  return spawns;
}

import { DEFAULT_SEED, generateValley, type GeneratedValley } from "./generate";

export const VALLEY_NAME = "Galt's Gulch";

/** The playable map for one seed. Geometry and founders both come from the generator. */
export function createValley(seed: number = DEFAULT_SEED): GeneratedValley {
  return generateValley(seed);
}

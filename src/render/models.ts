import { ISORIM } from "../assets/paths";
import { finishLoad, expectLoads } from "../ui/progress";
import { decodePack, fetchRetry, mapPool, warnOnce } from "./net";
import { parseObj, type LoadedModel } from "./obj";

interface PackIndex {
  version: number;
  packs: string[];
}

/**
 * Load every requested model from a handful of gzip JSON packs.
 * One failed pack or one bad model is a warning. The rest still return.
 */
export async function loadModels(names: string[]): Promise<Map<string, LoadedModel>> {
  const wanted = new Set(names);
  const found = new Map<string, LoadedModel>();
  const indexUrl = `${ISORIM}/packs/index.json`;
  let packs: string[] = [];
  try {
    const response = await fetchRetry(indexUrl);
    const index = JSON.parse(await response.text()) as PackIndex;
    packs = index.packs;
  } catch (error) {
    warnOnce(`Could not load ${indexUrl} (${reason(error)})`);
    reportMissing(wanted, found);
    return found;
  }
  expectLoads(packs.length, `Loading models… 0 of ${packs.length}`);

  let done = 0;
  await mapPool(packs, 2, async (file) => {
    const url = `${ISORIM}/packs/${file}`;
    try {
      const response = await fetchRetry(url);
      const bytes = new Uint8Array(await response.arrayBuffer());
      const data = JSON.parse(await decodePack(bytes)) as Record<string, string>;
      for (const [name, obj] of Object.entries(data)) {
        if (!wanted.has(name) || found.has(name)) continue;
        try {
          found.set(name, parseObj(obj));
        } catch (error) {
          warnOnce(`Could not parse ${name}.obj (${reason(error)})`);
        }
      }
    } catch (error) {
      warnOnce(`Could not load ${url} (${reason(error)})`);
    } finally {
      done += 1;
      finishLoad(`Loading models… ${done} of ${packs.length}`);
    }
  });

  reportMissing(wanted, found);
  return found;
}

function reportMissing(wanted: Set<string>, found: Map<string, LoadedModel>): void {
  const missing = [...wanted].filter((name) => !found.has(name)).sort();
  if (missing.length === 1) warnOnce(`Missing model ${missing[0]}.obj`);
  else if (missing.length > 1) warnOnce(`Missing ${missing.length} models, including ${missing[0]}.obj`);
}

function reason(error: unknown): string {
  return error instanceof Error && error.message ? error.message : "failed";
}

import * as THREE from "three";
import { ISORIM } from "../assets/paths";
import catalog from "../data/materials.json";
import type { Stuff } from "../game/map";
import { expectLoads, finishLoad } from "../ui/progress";
import { fetchRetry, warnOnce } from "./net";

interface MatDef {
  color: [number, number, number];
  map: string | null;
  tint: boolean;
  emissive: boolean;
}

const MATERIALS = catalog as unknown as Record<string, MatDef>;

/** Build-material colours multiplied into `stuff*` materials. Textures are grayscale. */
export const STUFF_TINT: Record<Stuff, THREE.Color> = {
  Wood: new THREE.Color(0.86, 0.62, 0.38),
  Stone: new THREE.Color(0.76, 0.74, 0.7),
  Metal: new THREE.Color(0.74, 0.78, 0.84),
  Fabric: new THREE.Color(0.9, 0.88, 0.84),
};

const ASSET = ISORIM;

const usedTextures = new Set<string>();

/** Remember a texture the scene actually requests, relative to `assets/isorim/`. */
export function noteTexture(url: string): void {
  const marker = "textures/";
  const index = url.indexOf(marker);
  if (index >= 0) usedTextures.add(url.slice(index));
}

export function usedTexturesList(): string[] {
  return [...usedTextures];
}

export class MaterialLibrary {
  private readonly textures = new Map<string, THREE.Texture>();
  private readonly cache = new Map<string, THREE.MeshLambertMaterial>();
  readonly flicker: THREE.MeshLambertMaterial[] = [];

  constructor() {
    const names = new Set<string>();
    for (const def of Object.values(MATERIALS)) {
      if (def.map && def.map !== "{stuff}") names.add(def.map);
    }
    for (const stuff of ["Wood", "Stone", "Metal", "Fabric"]) names.add(stuff);
    for (const name of names) {
      this.textures.set(name, this.loadSwatch(name));
    }
  }

  get(name: string, stuff: Stuff, tint: THREE.Color | null): THREE.Material {
    const def = MATERIALS[name];
    if (!def) {
      console.warn(`IsoRim material "${name}" is not in the catalog`);
      return this.fallback(name);
    }
    const tintKey = def.tint ? (tint ? tint.getHexString() : stuff) : "";
    const mapName = def.map === "{stuff}" ? stuff : def.map;
    const key = `${name}|${mapName ?? ""}|${tintKey}`;
    const cached = this.cache.get(key);
    if (cached) return cached;

    const color = new THREE.Color(def.color[0], def.color[1], def.color[2]);
    if (def.tint) color.multiply(tint ?? STUFF_TINT[stuff]);

    const material = new THREE.MeshLambertMaterial({
      color,
      map: mapName ? this.textures.get(mapName) ?? null : null,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    if (def.emissive) {
      material.emissive = color.clone();
      material.emissiveIntensity = 0.7;
      this.flicker.push(material);
    }
    this.cache.set(key, material);
    return material;
  }

  private loadSwatch(name: string): THREE.Texture {
    const url = `${ASSET}/textures/swatches/${name}.png`;
    const tex = loadTexture(url, true);
    return tex;
  }

  private fallback(name: string): THREE.Material {
    const key = `missing|${name}`;
    const cached = this.cache.get(key);
    if (cached) return cached;
    const material = new THREE.MeshLambertMaterial({ color: 0xff00aa });
    this.cache.set(key, material);
    return material;
  }
}

const TEXTURE_LIMIT = 6;
const textureCache = new Map<string, THREE.Texture>();
const textureQueue: Array<() => Promise<void>> = [];
let textureActive = 0;
let textureWaiters: Array<() => void> = [];

/**
 * Start a texture fetch. The returned texture is a stand-in until the image
 * arrives. A failed fetch warns once and leaves the stand-in in place.
 * At most {@link TEXTURE_LIMIT} images are in flight.
 */
export function loadTexture(url: string, repeat = false): THREE.Texture {
  noteTexture(url);
  const cached = textureCache.get(url);
  if (cached) return cached;
  const tex = placeholderTexture(repeat);
  textureCache.set(url, tex);
  expectLoads(1, "Loading textures…");
  enqueueTexture(async () => {
    try {
      const response = await fetchRetry(url);
      const bitmap = await createImageBitmap(await response.blob());
      tex.image = bitmap;
      tex.needsUpdate = true;
    } catch (error) {
      const detail = error instanceof Error && error.message ? error.message : "failed";
      warnOnce(`Could not load ${url} (${detail})`);
    } finally {
      finishLoad("Loading textures…");
    }
  });
  return tex;
}

/** Resolves when every texture queued so far has settled, including failures. */
export function texturesSettled(): Promise<void> {
  if (textureActive === 0 && textureQueue.length === 0) return Promise.resolve();
  return new Promise((resolve) => {
    textureWaiters.push(resolve);
  });
}

function enqueueTexture(task: () => Promise<void>): void {
  textureQueue.push(task);
  pumpTextures();
}

function pumpTextures(): void {
  while (textureActive < TEXTURE_LIMIT && textureQueue.length > 0) {
    const task = textureQueue.shift();
    if (!task) break;
    textureActive += 1;
    void task().finally(() => {
      textureActive -= 1;
      if (textureQueue.length > 0) pumpTextures();
      else if (textureActive === 0) {
        const waiters = textureWaiters;
        textureWaiters = [];
        for (const resolve of waiters) resolve();
      }
    });
  }
}

function placeholderTexture(repeat: boolean): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 2;
  canvas.height = 2;
  const context = canvas.getContext("2d");
  if (context) {
    context.fillStyle = "#b7aa96";
    context.fillRect(0, 0, 2, 2);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (repeat) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
  }
  return tex;
}

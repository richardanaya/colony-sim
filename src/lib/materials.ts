import * as THREE from "three";
import catalog from "../data/materials.json";
import type { Stuff } from "../types";
import { ISORIM } from "./paths";

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
  private readonly loader = new THREE.TextureLoader();

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
    noteTexture(url);
    const tex = this.loader.load(url);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 8;
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

export function loadTexture(url: string, repeat = false): THREE.Texture {
  noteTexture(url);
  const tex = new THREE.TextureLoader().load(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (repeat) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
  }
  return tex;
}

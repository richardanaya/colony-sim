import * as THREE from "three";
import { TIER_HEIGHT } from "../game/map";

/** Orthographic zoom at which a colonist inside dug rock opens one mountain layer. */
export const LEVEL_ZOOM = 4;

const FOCI = 8;
const foci = Array.from({ length: FOCI }, () => new THREE.Vector2());

/**
 * World-space cut around colonists standing in dug cells.
 * Rock above one tier fades out near them. Zoom and position drive it, so a
 * free pan does not slide a screen clip across the mountain.
 */
const levelView = {
  on: { value: 0 },
  count: { value: 0 },
  ceiling: { value: TIER_HEIGHT - 0.55 },
  inner: { value: 7 },
  outer: { value: 12 },
  foci: { value: foci },
};

export function attachLevelCut(material: THREE.Material): void {
  material.customProgramCacheKey = () => "gulch-level-cut";
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uLevelOn = levelView.on;
    shader.uniforms.uLevelCount = levelView.count;
    shader.uniforms.uLevelCeiling = levelView.ceiling;
    shader.uniforms.uLevelInner = levelView.inner;
    shader.uniforms.uLevelOuter = levelView.outer;
    shader.uniforms.uLevelFoci = levelView.foci;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vLevelWorld;")
      .replace(
        "#include <project_vertex>",
        `#include <project_vertex>
         vLevelWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
         varying vec3 vLevelWorld;
         uniform float uLevelOn;
         uniform float uLevelCount;
         uniform float uLevelCeiling;
         uniform float uLevelInner;
         uniform float uLevelOuter;
         uniform vec2 uLevelFoci[8];`,
      )
      .replace(
        "#include <clipping_planes_fragment>",
        `#include <clipping_planes_fragment>
         if (uLevelOn > 0.5) {
           for (int i = 0; i < 8; i++) {
             float live = step(float(i) + 0.5, uLevelCount);
             float dist = distance(vLevelWorld.xz, uLevelFoci[i]);
             float t = smoothstep(uLevelInner, uLevelOuter, dist);
             float ceiling = mix(uLevelCeiling, 500.0, t);
             if (live > 0.5 && vLevelWorld.y > ceiling) discard;
           }
         }`,
      );
  };
}

/** Open one layer near colonists in dug cells while the camera is zoomed in. */
export function syncLevelView(
  zoom: number,
  people: readonly { x: number; z: number }[],
  inside: (x: number, z: number) => boolean,
): void {
  let count = 0;
  if (zoom >= LEVEL_ZOOM) {
    for (const person of people) {
      if (!inside(person.x, person.z)) continue;
      const slot = foci[count];
      if (!slot) break;
      slot.set(person.x, person.z);
      count += 1;
      if (count >= FOCI) break;
    }
  }
  levelView.count.value = count;
  levelView.on.value = count > 0 ? 1 : 0;
}

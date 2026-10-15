import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import type { Colony } from "../game/map";
import type { MaterialLibrary } from "./materials";
import { instantiate, type LoadedModel } from "./obj";

export interface MovableProp {
  id: string;
  group: THREE.Group;
  w: number;
  d: number;
}

/**
 * Static props (trees, boulders) become one mesh per material.
 * Movable props stay as groups so a haul job can move them and a click can hit them.
 */
export function placeProps(
  colony: Colony,
  models: Map<string, LoadedModel>,
  materials: MaterialLibrary,
  scene: THREE.Scene,
): MovableProp[] {
  const movables: MovableProp[] = [];
  const buckets = new Map<string, { material: THREE.Material; geometries: THREE.BufferGeometry[] }>();

  for (const prop of colony.props) {
    const loaded = models.get(prop.model);
    if (!loaded) continue;
    const group = instantiate(loaded, {
      materials,
      stuff: prop.stuff,
      tint: prop.tint ? new THREE.Color(prop.tint) : null,
      scale: prop.scale,
      stretch: prop.stretch,
      yaw: prop.yaw,
      skipPrefix: prop.skipPrefix,
    });
    const w = prop.w ?? 1;
    const d = prop.d ?? 1;
    group.position.set(prop.x + w / 2, prop.y ?? 0, prop.z + d / 2);
    group.name = prop.id;

    if (prop.movable) {
      group.userData.itemId = prop.id;
      scene.add(group);
      if (prop.model === "campfire") {
        const fire = new THREE.PointLight(0xff8a3c, 2.4, 7, 2);
        fire.position.set(0, 0.55, 0);
        group.add(fire);
      }
      movables.push({ id: prop.id, group, w, d });
      continue;
    }

    group.updateMatrixWorld(true);
    group.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const geometry = child.geometry.clone();
      geometry.applyMatrix4(child.matrixWorld);
      const material = child.material;
      if (Array.isArray(material)) {
        geometry.dispose();
        return;
      }
      const signature = Object.keys(geometry.attributes).sort().join(",");
      const key = `${material.uuid}|${signature}`;
      let bucket = buckets.get(key);
      if (!bucket) {
        bucket = { material, geometries: [] };
        buckets.set(key, bucket);
      }
      bucket.geometries.push(geometry);
    });
  }

  const staticGroup = new THREE.Group();
  staticGroup.name = "static-props";
  for (const [key, bucket] of buckets) {
    for (const geometry of bake(bucket.geometries)) {
      const mesh = new THREE.Mesh(geometry, bucket.material);
      mesh.name = `static-${key.slice(0, 8)}`;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.frustumCulled = true;
      staticGroup.add(mesh);
    }
  }
  scene.add(staticGroup);
  return movables;
}

function bake(geometries: THREE.BufferGeometry[]): THREE.BufferGeometry[] {
  if (geometries.length <= 1 || !sameAttributes(geometries)) return geometries;
  const merged = mergeGeometries(geometries, false);
  for (const geometry of geometries) geometry.dispose();
  return merged ? [merged] : [];
}

function sameAttributes(geometries: THREE.BufferGeometry[]): boolean {
  const first = geometries[0];
  const names = Object.keys(first.attributes).sort().join(",");
  const indexed = first.index !== null;
  for (const geometry of geometries) {
    if ((geometry.index !== null) !== indexed) return false;
    if (Object.keys(geometry.attributes).sort().join(",") !== names) return false;
    for (const name of Object.keys(first.attributes)) {
      const base = first.attributes[name];
      const other = geometry.attributes[name];
      if (!base || !other || base.itemSize !== other.itemSize) return false;
    }
  }
  return true;
}

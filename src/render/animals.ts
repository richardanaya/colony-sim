import * as THREE from "three";
import type { Animal } from "../game/map";
import type { MaterialLibrary } from "./materials";
import { instantiate, type LoadedModel } from "./obj";

export interface PosedAnimal {
  root: THREE.Group;
  pivots: THREE.Group[];
  swing: number;
}

/**
 * Standing pose from IsoRim: the leg mesh has its hip at the top and its origin
 * at the foot, so it hangs from the hip by `legLength`. A small sway stands in
 * for a gait while the herd stays in the pens.
 */
export function buildAnimal(
  animal: Animal,
  models: Map<string, LoadedModel>,
  materials: MaterialLibrary,
): PosedAnimal {
  const root = new THREE.Group();
  root.name = animal.id;
  root.position.set(animal.x + animal.w / 2, 0, animal.z + animal.d / 2);
  root.rotation.y = THREE.MathUtils.degToRad(animal.yaw);

  const body = models.get(animal.model);
  if (!body) console.warn(`Missing animal ${animal.model}`);
  else root.add(instantiate(body, { materials }));

  const pivots: THREE.Group[] = [];
  const leg = animal.leg ? models.get(animal.leg) : undefined;
  if (animal.leg && !leg) console.warn(`Missing leg ${animal.leg}`);
  if (leg) {
    for (const hip of animal.hips) {
      const pivot = new THREE.Group();
      pivot.position.set(hip[0], hip[1], hip[2]);
      pivot.rotation.order = "XYZ";
      const sign = hip[0] >= 0 ? 1 : -1;
      pivot.rotation.z = THREE.MathUtils.degToRad(sign * animal.legSplay);
      const mesh = instantiate(leg, { materials });
      mesh.position.y = -animal.legLength;
      pivot.add(mesh);
      root.add(pivot);
      pivots.push(pivot);
    }
  }
  return { root, pivots, swing: animal.legSwing };
}

export function swayAnimals(posed: PosedAnimal[], time: number): void {
  for (let index = 0; index < posed.length; index++) {
    const animal = posed[index];
    animal.root.position.y = Math.abs(Math.sin(time * 1.4 + index)) * 0.012;
    animal.pivots.forEach((pivot, legIndex) => {
      const beat = ((legIndex + (legIndex >> 1)) % 2) * Math.PI;
      const degrees = Math.sin(time * 1.7 + beat + index) * Math.min(animal.swing, 22) * 0.35;
      pivot.rotation.x = THREE.MathUtils.degToRad(degrees);
    });
  }
}

import * as THREE from "three";
import type { Figure } from "../game/map";
import type { MaterialLibrary } from "./materials";
import { instantiate, type LoadedModel } from "./obj";

/** Assemble an IsoRim person from body parts. Position comes from the simulation. */
export function buildFigure(
  figure: Figure,
  models: Map<string, LoadedModel>,
  materials: MaterialLibrary,
): THREE.Group {
  const group = new THREE.Group();
  group.name = figure.id;
  figure.parts.forEach((model, index) => {
    const loaded = models.get(model);
    if (!loaded) return;
    group.add(
      instantiate(loaded, {
        materials,
        stuff: "Fabric",
        tint: new THREE.Color(figure.tints[index] ?? "#ffffff"),
      }),
    );
  });
  group.position.set(figure.x + 0.5, 0, figure.z + 0.5);
  group.rotation.y = THREE.MathUtils.degToRad(figure.yaw ?? 0);
  return group;
}

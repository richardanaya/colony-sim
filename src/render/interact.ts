import * as THREE from "three";
import type { Simulation } from "../engine";
import type { MovableProp } from "./batch";

export interface OrderColonist {
  group: THREE.Object3D;
  label: HTMLElement;
  pick: THREE.Object3D;
}

interface Sample {
  x: number;
  z: number;
}

type OrderMode = "move" | "pickup" | "place" | null;

/**
 * Selection and the action bar. Clicks become engine orders.
 * Esc and an empty click clear the selection. They do not cancel a walk already underway.
 */
export function mountOrders(
  root: HTMLElement,
  canvas: HTMLCanvasElement,
  camera: THREE.Camera,
  scene: THREE.Scene,
  sim: Simulation,
  colonists: OrderColonist[],
  movables: readonly MovableProp[],
): { update(sampled: readonly Sample[]): void } {
  const bar = document.createElement("div");
  bar.id = "action-bar";
  bar.innerHTML = `
    <span id="action-name"></span>
    <button type="button" id="act-move">Move</button>
    <button type="button" id="act-pickup">Pick up</button>
    <button type="button" id="act-place" disabled>Place</button>
  `;
  root.append(bar);
  const name = bar.querySelector("#action-name");
  const moveButton = bar.querySelector("#act-move");
  const pickupButton = bar.querySelector("#act-pickup");
  const placeButton = bar.querySelector("#act-place");
  if (!(name instanceof HTMLElement)) throw new Error("Missing action name");
  if (!(moveButton instanceof HTMLButtonElement)) throw new Error("Missing Move");
  if (!(pickupButton instanceof HTMLButtonElement)) throw new Error("Missing Pick up");
  if (!(placeButton instanceof HTMLButtonElement)) throw new Error("Missing Place");

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.42, 0.58, 28),
    new THREE.MeshBasicMaterial({ color: 0xe4c98a, side: THREE.DoubleSide, depthTest: false }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.06;
  ring.renderOrder = 2;
  ring.visible = false;
  ring.frustumCulled = false;
  scene.add(ring);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hitPoint = new THREE.Vector3();
  const picks = colonists.map((colonist) => colonist.pick);
  const movableGroups = movables.map((item) => item.group);

  let selected: number | null = null;
  let mode: OrderMode = null;
  let down: { x: number; y: number } | null = null;

  const roster = sim.roster();

  const paintMode = () => {
    moveButton.classList.toggle("is-armed", mode === "move");
    pickupButton.classList.toggle("is-armed", mode === "pickup");
    placeButton.classList.toggle("is-armed", mode === "place");
  };

  const select = (index: number) => {
    selected = index;
    mode = null;
    bar.classList.add("is-open");
    name.textContent = roster.names[index] ?? "";
    colonists.forEach((colonist, i) => colonist.label.classList.toggle("is-selected", i === index));
    paintMode();
  };

  const deselect = () => {
    selected = null;
    mode = null;
    bar.classList.remove("is-open");
    ring.visible = false;
    for (const colonist of colonists) colonist.label.classList.remove("is-selected");
    paintMode();
  };

  const arm = (next: OrderMode) => {
    if (selected === null) return;
    mode = mode === next ? null : next;
    paintMode();
  };

  moveButton.addEventListener("click", () => arm("move"));
  pickupButton.addEventListener("click", () => arm("pickup"));
  placeButton.addEventListener("click", () => {
    if (placeButton.disabled) return;
    arm("place");
  });

  colonists.forEach((colonist, index) => {
    colonist.label.addEventListener("click", (event) => {
      event.stopPropagation();
      select(index);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") deselect();
  });

  const aim = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
  };

  const groundCell = (): { x: number; z: number } | null => {
    if (!raycaster.ray.intersectPlane(ground, hitPoint)) return null;
    return { x: Math.floor(hitPoint.x), z: Math.floor(hitPoint.z) };
  };

  const itemIdOf = (object: THREE.Object3D | null): string | null => {
    let current = object;
    while (current) {
      const id = current.userData.itemId;
      if (typeof id === "string") return id;
      current = current.parent;
    }
    return null;
  };

  const itemUnderCursor = (): string | null => {
    const hit = raycaster.intersectObjects(movableGroups, true)[0];
    const fromRay = itemIdOf(hit?.object ?? null);
    if (fromRay) return fromRay;
    const cell = groundCell();
    if (!cell) return null;
    const found = sim.items().find((item) => (
      item.carrierId === 0
      && cell.x >= item.x
      && cell.x < item.x + item.w
      && cell.z >= item.z
      && cell.z < item.z + item.d
    ));
    return found?.id ?? null;
  };

  const colonistUnderCursor = (): number => {
    const hit = raycaster.intersectObjects(picks, false)[0];
    const index = hit?.object.userData.colonistIndex;
    return typeof index === "number" ? index : -1;
  };

  const onClick = (event: PointerEvent) => {
    aim(event);
    if (selected !== null && (mode === "move" || mode === "place")) {
      const cell = groundCell();
      const id = roster.ids[selected];
      if (!cell || id === undefined) return;
      const ok = mode === "move" ? sim.orderMove(id, cell.x, cell.z) : sim.orderPlace(id, cell.x, cell.z);
      if (ok) {
        mode = null;
        paintMode();
      }
      return;
    }
    if (selected !== null && mode === "pickup") {
      const itemId = itemUnderCursor();
      const id = roster.ids[selected];
      if (itemId && id !== undefined && sim.orderPickup(id, itemId)) {
        mode = null;
        paintMode();
      }
      return;
    }
    const index = colonistUnderCursor();
    if (index >= 0) select(index);
    else deselect();
  };

  canvas.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    down = { x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener("pointerup", (event) => {
    if (event.button !== 0 || !down) return;
    const moved = Math.hypot(event.clientX - down.x, event.clientY - down.y);
    down = null;
    if (moved < 5) onClick(event);
  });

  return {
    update(sampled: readonly Sample[]) {
      const carriedId = selected === null ? 0 : roster.ids[selected] ?? 0;
      const carrying = carriedId !== 0 && sim.items().some((item) => item.carrierId === carriedId);
      placeButton.disabled = !carrying;
      if (!carrying && mode === "place") {
        mode = null;
        paintMode();
      }
      if (selected === null) {
        ring.visible = false;
      } else {
        const sample = sampled[selected];
        ring.visible = true;
        ring.position.x = sample?.x ?? 0;
        ring.position.z = sample?.z ?? 0;
      }
      const columns = sim.items();
      for (const prop of movables) {
        const item = columns.find((entry) => entry.id === prop.id);
        if (!item) continue;
        if (item.carrierId !== 0) {
          const index = roster.ids.indexOf(item.carrierId);
          const sample = index >= 0 ? sampled[index] : undefined;
          if (!sample) continue;
          prop.group.position.set(sample.x, 1.25, sample.z);
        } else {
          prop.group.position.set(item.x + prop.w / 2, 0, item.z + prop.d / 2);
        }
      }
    },
  };
}

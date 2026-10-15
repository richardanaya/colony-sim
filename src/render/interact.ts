import * as THREE from "three";
import type { Simulation } from "../engine";
import type { MovableProp } from "./batch";
import { geometryFrom, pushQuad } from "./geometry";

export interface OrderColonist {
  group: THREE.Object3D;
  label: HTMLElement;
  pick: THREE.Object3D;
}

interface Sample {
  x: number;
  z: number;
}

type OrderMode = "move" | "pickup" | "place" | "dig" | null;

interface Cell {
  x: number;
  z: number;
}

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
  markY: (x: number, z: number) => number,
): { update(sampled: readonly Sample[]): void } {
  const bar = document.createElement("div");
  bar.id = "action-bar";
  bar.innerHTML = `
    <span id="action-name"></span>
    <button type="button" id="act-move">Move</button>
    <button type="button" id="act-dig">Dig</button>
    <button type="button" id="act-pickup">Pick up</button>
    <button type="button" id="act-place" disabled>Place</button>
  `;
  root.append(bar);
  const name = bar.querySelector("#action-name");
  const moveButton = bar.querySelector("#act-move");
  const digButton = bar.querySelector("#act-dig");
  const pickupButton = bar.querySelector("#act-pickup");
  const placeButton = bar.querySelector("#act-place");
  if (!(name instanceof HTMLElement)) throw new Error("Missing action name");
  if (!(moveButton instanceof HTMLButtonElement)) throw new Error("Missing Move");
  if (!(digButton instanceof HTMLButtonElement)) throw new Error("Missing Dig");
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
  ring.userData.skipPick = true;
  scene.add(ring);

  const pendingMarks = markMesh(0xe4c98a, 0.45);
  const previewMarks = markMesh(0xffd27a, 0.32);
  scene.add(pendingMarks, previewMarks);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hitPoint = new THREE.Vector3();
  const picks = colonists.map((colonist) => colonist.pick);
  const movableGroups = movables.map((item) => item.group);

  let selected: number | null = null;
  let mode: OrderMode = null;
  let down: { x: number; y: number } | null = null;
  let digAnchor: Cell | null = null;
  let digDown: { x: number; y: number } | null = null;
  let preview: Cell[] = [];
  let markKey = "";

  const roster = sim.roster();
  for (const colonist of colonists) colonist.group.userData.skipPick = true;

  const paintMode = () => {
    moveButton.classList.toggle("is-armed", mode === "move");
    digButton.classList.toggle("is-armed", mode === "dig");
    pickupButton.classList.toggle("is-armed", mode === "pickup");
    placeButton.classList.toggle("is-armed", mode === "place");
    canvas.style.cursor = mode === "dig" ? "crosshair" : "";
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
    digAnchor = null;
    digDown = null;
    preview = [];
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
  digButton.addEventListener("click", () => arm("dig"));
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

  const skipped = (object: THREE.Object3D | null): boolean => {
    let current = object;
    while (current) {
      if (current.userData.skipPick || current.userData.colonistIndex !== undefined) return true;
      current = current.parent;
    }
    return false;
  };

  const cellFromHit = (hit: THREE.Intersection): Cell | null => {
    const face = hit.face;
    if (!face) return null;
    const normal = face.normal.clone().transformDirection(hit.object.matrixWorld);
    if (normal.lengthSq() < 1e-8) return null;
    normal.normalize();
    const point = hit.point.clone().addScaledVector(normal, -0.08);
    return { x: Math.floor(point.x), z: Math.floor(point.z) };
  };

  const pickCell = (): Cell | null => {
    const hits = raycaster.intersectObjects(scene.children, true);
    for (const hit of hits) {
      if (skipped(hit.object)) continue;
      const cell = cellFromHit(hit);
      if (cell && sim.diggable(cell.x, cell.z)) return cell;
    }
    return groundCell();
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

  const issueDig = (cells: Cell[]) => {
    if (selected === null || cells.length === 0) return;
    const id = roster.ids[selected];
    if (id === undefined) return;
    if (sim.orderDig(id, cells)) {
      mode = null;
      digAnchor = null;
      preview = [];
      paintMode();
    }
  };

  canvas.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || mode !== "dig" || selected === null) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    aim(event);
    digDown = { x: event.clientX, y: event.clientY };
    digAnchor = pickCell();
    preview = digAnchor && sim.diggable(digAnchor.x, digAnchor.z) ? [digAnchor] : [];
    if (canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId);
  }, true);
  canvas.addEventListener("pointermove", (event) => {
    if (mode !== "dig" || !digAnchor) return;
    event.stopImmediatePropagation();
    aim(event);
    const end = pickCell() ?? digAnchor;
    preview = capCells(rectangle(digAnchor, end).filter((cell) => sim.diggable(cell.x, cell.z)), digAnchor, 96);
  }, true);
  canvas.addEventListener("pointerup", (event) => {
    if (event.button !== 0 || mode !== "dig" || !digAnchor) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    aim(event);
    const end = pickCell() ?? digAnchor;
    const moved = digDown ? Math.hypot(event.clientX - digDown.x, event.clientY - digDown.y) : 0;
    const anchor = digAnchor;
    const cells = moved < 5
      ? (sim.diggable(anchor.x, anchor.z) ? [anchor] : [])
      : capCells(rectangle(anchor, end).filter((cell) => sim.diggable(cell.x, cell.z)), anchor, 96);
    digAnchor = null;
    digDown = null;
    preview = [];
    if (canvas.hasPointerCapture?.(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    issueDig(cells);
  }, true);

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
      const state = sim.digState();
      const active = state.active;
      const nextKey = `${preview.map((cell) => `${cell.x},${cell.z}`).join(";")}|${state.pending.map((cell) => `${cell.x},${cell.z}`).join(";")}|${active ? `${active.x},${active.z}` : ""}`;
      if (nextKey !== markKey) {
        markKey = nextKey;
        const pending = state.pending.filter((cell) => !active || cell.x !== active.x || cell.z !== active.z);
        const shown = active ? [...preview, { x: active.x, z: active.z }] : preview;
        fillMarks(pendingMarks, pending, markY);
        fillMarks(previewMarks, shown, markY);
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

function markMesh(color: number, opacity: number): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );
  mesh.frustumCulled = false;
  mesh.renderOrder = 3;
  mesh.userData.skipPick = true;
  return mesh;
}

function fillMarks(mesh: THREE.Mesh, cells: readonly Cell[], markY: (x: number, z: number) => number): void {
  mesh.geometry.dispose();
  if (cells.length === 0) {
    mesh.geometry = new THREE.BufferGeometry();
    return;
  }
  const pos: number[] = [];
  const nrm: number[] = [];
  const uv: number[] = [];
  for (const cell of cells) {
    const y = markY(cell.x, cell.z);
    pushQuad(pos, nrm, uv, [
      [cell.x, y, cell.z],
      [cell.x, y, cell.z + 1],
      [cell.x + 1, y, cell.z + 1],
      [cell.x + 1, y, cell.z],
    ], [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0],
    ]);
  }
  mesh.geometry = geometryFrom(THREE, pos, nrm, uv);
}

function rectangle(a: Cell, b: Cell): Cell[] {
  const x0 = Math.min(a.x, b.x);
  const x1 = Math.max(a.x, b.x);
  const z0 = Math.min(a.z, b.z);
  const z1 = Math.max(a.z, b.z);
  const cells: Cell[] = [];
  for (let z = z0; z <= z1; z++) {
    for (let x = x0; x <= x1; x++) cells.push({ x, z });
  }
  return cells;
}

function capCells(cells: Cell[], anchor: Cell, limit: number): Cell[] {
  const sorted = [...cells].sort((a, b) => {
    const da = Math.abs(a.x - anchor.x) + Math.abs(a.z - anchor.z);
    const db = Math.abs(b.x - anchor.x) + Math.abs(b.z - anchor.z);
    if (da !== db) return da - db;
    if (a.x !== b.x) return a.x - b.x;
    return a.z - b.z;
  });
  return sorted.slice(0, limit);
}

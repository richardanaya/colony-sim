import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createColony } from "./data/colony";
import { buildColonist, stepWalkers, type Walker } from "./lib/colonists";
import { MaterialLibrary } from "./lib/materials";
import { instantiate, parseObj, type LoadedModel } from "./lib/obj";
import { buildStructures, cameraFaces, type CutawayPiece } from "./lib/structures";
import { buildTerrain } from "./lib/terrain";
import type { Colony, Prop } from "./types";

const MODEL_URL = "/assets/isorim/models";

export function mount(root: HTMLElement): void {
  const colony = createColony();
  const hud = document.createElement("div");
  hud.id = "hud";
  hud.innerHTML = `
    <h1>${colony.name}</h1>
    <p class="hint">Drag to pan · scroll to zoom · right-drag to orbit</p>
    <p id="status">Loading IsoRim models…</p>
  `;
  const labels = document.createElement("div");
  labels.id = "labels";
  root.append(hud, labels);
  const status = hud.querySelector("#status");
  if (!(status instanceof HTMLElement)) return;

  void boot(root, colony, labels, status).catch((error: unknown) => {
    status.textContent = error instanceof Error ? error.message : "The colony failed to load.";
    console.error(error);
  });
}

async function boot(
  root: HTMLElement,
  colony: Colony,
  labels: HTMLElement,
  status: HTMLElement,
): Promise<void> {
  const models = await loadModels(modelNames(colony));
  const materials = new MaterialLibrary();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.addEventListener("contextmenu", (event) => event.preventDefault());
  root.append(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xc5d0b4);
  scene.fog = new THREE.Fog(0xc5d0b4, 42, 96);

  const cx = colony.width / 2;
  const cz = colony.height / 2;
  const frustum = 23;
  const camera = new THREE.OrthographicCamera(-frustum, frustum, frustum / 2, -frustum / 2, 0.1, 250);
  camera.position.set(cx + 24, 26, cz - 28);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(cx, 0.3, cz);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.screenSpacePanning = true;
  controls.minPolarAngle = 0.28;
  controls.maxPolarAngle = Math.PI / 2.08;
  controls.minZoom = 0.45;
  controls.maxZoom = 4.2;
  controls.zoomSpeed = 0.85;
  controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE,
  };
  camera.lookAt(controls.target);

  scene.add(new THREE.HemisphereLight(0xd7e4c8, 0x6a5436, 0.62));
  scene.add(new THREE.AmbientLight(0xfff4e4, 0.28));
  const sun = new THREE.DirectionalLight(0xfff0d2, 1.15);
  sun.position.set(cx + 20, 30, cz - 14);
  sun.target.position.set(cx, 0, cz);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const shadow = 26;
  sun.shadow.camera.left = -shadow;
  sun.shadow.camera.right = shadow;
  sun.shadow.camera.top = shadow;
  sun.shadow.camera.bottom = -shadow;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 90;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.025;
  scene.add(sun);
  scene.add(sun.target);
  const fill = new THREE.DirectionalLight(0xd5e2f4, 0.32);
  fill.position.set(cx - 12, 14, cz + 16);
  scene.add(fill);

  const terrain = buildTerrain(colony);
  scene.add(terrain.group);
  const structures = buildStructures(colony);
  scene.add(structures.group);

  const cutaway: CutawayPiece[] = [...structures.cutaway];
  for (const door of colony.doors) {
    const group = new THREE.Group();
    group.name = door.id;
    const stuff = door.stuff ?? "Wood";
    const leaf = models.get("door_leaf");
    const lintel = models.get("door_lintel");
    if (leaf && lintel) {
      group.add(instantiate(leaf, { materials, stuff }));
      group.add(instantiate(leaf, { materials, stuff, yaw: 180 }));
      group.add(instantiate(lintel, { materials, stuff }));
    }
    group.position.set(door.x + 0.5, 0, door.z + 0.5);
    group.rotation.y = THREE.MathUtils.degToRad(door.yaw ?? 0);
    scene.add(group);
    cutaway.push({ object: group, side: door.facade });
  }

  for (const prop of colony.props) {
    const loaded = models.get(prop.model);
    if (!loaded) {
      console.warn(`Missing model ${prop.model}`);
      continue;
    }
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
    group.position.set(prop.x + w / 2, 0, prop.z + d / 2);
    group.name = prop.id;
    scene.add(group);
    if (prop.model === "campfire") {
      const fire = new THREE.PointLight(0xff8a3c, 2.4, 7, 2);
      fire.position.set(prop.x + w / 2, 0.55, prop.z + d / 2);
      scene.add(fire);
    }
  }

  const blocked = blockedCells(colony, terrain.water, structures.walls);
  const walkers: Walker[] = colony.colonists.map((colonist, index) => {
    const group = buildColonist(colonist, models, materials);
    scene.add(group);
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = colonist.name;
    labels.append(label);
    return {
      name: colonist.name,
      group,
      label,
      x: colonist.x + 0.5,
      z: colonist.z + 0.5,
      yaw: 0,
      path: [],
      wait: index * 0.35,
      phase: index,
    };
  });

  const applyCutaway = () => {
    const camSouth = camera.position.z < controls.target.z;
    const camEast = camera.position.x > controls.target.x;
    for (const piece of cutaway) {
      piece.object.visible = !cameraFaces(piece.side, camSouth, camEast);
    }
  };

  const resize = () => {
    const aspect = window.innerWidth / Math.max(1, window.innerHeight);
    camera.left = (-frustum * aspect) / 2;
    camera.right = (frustum * aspect) / 2;
    camera.top = frustum / 2;
    camera.bottom = -frustum / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  resize();
  window.addEventListener("resize", resize);

  const clock = new THREE.Clock();
  const labelAnchor = new THREE.Vector3();
  status.textContent = "Near walls fold away as you orbit.";

  const frame = () => {
    const dt = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    controls.update();
    applyCutaway();
    stepWalkers(walkers, blocked, colony.width, colony.height, dt, time);
    terrain.ripples.offset.set(time * 0.015, time * 0.008);
    for (const material of materials.flicker) {
      material.emissiveIntensity = 0.45 + Math.sin(time * 8 + material.id) * 0.28;
    }
    placeLabels(walkers, camera, labelAnchor, renderer.domElement);
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  };
  frame();
}

function placeLabels(
  walkers: Walker[],
  camera: THREE.Camera,
  anchor: THREE.Vector3,
  canvas: HTMLCanvasElement,
): void {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  for (const walker of walkers) {
    anchor.set(walker.x, 1.35, walker.z);
    anchor.project(camera);
    if (anchor.z > 1) {
      walker.label.style.display = "none";
      continue;
    }
    walker.label.style.display = "block";
    walker.label.style.left = `${(anchor.x * 0.5 + 0.5) * width}px`;
    walker.label.style.top = `${(-anchor.y * 0.5 + 0.5) * height}px`;
  }
}

async function loadModels(names: string[]): Promise<Map<string, LoadedModel>> {
  const pairs = await Promise.all(
    names.map(async (name) => {
      const response = await fetch(`${MODEL_URL}/${name}.obj`);
      if (!response.ok) throw new Error(`Could not load ${name}.obj (${response.status})`);
      return [name, parseObj(await response.text())] as const;
    }),
  );
  return new Map(pairs);
}

function modelNames(colony: Colony): string[] {
  const names = new Set<string>(["door_leaf", "door_lintel"]);
  for (const prop of colony.props) names.add(prop.model);
  for (const colonist of colony.colonists) {
    names.add(`person_${colonist.body}_lower`);
    names.add(`person_${colonist.body}_upper`);
    names.add("person_head");
    names.add("person_face");
    names.add(`person_hair_${colonist.hair}`);
    if (colonist.beard) names.add("person_beard_goatee");
    if (colonist.hat) names.add("person_hat_cap");
  }
  return [...names];
}

function blockedCells(colony: Colony, water: Set<string>, walls: Set<string>): Set<string> {
  const blocked = new Set<string>([...water, ...walls]);
  for (const prop of colony.props) {
    if (prop.blocks === false) continue;
    for (const cell of footprint(prop)) blocked.add(cell);
  }
  return blocked;
}

function footprint(prop: Prop): string[] {
  const cells: string[] = [];
  const w = prop.w ?? 1;
  const d = prop.d ?? 1;
  for (let dz = 0; dz < d; dz++) {
    for (let dx = 0; dx < w; dx++) cells.push(`${prop.x + dx},${prop.z + dz}`);
  }
  return cells;
}

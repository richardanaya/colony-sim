import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createColony } from "./data/colony";
import { buildAnimal, swayAnimals, type PosedAnimal } from "./lib/animals";
import { buildFigure, stepWalkers, type Walker } from "./lib/colonists";
import { MaterialLibrary, usedTexturesList } from "./lib/materials";
import { instantiate, parseObj, type LoadedModel } from "./lib/obj";
import { buildStructures, cameraFaces, type CutawayPiece } from "./lib/structures";
import { buildTerrain } from "./lib/terrain";
import type { Colony, Prop } from "./types";
import { ISORIM } from "./lib/paths";

const MODEL_URL = `${ISORIM}/models`;

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
  const span = Math.max(colony.width, colony.height);
  scene.fog = new THREE.Fog(0xc5d0b4, span * 2.4, span * 4.2);

  const cx = colony.width / 2;
  const cz = colony.height / 2;
  const frustum = span * 0.86;
  const camera = new THREE.OrthographicCamera(-frustum, frustum, frustum / 2, -frustum / 2, 0.1, span * 6);
  camera.position.set(cx + span * 0.42, span * 0.5, cz - span * 0.5);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(cx, 0.3, cz);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.screenSpacePanning = true;
  controls.minPolarAngle = 0.28;
  controls.maxPolarAngle = Math.PI / 2.08;
  controls.minZoom = 0.35;
  controls.maxZoom = 8;
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
  sun.position.set(cx + span * 0.28, span * 0.42, cz - span * 0.18);
  sun.target.position.set(cx, 0, cz);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const shadow = span * 0.62;
  sun.shadow.camera.left = -shadow;
  sun.shadow.camera.right = shadow;
  sun.shadow.camera.top = shadow;
  sun.shadow.camera.bottom = -shadow;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = span * 3;
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
    group.position.set(prop.x + w / 2, prop.y ?? 0, prop.z + d / 2);
    group.name = prop.id;
    scene.add(group);
    if (prop.model === "campfire") {
      const fire = new THREE.PointLight(0xff8a3c, 2.4, 7, 2);
      fire.position.set(prop.x + w / 2, 0.55, prop.z + d / 2);
      scene.add(fire);
    }
  }

  const walkers: Walker[] = [];
  colony.figures.forEach((figure, index) => {
    const group = buildFigure(figure, models, materials);
    scene.add(group);
    if (!figure.wander || figure.name.length === 0) return;
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = figure.name;
    labels.append(label);
    walkers.push({
      name: figure.name,
      group,
      label,
      x: figure.x + 0.5,
      z: figure.z + 0.5,
      yaw: 0,
      path: [],
      wait: index * 0.35,
      phase: index,
    });
  });

  const posed: PosedAnimal[] = colony.animals.map((animal) => {
    const built = buildAnimal(animal, models, materials);
    scene.add(built.root);
    return built;
  });

  const blocked = blockedCells(colony, terrain.water, structures.walls);

  window.__colonyUsed = {
    models: [...models.keys()].sort(),
    textures: usedTexturesList().sort(),
  };

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
    swayAnimals(posed, time);
    terrain.ripples.offset.set(time * 0.015, time * 0.008);
    terrain.flow.offset.set(time * -0.05, time * 0.01);
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
  for (const figure of colony.figures) for (const part of figure.parts) names.add(part);
  for (const animal of colony.animals) {
    names.add(animal.model);
    if (animal.leg) names.add(animal.leg);
  }
  return [...names];
}

function blockedCells(colony: Colony, water: Set<string>, walls: Set<string>): Set<string> {
  const blocked = new Set<string>([...water, ...walls]);
  for (const prop of colony.props) {
    if (prop.blocks === false) continue;
    for (const cell of footprint(prop)) blocked.add(cell);
  }
  for (const animal of colony.animals) {
    for (let dz = 0; dz < animal.d; dz++) {
      for (let dx = 0; dx < animal.w; dx++) blocked.add(`${animal.x + dx},${animal.z + dz}`);
    }
  }
  for (const figure of colony.figures) {
    if (figure.wander) continue;
    blocked.add(`${figure.x},${figure.z}`);
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

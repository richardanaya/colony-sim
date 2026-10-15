import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createSimulation, type SaveGame, type Simulation } from "../engine";
import type { ColonistSpawn } from "../engine/types";
import type { Colony } from "../game/map";
import { formatSeed } from "../game/generate";
import { createValley } from "../game/valley";
import { walkability } from "../game/walkability";
import { buildAnimal, swayAnimals, type PosedAnimal } from "./animals";
import { buildFigure } from "./figures";
import { MaterialLibrary, texturesSettled, usedTexturesList } from "./materials";
import { loadModels } from "./models";
import { instantiate } from "./obj";
import { buildStructures, cameraFaces, type CutawayPiece } from "./structures";
import { sampleColonist, type SampledColonist } from "./sync";
import { buildTerrain } from "./terrain";
import type { LoadGate } from "../ui/loading";

interface ColonistView {
  group: THREE.Group;
  label: HTMLDivElement;
}

export function mount(root: HTMLElement, gate: LoadGate, seed: number): void {
  const generated = createValley(seed);
  const colony = generated.colony;
  const hud = document.createElement("div");
  hud.id = "hud";
  hud.className = "is-concealed";
  hud.innerHTML = `
    <h1>${colony.name}</h1>
    <p class="place">A hidden valley in Colorado</p>
    <p id="seed">Seed ${formatSeed(seed)}</p>
    <p class="hint">Drag to pan · scroll to zoom · right-drag to orbit</p>
    <p id="status">Loading IsoRim models…</p>
    <button type="button" id="new-valley">New valley</button>
  `;
  hud.querySelector("#new-valley")?.addEventListener("click", () => {
    const next = (Math.floor(Math.random() * 0xffffffff) >>> 0) || 1;
    const params = new URLSearchParams(window.location.search);
    params.set("seed", formatSeed(next));
    window.location.search = params.toString();
  });
  const labels = document.createElement("div");
  labels.id = "labels";
  labels.className = "is-concealed";
  root.append(hud, labels);
  const status = hud.querySelector("#status");
  if (!(status instanceof HTMLElement)) return;

  void boot(root, colony, generated.spawns, labels, status, gate, seed).catch((error: unknown) => {
    const message = error instanceof Error ? error.message : "The valley failed to load.";
    status.textContent = message;
    gate.fail(message);
    console.error(error);
  });
}

async function boot(
  root: HTMLElement,
  colony: Colony,
  spawns: ColonistSpawn[],
  labels: HTMLElement,
  status: HTMLElement,
  gate: LoadGate,
  seed: number,
): Promise<void> {
  const models = await loadModels(modelNames(colony));
  gate.markPacks();
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
    scene.add(group);
    if (prop.model === "campfire") {
      const fire = new THREE.PointLight(0xff8a3c, 2.4, 7, 2);
      fire.position.set(prop.x + w / 2, 0.55, prop.z + d / 2);
      scene.add(fire);
    }
  }

  const figures = new Map(colony.figures.map((figure) => [figure.id, figure]));
  for (const figure of colony.figures) {
    if (figure.wander && figure.name.length > 0) continue;
    scene.add(buildFigure(figure, models, materials));
  }

  const sim = createSimulation({ spawns, nav: walkability(colony), seed });
  const roster = sim.roster();
  const views: ColonistView[] = roster.keys.map((key, index) => {
    const figure = figures.get(key);
    if (!figure) throw new Error(`Missing figure ${key}`);
    const group = buildFigure(figure, models, materials);
    scene.add(group);
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = roster.names[index] ?? figure.name;
    labels.append(label);
    return { group, label };
  });
  publishSim(sim);

  const posed: PosedAnimal[] = colony.animals.map((animal) => {
    const built = buildAnimal(animal, models, materials);
    scene.add(built.root);
    return built;
  });

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

  await texturesSettled();
  gate.markWorld();

  const clock = new THREE.Clock();
  const labelAnchor = new THREE.Vector3();
  const sampled: SampledColonist[] = views.map(() => ({ x: 0, z: 0, yaw: 0, bob: 0 }));
  status.textContent = "Near walls fold away as you orbit.";

  const frame = () => {
    const dt = clock.getDelta();
    const visualTime = clock.elapsedTime;
    controls.update();
    applyCutaway();
    sim.advance(dt);
    sim.pollEvents();
    const columns = sim.colonists();
    const alpha = sim.alpha();
    for (let i = 0; i < views.length; i++) {
      const sample = sampleColonist(columns, i, alpha, visualTime);
      sampled[i] = sample;
      views[i].group.position.set(sample.x, sample.bob, sample.z);
      views[i].group.rotation.y = sample.yaw;
    }
    swayAnimals(posed, visualTime);
    terrain.ripples.offset.set(visualTime * 0.015, visualTime * 0.008);
    terrain.flow.offset.set(visualTime * -0.05, visualTime * 0.01);
    for (const material of materials.flicker) {
      material.emissiveIntensity = 0.45 + Math.sin(visualTime * 8 + material.id) * 0.28;
    }
    placeLabels(views, sampled, camera, labelAnchor, renderer.domElement);
    renderer.render(scene, camera);
    gate.markFrame();
    requestAnimationFrame(frame);
  };
  frame();
}

function publishSim(sim: Simulation): void {
  window.__gulch = {
    get tick() {
      return sim.tick;
    },
    save: () => sim.save(),
    load: (save: SaveGame) => sim.load(save),
  };
}

function placeLabels(
  views: ColonistView[],
  sampled: SampledColonist[],
  camera: THREE.Camera,
  anchor: THREE.Vector3,
  canvas: HTMLCanvasElement,
): void {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  for (let i = 0; i < views.length; i++) {
    const sample = sampled[i];
    anchor.set(sample.x, 1.35, sample.z);
    anchor.project(camera);
    const label = views[i].label;
    if (anchor.z > 1) {
      label.style.display = "none";
      continue;
    }
    label.style.display = "block";
    label.style.left = `${(anchor.x * 0.5 + 0.5) * width}px`;
    label.style.top = `${(-anchor.y * 0.5 + 0.5) * height}px`;
  }
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

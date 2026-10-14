import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x6b8e6b); // muted colony green
scene.fog = new THREE.Fog(0x6b8e6b, 40, 120);

// Isometric orthographic camera (classic RimWorld-style angle)
const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 24;
const camera = new THREE.OrthographicCamera(
  -frustumSize * aspect / 2,
  frustumSize * aspect / 2,
  frustumSize / 2,
  -frustumSize / 2,
  0.1,
  500
);
camera.position.set(18, 18, 18);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Controls (orbit + zoom, constrained for isometric feel)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI / 2.2;
controls.minPolarAngle = Math.PI / 6;
controls.enablePan = true;

// Lighting
const ambient = new THREE.AmbientLight(0xffffff, 0.45);
scene.add(ambient);

const dirLight = new THREE.DirectionalLight(0xfff5e0, 0.85);
dirLight.position.set(12, 20, 8);
dirLight.castShadow = true;
dirLight.shadow.mapSize.set(2048, 2048);
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 60;
dirLight.shadow.camera.left = -30;
dirLight.shadow.camera.right = 30;
dirLight.shadow.camera.top = 30;
dirLight.shadow.camera.bottom = -30;
scene.add(dirLight);

// Ground plane
const groundGeo = new THREE.PlaneGeometry(40, 40);
const groundMat = new THREE.MeshStandardMaterial({ 
  color: 0x5a7a4a, 
  roughness: 0.9,
  metalness: 0.0 
});
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// Grid
const grid = new THREE.GridHelper(40, 40, 0x3a5a3a, 0x2a4a2a);
grid.position.y = 0.01;
scene.add(grid);

// Simple colony demo placements (models load if present in public/models/)
const placements: { model: string; x: number; z: number; rot?: number }[] = [
  { model: 'bed.obj', x: -3, z: -2 },
  { model: 'bed_double.obj', x: 2, z: -2 },
  { model: 'table_2x2.obj', x: 0, z: 1 },
  { model: 'solar_generator.obj', x: 6, z: 4 },
  { model: 'tree_birch_1.obj', x: -6, z: 3 },
  { model: 'tree_birch_1.obj', x: -5, z: 5 },
  { model: 'bench_research.obj', x: 4, z: -4 },
];

const loader = new OBJLoader();
const loadedGroup = new THREE.Group();
scene.add(loadedGroup);

function loadModel(path: string, x: number, z: number, rot = 0) {
  loader.load(
    `/models/${path}`,
    (obj) => {
      obj.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          // Simple material fallback if no MTL textures
          if (!mesh.material || Array.isArray(mesh.material)) {
            mesh.material = new THREE.MeshStandardMaterial({ 
              color: 0x8b7355, 
              roughness: 0.7 
            });
          }
        }
      });
      obj.position.set(x, 0, z);
      obj.rotation.y = rot;
      loadedGroup.add(obj);
    },
    undefined,
    (err) => {
      console.warn(`Could not load ${path}:`, err);
      // Fallback placeholder
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0.5, 1),
        new THREE.MeshStandardMaterial({ color: 0x666666, transparent: true, opacity: 0.6 })
      );
      box.position.set(x, 0.25, z);
      box.castShadow = true;
      loadedGroup.add(box);
    }
  );
}

placements.forEach(p => loadModel(p.model, p.x, p.z, p.rot));

// Status overlay
const status = document.createElement('div');
status.style.cssText = `
  position: absolute; top: 12px; left: 12px; 
  color: #e0e0e0; font: 13px/1.4 system-ui, sans-serif;
  background: rgba(0,0,0,0.55); padding: 10px 14px; border-radius: 6px;
  pointer-events: none; max-width: 320px;
`;
status.innerHTML = `
  <strong>Colony Sim</strong><br>
  Isometric view · OrbitControls<br>
  Place models in <code>public/models/</code><br>
  <small>Assets from IsoRim (free to use)</small>
`;
document.body.appendChild(status);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  const aspect = window.innerWidth / window.innerHeight;
  camera.left = -frustumSize * aspect / 2;
  camera.right = frustumSize * aspect / 2;
  camera.top = frustumSize / 2;
  camera.bottom = -frustumSize / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

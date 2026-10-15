import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { findPath } from "../src/engine/path.ts";
import { createSimulation } from "../src/engine/simulation.ts";
import { SKILL_NAMES } from "../src/engine/types.ts";
import { COMPACT_VALLEY_AREA, DEFAULT_SEED, VALLEY_HEIGHT, VALLEY_WIDTH, generateValley, type Cell } from "../src/game/generate.ts";
import { GULCH_RIM } from "../src/game/map.ts";
import { walkability } from "../src/game/walkability.ts";

const manifest = JSON.parse(fs.readFileSync(new URL("../src/data/manifest.json", import.meta.url), "utf8")) as {
  models: string[];
};

const SEEDS = [DEFAULT_SEED, 1, 2, 99, 0, 0xabcdef, ...Array.from({ length: 24 }, (_, index) => (index + 1) * 997)];

test("the same seed builds the same valley", () => {
  const a = generateValley(DEFAULT_SEED);
  const b = generateValley(DEFAULT_SEED);
  assert.deepEqual(snapshot(a), snapshot(b));
  assert.equal(a.seed, DEFAULT_SEED);
});

test("the valley is several times the compact map and only furniture moves", () => {
  const valley = generateValley(DEFAULT_SEED);
  const { colony } = valley;
  assert.equal(colony.width, VALLEY_WIDTH);
  assert.equal(colony.height, VALLEY_HEIGHT);
  assert.ok(colony.width * colony.height >= COMPACT_VALLEY_AREA * 4);
  const water = colony.terrain.filter((kind) => kind === "stream" || kind === "water").length;
  assert.ok(water >= 40, `water cells ${water}`);
  const trees = colony.props.filter((prop) => prop.model.startsWith("tree_"));
  const boulders = colony.props.filter((prop) => prop.model.startsWith("boulder_"));
  assert.ok(trees.length >= 24, `trees ${trees.length}`);
  assert.ok(boulders.length >= 8, `boulders ${boulders.length}`);
  for (const prop of [...trees, ...boulders]) assert.equal(prop.movable, undefined);
  const movable = colony.props.filter((prop) => prop.movable);
  assert.ok(movable.length >= 4);
  const movableModels = new Set(["bedroll", "table_1x2", "dining_chair", "shelf", "barrel", "campfire"]);
  for (const prop of movable) assert.ok(movableModels.has(prop.model), prop.model);
  for (const wall of colony.walls) assert.ok(wall.kind === "rock" || wall.kind === "rockOre" || wall.kind === "planks");
});

test("A* takes the short walk across open ground", () => {
  const blocked = new Uint8Array(12 * 12);
  const nav = { width: 12, height: 12, blocked };
  assert.deepEqual(findPath({ x: 1, z: 1 }, { x: 4, z: 1 }, nav), [
    { x: 2, z: 1 },
    { x: 3, z: 1 },
    { x: 4, z: 1 },
  ]);
  blocked[1 * 12 + 2] = 1;
  const around = findPath({ x: 1, z: 1 }, { x: 3, z: 1 }, nav);
  assert.equal(around?.length, 4);
  assert.deepEqual(around?.[around.length - 1], { x: 3, z: 1 });
});

test("a colonist walks, picks up, and places through the engine", () => {
  const nav = { width: 12, height: 12, blocked: new Uint8Array(144) };
  const sim = createSimulation({
    spawns: [{ id: 1, key: "nell", name: "Nell", x: 1.5, z: 1.5, yaw: 0 }],
    nav,
    seed: 1,
    items: [{ id: "barrel-1", x: 4, z: 1, w: 1, d: 1, blocks: true }],
  });
  assert.equal(sim.blocked(4, 1), true);
  assert.equal(sim.orderMove(1, -1, 0), false);
  assert.equal(sim.orderPickup(1, "tree-1"), false);
  assert.equal(sim.orderMove(1, 3, 1), true);
  let arrived = false;
  for (let i = 0; i < 80 && !arrived; i++) {
    sim.advance(1 / 20);
    const walked = sim.colonists();
    arrived = Math.hypot(walked.x[0] - 3.5, walked.z[0] - 1.5) < 0.2;
  }
  assert.equal(arrived, true);

  assert.equal(sim.orderPickup(1, "barrel-1"), true);
  let carried = false;
  for (let i = 0; i < 80 && !carried; i++) {
    sim.advance(1 / 20);
    carried = sim.items()[0]?.carrierId === 1;
  }
  assert.equal(carried, true);
  assert.equal(sim.blocked(4, 1), false);

  assert.equal(sim.orderPlace(1, 8, 4), true);
  let placedOk = false;
  for (let i = 0; i < 200 && !placedOk; i++) {
    sim.advance(1 / 20);
    const item = sim.items()[0];
    placedOk = item?.carrierId === 0 && item.x === 8 && item.z === 4;
  }
  assert.equal(placedOk, true);
  assert.equal(sim.blocked(8, 4), true);
  assert.equal(sim.blocked(4, 1), false);
});

test("the floor is one enclosed gulch and rerolls keep that shape", () => {
  assertGulch(generateValley(DEFAULT_SEED));
  for (const seed of [1, 2, 99, 0, 0xabcdef, 7 * 997]) assertGulch(generateValley(seed));
});

test("a different seed builds a different valley", () => {
  const a = snapshot(generateValley(DEFAULT_SEED));
  const b = snapshot(generateValley(DEFAULT_SEED + 1));
  assert.notDeepEqual(a.terrain, b.terrain);
});

test("founders land in engine state with skills, beliefs, and goods", () => {
  const valley = generateValley(DEFAULT_SEED);
  const sim = createSimulation({
    spawns: valley.spawns,
    nav: walkability(valley.colony),
    seed: valley.seed,
  });
  const saved = sim.save();
  assert.equal(saved.seed, DEFAULT_SEED);
  assert.equal(saved.colonists[0].name, "Nell");
  assert.equal(saved.colonists[0].mind.residence, "founder");
  assert.equal(saved.colonists[0].mind.stated, "objectivism");
  assert.equal(saved.colonists[0].mind.force, "none");
  assert.deepEqual(saved.colonists[0].mind.seeds, []);
  assert.ok(saved.colonists[0].mind.inventory.food > 0);
  assert.ok(saved.colonists[0].mind.inventory.timber > 0);
  assert.ok(saved.colonists[0].purseCents > 0);
  assert.deepEqual(saved.colonists[0].skills, valley.spawns[0].skills);
  assert.equal(saved.research.active, null);
});

for (const seed of SEEDS) {
  test(`valley ${seed.toString(16)} is a connected mountain valley with a camp`, () => {
    const valley = generateValley(seed);
    const { colony } = valley;
    assert.equal(colony.terrain.length, colony.width * colony.height);
    assert.ok(colony.terrain.includes("stream") || colony.terrain.includes("water"));
    assert.ok(colony.terrain.includes("grass"));
    assert.ok(colony.terrain.includes("grassRich"));
    assert.ok(colony.terrain.includes("soil") || colony.terrain.includes("soilRich"));
    assert.ok(colony.terrain.includes("roughStone"));
    assert.ok(colony.walls.some((wall) => wall.kind === "rock"));
    assert.ok(colony.walls.some((wall) => wall.kind === "rockOre"));
    assert.ok(colony.walls.some((wall) => wall.kind === "planks"));
    assert.ok(colony.props.some((prop) => prop.model.startsWith("tree_")));
    assert.ok(colony.props.some((prop) => prop.model.startsWith("boulder_")));
    assert.ok(colony.props.some((prop) => prop.model === "shelf" || prop.model === "barrel"));
    assert.equal(colony.roofs.length, 2);
    assert.equal(colony.doors.length, 2);
    assert.ok(valley.spawns.length >= 3 && valley.spawns.length <= 5);
    assert.equal(valley.spawns[0].name, "Nell");
    assert.ok(valley.clearing.length >= 16);

    const models = new Set(manifest.models);
    for (const prop of colony.props) assert.ok(models.has(prop.model), prop.model);
    for (const figure of colony.figures) {
      for (const part of figure.parts) assert.ok(models.has(part), part);
    }

    for (const spawn of valley.spawns) {
      assert.equal(spawn.mind?.residence, "founder");
      assert.equal(spawn.mind?.stated, "objectivism");
      for (const name of SKILL_NAMES) {
        const level = spawn.skills?.[name] ?? -1;
        assert.ok(level >= 0 && level <= 8, `${spawn.name} ${name}`);
      }
      const stock = spawn.mind?.inventory;
      assert.ok(stock);
      assert.ok(stock.food + stock.timber + stock.stone > 0);
    }

    assertGulch(valley);

    const nav = walkability(colony);
    const reachable = flood(nav.blocked, nav.width, nav.height, valley.spawns[0]);
    let open = 0;
    for (const cell of nav.blocked) if (cell === 0) open += 1;
    assert.equal(reachable.size, open, `seed ${seed} left walled-off ground`);
    for (const cell of valley.clearing) {
      assert.equal(nav.blocked[cell.z * nav.width + cell.x], 0, `${cell.x},${cell.z}`);
      assert.ok(reachable.has(`${cell.x},${cell.z}`));
    }
  });
}

function flood(blocked: Uint8Array, width: number, height: number, start: { x: number; z: number }): Set<string> {
  const sx = Math.floor(start.x);
  const sz = Math.floor(start.z);
  const seen = new Set<string>();
  const stack: Cell[] = [{ x: sx, z: sz }];
  while (stack.length > 0) {
    const cell = stack.pop();
    if (!cell) break;
    const id = `${cell.x},${cell.z}`;
    if (seen.has(id)) continue;
    if (cell.x < 0 || cell.z < 0 || cell.x >= width || cell.z >= height) continue;
    if (blocked[cell.z * width + cell.x]) continue;
    seen.add(id);
    stack.push({ x: cell.x + 1, z: cell.z }, { x: cell.x - 1, z: cell.z }, { x: cell.x, z: cell.z + 1 }, { x: cell.x, z: cell.z - 1 });
  }
  return seen;
}

function assertGulch(valley: ReturnType<typeof generateValley>): void {
  const { colony } = valley;
  const { elevation, width, height } = colony;
  assert.equal(elevation.length, width * height);
  let peak = 0;
  for (const tier of elevation) if (tier > peak) peak = tier;
  assert.ok(peak >= 8, `peak ${peak}`);
  assert.ok(risesSharply(elevation, width, height), "walls do not rise sharply beside the floor");

  const floor = floodWhere(width, height, (x, z) => elevation[z * width + x] === 0);
  assert.equal(floor.components, 1, "floor split into more than one region");

  const approach = floodWhere(width, height, (x, z) => {
    const border = x === 0 || z === 0 || x === width - 1 || z === height - 1;
    return border && elevation[z * width + x] < GULCH_RIM;
  });
  assert.equal(approach.components, 1, "more than one way through the rim");
  assert.ok(approach.size === 2 || approach.size === 3, `approach cells ${approach.size}`);

  const widths: number[] = [];
  let minZ = height;
  let maxZ = -1;
  let maxWidth = 0;
  for (let z = 0; z < height; z++) {
    let row = 0;
    for (let x = 0; x < width; x++) if (elevation[z * width + x] === 0) row += 1;
    if (row === 0) continue;
    widths.push(row);
    if (row > maxWidth) maxWidth = row;
    if (z < minZ) minZ = z;
    if (z > maxZ) maxZ = z;
  }
  widths.sort((a, b) => a - b);
  const median = widths[Math.floor(widths.length / 2)] ?? 0;
  const span = maxZ - minZ + 1;
  assert.ok(span > median * 3, `span ${span} median width ${median}`);
  assert.ok(maxWidth < width * 0.45, `max floor width ${maxWidth}`);

  let waterMin = height;
  let waterMax = -1;
  for (let z = 0; z < height; z++) {
    for (let x = 0; x < width; x++) {
      const kind = colony.terrain[z * width + x];
      if (kind !== "stream" && kind !== "water") continue;
      if (z < waterMin) waterMin = z;
      if (z > waterMax) waterMax = z;
    }
  }
  assert.ok(waterMax - waterMin >= 80, `creek span ${waterMax - waterMin}`);

  for (const cell of valley.clearing) {
    assert.equal(elevation[cell.z * width + cell.x], 0, `${cell.x},${cell.z} is off the floor`);
  }
}

function risesSharply(elevation: Uint8Array, width: number, height: number): boolean {
  for (let z = 0; z < height; z += 3) {
    for (let x = 0; x < width; x += 3) {
      if (elevation[z * width + x] !== 0) continue;
      for (let dz = -4; dz <= 4; dz++) {
        for (let dx = -4; dx <= 4; dx++) {
          const nx = x + dx;
          const nz = z + dz;
          if (nx < 0 || nz < 0 || nx >= width || nz >= height) continue;
          if (elevation[nz * width + nx] >= 6) return true;
        }
      }
    }
  }
  return false;
}

function floodWhere(
  width: number,
  height: number,
  keep: (x: number, z: number) => boolean,
): { components: number; size: number } {
  const seen = new Uint8Array(width * height);
  let components = 0;
  let size = 0;
  for (let z = 0; z < height; z++) {
    for (let x = 0; x < width; x++) {
      const start = z * width + x;
      if (seen[start] || !keep(x, z)) continue;
      components += 1;
      const stack: Cell[] = [{ x, z }];
      seen[start] = 1;
      while (stack.length > 0) {
        const cell = stack.pop();
        if (!cell) break;
        size += 1;
        const next = [
          { x: cell.x + 1, z: cell.z },
          { x: cell.x - 1, z: cell.z },
          { x: cell.x, z: cell.z + 1 },
          { x: cell.x, z: cell.z - 1 },
        ];
        for (const step of next) {
          if (step.x < 0 || step.z < 0 || step.x >= width || step.z >= height) continue;
          const index = step.z * width + step.x;
          if (seen[index] || !keep(step.x, step.z)) continue;
          seen[index] = 1;
          stack.push(step);
        }
      }
    }
  }
  return { components, size };
}

test("a colonist digs rock into floor and paths through the tunnel", () => {
  const width = 10;
  const height = 5;
  const blocked = new Uint8Array(width * height);
  blocked.fill(1);
  const open = (x: number, z: number) => {
    blocked[z * width + x] = 0;
  };
  open(1, 2);
  open(2, 2);
  open(5, 2);
  open(6, 2);
  const nav = { width, height, blocked };
  const rock = [
    { x: 3, z: 2 },
    { x: 4, z: 2 },
    { x: 8, z: 4 },
  ];
  const sim = createSimulation({
    spawns: [{ id: 1, key: "nell", name: "Nell", x: 2.5, z: 2.5, yaw: 0 }],
    nav,
    seed: 1,
    rock,
  });

  assert.equal(sim.orderDig(99, [{ x: 3, z: 2 }]), false);
  assert.equal(sim.orderDig(1, [{ x: 1, z: 2 }]), false);
  assert.equal(sim.orderDig(1, [{ x: 8, z: 4 }]), false);
  assert.equal(sim.orderDig(1, [{ x: 4, z: 2 }]), false);
  assert.equal(sim.blocked(3, 2), true);
  assert.equal(sim.buildable(3, 2), false);

  assert.equal(sim.orderDig(1, [{ x: 4, z: 2 }, { x: 3, z: 2 }]), true);
  sim.advance(1 / 20);
  assert.equal(sim.blocked(3, 2), true);
  assert.equal(sim.buildable(3, 2), false);
  const started = sim.colonists();
  assert.equal(Math.abs(Math.floor(started.x[0]) - 3) + Math.abs(Math.floor(started.z[0]) - 2), 1);

  let openedFirst = false;
  for (let i = 0; i < 80 && !openedFirst; i++) {
    sim.advance(1 / 20);
    openedFirst = sim.buildable(3, 2);
  }
  assert.equal(openedFirst, true);
  assert.equal(sim.blocked(3, 2), false);
  assert.equal(sim.blocked(4, 2), true);
  assert.equal(sim.buildable(4, 2), false);
  const beside = sim.colonists();
  assert.equal(Math.abs(Math.floor(beside.x[0]) - 3) + Math.abs(Math.floor(beside.z[0]) - 2), 1);

  let openedSecond = false;
  for (let i = 0; i < 200 && !openedSecond; i++) {
    sim.advance(1 / 20);
    openedSecond = sim.buildable(4, 2);
  }
  assert.equal(openedSecond, true);
  assert.equal(sim.blocked(4, 2), false);
  assert.equal(sim.digState().dug.length, 2);
  const through = findPath({ x: 2, z: 2 }, { x: 6, z: 2 }, nav);
  assert.ok(through);
  assert.equal(through?.some((cell) => cell.x === 3 && cell.z === 2), true);
  assert.equal(through?.some((cell) => cell.x === 4 && cell.z === 2), true);
  assert.equal(sim.orderMove(1, 6, 2), true);
  let arrived = false;
  for (let i = 0; i < 200 && !arrived; i++) {
    sim.advance(1 / 20);
    const walked = sim.colonists();
    arrived = Math.hypot(walked.x[0] - 6.5, walked.z[0] - 2.5) < 0.2;
  }
  assert.equal(arrived, true);
  assert.equal(sim.orderDig(1, [{ x: 3, z: 2 }, { x: 4, z: 2 }]), false);

  const before = sim.save();
  assert.equal(before.dug?.length, 2);
  const fresh = new Uint8Array(width * height);
  fresh.fill(1);
  fresh[2 * width + 1] = 0;
  fresh[2 * width + 2] = 0;
  fresh[2 * width + 5] = 0;
  fresh[2 * width + 6] = 0;
  const restored = createSimulation({
    spawns: [{ id: 1, key: "nell", name: "Nell", x: 2.5, z: 2.5, yaw: 0 }],
    nav: { width, height, blocked: fresh },
    seed: 1,
    rock,
  });
  assert.equal(restored.blocked(3, 2), true);
  restored.load(before);
  assert.equal(restored.blocked(3, 2), false);
  assert.equal(restored.buildable(4, 2), true);
  const undone = sim.save();
  undone.dug = [];
  sim.load(undone);
  assert.equal(sim.blocked(3, 2), true);
  assert.equal(sim.buildable(3, 2), false);
});

function snapshot(valley: ReturnType<typeof generateValley>) {
  return {
    terrain: valley.colony.terrain,
    elevation: Array.from(valley.colony.elevation),
    walls: valley.colony.walls,
    props: valley.colony.props.map((prop) => [prop.model, prop.x, prop.z, prop.w, prop.d]),
    names: valley.spawns.map((spawn) => spawn.name),
    skills: valley.spawns.map((spawn) => spawn.skills),
    goods: valley.spawns.map((spawn) => spawn.mind?.inventory),
  };
}

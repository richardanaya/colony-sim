import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { createSimulation } from "../src/engine/simulation.ts";
import { SKILL_NAMES } from "../src/engine/types.ts";
import { DEFAULT_SEED, generateValley, type Cell } from "../src/game/generate.ts";
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

function snapshot(valley: ReturnType<typeof generateValley>) {
  return {
    terrain: valley.colony.terrain,
    walls: valley.colony.walls,
    props: valley.colony.props.map((prop) => [prop.model, prop.x, prop.z, prop.w, prop.d]),
    names: valley.spawns.map((spawn) => spawn.name),
    skills: valley.spawns.map((spawn) => spawn.skills),
    goods: valley.spawns.map((spawn) => spawn.mind?.inventory),
  };
}

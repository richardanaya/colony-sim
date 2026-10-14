import type { Colony, Colonist, Prop, TerrainKind, Wall, WallKind } from "../types";

/**
 * A hand-authored colony. Replace this module's return value with simulation
 * output later; the viewer does not care where the data came from.
 *
 * Grid: x east, z north, each cell one unit. Footprints use the southwest cell.
 */
export function createColony(): Colony {
  const width = 30;
  const height = 24;
  const terrain: TerrainKind[] = Array.from({ length: width * height }, () => "grass");
  const set = (x: number, z: number, kind: TerrainKind) => {
    terrain[z * width + x] = kind;
  };
  const fill = (x0: number, z0: number, x1: number, z1: number, kind: TerrainKind) => {
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) set(x, z, kind);
  };

  fill(8, 0, 8, 4, "dirt");
  fill(19, 0, 19, 4, "dirt");
  fill(8, 2, 19, 2, "dirt");
  fill(13, 7, 25, 7, "dirt");
  fill(24, 0, 29, 5, "sand");
  fill(0, 12, 3, 16, "soil");
  fill(5, 5, 11, 10, "woodFloor");
  set(8, 4, "woodFloor");
  fill(16, 5, 22, 9, "stoneTile");
  set(19, 4, "stoneTile");
  fill(26, 9, 27, 10, "stoneTile");
  set(26, 8, "stoneTile");
  fill(23, 15, 27, 19, "water");

  const walls: Wall[] = [];
  const wall = (x: number, z: number, kind: WallKind) => walls.push({ x, z, kind });
  for (let x = 4; x <= 12; x++) {
    if (x !== 8) wall(x, 4, "planks");
    wall(x, 11, "planks");
  }
  for (let z = 5; z <= 10; z++) {
    wall(4, z, "planks");
    wall(12, z, "planks");
  }
  for (let x = 15; x <= 23; x++) {
    if (x !== 19) wall(x, 4, "bricks");
    wall(x, 10, "bricks");
  }
  for (let z = 5; z <= 9; z++) {
    wall(15, z, "bricks");
    wall(23, z, "bricks");
  }
  for (let x = 25; x <= 28; x++) {
    if (x !== 26) wall(x, 8, "stone");
    wall(x, 11, "stone");
  }
  for (let z = 9; z <= 10; z++) {
    wall(25, z, "stone");
    wall(28, z, "stone");
  }

  const props: Prop[] = [
    // Cabin
    { id: "bed-nell", model: "bed", x: 5, z: 5, w: 1, d: 2, stuff: "Wood" },
    { id: "bed-double", model: "bed_double", x: 9, z: 6, w: 2, d: 2, stuff: "Wood" },
    { id: "table", model: "table_2x2", x: 6, z: 7, w: 2, d: 2, stuff: "Wood" },
    { id: "stool-a", model: "stool", x: 6, z: 6, stuff: "Wood" },
    { id: "stool-b", model: "stool", x: 5, z: 7, stuff: "Wood" },
    { id: "stool-c", model: "stool", x: 8, z: 8, stuff: "Wood" },
    { id: "stool-d", model: "stool", x: 9, z: 5, stuff: "Wood" },
    { id: "dresser", model: "dresser", x: 10, z: 9, w: 2, d: 1, stuff: "Wood" },
    { id: "end-a", model: "end_table", x: 6, z: 9, stuff: "Wood" },
    { id: "end-b", model: "end_table", x: 11, z: 6, stuff: "Wood" },
    { id: "lamp-cabin-w", model: "torch_lamp", x: 5, z: 10, blocks: false },
    { id: "lamp-cabin-e", model: "torch_lamp", x: 11, z: 8, blocks: false },
    { id: "porch-w", model: "column", x: 7, z: 3, stuff: "Wood" },
    { id: "porch-e", model: "column", x: 9, z: 3, stuff: "Wood" },

    // Workshop
    { id: "research", model: "bench_research", x: 16, z: 6, w: 3, d: 2, stuff: "Wood" },
    { id: "stove", model: "bench_fueled_stove", x: 20, z: 6, w: 3, d: 1, stuff: "Stone" },
    { id: "shelf", model: "shelf", x: 16, z: 5, w: 2, d: 1, stuff: "Wood" },
    { id: "battery", model: "battery", x: 20, z: 8, w: 1, d: 2 },
    { id: "heater", model: "heater", x: 22, z: 8 },
    { id: "lamp-shop-w", model: "torch_lamp", x: 16, z: 9, blocks: false },
    { id: "lamp-shop-e", model: "torch_lamp", x: 22, z: 9, blocks: false },

    // Shrine
    { id: "sculpture", model: "sculpture_small_1", x: 27, z: 9, stuff: "Stone" },
    { id: "lamp-shrine", model: "torch_lamp", x: 26, z: 10, blocks: false },

    // Yard, power, garden
    { id: "solar", model: "solar_generator", x: 16, z: 12, w: 4, d: 4 },
    { id: "campfire", model: "campfire", x: 14, z: 5 },
    { id: "horseshoes", model: "horseshoes_pin", x: 13, z: 4, blocks: false, stuff: "Wood" },
    { id: "picnic", model: "table_1x2", x: 14, z: 8, w: 1, d: 2, stuff: "Wood" },
    { id: "picnic-stool", model: "stool", x: 15, z: 8, stuff: "Wood" },
    { id: "yard-lamp", model: "torch_lamp", x: 15, z: 6, blocks: false },
    { id: "hydro", model: "hydroponics", x: 5, z: 15, w: 4, d: 1, yaw: 90 },
    { id: "pot-a", model: "plant_pot", x: 5, z: 16, stuff: "Stone" },
    { id: "pot-b", model: "plant_pot", x: 9, z: 16, stuff: "Stone" },
    { id: "berry-a", model: "berry_bush_1", x: 10, z: 14, blocks: false },
    { id: "berry-b", model: "berry_bush_1", x: 10, z: 16, blocks: false },
    { id: "berry-c", model: "berry_bush_1", x: 6, z: 14, blocks: false },
    { id: "bush-garden", model: "bush_1", x: 11, z: 15, blocks: false },

    // Wilds
    { id: "oak-nw", model: "tree_oak_1", x: 1, z: 20, scale: 2.5, yaw: 20, blocks: true, skipPrefix: ["twig"] },
    { id: "pine-w", model: "tree_pine_1", x: 2, z: 6, scale: 2.7, yaw: 40, skipPrefix: ["twig"] },
    { id: "birch-sw", model: "tree_birch_1", x: 0, z: 3, scale: 2.15, yaw: 10, skipPrefix: ["twig"] },
    { id: "oak-n", model: "tree_oak_1", x: 11, z: 20, scale: 2.35, yaw: 140, skipPrefix: ["twig"] },
    { id: "birch-n", model: "tree_birch_1", x: 14, z: 19, scale: 2.2, yaw: 80, skipPrefix: ["twig"] },
    { id: "pine-ne", model: "tree_pine_1", x: 21, z: 21, scale: 2.85, yaw: 200, skipPrefix: ["twig"] },
    { id: "oak-e", model: "tree_oak_1", x: 28, z: 20, scale: 2.4, yaw: 300, skipPrefix: ["twig"] },
    { id: "birch-pond", model: "tree_birch_1", x: 22, z: 17, scale: 2.1, yaw: 55, skipPrefix: ["twig"] },
    { id: "pine-sand", model: "tree_pine_1", x: 29, z: 12, scale: 2.55, yaw: 15, skipPrefix: ["twig"] },
    { id: "bush-soil", model: "bush_1", x: 1, z: 15, blocks: false, yaw: 30 },
    { id: "bush-sand", model: "bush_1", x: 26, z: 2, blocks: false, yaw: 70 },
    { id: "bush-north", model: "bush_1", x: 9, z: 21, blocks: false },
    { id: "rock-a", model: "boulder_1", x: 25, z: 6, stuff: "Stone", tint: "#b3aea4" },
    { id: "rock-b", model: "boulder_3", x: 28, z: 4, yaw: 40, stuff: "Stone", tint: "#9c988f" },
    { id: "rock-c", model: "boulder_1", x: 2, z: 10, yaw: 15, stuff: "Stone", tint: "#a8a398" },
  ];

  addFence(props);

  const colonists: Colonist[] = [
    {
      id: "nell",
      name: "Nell",
      x: 8,
      z: 1,
      body: "female",
      hair: "bun",
      hat: true,
      skin: "#e4b494",
      hairColor: "#3a2618",
      shirt: "#3e6b4a",
      pants: "#2c3344",
      hatColor: "#6e3540",
    },
    {
      id: "reed",
      name: "Reed",
      x: 12,
      z: 2,
      body: "male",
      hair: "short",
      beard: true,
      skin: "#c48862",
      hairColor: "#1a1a1a",
      shirt: "#8d3d32",
      pants: "#3a342c",
    },
    {
      id: "soren",
      name: "Soren",
      x: 16,
      z: 2,
      body: "thin",
      hair: "mohawk",
      skin: "#f0c8a4",
      hairColor: "#d4a017",
      shirt: "#2d4e72",
      pants: "#4a3b2c",
    },
    {
      id: "imani",
      name: "Imani",
      x: 8,
      z: 6,
      body: "female",
      hair: "long",
      skin: "#8d5a3c",
      hairColor: "#140e0c",
      shirt: "#c6a15a",
      pants: "#2c2836",
    },
    {
      id: "pax",
      name: "Pax",
      x: 22,
      z: 3,
      body: "male",
      hair: "ponytail",
      skin: "#d8a888",
      hairColor: "#4a2e22",
      shirt: "#4d5e86",
      pants: "#2a2e28",
    },
  ];

  return {
    name: "Clearing",
    width,
    height,
    terrain,
    walls,
    doors: [
      { id: "door-cabin", x: 8, z: 4, stuff: "Wood", facade: "s" },
      { id: "door-shop", x: 19, z: 4, stuff: "Wood", facade: "s" },
      { id: "door-shrine", x: 26, z: 8, stuff: "Stone", facade: "s" },
    ],
    roofs: [
      { id: "roof-cabin", x: 4, z: 4, w: 9, d: 8, style: "terracotta", ridge: "x" },
      { id: "roof-shop", x: 15, z: 4, w: 9, d: 7, style: "tin", ridge: "x" },
      { id: "roof-shrine", x: 25, z: 8, w: 4, d: 4, style: "thatch", ridge: "x" },
    ],
    props,
    colonists,
  };
}

/** Posts on each garden edge, rails stretched to the next post, one gate on the south. */
function addFence(props: Prop[]): void {
  const post = (x: number, z: number) => {
    props.push({ id: `fence-post-${x}-${z}`, model: "fence_post", x, z, stuff: "Wood" });
  };
  const arm = (x: number, z: number, yaw: number) => {
    props.push({
      id: `fence-arm-${x}-${z}-${yaw}`,
      model: "fence_arm",
      x,
      z,
      yaw,
      stretch: [1, 1, 2],
      blocks: false,
      stuff: "Wood",
    });
  };

  for (let x = 4; x <= 12; x++) {
    if (x === 8) continue;
    post(x, 13);
    if (x !== 7 && x !== 12) arm(x, 13, 90);
  }
  for (let x = 4; x <= 12; x++) {
    post(x, 17);
    if (x !== 12) arm(x, 17, 90);
  }
  for (let z = 14; z <= 16; z++) post(4, z);
  for (let z = 13; z <= 16; z++) arm(4, z, 0);
  for (let z = 14; z <= 16; z++) post(12, z);
  for (let z = 13; z <= 16; z++) arm(12, z, 0);
}

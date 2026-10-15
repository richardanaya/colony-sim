#!/usr/bin/env python3
"""Build the Hearthstead layout from every IsoRim model and world texture.

Reads Models.7z exports already copied to assets/isorim/, material colours from
IsoRim's tools/make_models.py, and animal poses from Defs/Models.xml.
Writes src/data/materials.json, src/data/layout.json, and src/data/manifest.json.

The IsoRim checkout is only needed to regenerate. CI uses the committed JSON.
"""

from __future__ import annotations

import importlib.util
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_DIR = os.path.join(ROOT, "assets", "isorim", "models")
TEX_DIR = os.path.join(ROOT, "assets", "isorim", "textures")
ISORIM_TOOLS = os.environ.get("ISORIM_TOOLS", "/tmp/IsoRim/tools")
ISORIM_XML = os.environ.get("ISORIM_XML", "/tmp/IsoRim/Defs/Models.xml")

W, H = 108, 90

# Inclusive rectangles the packer may fill.
ZONES = {
    "cabin": (3, 27, 16, 38),
    "workshop": (21, 27, 42, 40),
    "store": (57, 27, 68, 36),
    "clinic": (93, 27, 104, 36),
    "mine": (93, 41, 104, 48),
    "rec": (3, 43, 16, 48),
    "grave": (3, 52, 15, 56),
    "courtyard": (20, 44, 32, 49),
    "power": (57, 45, 88, 55),
    "armory": (22, 8, 43, 15),
    "field": (2, 76, 106, 81),
    "forest": (1, 83, 106, 88),
    "sand": (96, 2, 106, 13),
    "wrecks": (22, 0, 43, 6),
    "landing": (56, 0, 90, 12),
    "defense": (2, 21, 30, 23),
    "garden": (2, 20, 18, 23),
    "farm": (4, 60, 42, 71),
    "wild": (56, 60, 88, 71),
    "ice": (93, 62, 105, 71),
    "insects": (94, 51, 105, 57),
}

SPILL = {
    "cabin": ["store", "rec"],
    "workshop": ["mine", "power", "store"],
    "store": ["cabin", "clinic"],
    "clinic": ["store", "cabin"],
    "mine": ["workshop", "power"],
    "rec": ["courtyard", "grave"],
    "grave": ["rec", "courtyard"],
    "field": ["forest", "sand", "garden"],
    "forest": ["field", "sand", "garden"],
    "sand": ["forest", "field"],
    "wrecks": ["landing", "defense"],
    "power": ["landing", "workshop"],
    "armory": ["defense", "store"],
    "defense": ["landing", "wrecks"],
    "courtyard": ["garden", "rec"],
    "garden": ["defense", "landing"],
}

OUTDOOR = ["landing", "garden", "defense", "sand", "field", "forest", "wrecks", "courtyard"]

FARM = {
    "alpaca", "bison", "boomalope", "caribou", "cassowary", "chicken", "cow", "deer",
    "donkey", "dromedary", "duck", "elk", "emu", "gazelle", "goat", "goose", "horse",
    "ibex", "muffalo", "ostrich", "pig", "sheep", "turkey", "yak", "cat", "yorkie",
    "husky", "labrador", "chinchilla", "guineapig", "hare", "monkey", "raccoon", "rat",
    "squirrel", "boomrat",
}
ICE = {"bear_polar", "fox_arctic", "snowhare", "wolf_arctic"}
INSECT = {"megascarab", "megaspider", "spelopede"}

WEAPONS = {
    "assault_rifle", "axe", "bolt_rifle", "bow_great", "bow_recurve", "bow_short",
    "chain_shotgun", "charge_lance", "charge_rifle", "club", "gladius", "grenade",
    "ikwa", "knife", "launcher", "lmg", "longsword", "mace", "machine_pistol",
    "minigun", "molotov", "pila", "pistol", "revolver", "rocket_launcher",
    "shells_he", "shells_other", "shotgun", "smg", "sniper_rifle", "spear", "warhammer",
}

CLINIC_ITEMS = {
    "hospital_bed", "vitals_monitor", "cryptosleep_casket", "item_bionic", "item_organ",
    "item_neurotrainer",
}


def stable(text: str) -> int:
    value = 2166136261
    for ch in text:
        value ^= ord(ch)
        value = (value * 16777619) & 0xFFFFFFFF
    return value


def load_materials():
    path = os.path.join(ISORIM_TOOLS, "make_models.py")
    spec = importlib.util.spec_from_file_location("isorim_make_models", path)
    if spec is None or spec.loader is None:
        raise SystemExit(f"Cannot import {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.MATERIALS


def map_name(texture):
    if not texture:
        return None
    base = texture.split("/")[-1]
    if base == "{stuff}":
        return "{stuff}"
    if base.endswith(".png"):
        base = base[:-4]
    return base


def emissive(name: str) -> bool:
    return (
        name in {"flame", "flame_core", "glow", "ember", "charge"}
        or name.startswith(("flame_", "glow_", "ember_", "charge_"))
    )


def derive_missing(name, materials):
    if name.endswith("_dk") and name[:-3] in materials:
        (r, g, b), tex = materials[name[:-3]]
        return (r * 0.74, g * 0.76, b * 0.80), tex
    if name.endswith("_lt") and name[:-3] in materials:
        (r, g, b), tex = materials[name[:-3]]
        return (min(1.0, r * 1.2), min(1.0, g * 1.16), min(1.0, b * 1.06)), tex
    if name.startswith("twig_") and name[5:] in materials:
        return materials[name[5:]]
    return None


def scan_models():
    bbox = {}
    used = {}
    for filename in sorted(os.listdir(MODEL_DIR)):
        if not filename.endswith(".obj"):
            continue
        name = filename[:-4]
        mats = set()
        mn = [1e9, 1e9, 1e9]
        mx = [-1e9, -1e9, -1e9]
        with open(os.path.join(MODEL_DIR, filename), encoding="utf-8", errors="replace") as handle:
            for line in handle:
                if line.startswith("usemtl"):
                    parts = line.split()
                    if len(parts) > 1:
                        mats.add(parts[1])
                elif line.startswith("v "):
                    bits = line.split()
                    x, y, z = float(bits[1]), float(bits[2]), -float(bits[3])
                    mn[0], mx[0] = min(mn[0], x), max(mx[0], x)
                    mn[1], mx[1] = min(mn[1], y), max(mx[1], y)
                    mn[2], mx[2] = min(mn[2], z), max(mx[2], z)
        bbox[name] = (mn[0], mn[1], mn[2], mx[0], mx[1], mx[2])
        used[name] = mats
    return bbox, used


def parse_animals(bbox):
    text = open(ISORIM_XML, encoding="utf-8").read()
    animals = {}
    for block in re.findall(r"<IsoRim\.ModelDef>(.*?)</IsoRim\.ModelDef>", text, re.S):
        if "<animal>true</animal>" not in block:
            continue
        model_match = re.search(r"<model>Models/(.+?)\.obj</model>", block)
        if not model_match:
            continue
        model = model_match.group(1)
        leg_match = re.search(r"<legModel>Models/(.+?)\.obj</legModel>", block)
        hips = []
        legs_block = re.search(r"<legs>(.*?)</legs>", block, re.S)
        if legs_block:
            for tup in re.findall(r"\(([^)]+)\)", legs_block.group(1)):
                hips.append([round(float(part), 4) for part in tup.split(",")])
        def num(tag, default=0.0):
            found = re.search(rf"<{tag}>(.*?)</{tag}>", block)
            return float(found.group(1)) if found else default
        animals[model] = {
            "model": model,
            "leg": leg_match.group(1) if leg_match else None,
            "hips": hips,
            "legLength": num("legLength"),
            "legSwing": num("legSwing", 24),
            "legSplay": num("legSplay", 0),
            "length": num("bodyHalfLength", 0.4),
        }
    missing = []
    for name in bbox:
        if not name.startswith("animal_") or name.endswith("_leg") or name == "animal_bed":
            continue
        if name not in animals:
            missing.append(name)
    if missing:
        raise SystemExit(f"Models.xml has no animal def for {missing}")
    return animals


def classify(name: str) -> str:
    if name.startswith("food_") or name.startswith("meal_") or name in {"hat", "helmet", "vest", "pack", "barrel"} or name.startswith("shelf") or name.startswith("garment"):
        return "store"
    if name.startswith("item_"):
        if name.startswith("item_medicine") or name in CLINIC_ITEMS:
            return "clinic"
        return "store"
    if name in CLINIC_ITEMS or name.startswith("drug_"):
        return "clinic"
    if name.startswith("grave_") or name in {"crematorium", "sarcophagus"}:
        return "grave"
    if name.startswith("sculpture_") or name in {"billiards_table", "chess_table", "poker_table", "telescope", "hoopstone_ring", "horseshoes_pin", "column"}:
        return "rec"
    if name in WEAPONS:
        return "armory"
    if name.startswith(("bench_", "tool_")) or name in {
        "fabrication_bench", "hopper", "biofuel_refinery", "comms_console", "multi_analyzer",
        "mineral_scanner", "gp_scanner", "firefoam_popper", "paste_dispenser",
    }:
        if name == "tool_pickaxe":
            return "mine"
        return "workshop"
    if name in {"deep_drill"}:
        return "mine"
    if name.startswith(("solar", "wind", "battery")) or name in {
        "geothermal", "geyser", "chemfuel_generator", "wood_fired_generator", "watermill",
        "power_switch", "trade_beacon",
    }:
        return "power"
    if name.startswith(("wreck_", "ship_", "ruin_", "slag_", "warwalker_", "junk_")) or name in {"transport_pod", "pod_launcher"}:
        return "wrecks"
    if name.startswith("ied_") or name in {"concrete_barrier", "razor_wire", "spike_trap", "sandbags_1", "sandbags_2", "sandbags_3"}:
        return "defense"
    if name.startswith("tree_cactus") or name.startswith("agave") or name == "round_cactus":
        return "sand"
    if name.startswith((
        "tree_", "bush", "bramble", "boulder", "tall_grass", "berry", "grass_", "moss_",
        "dandelion", "daylily", "rose", "herb_", "alocasia", "astragalus", "glow_mushroom",
    )):
        return "forest"
    if name.startswith((
        "corn", "cotton", "devilstrand", "haygrass", "healroot", "hops", "potato",
        "psychoid", "rice", "smokeleaf", "strawberry",
    )) or name in {"hydroponics", "sun_lamp", "plant_pot", "moisture_pump"}:
        return "field"
    if name.startswith((
        "bed", "armchair", "dining", "dresser", "end_table", "stool", "table_",
        "standing_lamp", "torch_lamp", "wall_lamp", "wall_torch", "tv_", "heater",
        "cooler", "vent", "passive_cooler",
    )):
        return "cabin"
    raise SystemExit(f"No zone for {name}")


def scale_of(name: str) -> float:
    if name.startswith("tree_"):
        return 2.2
    if name.startswith(("bush", "berry", "bramble")):
        return 1.25
    return 1.0


def natural(name: str) -> bool:
    return name.startswith((
        "tree_", "bush", "bramble", "boulder", "tall_grass", "berry", "grass_", "moss_",
        "dandelion", "daylily", "rose", "herb_", "alocasia", "astragalus", "glow_mushroom",
        "agave", "round_cactus",
    ))


class World:
    def __init__(self, bbox):
        self.bbox = bbox
        self.terrain = [["grass" for _ in range(W)] for _ in range(H)]
        self.occ = [[0 for _ in range(W)] for _ in range(H)]
        self.walls = []
        self.doors = []
        self.roofs = []
        self.props = []
        self.figures = []
        self.animals = []
        self.marks = []
        self.remaining = set()
        self.zone_counts = {}
        self.seq = 0

    def paint(self, x0, z0, x1, z1, kind, skip=None):
        for z in range(max(0, z0), min(H, z1 + 1)):
            for x in range(max(0, x0), min(W, x1 + 1)):
                if skip and skip(x, z):
                    continue
                self.terrain[z][x] = kind

    def occupy(self, x, z, w, d):
        for zz in range(z, z + d):
            for xx in range(x, x + w):
                self.occ[zz][xx] = 1

    def free(self, x, z, w, d):
        if x < 0 or z < 0 or x + w > W or z + d > H:
            return False
        for zz in range(z, z + d):
            row = self.occ[zz]
            for xx in range(x, x + w):
                if row[xx]:
                    return False
        return True

    def dims(self, name, scale=1.0, yaw=0):
        mn_x, _, mn_z, mx_x, _, mx_z = self.bbox[name]
        sx = (mx_x - mn_x) * scale
        sz = (mx_z - mn_z) * scale
        if int(yaw) % 180 != 0:
            sx, sz = sz, sx
        w = max(1, int(sx + 0.999))
        d = max(1, int(sz + 0.999))
        return w, d

    def find(self, zone, w, d, pad=0):
        x0, z0, x1, z1 = ZONES[zone]
        need_w = w + pad
        need_d = d + pad
        if x1 - x0 + 1 < need_w or z1 - z0 + 1 < need_d:
            return None
        for z in range(z0, z1 - need_d + 2):
            for x in range(x0, x1 - need_w + 2):
                if self.free(x, z, need_w, need_d):
                    return x, z
        return None

    def add_prop(self, name, x, z, w, d, zone, yaw=0, scale=1, y=0, blocks=True, stretch=None, skip=None, stuff="Wood", occupy=True):
        if occupy:
            if not self.free(x, z, w, d):
                return False
            self.occupy(x, z, w, d)
        self.seq += 1
        prop = {"id": f"{name}-{self.seq}", "model": name, "x": x, "z": z}
        if w != 1:
            prop["w"] = w
        if d != 1:
            prop["d"] = d
        if yaw:
            prop["yaw"] = yaw
        if scale != 1:
            prop["scale"] = scale
        if y:
            prop["y"] = y
        if not blocks:
            prop["blocks"] = False
        if stretch:
            prop["stretch"] = stretch
        if skip:
            prop["skipPrefix"] = skip
        if stuff and stuff != "Wood":
            prop["stuff"] = stuff
        self.props.append(prop)
        self.remaining.discard(name)
        self.zone_counts[zone] = self.zone_counts.get(zone, 0) + 1
        return True

    def spawn(self, name, x, z, zone, yaw=0, scale=None, y=0, blocks=None, stretch=None, skip=None, stuff=None, occupy=True, pad=0):
        scale = scale_of(name) if scale is None else scale
        w, d = self.dims(name, scale, yaw)
        if blocks is None:
            blocks = self.default_blocks(name, w, d)
        if stuff is None:
            stuff = self.default_stuff(name)
        if occupy and pad:
            if not self.free(x, z, w + pad, d + pad):
                return False
            self.occupy(x, z, w + pad, d + pad)
            occupy = False
        return self.add_prop(name, x, z, w, d, zone, yaw, scale, y, blocks, stretch, skip, stuff, occupy)

    def try_place(self, name, zone):
        scale = scale_of(name)
        skip = ["twig"] if name.startswith("tree_") else None
        stuff = self.default_stuff(name)
        if natural(name):
            w, d = self.dims(name, scale, 0)
            pad = 1 if name.startswith("tree_") else 0
            spot = self.find(zone, w, d, pad)
            if not spot:
                return False
            yaw = stable(name) % 360
            blocks = self.default_blocks(name, w, d)
            return self.spawn(name, spot[0], spot[1], zone, yaw=yaw, scale=scale, blocks=blocks, skip=skip, stuff=stuff, pad=pad)
        for yaw in (0, 90):
            w, d = self.dims(name, scale, yaw)
            spot = self.find(zone, w, d, 0)
            if not spot:
                continue
            blocks = self.default_blocks(name, w, d)
            return self.spawn(name, spot[0], spot[1], zone, yaw=yaw, scale=scale, blocks=blocks, skip=skip, stuff=stuff)
        return False

    def default_blocks(self, name, w, d):
        if name.startswith(("tree_", "boulder", "wreck_", "ship_", "fence_post", "warwalker")):
            return True
        if name.startswith(("bench_", "bed", "table_", "shelf", "turret", "grave", "sculpture_grand", "sculpture_large")):
            return True
        if name in {"geothermal", "solar_generator", "wind_turbine", "watermill", "fabrication_bench", "hospital_bed", "cryptosleep_casket", "column", "hydroponics", "billiards_table"}:
            return True
        return w >= 2 or d >= 2

    def default_stuff(self, name):
        if name.startswith(("sculpture_", "column", "sarcophagus", "grave_", "boulder")):
            return "Stone"
        if name.startswith((
            "solar", "wind", "battery", "turret", "ship_", "comms", "tv_", "vitals",
            "heater", "cooler", "vent", "pod_", "transport",
        )) or name in {
            "geothermal", "geyser", "chemfuel_generator", "wood_fired_generator", "watermill",
            "power_switch", "trade_beacon", "biofuel_refinery", "fabrication_bench",
            "multi_analyzer", "mineral_scanner", "gp_scanner", "firefoam_popper",
            "deep_drill", "moisture_pump", "hopper", "bench_electric_smithy",
            "bench_electric_tailor", "bench_hitech_research", "bench_machining",
            "bench_smelter", "hospital_bed", "cryptosleep_casket", "comms_console",
        }:
            return "Metal"
        return "Wood"

    def add_room(self, name, x, z, w, d, wall, floor, roof, ridge):
        x1, z1 = x + w - 1, z + d - 1
        door_x = x + w // 2
        for zz in range(z + 1, z1):
            for xx in range(x + 1, x1):
                self.terrain[zz][xx] = floor
        for zz in range(z, z1 + 1):
            for xx in range(x, x1 + 1):
                if xx not in (x, x1) and zz not in (z, z1):
                    continue
                if xx == door_x and zz == z:
                    self.occ[zz][xx] = 1
                    continue
                self.walls.append({"x": xx, "z": zz, "kind": wall})
                self.occ[zz][xx] = 1
        if z > 0:
            self.occ[z - 1][door_x] = 1
            if self.terrain[z - 1][door_x] in {"grass", "grassRich"}:
                self.terrain[z - 1][door_x] = "dirt"
        stuff = "Metal" if wall == "metal" else "Stone" if wall in {"stone", "rock", "rockOre", "bricks"} else "Wood"
        self.doors.append({
            "id": f"door-{name}",
            "x": door_x,
            "z": z,
            "stuff": stuff,
            "facade": "s",
        })
        self.roofs.append({
            "id": f"roof-{name}",
            "x": x,
            "z": z,
            "w": w,
            "d": d,
            "style": roof,
            "ridge": ridge,
        })

    def sandbag_line(self):
        for x in range(2, 44):
            if x in {9, 10, 31, 32}:
                continue
            self.walls.append({"x": x, "z": 24, "kind": "sandbags"})
            self.occ[24][x] = 1

    def fence_rect(self, x0, z0, x1, z1, gate_x):
        def post(x, z):
            return self.spawn("fence_post", x, z, "fence", stuff="Wood", occupy=True)
        def arm(x, z, yaw):
            # The rail runs from the post toward +Z and reaches the next cell when stretched.
            self.spawn("fence_arm", x, z, "fence", yaw=yaw, stretch=[1, 1, 2], blocks=False, stuff="Wood", occupy=False)
        for x in range(x0, x1 + 1):
            if abs(x - gate_x) > 1:
                if not post(x, z0):
                    raise SystemExit(f"fence post blocked at {x},{z0}")
                if x != x1:
                    arm(x, z0, -90)
            if not post(x, z1):
                raise SystemExit(f"fence post blocked at {x},{z1}")
            if x != x1:
                arm(x, z1, -90)
        for z in range(z0 + 1, z1):
            if not post(x0, z) or not post(x1, z):
                raise SystemExit(f"fence post blocked at z={z}")
            arm(x0, z, 0)
            arm(x1, z, 0)
        self.spawn("gate_posts", gate_x, z0, "fence", yaw=0, stuff="Wood", occupy=False)
        self.spawn("gate_leaf", gate_x, z0, "fence", yaw=0, stuff="Wood", occupy=False)

    def paint_ground(self):
        self.paint(0, 0, W - 1, 14, "dirt")
        self.paint(96, 0, W - 1, 18, "sand")
        self.paint(1, 4, 20, 17, "marsh")
        self.paint(4, 7, 16, 15, "water")
        self.paint(14, 17, 42, 17, "mud")
        self.paint(14, 20, 42, 20, "mud")
        self.paint(14, 18, 42, 19, "stream")
        self.paint(2, 58, 90, 74, "grassRich")
        self.paint(92, 60, 106, 73, "ice")
        self.paint(92, 50, 106, 58, "roughStone")
        self.paint(20, 44, 32, 49, "smoothStone")
        self.paint(56, 44, 90, 56, "paved")
        self.paint(78, 50, 84, 54, "metalFloor")
        self.paint(2, 76, 106, 81, "soil")
        for z in range(76, 82, 2):
            self.paint(2, z, 106, z, "soilRich")
        self.paint(0, 82, W - 1, H - 1, "moss")
        self.paint(44, 0, 55, 80, "gravel")
        # Pond and race again so later paints cannot cover them.
        self.paint(4, 7, 16, 15, "water")
        self.paint(14, 18, 42, 19, "stream")
        for z in range(4, 16):
            for x in range(4, 17):
                if self.terrain[z][x] == "water":
                    self.occ[z][x] = 1
        for z in range(18, 20):
            for x in range(14, 43):
                self.occ[z][x] = 1
        for z in range(0, 81):
            for x in range(44, 56):
                self.occ[z][x] = 1

    def rooms(self):
        self.add_room("cabin", 2, 26, 16, 14, "planks", "woodFloor", "terracotta", "x")
        self.add_room("workshop", 20, 26, 24, 16, "bricks", "flagstone", "slate", "x")
        self.add_room("store", 56, 26, 14, 12, "rock", "concrete", "tin", "z")
        self.add_room("barracks", 72, 26, 18, 16, "stone", "carpet", "thatch", "x")
        self.add_room("clinic", 92, 26, 14, 12, "metal", "sterile", "tin", "z")
        self.add_room("mine", 92, 40, 14, 10, "rockOre", "roughHewn", "slate", "x")
        self.paint(3, 43, 16, 48, "stoneTile")
        self.sandbag_line()
        self.marks.extend([{"x": 24, "z": 30}, {"x": 30, "z": 34}, {"x": 36, "z": 32}])

    def anchors(self):
        # Mill sitting on the race, west of the road. The race is reserved; clear its footprint.
        mw, md = self.dims("watermill", 1, 0)
        mx, mz = 26, 16
        for zz in range(mz, mz + md):
            for xx in range(mx, mx + mw):
                self.occ[zz][xx] = 0
                if self.terrain[zz][xx] != "water":
                    self.terrain[zz][xx] = "stream"
        if not self.spawn("watermill", mx, mz, "power", stuff="Metal"):
            raise SystemExit(f"watermill did not fit at {mx},{mz} ({mw}x{md})")
        # Wind turbine and its rotor in the power yard.
        tw, td = self.dims("wind_turbine")
        spot = self.find("power", tw + 1, td + 1, 0)
        if not spot or not self.spawn("wind_turbine", spot[0], spot[1], "power", stuff="Metal"):
            raise SystemExit("wind turbine did not fit")
        rw, rd = self.dims("wind_rotor")
        rx = spot[0] + tw / 2 - rw / 2
        rz = spot[1] + td / 2 - rd / 2
        if not self.spawn("wind_rotor", round(rx, 2), round(rz, 2), "power", y=2.5, stuff="Metal", occupy=False, blocks=False):
            raise SystemExit("wind rotor did not fit")
        # Campfire and the three effect meshes on the courtyard.
        if not self.spawn("campfire", 24, 46, "courtyard"):
            raise SystemExit("campfire did not fit")
        self.spawn("fx_flame", 26, 46, "courtyard", scale=0.45, y=0.05, blocks=False)
        self.spawn("fx_flame_core", 26, 47, "courtyard", scale=0.28, y=0.15, blocks=False)
        self.spawn("fx_puff", 25, 47, "courtyard", scale=0.4, y=0.35, blocks=False)
        # Turrets along the sandbag line, guns stacked on the mounts.
        for index, (base, gun) in enumerate((
            ("turret_mini", "turret_gun_mini"),
            ("turret_auto", "turret_gun_auto"),
            ("turret_mortar", "turret_gun_mortar"),
            ("turret_sniper", "turret_gun_sniper"),
        )):
            x = 4 + index * 8
            if not self.spawn(base, x, 22, "defense", stuff="Metal"):
                raise SystemExit(f"{base} did not fit")
            self.spawn(gun, x, 22, "defense", y=0.42, stuff="Metal", occupy=False, blocks=False)
        self.spawn("sandbags_1", 14, 22, "defense", blocks=False)
        self.spawn("sandbags_2", 18, 21, "defense", blocks=False)
        self.spawn("sandbags_3", 34, 22, "defense", blocks=False)
        # Pavilion posts and a couple of bedrolls before the muster fills the barracks.
        for x, z in ((4, 44), (15, 44), (4, 47), (15, 47)):
            self.spawn("column", x, z, "rec", stuff="Stone")
        self.spawn("bedroll", 84, 29, "barracks")
        self.spawn("bedroll_double", 84, 33, "barracks")
        self.spawn("animal_bed", 6, 61, "farm", stuff="Wood")
        # Fences. gate_x is the south gate of each pen.
        self.fence_rect(2, 58, 43, 73, 22)
        self.fence_rect(56, 58, 90, 73, 72)

    def place_animals(self, defs):
        order = sorted(defs, key=lambda name: defs[name]["length"], reverse=True)
        for name in order:
                kind = name.replace("animal_", "")
                if kind in ICE:
                    pref = ["ice", "wild", "farm"]
                elif kind in INSECT:
                    pref = ["insects", "wild"]
                elif kind in FARM:
                    pref = ["farm", "wild"]
                else:
                    pref = ["wild", "farm", "ice"]
                placed = False
                for zone in pref:
                    if self.try_place(name, zone):
                        info = defs[name]
                        prop = self.props.pop()
                        self.animals.append({
                            "id": prop["id"],
                            "name": kind.replace("_", " "),
                            "model": name,
                            "leg": info["leg"],
                            "x": prop["x"],
                            "z": prop["z"],
                            "w": prop.get("w", 1),
                            "d": prop.get("d", 1),
                            "yaw": (stable(name) % 5) * 20,
                            "hips": info["hips"],
                            "legLength": info["legLength"],
                            "legSwing": info["legSwing"],
                            "legSplay": info["legSplay"],
                        })
                        placed = True
                        break
                if not placed:
                    raise SystemExit(f"No pen space for {name}")

    def place_people(self):
        skins = ["#e0b090", "#c68658", "#8d5a3c", "#f0d0b0", "#a56b45"]
        hairs = ["#241c18", "#6b3a22", "#c4a15a", "#3a3430", "#141210"]
        shirts = ["#8d3d45", "#3d5c8d", "#3d6b4f", "#c4a15a", "#5c4a3a", "#6e4a62"]
        pants = ["#3a3f4a", "#4a3a32", "#2c3834", "#534838"]
        bodies = ["female", "male", "thin", "fat", "hulk"]
        hair_names = ["long", "short", "bun", "ponytail", "mohawk", "afro", "medium", "spiky"]
        hat_names = ["brim", "cap", "hood", "tall", "helmet", "combat", "fullhelm", "cataphract_helm", "marine_helm", "recon_helm"]
        wanderers = [
            ("nell", "Nell", "female", "long", None, None, 49, 4),
            ("amos", "Amos", "male", "short", "goatee", "cap", 50, 8),
            ("wren", "Wren", "thin", "bun", None, "brim", 48, 12),
            ("idris", "Idris", "fat", "ponytail", None, "hood", 51, 16),
            ("bram", "Bram", "hulk", "mohawk", "full", "tall", 49, 20),
        ]
        for index, (fid, label, body, hair, beard, hat, x, z) in enumerate(wanderers):
            parts = [
                f"person_{body}_lower",
                f"person_{body}_upper",
                "person_head",
                "person_face",
                f"person_hair_{hair}",
            ]
            tints = [pants[index % 4], shirts[index % 6], skins[index % 5], "#ffffff", hairs[index % 5]]
            if beard:
                parts.append(f"person_beard_{beard}")
                tints.append(hairs[index % 5])
            if hat:
                parts.append(f"person_hat_{hat}")
                tints.append(shirts[(index + 2) % 6])
            self.figures.append({
                "id": fid,
                "name": label,
                "x": x,
                "z": z,
                "yaw": 0,
                "wander": True,
                "parts": parts,
                "tints": tints,
            })
        outfits = []
        for body in bodies:
            for armor in ("cataphract", "flakjacket", "flakpants", "flakvest", "marine", "plate", "recon"):
                outfits.append((body, f"person_{body}_armor_{armor}"))
            outfits.append((body, f"person_{body}_coat_long"))
            outfits.append((body, f"person_{body}_coat_short"))
        cells = [(x, z) for z in range(30, 39) for x in range(74, 88) if not self.occ[z][x]]
        if len(cells) < len(outfits):
            raise SystemExit(f"Barracks has {len(cells)} free cells for {len(outfits)} mannequins")
        for index, (body, extra) in enumerate(outfits):
            x, z = cells[index]
            self.occ[z][x] = 1
            hair = hair_names[index % len(hair_names)]
            hat = hat_names[index % len(hat_names)]
            parts = [
                f"person_{body}_lower",
                f"person_{body}_upper",
                extra,
                "person_head",
                "person_face",
                f"person_hair_{hair}",
                f"person_hat_{hat}",
            ]
            tints = [
                pants[index % 4],
                shirts[index % 6],
                "#9aa3ad" if "armor" in extra else shirts[(index + 3) % 6],
                skins[index % 5],
                "#ffffff",
                hairs[index % 5],
                "#8d939c" if "helm" in hat or hat in {"helmet", "combat", "fullhelm"} else shirts[(index + 1) % 6],
            ]
            if extra.endswith("armor_marine"):
                parts.extend(["person_pads", "person_visor"])
                tints.extend(["#8d939c", "#b7c4c8"])
            self.figures.append({
                "id": f"muster-{index}",
                "name": "",
                "x": x,
                "z": z,
                "yaw": 180,
                "wander": False,
                "parts": parts,
                "tints": tints,
            })

    def pack(self):
        names = sorted(self.remaining, key=lambda name: self.dims(name, scale_of(name))[0] * self.dims(name, scale_of(name))[1], reverse=True)
        failed = []
        for name in names:
            zone = classify(name)
            placed = False
            for candidate in [zone, *SPILL.get(zone, [])]:
                if self.try_place(name, candidate):
                    placed = True
                    break
            if not placed:
                for candidate in OUTDOOR:
                    if self.try_place(name, candidate):
                        placed = True
                        break
            if not placed:
                failed.append(name)
        if failed:
            free = sum(cell == 0 for row in self.occ for cell in row)
            raise SystemExit(f"Unplaced ({len(failed)}), free cells {free}: {failed}")


def texture_list():
    found = []
    for dirpath, _, filenames in os.walk(TEX_DIR):
        for filename in filenames:
            if filename.endswith(".png"):
                rel = os.path.relpath(os.path.join(dirpath, filename), os.path.dirname(TEX_DIR))
                found.append(rel.replace(os.sep, "/"))
    return sorted(found)


def main():
    print("Importing IsoRim material table…")
    source = load_materials()
    bbox, used_by_model = scan_models()
    all_mtl = set()
    for mats in used_by_model.values():
        all_mtl.update(mats)
    catalog = {}
    missing = []
    for name in sorted(all_mtl):
        entry = source.get(name)
        if entry is None:
            entry = derive_missing(name, source)
        if entry is None:
            missing.append(name)
            continue
        color, texture = entry
        catalog[name] = {
            "color": [round(float(color[0]), 4), round(float(color[1]), 4), round(float(color[2]), 4)],
            "map": map_name(texture),
            "tint": name.startswith("stuff"),
            "emissive": emissive(name),
        }
    if missing:
        raise SystemExit(f"No colour for materials: {missing}")
    swatches = {os.path.splitext(name)[0] for name in os.listdir(os.path.join(TEX_DIR, "swatches"))}
    referenced = {entry["map"] for entry in catalog.values() if entry["map"] and entry["map"] != "{stuff}"}
    if swatches - referenced:
        raise SystemExit(f"Swatches never referenced: {sorted(swatches - referenced)}")

    world = World(bbox)
    world.remaining = {
        name for name in bbox
        if not name.startswith("person_")
        and not (name.startswith("animal_") and name.endswith("_leg"))
        and name not in {"door_leaf", "door_lintel"}
        and not (name.startswith("animal_") and name != "animal_bed")
    }
    world.paint_ground()
    world.rooms()
    world.anchors()
    defs = parse_animals(bbox)
    world.place_animals(defs)
    world.place_people()
    world.pack()

    # Every copied model must be referenced by the scene.
    referenced_models = {prop["model"] for prop in world.props}
    referenced_models.update(["door_leaf", "door_lintel"])
    for figure in world.figures:
        referenced_models.update(figure["parts"])
    for animal in world.animals:
        referenced_models.add(animal["model"])
        if animal["leg"]:
            referenced_models.add(animal["leg"])
    unused_models = set(bbox) - referenced_models
    if unused_models:
        raise SystemExit(f"Unused models: {sorted(unused_models)}")
    unknown_parts = referenced_models - set(bbox)
    if unknown_parts:
        raise SystemExit(f"Missing model files: {sorted(unknown_parts)}")

    kinds = {cell for row in world.terrain for cell in row}
    needed_kinds = {
        "grass", "grassRich", "soil", "soilRich", "dirt", "sand", "mud", "marsh", "moss",
        "gravel", "ice", "roughHewn", "roughStone", "smoothStone", "woodFloor", "stoneTile",
        "carpet", "concrete", "flagstone", "metalFloor", "paved", "sterile", "water", "stream",
    }
    if needed_kinds - kinds:
        raise SystemExit(f"Terrain kinds missing: {sorted(needed_kinds - kinds)}")
    wall_kinds = {wall["kind"] for wall in world.walls}
    if wall_kinds != {"planks", "bricks", "stone", "metal", "rock", "rockOre", "sandbags"}:
        raise SystemExit(f"Wall kinds: {sorted(wall_kinds)}")
    roof_kinds = {roof["style"] for roof in world.roofs}
    if roof_kinds != {"terracotta", "thatch", "tin", "slate"}:
        raise SystemExit(f"Roof styles: {sorted(roof_kinds)}")
    if not world.marks:
        raise SystemExit("No damage marks")

    person_files = {name for name in bbox if name.startswith("person_")}
    person_used = {part for figure in world.figures for part in figure["parts"]}
    if person_files - person_used:
        raise SystemExit(f"Person meshes not worn: {sorted(person_files - person_used)}")
    leg_files = {name for name in bbox if name.endswith("_leg") and name.startswith("animal_")}
    legs_used = {animal["leg"] for animal in world.animals if animal["leg"]}
    if leg_files != legs_used:
        raise SystemExit(f"Leg mismatch extra {sorted(leg_files - legs_used)} missing {sorted(legs_used - leg_files)}")

    layout = {
        "name": "Hearthstead",
        "width": W,
        "height": H,
        "terrain": [cell for row in world.terrain for cell in row],
        "walls": world.walls,
        "doors": world.doors,
        "roofs": world.roofs,
        "props": world.props,
        "figures": world.figures,
        "animals": world.animals,
        "marks": world.marks,
    }
    data = os.path.join(ROOT, "src", "data")
    with open(os.path.join(data, "materials.json"), "w", encoding="utf-8") as handle:
        json.dump(catalog, handle, indent=2)
        handle.write("\n")
    with open(os.path.join(data, "layout.json"), "w", encoding="utf-8") as handle:
        json.dump(layout, handle, separators=(",", ":"))
        handle.write("\n")
    manifest = {
        "models": sorted(bbox),
        "textures": texture_list(),
    }
    with open(os.path.join(data, "manifest.json"), "w", encoding="utf-8") as handle:
        json.dump(manifest, handle, indent=2)
        handle.write("\n")
    print(f"models {len(bbox)}  textures {len(manifest['textures'])}  materials {len(catalog)}")
    print(f"props {len(world.props)}  animals {len(world.animals)}  figures {len(world.figures)}  walls {len(world.walls)}")
    print("zones", dict(sorted(world.zone_counts.items())))


if __name__ == "__main__":
    main()

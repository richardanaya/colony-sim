# IsoRim assets

Source: [kndzio/IsoRim](https://github.com/kndzio/IsoRim), MIT License. See `THIRD_PARTY_NOTICES.md` at the repo root.

Only files this viewer draws are copied here.

## Models (`models/*.obj`)

Wavefront OBJ, text. IsoRim generates them with Y up and writes **−Z as north**. This viewer flips Z on load so +Z is north and one unit is one map cell. There is no `.mtl` beside the models in IsoRim’s `Models.7z`; colours and texture names live in `src/data/materials.json`, taken from IsoRim’s `tools/make_models.py`.

Materials whose names start with `stuff` are multiplied by the build colour (wood, stone, metal, or a colonist’s clothing). `twig*` pieces are the bare-winter branches and are left out while trees are in leaf.

| File | Use |
| --- | --- |
| `bed.obj`, `bed_double.obj`, `dresser.obj`, `end_table.obj`, `table_1x2.obj`, `table_2x2.obj`, `stool.obj` | Cabin and yard furniture |
| `bench_research.obj`, `bench_fueled_stove.obj`, `shelf.obj`, `battery.obj`, `heater.obj` | Workshop |
| `solar_generator.obj`, `hydroponics.obj`, `plant_pot.obj` | Power and garden |
| `door_leaf.obj`, `door_lintel.obj`, `column.obj` | Doors (leaf is one half) and porch posts |
| `fence_post.obj`, `fence_arm.obj` | Garden fence. The arm reaches the cell edge; the viewer stretches it to the next post |
| `torch_lamp.obj`, `campfire.obj`, `horseshoes_pin.obj`, `sculpture_small_1.obj` | Lights, yard, shrine |
| `tree_oak_1.obj`, `tree_birch_1.obj`, `tree_pine_1.obj`, `bush_1.obj`, `berry_bush_1.obj`, `boulder_1.obj`, `boulder_3.obj` | Plants and rocks. Trees are about one cell tall in the file and are scaled in the colony data |
| `person_*_lower.obj`, `person_*_upper.obj`, `person_head.obj`, `person_face.obj`, `person_hair_*.obj`, `person_beard_goatee.obj`, `person_hat_cap.obj` | Colonist parts, assembled and tinted per person |

## Textures (`textures/**/*.png`)

| Folder | Format | How it is drawn |
| --- | --- | --- |
| `swatches/` | 128×128 PNG, mostly grayscale (Soil and Solar are coloured; Flame and Glow are warm) | Multiplied by the material colour. Repeats once per cell, from the OBJ UVs |
| `ground/Grass.png`, `Soil.png`, `PackedDirt.png`, `Sand.png` | 1024×1024 PNG, colour | Terrain tiles |
| `ground/FloorWood.png`, `FloorStoneTile.png` | 1024×1024 PNG, grayscale | Interior floors, tinted wood or stone |
| `walls/*Side.png`, `*Top.png` | Side 256×160, top 256×256, grayscale PNG | Wall blocks, tinted by kind (planks, bricks, smooth stone). Side art covers 2 cells across and 1.25 up |
| `roofs/Terracotta.png`, `Thatch.png`, `Tin.png` | 256×256 grayscale PNG | Roof slopes, tinted |
| `water/Ripples.png` | 256×256 PNG, RGBA, mostly transparent | Animated over a flat pond colour |

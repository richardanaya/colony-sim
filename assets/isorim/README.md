# IsoRim assets

Source: [kndzio/IsoRim](https://github.com/kndzio/IsoRim), MIT License. See `THIRD_PARTY_NOTICES.md` at the repo root.

This folder is the world art the colony draws: every model from IsoRim’s `Models.7z`, and every ground, floor, wall, roof, water, swatch, cliff, and damage texture.

## Models (`models/*.obj`)

Wavefront OBJ, text. IsoRim generates them with Y up and writes **−Z as north**. This viewer flips Z on load so +Z is north and one unit is one map cell. The page does not fetch these files individually. `npm run pack` gathers them into `packs/*.json.gz`, and that is what the valley loads. There is no `.mtl` beside the models in `Models.7z`; colours and texture names live in `src/data/materials.json`, taken from IsoRim’s `tools/make_models.py`.

Materials whose names start with `stuff` are multiplied by the build colour (wood, stone, metal, or a person’s clothing). `twig*` pieces are the bare-winter branches and are left out while trees are in leaf.

People are assembled from `person_*` parts. Animals are a body plus, when the species has one, a leg posed at each hip from IsoRim’s `Defs/Models.xml`. The cobra has no leg mesh. `door_leaf` and `door_lintel` are the doors. Everything else is placed as a prop on the Hearthstead map (`src/data/layout.json`).

## Textures (`textures/**/*.png`)

| Folder | How it is drawn |
| --- | --- |
| `swatches/` | Multiplied by the material colour. Repeats from the OBJ UVs |
| `ground/` | Terrain and floors. Grayscale floors are tinted; coloured grounds are used as painted |
| `walls/` | Wall blocks, tinted by kind. Sandbags are a lower course than the other walls |
| `roofs/` | Roof slopes, tinted |
| `water/Ripples.png` | Animated over the pond |
| `water/Flow.png` | Animated along the mill race |
| `edge/Strata.png` | The ground skirt around the map |
| `damage/Marks.png` | Decals on the workshop floor |

## Not copied

These IsoRim images are not colony surfaces:

- `Textures/IsoRim/UI/Roofs.png` and `View3D.png` — toolbar icons
- `LUTs/*.png` — colour-grading strips for an optional post effect, not albedo maps
- `About/ModIcon.png` and `About/Preview.png` — mod-listing art

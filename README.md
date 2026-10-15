# Galt's Gulch

An isometric colony view of a hidden valley in Colorado, the start of a colony game in the vein of RimWorld and of Galt's Gulch from *Atlas Shrugged*. The map, models, and textures are drawn with [Three.js](https://threejs.org/). Art is from [IsoRim](https://github.com/kndzio/IsoRim) (MIT).

There is no world map. You arrive in the valley and, later, will run it by voluntary trade, gold dollars, and reason. No one is drafted, and nothing is taken to be given away. This repository is the viewer, a title screen, and the first slice of a simulation. The design of the rest is in [docs/ENGINE.md](docs/ENGINE.md). It is not a finished game.

People already living in the valley wander on the walkable cells. Their steps come from a fixed simulation tick, not from the render frame. Near walls and the near roof slope fold away based on which side of the map the camera is on, so the rooms stay readable.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173/). The title screen leads into the valley.

Other scripts:

- `npm run build` typechecks, writes `dist/`, and refreshes the root `index.html` plus the hashed files in `assets/` that GitHub Pages serves
- `npm run preview` serves that build locally
- `npm test` runs a headless Playwright smoke test against the dev server, the production preview, and a static copy of the repo root mounted at `/galts-gulch/`. It opens the title screen, chooses Begin, and fails if the console reports an error or warning, if any request fails, or if the canvas does not render. Install the browser once with `npx playwright install chromium`.

GitHub Pages serves this repository root as https://richardanaya.github.io/galts-gulch/ with no extra base path. `npm run dev` still opens the TypeScript app (`index.dev.html`). The committed root `index.html` is the Vite build, and its script, style, and IsoRim URLs are relative (`./assets/...`) so they resolve under `/galts-gulch/`.

## Layout

| Path | Role |
| --- | --- |
| `src/render/` | Three.js viewer. Reads simulation columns. Does not decide where people walk. |
| `src/engine/` | Fixed-tick simulation, entity state, and the boundary a WebAssembly backend can replace. |
| `src/game/` | Valley content and the walk grid derived from the map. |
| `src/ui/` | Title screen and the in-valley frame. |
| `src/data/` | The Hearthstead layout, material colors, and the asset manifest. |
| `src/assets/` | Page-relative URLs for IsoRim. |
| `docs/ENGINE.md` | How the simulation is meant to grow, including ideology, resources, and Zig. |

## Controls

- Drag to pan
- Scroll to zoom
- Right-drag to orbit
- Click a colonist, then Move, Pick up, or Place

## Data

The valley is generated from a seed in `src/game/generate.ts` on a 188 by 168 map: a broad hidden basin with gentle granite foothills, one narrow approach, a creek across the floor, meadows, soil, forest, ore, stone, a cabin, a store, and three to five founders. The title shows the seed and can reroll it. Coordinates are in cells, +X east and +Z north. `src/data/manifest.json` lists the IsoRim models and textures the packs can serve. `tools/build_layout.py` can still write the old full-catalog Hearthstead layout to `src/data/layout.json`. The game does not load that file.

## Assets

IsoRim models are Wavefront `.obj` (one unit = one cell). The viewer does not request them one by one. `npm run pack` writes a few gzip JSON packs under `assets/isorim/packs/`, and the page loads those. Textures stay individual PNGs, fetched a handful at a time, with retries. A single asset that still fails is skipped. See `assets/isorim/README.md` and `THIRD_PARTY_NOTICES.md`.

## Limitations

- People can be told to walk and to carry furniture. Needs, contracts, beliefs, inventories, and research are stored. They do not yet change play. See `docs/ENGINE.md` for the systems that are designed and not built.
- The other people are mannequins in the barracks, one outfit each, so every body and armour mesh is on screen without stacking plates on a single figure.
- People are IsoRim’s simple body parts (head, torso, hair, a coat or one suit of armour). They have no arms, and walking is a grid path plus a small bob.
- Animals stand in their pens. Legs hang from the hips in IsoRim’s bind pose and sway a little; they do not walk.
- Trees are scaled up from the one-cell size they were authored at. Fence rails are stretched so a post reaches the next cell. The wind rotor is raised onto the turbine hub.
- Every model in IsoRim’s `Models.7z` is in the repo. World textures (ground, floors, walls, roofs, water, swatches, the cliff edge, and the damage decal) are too. Left out, because they are not surfaces in the valley: the UI toolbar icons (`Textures/IsoRim/UI/`), the colour-grading LUT strips (`LUTs/`), and the mod-listing images (`About/ModIcon.png`, `About/Preview.png`). `Models.7z` has no `.mtl`; colours come from `tools/make_models.py`.
- Cutaway is by map side (north/south/east/west of the camera target), not per-room.

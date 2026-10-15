# Colony

An isometric colony viewer. A static map — terrain, walls, roofs, furniture, and a few colonists — is described as plain data and drawn with [Three.js](https://threejs.org/). Art is from [IsoRim](https://github.com/kndzio/IsoRim) (MIT).

Colonists wander on the walkable cells. Near walls and the near roof slope fold away based on which side of the map the camera is on, so the rooms stay readable.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173/).

Other scripts:

- `npm run build` typechecks, writes `dist/`, and refreshes the root `index.html` plus the hashed files in `assets/` that GitHub Pages serves
- `npm run preview` serves that build locally
- `npm test` runs a headless Playwright smoke test against the dev server, the production preview, and a static copy of the repo root mounted at `/colony-sim/`. It fails if the console reports an error or warning, if any request fails, or if the canvas does not render. Install the browser once with `npx playwright install chromium`.

GitHub Pages serves this repository root as https://richardanaya.github.io/colony-sim/ with no extra base path. `npm run dev` still opens the TypeScript app (`index.dev.html`). The committed root `index.html` is the Vite build, and its script, style, and IsoRim URLs are relative (`./assets/...`) so they resolve under `/colony-sim/`.

## Controls

- Drag to pan
- Scroll to zoom
- Right-drag to orbit

## Data

`src/data/layout.json` is the whole scene (terrain, walls, doors, roofs, props, people, and animals), written by `tools/build_layout.py` and exposed through `src/data/colony.ts`. Coordinates are in cells, +X east and +Z north. The viewer only reads that object, so a simulation can replace it later without changing how things are drawn. `src/data/manifest.json` lists every IsoRim model and texture the scene is required to load.

## Assets

IsoRim models are Wavefront `.obj` (one unit = one cell). Textures are PNG. See `assets/isorim/README.md` and `THIRD_PARTY_NOTICES.md`.

## Limitations

- The colony is a fixed map, not a running simulation. Five colonists wander the road. The rest of the people are mannequins in the barracks, one outfit each, so every body and armour mesh is on screen without stacking plates on a single figure.
- People are IsoRim’s simple body parts (head, torso, hair, a coat or one suit of armour). They have no arms, and walking is a grid path plus a small bob.
- Animals stand in their pens. Legs hang from the hips in IsoRim’s bind pose and sway a little; they do not walk.
- Trees are scaled up from the one-cell size they were authored at. Fence rails are stretched so a post reaches the next cell. The wind rotor is raised onto the turbine hub.
- Every model in IsoRim’s `Models.7z` is in the repo. World textures (ground, floors, walls, roofs, water, swatches, the cliff edge, and the damage decal) are too. Left out, because they are not surfaces in the colony: the UI toolbar icons (`Textures/IsoRim/UI/`), the colour-grading LUT strips (`LUTs/`), and the mod-listing images (`About/ModIcon.png`, `About/Preview.png`). `Models.7z` has no `.mtl`; colours come from `tools/make_models.py`.
- Cutaway is by map side (north/south/east/west of the camera target), not per-room.

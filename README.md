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

- `npm run build` typechecks and writes `dist/`
- `npm run preview` serves that build locally
- `npm test` runs a headless Playwright smoke test against the dev server and the production preview. It fails if the console reports an error or warning, if any request fails, or if the canvas does not render. Install the browser once with `npx playwright install chromium`.

## Controls

- Drag to pan
- Scroll to zoom
- Right-drag to orbit

## Data

`src/data/colony.ts` is the whole scene: terrain grid, walls, doors, roofs, props, and colonists. Coordinates are in cells, +X east and +Z north. The viewer only reads that object, so a simulation can replace it later without changing how things are drawn.

## Assets

IsoRim models are Wavefront `.obj` (one unit = one cell). Textures are PNG. See `public/assets/isorim/README.md` and `THIRD_PARTY_NOTICES.md`.

## Limitations

- The colony is a fixed sample, not a running simulation. Colonists only wander.
- People are IsoRim’s simple body parts (head, torso, hair). They have no arms, and walking is a grid path plus a small bob.
- Animals are not shown. IsoRim poses them from a separate leg model.
- Trees are scaled up from the one-cell size they were authored at. Fence rails are stretched so a post reaches the next cell.
- Only the models and textures this scene uses are in the repo, not the full IsoRim library.
- Cutaway is by map side (north/south/east/west of the camera target), not per-room.

# Colony Sim

Colony visualizer built with Three.js, using assets from [IsoRim](https://github.com/kndzio/IsoRim) (RimWorld isometric 3D mod).

## Setup

1. Clone this repo
2. `npm install`
3. Download `Models.7z` from the IsoRim repo and extract the `.obj` files into `public/models/`
4. Also copy relevant textures from `Textures/IsoRim/` if needed
5. `npm run dev`

## Assets

Models are `.obj` files (e.g., `bed.obj`, `table_1x2.obj`). Use Three.js `OBJLoader` to load them.

IsoRim assets are free to use (no credit required, created with AI).

## Features

- Isometric orthographic camera
- Orbit controls
- Basic lighting and grid
- Ready for colony building visualization

## Next Steps

- Load multiple models based on a colony map
- Add terrain, colonists, etc.
- Integrate more IsoRim models and textures

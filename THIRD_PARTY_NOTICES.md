# Third-party notices

## IsoRim

Colony art — Wavefront `.obj` models and PNG textures under `assets/isorim/` — comes from IsoRim by kndzio:

https://github.com/kndzio/IsoRim

IsoRim is a visual mod that draws RimWorld with an isometric camera. Its own readme notes that the project was created with the use of AI and that credit is not required to use the art. The repository is also MIT-licensed, so the license text is included here.

Every model in `Models.7z` from that repository is included. IsoRim does not ship a separate `.mtl` file in the archive; material colours and swatch names were read from `tools/make_models.py` and stored in `src/data/materials.json`. World textures were copied from `Textures/IsoRim/` (ground, walls, roofs, water, swatches, edge, and damage). The mod’s UI icons, colour-grading LUTs, and About-page images are not part of the colony and are not copied. Formats are described in `assets/isorim/README.md`.

```
MIT License

Copyright (c) 2026 kndzio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

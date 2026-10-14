/** Append one flat-shaded quad. Corners are CCW when seen from the outside. */
export function pushQuad(
  pos: number[],
  nrm: number[],
  uv: number[],
  corners: readonly [number, number, number][],
  uvs: readonly [number, number][],
): void {
  const ax = corners[1][0] - corners[0][0];
  const ay = corners[1][1] - corners[0][1];
  const az = corners[1][2] - corners[0][2];
  const bx = corners[2][0] - corners[0][0];
  const by = corners[2][1] - corners[0][1];
  const bz = corners[2][2] - corners[0][2];
  let nx = ay * bz - az * by;
  let ny = az * bx - ax * bz;
  let nz = ax * by - ay * bx;
  const len = Math.hypot(nx, ny, nz) || 1;
  nx /= len;
  ny /= len;
  nz /= len;

  const order = [0, 1, 2, 0, 2, 3];
  for (const i of order) {
    const c = corners[i];
    const t = uvs[i];
    pos.push(c[0], c[1], c[2]);
    nrm.push(nx, ny, nz);
    uv.push(t[0], t[1]);
  }
}

export function geometryFrom(
  THREE: typeof import("three"),
  pos: number[],
  nrm: number[],
  uv: number[],
): import("three").BufferGeometry {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(nrm, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  return geo;
}

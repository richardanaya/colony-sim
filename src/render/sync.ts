import type { ColonistColumns } from "../engine/types";

export interface SampledColonist {
  x: number;
  z: number;
  yaw: number;
  bob: number;
}

/** Interpolate one colonist between the last two ticks. No simulation lives here. */
export function sampleColonist(columns: ColonistColumns, index: number, alpha: number, time: number): SampledColonist {
  const x = columns.prevX[index] + (columns.x[index] - columns.prevX[index]) * alpha;
  const z = columns.prevZ[index] + (columns.z[index] - columns.prevZ[index]) * alpha;
  let yaw = lerpAngle(columns.prevYaw[index], columns.yaw[index], alpha);
  const moving = columns.moving[index] === 1;
  if (!moving) yaw += Math.sin(time * 1.4 + index) * 0.12;
  const phase = columns.prevPhase[index] + (columns.phase[index] - columns.prevPhase[index]) * alpha;
  const bob = moving ? Math.abs(Math.sin(phase)) * 0.04 : 0;
  return { x, z, yaw, bob };
}

function lerpAngle(from: number, to: number, t: number): number {
  const delta = Math.atan2(Math.sin(to - from), Math.cos(to - from));
  return from + delta * t;
}

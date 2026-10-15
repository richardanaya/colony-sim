/**
 * C ABI a future Zig `wasm32-freestanding` build is expected to export.
 * Nothing in this repository instantiates it yet. The TypeScript backend
 * keeps the same column layout so the renderer does not care which side
 * wrote the numbers. Column pointers are byte offsets into the module's
 * exported linear memory. Each float column is 16-byte aligned.
 *
 * Column index:
 *  0 prevX   1 prevZ   2 prevYaw   3 prevPhase
 *  4 x       5 z       6 yaw       7 phase
 *  8 moving (bytes, not floats)
 */
export interface GulchSimModule {
  memory: WebAssembly.Memory;
  sim_tick(dtMillis: number): void;
  sim_colonist_count(): number;
  sim_column_ptr(column: number): number;
  sim_column_capacity(): number;
  sim_generation(): number;
  sim_tick_count(): number;
  sim_time_millis(): number;
  sim_total_gold_cents(): number;
}

export const WASM_URL = "./assets/sim/gulch.wasm";

/** Float columns, in the order `sim_column_ptr` will use. */
export const FLOAT_COLUMNS = ["prevX", "prevZ", "prevYaw", "prevPhase", "x", "z", "yaw", "phase"] as const;

export const MOVING_COLUMN = 8;

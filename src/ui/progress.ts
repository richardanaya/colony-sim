/** Loading-screen progress. `done` and `total` only move forward. */
const state = { done: 0, total: 0, label: "Loading the valley…" };

export function expectLoads(count: number, label: string): void {
  state.total += count;
  state.label = label;
  paint();
}

export function finishLoad(label: string): void {
  state.done += 1;
  state.label = label;
  paint();
}

export function markValleyReady(): void {
  state.done = Math.max(state.done, state.total, 1);
  state.total = Math.max(state.total, state.done);
  state.label = "The valley is ready.";
  paint();
}

function paint(): void {
  const root = document.querySelector("#load-progress");
  const pct = state.total === 0 ? 0 : Math.min(100, Math.round((state.done / state.total) * 100));
  if (root instanceof HTMLElement) {
    root.setAttribute("aria-valuenow", String(pct));
    root.setAttribute("aria-valuemax", "100");
    const fill = root.querySelector(".load-bar-fill");
    if (fill instanceof HTMLElement) fill.style.width = `${pct}%`;
    const text = root.querySelector(".load-label");
    if (text) text.textContent = state.label;
  }
}

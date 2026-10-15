import { expectLoads, finishLoad, markValleyReady } from "./progress";

/** Drawn frames required after the world and the packs have settled. */
export const FRAMES_BEFORE_REVEAL = 3;

export interface ValleyLoadState {
  packs: boolean;
  world: boolean;
  frames: number;
  revealed: boolean;
}

export interface LoadGate {
  markPacks(): void;
  markWorld(): void;
  /** Count one presented frame. Ignored until packs and the world have settled. */
  markFrame(): void;
  fail(message: string): void;
}

/**
 * Full-screen pass between Begin and the valley. It leaves only after the
 * packs have settled, the world has been built, and a few frames have been drawn.
 */
export function mountLoading(root: HTMLElement, onReveal: () => void): LoadGate {
  const screen = document.createElement("div");
  screen.id = "loading-screen";
  screen.innerHTML = `
    <div class="loading-cleft" aria-hidden="true"></div>
    <div class="loading-copy">
      <p class="eyebrow">Loading</p>
      <h1>Entering the valley</h1>
      <p class="loading-lede">Workshops, fields, and the people who live here.</p>
      <div id="load-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Loading the valley">
        <div class="load-bar"><div class="load-bar-fill"></div></div>
        <p class="load-label">Loading the valley…</p>
      </div>
    </div>
  `;
  root.append(screen);

  const state: ValleyLoadState = { packs: false, world: false, frames: 0, revealed: false };
  const publish = () => {
    window.__valleyLoad = { ...state };
  };
  publish();

  let drawing = false;
  const reveal = () => {
    if (state.revealed) return;
    state.revealed = true;
    publish();
    markValleyReady();
    onReveal();
    const duration = Number.parseFloat(getComputedStyle(screen).transitionDuration) || 0;
    if (duration === 0) {
      screen.remove();
      return;
    }
    screen.addEventListener("transitionend", (event) => {
      if (event.target !== screen || event.propertyName !== "opacity") return;
      screen.remove();
    });
    screen.classList.add("is-leaving");
  };

  return {
    markPacks() {
      state.packs = true;
      publish();
    },
    markWorld() {
      state.world = true;
      if (!drawing) {
        drawing = true;
        expectLoads(FRAMES_BEFORE_REVEAL, "Drawing the valley…");
      }
      publish();
    },
    markFrame() {
      if (!state.packs || !state.world || state.revealed) return;
      state.frames += 1;
      publish();
      if (state.frames < FRAMES_BEFORE_REVEAL) {
        finishLoad("Drawing the valley…");
        return;
      }
      reveal();
    },
    fail(message: string) {
      const text = screen.querySelector(".load-label");
      if (text) text.textContent = message;
    },
  };
}

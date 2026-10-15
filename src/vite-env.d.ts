/// <reference types="vite/client" />

interface ColonyUsed {
  models: string[];
  textures: string[];
}

interface GulchDebug {
  readonly tick: number;
  save(): import("./engine/types").SaveGame;
  load(save: import("./engine/types").SaveGame): void;
  project(x: number, y: number, z: number): { x: number; y: number };
  items(): import("./engine/types").HaulItemState[];
  blocked(x: number, z: number): boolean;
}

interface Window {
  __colonyUsed?: ColonyUsed;
  __gulch?: GulchDebug;
  __valleyLoad?: import("./ui/loading").ValleyLoadState;
  __loaderSeen?: boolean;
  __loaderReady?: boolean;
}

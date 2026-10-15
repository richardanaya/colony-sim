/// <reference types="vite/client" />

interface ColonyUsed {
  models: string[];
  textures: string[];
}

interface GulchDebug {
  readonly tick: number;
  save(): import("./engine/types").SaveGame;
  load(save: import("./engine/types").SaveGame): void;
}

interface Window {
  __colonyUsed?: ColonyUsed;
  __gulch?: GulchDebug;
}

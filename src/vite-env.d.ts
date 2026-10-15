/// <reference types="vite/client" />

interface ColonyUsed {
  models: string[];
  textures: string[];
}

interface Window {
  __colonyUsed?: ColonyUsed;
}

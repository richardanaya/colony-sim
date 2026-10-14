import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
  },
  build: {
    // The Three.js viewer is one chunk, a little over Vite's default 500 kB warning.
    chunkSizeWarningLimit: 800,
  },
});

import { defineConfig, devices } from "@playwright/test";
import { devPort, previewPort } from "./tests/targets.mjs";

export default defineConfig({
  testDir: "tests",
  timeout: 90_000,
  expect: { timeout: 20_000 },
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    ...devices["Desktop Chrome"],
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      // Without these, headless Chromium logs a software-WebGL deprecation
      // warning and GPU-stall ReadPixels warnings from the driver.
      args: [
        "--use-angle=swiftshader",
        "--enable-unsafe-swiftshader",
        "--ignore-gpu-blocklist",
        "--enable-webgl",
        "--disable-gpu-sandbox",
      ],
    },
  },
  webServer: [
    {
      command: `npm run dev -- --host 127.0.0.1 --port ${devPort} --strictPort`,
      url: `http://127.0.0.1:${devPort}`,
      reuseExistingServer: false,
      timeout: 60_000,
    },
    {
      command: `npm run build && node tests/serve-built.mjs`,
      url: `http://127.0.0.1:${previewPort}`,
      reuseExistingServer: false,
      timeout: 180_000,
    },
  ],
});

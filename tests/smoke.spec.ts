import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { expect, test } from "@playwright/test";
import { PNG } from "pngjs";
import { smokeTargets } from "./targets.mjs";

const manifestPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src/data/manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as {
  models: string[];
  textures: string[];
};

for (const target of smokeTargets) {
  test(`${target.name} renders with a clean console and no failed requests`, async ({ page }) => {
    const problems: string[] = [];
    const assetStatus = new Map<string, number>();

    page.on("console", (msg) => {
      const type = msg.type();
      if (type === "error" || type === "warning") {
        problems.push(`console ${type}: ${msg.text()}`);
      }
    });
    page.on("pageerror", (error) => {
      problems.push(`pageerror: ${error.message}`);
    });
    page.on("requestfailed", (request) => {
      problems.push(`request failed: ${request.method()} ${request.url()} ${request.failure()?.errorText ?? ""}`);
    });
    page.on("response", (response) => {
      const url = response.url();
      const status = response.status();
      if (
        url.includes("/assets/") ||
        url.endsWith(".obj") ||
        url.endsWith(".png") ||
        url.includes("favicon")
      ) {
        assetStatus.set(url, status);
      }
      if (status >= 400) problems.push(`HTTP ${status}: ${url}`);
    });

    await page.goto(target.url, { waitUntil: "networkidle" });
    await expect(page.locator("canvas")).toBeVisible();
    await expect(page.locator("#status")).toHaveText("Near walls fold away as you orbit.");
    await expect(page.locator(".label", { hasText: "Nell" })).toBeVisible();

    const box = await page.locator("canvas").boundingBox();
    expect(box?.width ?? 0).toBeGreaterThan(200);
    expect(box?.height ?? 0).toBeGreaterThan(200);

    const shot = await page.screenshot({ path: `test-results/colony-${target.name}.png` });
    const png = PNG.sync.read(shot);
    expect(png.width).toBeGreaterThan(200);
    expect(png.height).toBeGreaterThan(200);
    expect(colorVariety(png)).toBeGreaterThan(12);

    const urls = [...assetStatus.keys()];
    expect(urls.some((url) => url.endsWith("/assets/isorim/models/bed.obj"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/assets/isorim/textures/ground/Grass.png"))).toBe(true);
    if (target.name === "pages") {
      expect(urls.every((url) => url.includes("/colony-sim/"))).toBe(true);
    }
    for (const [url, status] of assetStatus) {
      expect(status, url).toBeLessThan(400);
    }

    if (target.relativeBundle) {
      const html = await page.content();
      expect(html).toContain('src="./assets/index');
      expect(html).not.toContain("/src/main.ts");
    }

    const used = await page.evaluate(() => window.__colonyUsed);
    expect(used, "the scene did not report which assets it used").toBeTruthy();
    expect(used!.models.slice().sort()).toEqual([...manifest.models].sort());
    expect(used!.textures.slice().sort()).toEqual([...manifest.textures].sort());
    for (const name of manifest.models) {
      const url = [...assetStatus.keys()].find((item) => item.endsWith(`/assets/isorim/models/${name}.obj`));
      expect(url, `${name}.obj`).toBeTruthy();
      expect(assetStatus.get(url!), `${name}.obj`).toBe(200);
    }
    for (const texture of manifest.textures) {
      const url = [...assetStatus.keys()].find((item) => item.endsWith(`/assets/isorim/${texture}`));
      expect(url, texture).toBeTruthy();
      expect(assetStatus.get(url!), texture).toBe(200);
    }

    expect(problems, problems.join("\n")).toEqual([]);
  });
}

function colorVariety(png: PNG): number {
  const colors = new Set<string>();
  const step = 16;
  for (let y = 0; y < png.height; y += step) {
    for (let x = 0; x < png.width; x += step) {
      const i = (y * png.width + x) * 4;
      const r = png.data[i] >> 4;
      const g = png.data[i + 1] >> 4;
      const b = png.data[i + 2] >> 4;
      colors.add(`${r},${g},${b}`);
    }
  }
  return colors.size;
}

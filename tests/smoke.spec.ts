import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { expect, test, type Page } from "@playwright/test";
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
    await expect(page).toHaveTitle("Galt's Gulch");
    await expect(page.locator("#title-screen")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Galt's Gulch" })).toBeVisible();
    await expect(page.locator(".tagline")).toHaveText(
      "I swear by my life and my love of it that I will never live for the sake of another man, nor ask another man to live for mine.",
    );
    await expect(page.locator(".lede")).toHaveText(
      "People came here to work, to trade, and to live by their own judgment. No one is forced to live for anyone else.",
    );
    await expect(page.getByRole("button", { name: "Begin" })).toBeVisible();
    await expect(page.locator("#loading-screen")).toHaveCount(0);
    await beginAndWaitForValley(page);
    await expect(page.locator("canvas")).toBeVisible();
    await expect(page.locator("#hud .hint")).toHaveText("Drag to pan · scroll to zoom · right-drag to orbit");
    await expect(page.locator("#status")).toHaveText("Near walls fold away as you orbit.");
    await expect(page.locator(".label", { hasText: "Nell" })).toBeVisible();
    await expect.poll(() => page.evaluate(() => window.__gulch?.tick ?? 0)).toBeGreaterThan(0);
    const mind = await page.evaluate(() => {
      const saved = window.__gulch?.save();
      const founder = saved?.colonists[0];
      return {
        residence: founder?.mind.residence,
        stated: founder?.mind.stated,
        receptivity: founder?.mind.receptivity,
        goods: founder ? Object.keys(founder.mind.inventory).length : 0,
        hasResearch: Boolean(saved && saved.research),
        active: saved ? saved.research.active : "missing",
      };
    });
    expect(mind.residence).toBe("founder");
    expect(mind.stated).toBe("objectivism");
    expect(mind.receptivity).toBeGreaterThan(0);
    expect(mind.goods).toBeGreaterThan(0);
    expect(mind.hasResearch).toBe(true);
    expect(mind.active).toBeNull();

    const box = await page.locator("canvas").boundingBox();
    expect(box?.width ?? 0).toBeGreaterThan(200);
    expect(box?.height ?? 0).toBeGreaterThan(200);

    const shot = await page.screenshot({ path: `test-results/colony-${target.name}.png` });
    const png = PNG.sync.read(shot);
    expect(png.width).toBeGreaterThan(200);
    expect(png.height).toBeGreaterThan(200);
    expect(colorVariety(png)).toBeGreaterThan(12);

    const urls = [...assetStatus.keys()];
    expect(urls.some((url) => url.includes("/assets/isorim/packs/index.json"))).toBe(true);
    expect(urls.some((url) => url.endsWith(".obj"))).toBe(false);
    expect(urls.some((url) => url.endsWith("/assets/isorim/textures/ground/Grass.png"))).toBe(true);
    if (target.name === "pages") {
      expect(urls.every((url) => url.includes("/galts-gulch/"))).toBe(true);
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
    const packIndex = JSON.parse(
      fs.readFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../assets/isorim/packs/index.json"), "utf8"),
    ) as { packs: string[] };
    expect(packIndex.packs.length).toBeGreaterThan(0);
    expect(packIndex.packs.length).toBeLessThan(8);
    for (const pack of packIndex.packs) {
      const url = [...assetStatus.keys()].find((item) => item.endsWith(`/assets/isorim/packs/${pack}`));
      expect(url, pack).toBeTruthy();
      expect(assetStatus.get(url!), pack).toBe(200);
    }
    for (const texture of manifest.textures) {
      const url = [...assetStatus.keys()].find((item) => item.endsWith(`/assets/isorim/${texture}`));
      expect(url, texture).toBeTruthy();
      expect(assetStatus.get(url!), texture).toBe(200);
    }

    expect(problems, problems.join("\n")).toEqual([]);
  });
}

test("a 503 on one texture still renders the valley", async ({ page }) => {
  const target = smokeTargets.find((item) => item.name === "dev");
  if (!target) throw new Error("missing dev target");
  const problems: string[] = [];

  await page.route("**/textures/ground/Grass.png", (route) => {
    void route.fulfill({ status: 503, contentType: "text/plain", body: "unavailable" });
  });
  page.on("console", (msg) => {
    const type = msg.type();
    if (type === "error" || type === "warning") problems.push(`console ${type}: ${msg.text()}`);
  });
  page.on("pageerror", (error) => {
    problems.push(`pageerror: ${error.message}`);
  });
  page.on("requestfailed", (request) => {
    problems.push(`request failed: ${request.method()} ${request.url()} ${request.failure()?.errorText ?? ""}`);
  });
  page.on("response", (response) => {
    if (response.status() >= 400 && !response.url().includes("/textures/ground/Grass.png")) {
      problems.push(`HTTP ${response.status()}: ${response.url()}`);
    }
  });

  await page.goto(target.url, { waitUntil: "networkidle" });
  await beginAndWaitForValley(page);
  await expect(page.locator("canvas")).toBeVisible();
  await expect(page.locator("#status")).toHaveText("Near walls fold away as you orbit.");
  await expect(page.locator(".label", { hasText: "Nell" })).toBeVisible();

  const box = await page.locator("canvas").boundingBox();
  expect(box?.width ?? 0).toBeGreaterThan(200);
  expect(box?.height ?? 0).toBeGreaterThan(200);
  const shot = await page.screenshot();
  const png = PNG.sync.read(shot);
  expect(colorVariety(png)).toBeGreaterThan(12);

  const warnings = problems.filter((item) => item.startsWith("console warning:"));
  expect(warnings).toHaveLength(1);
  expect(warnings[0]).toContain("Grass.png");
  expect(warnings[0]).toContain("503");
  const browserResourceErrors = problems.filter((item) => item.startsWith("console error: Failed to load resource:"));
  expect(browserResourceErrors.length).toBeGreaterThan(0);
  expect(
    problems.filter((item) => !item.startsWith("console warning:") && !item.startsWith("console error: Failed to load resource:")),
  ).toEqual([]);
});

test("the loading screen stays up until every pack has loaded", async ({ page }) => {
  const target = smokeTargets.find((item) => item.name === "dev");
  if (!target) throw new Error("missing dev target");
  let releaseHold = () => {};
  const held = new Promise<void>((resolve) => {
    releaseHold = resolve;
  });
  await page.route("**/packs/models-3.json.gz", async (route) => {
    await held;
    await route.continue();
  });

  await page.goto(target.url, { waitUntil: "networkidle" });
  await expect(page.locator("#loading-screen")).toHaveCount(0);
  await page.getByRole("button", { name: "Begin" }).click();
  await expect(page.locator("#loading-screen")).toBeVisible();
  await expect(page.locator("#load-progress")).toBeVisible();
  await page.waitForTimeout(1500);
  await expect(page.locator("#loading-screen")).toBeVisible();
  const mid = await page.evaluate(() => window.__valleyLoad);
  expect(mid?.packs).toBe(false);
  expect(mid?.revealed).toBe(false);
  expect(mid?.frames ?? 0).toBe(0);

  releaseHold();
  await expect(page.locator("#loading-screen")).toBeHidden();
  const done = await page.evaluate(() => window.__valleyLoad);
  expect(done?.packs).toBe(true);
  expect(done?.world).toBe(true);
  expect(done?.frames).toBeGreaterThanOrEqual(3);
  expect(done?.revealed).toBe(true);
  await expect(page.locator("canvas")).toBeVisible();
  await expect(page.locator("#status")).toHaveText("Near walls fold away as you orbit.");
  await expect(page.locator(".label", { hasText: "Nell" })).toBeVisible();
});

async function beginAndWaitForValley(page: Page): Promise<void> {
  await page.evaluate(() => {
    window.__loaderSeen = false;
    window.__loaderReady = false;
    const app = document.getElementById("app");
    if (!app) return;
    const observer = new MutationObserver(() => {
      const el = document.querySelector("#loading-screen");
      if (!(el instanceof HTMLElement)) return;
      if (!el.classList.contains("is-leaving")) window.__loaderSeen = true;
      const state = window.__valleyLoad;
      if (
        el.classList.contains("is-leaving") &&
        state?.packs === true &&
        state.world === true &&
        state.frames >= 3 &&
        state.revealed === true
      ) {
        window.__loaderReady = true;
      }
    });
    observer.observe(app, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });
  });
  await page.getByRole("button", { name: "Begin" }).click();
  await expect(page.locator("#loading-screen")).toBeHidden();
  await expect(page.locator("#title-screen")).toBeHidden();
  expect(await page.evaluate(() => window.__loaderSeen)).toBe(true);
  expect(await page.evaluate(() => window.__loaderReady)).toBe(true);
  const state = await page.evaluate(() => window.__valleyLoad);
  expect(state?.packs).toBe(true);
  expect(state?.world).toBe(true);
  expect(state?.frames).toBeGreaterThanOrEqual(3);
  expect(state?.revealed).toBe(true);
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

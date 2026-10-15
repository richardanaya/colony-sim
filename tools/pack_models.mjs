import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "src/data/manifest.json"), "utf8"));
const names = [...manifest.models].sort();
const packCount = 4;
const chunks = Array.from({ length: packCount }, () => ({}));
const perPack = Math.ceil(names.length / packCount);

for (let index = 0; index < names.length; index++) {
  const name = names[index];
  const file = path.join(root, "assets/isorim/models", `${name}.obj`);
  chunks[Math.floor(index / perPack)][name] = fs.readFileSync(file, "utf8");
}

const outDir = path.join(root, "assets/isorim/packs");
fs.mkdirSync(outDir, { recursive: true });
for (const name of fs.readdirSync(outDir)) {
  if (/^models-\d+\.json\.gz$/.test(name) || name === "index.json") fs.rmSync(path.join(outDir, name));
}

const packs = [];
chunks.forEach((models, index) => {
  const file = `models-${index}.json.gz`;
  const json = JSON.stringify(models);
  const gzip = zlib.gzipSync(json, { level: 9 });
  fs.writeFileSync(path.join(outDir, file), gzip);
  const back = JSON.parse(zlib.gunzipSync(gzip).toString("utf8"));
  if (Object.keys(back).length !== Object.keys(models).length) {
    throw new Error(`Pack ${file} did not round-trip`);
  }
  packs.push(file);
  console.log(`${file} ${Object.keys(models).length} models ${gzip.length} bytes`);
});

fs.writeFileSync(path.join(outDir, "index.json"), `${JSON.stringify({ version: 1, packs }, null, 2)}\n`);
console.log(`packed ${names.length} models into ${packs.length} files`);

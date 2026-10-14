export const devPort = 5191;
export const previewPort = 4191;
export const pagesPort = 4192;

export const smokeTargets = [
  { name: "dev", url: `http://127.0.0.1:${devPort}`, relativeBundle: false },
  { name: "preview", url: `http://127.0.0.1:${previewPort}`, relativeBundle: true },
  { name: "pages", url: `http://127.0.0.1:${pagesPort}/colony-sim/`, relativeBundle: true },
];

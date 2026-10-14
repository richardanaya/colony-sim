export const devPort = 5191;
export const previewPort = 4191;

export const smokeTargets = [
  { name: "dev", url: `http://127.0.0.1:${devPort}` },
  { name: "preview", url: `http://127.0.0.1:${previewPort}` },
] as const;

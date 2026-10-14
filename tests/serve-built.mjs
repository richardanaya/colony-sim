import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { pagesPort, previewPort } from "./targets.mjs";

const root = process.cwd();
const prefix = "/colony-sim";

const preview = spawn(
  process.execPath,
  [
    path.join(root, "node_modules", "vite", "bin", "vite.js"),
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    String(previewPort),
    "--strictPort",
  ],
  { cwd: root, stdio: "inherit" },
);

const pages = http.createServer((req, res) => {
  const url = new URL(req.url ?? "/", "http://127.0.0.1");
  if (url.pathname === prefix) {
    res.writeHead(302, { Location: `${prefix}/` });
    res.end();
    return;
  }
  if (!url.pathname.startsWith(`${prefix}/`)) {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  let rel = decodeURIComponent(url.pathname.slice(prefix.length + 1));
  if (rel === "" || rel.endsWith("/")) rel += "index.html";
  const file = path.resolve(root, rel);
  const base = root.endsWith(path.sep) ? root : root + path.sep;
  if (file !== root && !file.startsWith(base)) {
    res.writeHead(403);
    res.end("forbidden");
    return;
  }
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  res.writeHead(200, { "Content-Type": contentType(file) });
  fs.createReadStream(file).pipe(res);
});

pages.listen(pagesPort, "127.0.0.1");

function shutdown(code) {
  pages.close();
  if (!preview.killed) preview.kill("SIGTERM");
  process.exit(code);
}

preview.on("exit", (code) => shutdown(code ?? 1));
process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

function contentType(file) {
  switch (path.extname(file)) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
      return "text/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".ico":
      return "image/x-icon";
    case ".json":
      return "application/json; charset=utf-8";
    default:
      return "application/octet-stream";
  }
}

import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

const root = path.resolve(__dirname);

export default defineConfig({
  base: "./",
  server: {
    port: 5173,
  },
  build: {
    // The Three.js viewer is one chunk, a little over Vite's default 500 kB warning.
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      input: path.resolve(root, "index.dev.html"),
    },
  },
  plugins: [devEntry(), publishPagesRoot()],
});

function devEntry(): Plugin {
  return {
    name: "dev-entry",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url ?? "/";
        const q = raw.indexOf("?");
        const pathname = q === -1 ? raw : raw.slice(0, q);
        const search = q === -1 ? "" : raw.slice(q);
        if (pathname === "/" || pathname === "/index.html") {
          req.url = `/index.dev.html${search}`;
          next();
          return;
        }
        if (!pathname.startsWith("/assets/")) {
          next();
          return;
        }
        const file = safeFile(root, pathname);
        if (!file) {
          next();
          return;
        }
        res.setHeader("Content-Type", contentType(file));
        fs.createReadStream(file).pipe(res);
      });
    },
  };
}

function publishPagesRoot(): Plugin {
  return {
    name: "publish-pages-root",
    apply: "build",
    closeBundle() {
      const dist = path.join(root, "dist");
      const builtHtml = path.join(dist, "index.dev.html");
      const previewHtml = path.join(dist, "index.html");
      if (fs.existsSync(builtHtml)) {
        fs.copyFileSync(builtHtml, previewHtml);
        fs.rmSync(builtHtml);
      }
      fs.copyFileSync(previewHtml, path.join(root, "index.html"));

      const distAssets = path.join(dist, "assets");
      const rootAssets = path.join(root, "assets");
      fs.mkdirSync(rootAssets, { recursive: true });
      const bundle = /^index.+\.(js|css)$/;
      const staleIcon = /^favicon-.+\.(svg|ico)$/;
      for (const name of fs.readdirSync(rootAssets)) {
        const file = path.join(rootAssets, name);
        if (!fs.statSync(file).isFile()) continue;
        if (bundle.test(name) || staleIcon.test(name)) fs.rmSync(file);
      }
      for (const name of fs.readdirSync(distAssets)) {
        const file = path.join(distAssets, name);
        if (fs.statSync(file).isFile() && bundle.test(name)) {
          fs.copyFileSync(file, path.join(rootAssets, name));
        }
      }
      for (const icon of ["favicon.svg", "favicon.ico"]) {
        const from = path.join(dist, icon);
        if (fs.existsSync(from)) fs.copyFileSync(from, path.join(root, icon));
      }
      fs.cpSync(path.join(rootAssets, "isorim"), path.join(distAssets, "isorim"), { recursive: true });
    },
  };
}

function safeFile(dir: string, urlPath: string): string | null {
  const file = path.resolve(dir, `.${urlPath}`);
  const base = dir.endsWith(path.sep) ? dir : dir + path.sep;
  if (file !== dir && !file.startsWith(base)) return null;
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return null;
  return file;
}

function contentType(file: string): string {
  switch (path.extname(file)) {
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml";
    case ".ico":
      return "image/x-icon";
    case ".js":
      return "text/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    default:
      return "application/octet-stream";
  }
}

// @ts-check
import { defineConfig } from "astro/config";
import { readFileSync } from "node:fs";

const deploy = JSON.parse(readFileSync(new URL("./deploy.json", import.meta.url), "utf8"));

// Environment strategy (see docs/DECISIONS.md, D-07):
//   SITE_MODE=preview (default) -> noindex everywhere, canonicals point at the preview origin (deploy.json).
//   SITE_MODE=release           -> indexable, canonicals point at https://seobooster.uk. Only via scripts/release.mjs.
const mode = process.env.SITE_MODE === "release" ? "release" : "preview";
const site = mode === "release" ? deploy.releaseOrigin : process.env.PREVIEW_ORIGIN || deploy.previewOrigin;

export default defineConfig({
  site,
  trailingSlash: "always",
  build: { format: "directory", assets: "_assets" },
  outDir: process.env.OUT_DIR || "./dist",
  compressHTML: true,
  vite: { define: { __SITE_MODE__: JSON.stringify(mode) } },
});

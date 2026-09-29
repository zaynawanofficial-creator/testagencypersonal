// Crawl a built output directory: every internal href/src must resolve to a file, every in-page #anchor must exist,
// each HTML page must have exactly one <h1>, a <title>, a meta description and a canonical.
// Usage: node scripts/check-output.mjs <dir> [--release]
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

export function checkOutput(dir, { release = false } = {}) {
  const errors = [];
  const pages = [];
  const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && pages.push(p); });
  walk(dir);
  const resolve = (url) => {
    const clean = decodeURIComponent(url.split(/[?#]/)[0]);
    if (clean === "" ) return true;
    const p = join(dir, clean);
    return existsSync(p) && (statSync(p).isFile() || existsSync(join(p, "index.html")));
  };
  const ids = new Map();
  for (const file of pages) {
    const html = readFileSync(file, "utf8");
    ids.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  for (const file of pages) {
    const html = readFileSync(file, "utf8");
    const rel = "/" + relative(dir, file);
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) errors.push(`${rel}: ${h1} <h1> elements`);
    if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${rel}: missing <title>`);
    if (!/<meta name="description" content="[^"]{50,}"/.test(html)) errors.push(`${rel}: missing/short meta description`);
    if (!/<link rel="canonical" href="[^"]+"/.test(html)) errors.push(`${rel}: missing canonical`);
    for (const [, attr, url] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|tel:|data:)/.test(url)) continue;
      if (url.startsWith("#")) { if (url.length > 1 && !ids.get(file).has(url.slice(1))) errors.push(`${rel}: missing anchor ${url}`); continue; }
      if (url.startsWith("/")) {
        if (!resolve(url)) errors.push(`${rel}: broken ${attr} ${url}`);
        const [pathPart, hash] = url.split("#");
        if (hash) {
          const target = join(dir, pathPart.split("?")[0], pathPart.endsWith("/") ? "index.html" : "");
          if (ids.has(target) && !ids.get(target).has(hash)) errors.push(`${rel}: missing anchor ${url}`);
        }
        if (!url.includes(".") && !url.split(/[?#]/)[0].endsWith("/")) errors.push(`${rel}: link without trailing slash ${url}`);
      }
    }
    if (release) {
      if (/noindex/.test(html) && !rel.endsWith("404.html")) errors.push(`${rel}: noindex in release build`);
      if (/Preview build/.test(html)) errors.push(`${rel}: preview marker in release build`);
      const canon = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";
      if (/localhost|hostingersite\.com/i.test(canon) || /hostingersite\.com|localhost:/i.test(html)) errors.push(`${rel}: preview/local origin in release build`);
    }
  }
  return { pages: pages.length, errors };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dir = process.argv[2] || "dist";
  const { pages, errors } = checkOutput(dir, { release: process.argv.includes("--release") });
  if (errors.length) { console.error(`Output check FAILED (${errors.length}):\n  ` + errors.join("\n  ")); process.exit(1); }
  console.log(`Output check passed: ${pages} pages, all internal links, anchors, titles, descriptions, canonicals and single H1s OK.`);
}

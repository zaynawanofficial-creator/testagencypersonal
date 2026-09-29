// Render public/og-default.jpg (1200x630) from brand HTML: wordmark, headline and the hero SVG artwork.
// Re-run after changing the hero art or when the approved logo is supplied.
import { chromium } from "playwright";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
const art = readFileSync("src/components/HeroArt.astro", "utf8").replace(/^---[\s\S]*?---/, "").replace(/<style>[\s\S]*<\/style>/, "");
const font = (f) => new URL(`../node_modules/@fontsource/${f}`, import.meta.url).href;
const html = `<!doctype html><html><head><style>
@font-face{font-family:Manrope;font-weight:700;src:url(${font("manrope/files/manrope-latin-700-normal.woff2")})}
@font-face{font-family:Inter;font-weight:500;src:url(${font("inter/files/inter-latin-500-normal.woff2")})}
body{margin:0;width:1200px;height:630px;overflow:hidden;background:linear-gradient(135deg,#152541 0%,#1b3a8f 58%,#2456e8 100%);font-family:Inter;color:#fff;display:grid;grid-template-columns:560px 640px;align-items:center}
.copy{padding:0 0 0 72px}
.word{font:700 40px/1 Manrope;letter-spacing:-.03em;display:inline-block;padding-bottom:10px;background:linear-gradient(#d9f76b,#d9f76b) left bottom/56px 7px no-repeat}
h1{font:700 52px/1.08 Manrope;letter-spacing:-.03em;margin:44px 0 22px}
p{font:500 24px/1.4 Inter;color:#dfe7f8;margin:0}
.art{padding-right:24px}.art svg{width:100%;height:auto;display:block}
</style></head><body><div class="copy"><div class="word">SEO Booster</div><h1>SEO and digital marketing with published prices</h1><p>For SMEs and ecommerce brands</p></div><div class="art">${art}</div></body></html>`;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
const tmp = new URL("../node_modules/.og-tmp.html", import.meta.url);
writeFileSync(tmp, html);
await p.goto(tmp.href, { waitUntil: "load" });
const loaded = await p.evaluate(async () => { await document.fonts.ready; return [...document.fonts].filter((f) => f.status === "loaded").map((f) => f.family); });
if (!loaded.includes("Manrope") || !loaded.includes("Inter")) throw new Error("Brand fonts did not load: " + loaded.join(","));
rmSync(tmp);
await p.screenshot({ path: "public/og-default.jpg", type: "jpeg", quality: 88 });
await b.close();
console.log("wrote public/og-default.jpg");

// Capture a page as readable viewport-height slices for visual review. Usage: node tests/slices.mjs <path> <width> [prefix]
import { chromium } from "playwright";
const [path = "/", w = "1280", prefix = "slice"] = process.argv.slice(2);
const width = Number(w), height = width < 700 ? 844 : 900;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
await p.goto((process.env.BASE_URL || "http://localhost:4321") + path, { waitUntil: "networkidle" });
await p.evaluate(() => document.fonts.ready);
// Scroll through once so lazy-loaded images below the fold load before capture.
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } scrollTo(0, 0); });
await p.waitForFunction(() => [...document.images].every((i) => i.complete));
const total = await p.evaluate(() => document.documentElement.scrollHeight);
let i = 0;
for (let y = 0; y < total; y += height) {
  await p.screenshot({ path: `test-output/shots/${prefix}-${String(i++).padStart(2, "0")}.png`, clip: { x: 0, y, width, height: Math.min(height, total - y) }, fullPage: true });
}
console.log(prefix, i, "slices", total, "px");
await b.close();

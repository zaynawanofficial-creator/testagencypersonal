// Lab metrics under fixed conditions (Chromium, 1440x900 and 390x844, cache disabled). Not field data.
// Usage: node tests/perf.mjs <label>   -> test-output/perf-<label>.json
import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";
const label = process.argv[2] || "run";
const BASE = process.env.BASE_URL || "http://localhost:4321";
const pages = ["/", "/services/", "/services/seo/", "/contact-us/"];
const b = await chromium.launch();
const out = [];
for (const vp of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
  for (const path of pages) {
    const ctx = await b.newContext({ viewport: vp });
    const page = await ctx.newPage();
    const cdp = await ctx.newCDPSession(page);
    await cdp.send("Network.enable"); await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });
    let bytes = 0, requests = 0;
    cdp.on("Network.loadingFinished", (e) => { bytes += e.encodedDataLength; requests++; });
    await page.addInitScript(() => {
      window.__lcp = 0; window.__cls = 0;
      new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lcp = e.startTime; }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: "layout-shift", buffered: true });
    });
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 300))));
    const m = await page.evaluate(() => ({ lcp: Math.round(window.__lcp), cls: +window.__cls.toFixed(3), dom: document.getElementsByTagName("*").length }));
    out.push({ path, width: vp.width, kb: +(bytes / 1024).toFixed(1), requests, ...m });
    await ctx.close();
  }
}
await b.close();
mkdirSync("test-output", { recursive: true });
writeFileSync(`test-output/perf-${label}.json`, JSON.stringify(out, null, 1));
console.table(out);

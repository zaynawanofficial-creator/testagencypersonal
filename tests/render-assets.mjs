// Render illustration files onto a contact sheet for visual review. Usage: node tests/render-assets.mjs
import { chromium } from "playwright";
import { readdirSync } from "node:fs";
const files = readdirSync("public/illustrations").filter((f) => f.endsWith(".svg"));
const html = `<body style="margin:0;background:#FAF9F6;font:14px Inter,sans-serif;display:grid;grid-template-columns:repeat(4,320px);gap:16px;padding:16px">${files
  .map((f) => `<figure style="margin:0;background:#fff;border:1px solid #DDE5EF;border-radius:12px;padding:8px"><img src="http://localhost:4321/illustrations/${f}" width="304" height="228"><figcaption>${f}</figcaption></figure>`)
  .join("")}</body>`;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1376, height: 800 } });
await p.setContent(html, { waitUntil: "networkidle" });
await p.screenshot({ path: "test-output/shots/assets-sheet.png", fullPage: true });
await b.close(); console.log(files.length, "assets rendered");

// End-to-end checks against a running preview server (npm run preview, port 4321).
// Usage: node tests/site.test.mjs [--shots]   Screenshots go to test-output/shots/.
import { chromium, firefox } from "playwright";
import { readFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const axeSrc = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const BASE = process.env.BASE_URL || "http://localhost:4321";
const SHOTS = process.argv.includes("--shots");
const OUT = "test-output/shots";
mkdirSync(OUT, { recursive: true });

const PAGES = ["/", "/services/", "/services/seo/", "/services/digital-marketing/", "/services/content-writing/", "/services/web-design-development/", "/services/website-maintenance/", "/services/graphic-design/", "/services/ecommerce/", "/our-approach/", "/about/", "/contact-us/"];
const WIDTHS = [360, 390, 768, 1024, 1280, 1536];
const results = [];
let failures = 0;
const record = (name, ok, detail = "") => { results.push({ name, ok, detail }); if (!ok) failures++; };
const launch = (type) => type.launch(type === chromium ? {} : {}).catch(() => null);

const browser = await launch(chromium);

// 1. Layout at every width: overflow, header height, logo/nav on one line (desktop), fonts actually rendered
for (const path of PAGES) {
  for (const w of WIDTHS) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    const errs = [];
    page.on("pageerror", (e) => errs.push(e.message));
    page.on("console", (m) => m.type() === "error" && errs.push(m.text()));
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    const m = await page.evaluate(async () => {
      await document.fonts.ready;
      const header = document.querySelector(".site-header").getBoundingClientRect();
      const navItems = [...document.querySelectorAll(".nav__list > li, .nav__cta")].filter((e) => e.offsetParent);
      const tops = new Set(navItems.map((e) => Math.round(e.getBoundingClientRect().top)));
      const overflowing = [...document.querySelectorAll("body *")].filter((el) => { const r = el.getBoundingClientRect(); return r.width && r.right > innerWidth + 1 && getComputedStyle(el).position !== "fixed"; }).slice(0, 3).map((el) => el.className || el.tagName);
      const firstHeading = document.querySelector("main h1");
      return {
        overflow: document.documentElement.scrollWidth - innerWidth,
        overflowing,
        headerH: Math.round(header.height),
        navRows: tops.size,
        manrope: document.fonts.check('700 16px "Manrope"') && [...document.fonts].some((f) => f.family.includes("Manrope") && f.status === "loaded"),
        inter: [...document.fonts].some((f) => f.family.includes("Inter") && f.status === "loaded"),
        h1Font: firstHeading ? getComputedStyle(firstHeading).fontFamily.split(",")[0] : "",
        h1Size: firstHeading ? parseFloat(getComputedStyle(firstHeading).fontSize) : 0,
        gapUnderHeader: Math.round((document.querySelector("main").getBoundingClientRect().top) - header.bottom),
      };
    });
    const tag = `${path} @${w}`;
    record(`no horizontal overflow ${tag}`, m.overflow <= 0, m.overflow > 0 ? `${m.overflow}px ${m.overflowing.join(",")}` : "");
    record(`header height ${tag}`, w >= 1024 ? m.headerH >= 80 && m.headerH <= 96 : m.headerH >= 72 && m.headerH <= 80, `${m.headerH}px`);
    if (w >= 1024) record(`desktop nav on one line ${tag}`, m.navRows === 1, `${m.navRows} rows`);
    record(`no band under header ${tag}`, m.gapUnderHeader === 0, `${m.gapUnderHeader}px`);
    record(`fonts rendered (Manrope+Inter) ${tag}`, m.manrope && m.inter, `h1 ${m.h1Font} ${m.h1Size}px`);
    record(`no console errors ${tag}`, errs.length === 0, errs.join(" | "));
    if (SHOTS && ["/", "/services/seo/", "/contact-us/", "/services/"].includes(path)) {
      await page.screenshot({ path: `${OUT}/${path.replaceAll("/", "_") || "home"}-${w}.png`, fullPage: true });
    }
    await page.close();
  }
}

// 2. axe (WCAG 2.2 AA + best practice) at mobile and desktop
for (const path of [...PAGES, "/does-not-exist/"]) {
  for (const w of [390, 1280]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    await page.addScriptTag({ content: axeSrc });
    const v = await page.evaluate(async () => (await axe.run(document, { runOnly: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] })).violations.map((x) => `${x.id}(${x.nodes.length}): ${x.nodes[0].target.join(" ")}`));
    record(`axe ${path} @${w}`, v.length === 0, v.join(" ; "));
    await page.close();
  }
}

// 3. Desktop Services dropdown: keyboard, Escape, focus return, outside click, panel inside viewport
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  record("skip link is first tab stop", await page.evaluate(() => document.activeElement.classList.contains("skip-link")));
  await page.keyboard.press("Enter");
  record("skip link moves focus to main", await page.evaluate(() => document.activeElement.id === "main"));
  await page.focus(".nav__toggle");
  await page.keyboard.press("Enter");
  record("Services opens with Enter", await page.isVisible("#services-panel"));
  const box = await page.locator("#services-panel").boundingBox();
  record("Services panel within viewport", box.x >= 0 && box.x + box.width <= 1280, JSON.stringify(box));
  await page.keyboard.press("Tab");
  record("Tab moves into panel", await page.evaluate(() => !!document.activeElement.closest("#services-panel")));
  await page.keyboard.press("Escape");
  record("Escape closes panel", !(await page.isVisible("#services-panel")));
  record("focus returns to Services", await page.evaluate(() => document.activeElement.classList.contains("nav__toggle")));
  await page.click(".nav__toggle"); await page.mouse.click(40, 700);
  record("outside click closes panel", !(await page.isVisible("#services-panel")));
  await page.click(".nav__toggle"); await page.click("#services-panel >> text=Content Writing");
  record("panel link navigates", page.url().endsWith("/services/content-writing/"), page.url());
  if (SHOTS) { await page.click(".nav__toggle"); await page.waitForTimeout(250); await page.screenshot({ path: `${OUT}/dropdown-1280.png` }); }
  await page.close();
}

// 4. Mobile drawer: open/close, full height at any scroll position, focus trap, Escape, zoomed layout
for (const scrollY of [0, 2400]) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await page.goto(BASE + "/services/seo/", { waitUntil: "networkidle" });
  await page.evaluate((y) => scrollTo(0, y), scrollY); await page.waitForTimeout(150);
  record(`drawer hidden initially (scroll ${scrollY})`, !(await page.isVisible("#primary-nav")));
  await page.tap(".menu-btn");
  const d = await page.evaluate(() => { const n = document.getElementById("primary-nav").getBoundingClientRect(); const h = document.querySelector(".site-header").getBoundingClientRect(); return { top: Math.round(n.top), bottom: Math.round(n.bottom), hb: Math.round(h.bottom), vh: innerHeight }; });
  record(`drawer starts at header and fills viewport (scroll ${scrollY})`, Math.abs(d.top - d.hb) <= 1 && d.bottom === d.vh, JSON.stringify(d));
  record(`aria-expanded true (scroll ${scrollY})`, (await page.getAttribute(".menu-btn", "aria-expanded")) === "true");
  record(`focus moved into drawer (scroll ${scrollY})`, await page.evaluate(() => !!document.activeElement.closest("#primary-nav")));
  record(`CTA reachable in drawer (scroll ${scrollY})`, await page.isVisible(".nav__cta"));
  await page.tap(".nav__toggle");
  record(`Services expands in drawer (scroll ${scrollY})`, await page.isVisible("#services-panel"));
  if (SHOTS) await page.screenshot({ path: `${OUT}/drawer-390-scroll${scrollY}.png` });
  for (let i = 0; i < 20; i++) await page.keyboard.press("Tab");
  record(`focus trapped in drawer (scroll ${scrollY})`, await page.evaluate(() => !!document.activeElement.closest("#primary-nav, .menu-btn")));
  await page.keyboard.press("Escape");
  record(`Escape closes drawer (scroll ${scrollY})`, !(await page.isVisible("#primary-nav")));
  record(`focus returns to menu button (scroll ${scrollY})`, await page.evaluate(() => document.activeElement.classList.contains("menu-btn")));
  const small = await page.evaluate(() => [...document.querySelectorAll("a.btn, button, summary")].filter((e) => e.offsetParent && e.getBoundingClientRect().height < 44).map((e) => e.textContent.trim().slice(0, 30)));
  record(`touch targets >= 44px (scroll ${scrollY})`, small.length === 0, small.join(" | "));
  await page.close();
}
{
  // 200% zoom equivalent: 640 CSS px viewport at 1280 device px
  const page = await browser.newPage({ viewport: { width: 640, height: 450 }, deviceScaleFactor: 2 });
  await page.goto(BASE + "/services/seo/", { waitUntil: "networkidle" });
  const o = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  record("200% zoom (640px) no overflow on SEO page", o <= 0, `${o}px`);
  await page.close();
}

// 5. Contact form: package attribution, validation, not-activated state keeps message, honeypot, duplicate guard
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(BASE + "/contact-us/?package=8", { waitUntil: "networkidle" });
  record("package ?package=8 preselected", (await page.inputValue("#f-interest")) === "package:8");
  await page.goto(BASE + "/contact-us/?service=ecommerce", { waitUntil: "networkidle" });
  record("service ?service=ecommerce preselected", (await page.inputValue("#f-interest")) === "family:ecommerce");
  await page.goto(BASE + "/contact-us/?package=999", { waitUntil: "networkidle" });
  record("unknown package id ignored", (await page.inputValue("#f-interest")) === "");
  await page.click("[data-submit]");
  const invalid = await page.$$eval('[aria-invalid="true"]', (els) => els.map((e) => e.name));
  record("empty submit flags required fields", ["name", "email", "interest", "message"].every((n) => invalid.includes(n)), invalid.join(","));
  record("focus moves to first invalid field", await page.evaluate(() => document.activeElement.id === "f-name"));
  record("error summary announced", /fix 4 fields/.test(await page.textContent("[data-status]")));
  await page.fill("#f-name", "Test Person");
  await page.fill("#f-email", "not-an-email");
  await page.fill("#f-website", "example");
  await page.selectOption("#f-interest", "package:14");
  await page.fill("#f-message", "We would like help with monthly SEO for our store.");
  await page.click("[data-submit]");
  record("invalid email and website rejected", (await page.getAttribute("#f-email", "aria-invalid")) === "true" && (await page.getAttribute("#f-website", "aria-invalid")) === "true");
  await page.fill("#f-email", "test@example.com"); await page.fill("#f-website", "https://example.com");
  await page.click("[data-submit]");
  const st = await page.textContent("[data-status]");
  record("no endpoint: truthful not-active message, no false success", /not active yet/.test(st) && !/Thank you/.test(st), st.trim());
  record("message preserved after failed send", (await page.inputValue("#f-message")).startsWith("We would like"));
  const labels = await page.$$eval("input:not([type=hidden]):not(#f-company), select, textarea", (els) => els.filter((e) => !document.querySelector(`label[for="${e.id}"]`)).map((e) => e.name));
  record("every field has a visible label", labels.length === 0, labels.join(","));
  await page.close();

}

// 5b. Delivery states against a build with a dummy endpoint (FORM_BASE), network intercepted: no real mail is sent.
{
  const FORM_BASE = process.env.FORM_BASE || "http://localhost:4322";
  const page = await browser.newPage();
  const reachable = await page.goto(FORM_BASE + "/contact-us/?package=11").then(() => true).catch(() => false);
  if (!reachable) {
    results.push({ name: "form delivery states (success/failure/retry)", ok: null, detail: "NOT TESTED: no endpoint build on " + FORM_BASE });
  } else {
    let calls = 0; let mode = "fail"; const bodies = [];
    await page.route("https://forms.test/**", async (route) => {
      calls++; bodies.push(route.request().postDataJSON());
      await new Promise((r) => setTimeout(r, 300));
      await route.fulfill(mode === "fail" ? { status: 500, body: "{}" } : { status: 200, contentType: "application/json", body: '{"ok":true}' });
    });
    await page.fill("#f-name", "Test Person"); await page.fill("#f-email", "test@example.com");
    await page.fill("#f-message", "Please scope an on-page SEO sprint for ten pages.");
    await page.click("[data-submit]"); await page.click("[data-submit]", { force: true }).catch(() => {});
    await page.waitForFunction(() => /could not be sent/.test(document.querySelector("[data-status]").textContent));
    record("server error shows failure, keeps message", (await page.inputValue("#f-message")).startsWith("Please scope"));
    record("double click sends once", calls === 1, `${calls} calls`);
    mode = "ok";
    await page.click("[data-submit]");
    await page.waitForFunction(() => /has been sent/.test(document.querySelector("[data-status]").textContent));
    record("retry succeeds and shows success", true);
    record("retry reuses idempotency key", bodies[0].idempotencyKey === bodies[1].idempotencyKey);
    record("package attribution in payload", bodies[1].interest === "package:11" && /On-Page SEO Sprint/.test(bodies[1].interestLabel), JSON.stringify(bodies[1]).slice(0, 160));
    record("form cleared after success", (await page.inputValue("#f-message")) === "");
  }
  await page.close();
}

// 6. No-JS: critical content present in HTML
{
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto(BASE + "/services/seo/");
  const txt = await page.textContent("main");
  record("no-JS: SEO page shows packages, prices, exclusions", /SEO Audit Essentials/.test(txt) && /\$399/.test(txt) && /Not included/.test(txt) && /Monthly SEO Growth/.test(txt));
  await page.goto(BASE + "/");
  record("no-JS: nav links present in HTML", (await page.$$("#primary-nav a[href]")).length >= 10);
  await ctx.close();
}

// 7. 404 status and page
{
  const page = await browser.newPage();
  const res = await page.goto(BASE + "/no-such-page/");
  record("unknown path returns 404 status", res.status() === 404, String(res.status()));
  record("404 page is the branded page", /could not be found/.test(await page.textContent("h1")));
  await page.close();
}

// 8. Every catalogue package rendered with its exact approved display price
{
  const cat = JSON.parse(readFileSync("src/data/catalogue.json", "utf8"));
  const slug = { "SEO": "seo", "Digital Marketing": "digital-marketing", "Content Writing": "content-writing", "Web Design & Development": "web-design-development", "Website Maintenance": "website-maintenance", "Graphic Design": "graphic-design", "eCommerce Services": "ecommerce" };
  const page = await browser.newPage();
  const missing = [];
  for (const f of Object.keys(slug)) {
    await page.goto(`${BASE}/services/${slug[f]}/`);
    for (const p of cat.packages.filter((x) => x.family === f)) {
      const ok = await page.evaluate(({ id, price, name }) => { const el = document.getElementById(`package-${id}`); return !!el && el.textContent.includes(price) && el.textContent.includes(name); }, { id: p.id, price: p.displayPrice, name: p.name });
      if (!ok) missing.push(p.id);
    }
  }
  record("all 50 packages rendered with exact approved price", missing.length === 0, missing.join(","));
  await page.close();
}

await browser.close();

// 9. Second engine (Firefox) smoke test if available
const ff = await launch(firefox);
if (ff) {
  const page = await ff.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(BASE + "/services/seo/", { waitUntil: "networkidle" });
  const o = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  record("Firefox: SEO page no overflow @390", o <= 0, `${o}px`);
  await page.click(".menu-btn");
  record("Firefox: drawer opens", await page.isVisible("#primary-nav"));
  await ff.close();
} else {
  results.push({ name: "Firefox smoke test", ok: null, detail: "NOT TESTED: Firefox engine not installed in this environment" });
}

for (const r of results) console.log(`${r.ok === null ? "SKIP" : r.ok ? "PASS" : "FAIL"}  ${r.name}${r.detail && (r.ok !== true) ? "  -> " + r.detail : ""}`);
const passed = results.filter((r) => r.ok).length;
console.log(`\n${passed} passed, ${failures} failed, ${results.filter((r) => r.ok === null).length} not tested`);
process.exit(failures ? 1 : 0);

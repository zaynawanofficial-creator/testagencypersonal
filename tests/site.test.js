const { chromium } = require('playwright');
const fs = require('fs');
const axeSrc = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const BASE = 'http://127.0.0.1:8123';
const SP = process.env.SP || 'test-output'; require('fs').mkdirSync(SP + '/shots', { recursive: true });
const pages = ['/', '/services/seo/'];
const widths = [[390, 844, 'mobile'], [768, 1024, 'tablet'], [1280, 800, 'laptop'], [1536, 900, 'desktop']];
(async () => {
  const browser = await chromium.launch();
  const results = [];
  for (const p of pages) {
    for (const [w, h, name] of widths) {
      const ctx = await browser.newContext({ viewport: { width: w, height: h } });
      const page = await ctx.newPage();
      const errs = [];
      page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
      page.on('pageerror', e => errs.push(e.message));
      await page.goto(BASE + p, { waitUntil: 'networkidle' });
      const info = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        h1: document.querySelectorAll('h1').length,
        title: document.title,
        imgsNoAlt: [...document.images].filter(i => !i.hasAttribute('alt')).length,
      }));
      const slug = (p === '/' ? 'home' : 'seo') + '-' + name;
      await page.screenshot({ path: `${SP}/shots/${slug}.png`, fullPage: true });
      results.push({ page: p, width: w, ...info, consoleErrors: errs.filter(e => !/fonts\.g/.test(e)) });
      await ctx.close();
    }
  }
  // Axe at mobile + desktop
  for (const p of pages) for (const w of [390, 1280]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(BASE + p, { waitUntil: 'networkidle' });
    await page.addScriptTag({ content: axeSrc });
    const r = await page.evaluate(async () => (await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'] })).violations.map(v => ({ id: v.id, impact: v.impact, n: v.nodes.length, sample: v.nodes.slice(0,3).map(n => n.target.join(' ') + ' :: ' + (n.failureSummary||'').split('\n')[1]) })));
    results.push({ axe: p, width: w, violations: r });
    await ctx.close();
  }
  // Interaction: desktop dropdown
  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await ctx.newPage();
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    const t = [];
    await page.keyboard.press('Tab'); t.push(['1st tab = skip link', await page.evaluate(() => document.activeElement.className)]);
    await page.keyboard.press('Tab'); await page.keyboard.press('Tab');
    t.push(['3rd tab focus', await page.evaluate(() => document.activeElement.textContent.trim())]);
    await page.keyboard.press('Enter');
    t.push(['Enter opens mega', await page.isVisible('#mega-services')]);
    await page.screenshot({ path: `${SP}/shots/mega-desktop.png` });
    await page.keyboard.press('Escape');
    t.push(['Esc closes mega', !(await page.isVisible('#mega-services'))]);
    t.push(['focus returns to toggle', await page.evaluate(() => document.activeElement.classList.contains('nav__toggle'))]);
    await page.click('.nav__toggle'); await page.mouse.click(50, 600);
    t.push(['outside click closes', !(await page.isVisible('#mega-services'))]);
    await page.click('.nav__toggle'); await page.click('text=Paid advertising >> nth=0');
    t.push(['mega link navigates', page.url()]);
    results.push({ desktopNav: t });
    await ctx.close();
  }
  // Interaction: mobile menu
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    const page = await ctx.newPage();
    await page.goto(BASE + '/services/seo/', { waitUntil: 'networkidle' });
    const t = [];
    t.push(['nav hidden initially', !(await page.isVisible('#site-nav'))]);
    await page.tap('.menu-button');
    t.push(['menu opens', await page.isVisible('#site-nav')]);
    t.push(['aria-expanded true', await page.getAttribute('.menu-button', 'aria-expanded')]);
    t.push(['label Close', await page.textContent('.menu-button__label')]);
    t.push(['body scroll locked', await page.evaluate(() => document.body.classList.contains('menu-open'))]);
    await page.tap('.nav__toggle');
    t.push(['services expands', await page.isVisible('#mega-services')]);
    await page.screenshot({ path: `${SP}/shots/menu-mobile.png` });
    await page.keyboard.press('Escape');
    t.push(['Esc closes menu', !(await page.isVisible('#site-nav'))]);
    await page.tap('.menu-button'); await page.tap('.menu-button');
    t.push(['toggle closes', !(await page.isVisible('#site-nav'))]);
    const tap = await page.evaluate(() => [...document.querySelectorAll('a.btn, button')].filter(e => e.offsetParent).map(e => { const r = e.getBoundingClientRect(); return r.height; }).filter(h => h < 44).length);
    t.push(['visible buttons under 44px tall', tap]);
    results.push({ mobileNav: t });
    await ctx.close();
  }
  // Link check: anchors & internal targets
  {
    const ctx = await browser.newContext(); const page = await ctx.newPage();
    const internal = new Set(); const badAnchors = [];
    for (const p of pages) {
      await page.goto(BASE + p);
      const d = await page.evaluate(() => ({
        links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
        ids: [...document.querySelectorAll('[id]')].map(e => e.id)
      }));
      d.links.forEach(h => { if (h.startsWith('#')) { if (!d.ids.includes(h.slice(1))) badAnchors.push(p + h); } else if (h.startsWith('/')) internal.add(h.split('#')[0].split('?')[0]); });
    }
    const status = {};
    for (const u of internal) { const r = await page.request.get(BASE + u); status[u] = r.status(); }
    results.push({ badAnchors, internalLinkStatus: status });
    await ctx.close();
  }
  await browser.close();
  console.log(JSON.stringify(results, null, 1));
})();

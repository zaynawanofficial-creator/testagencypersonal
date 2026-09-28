# QA record

All results below are from this session's own runs (28 Sep 2026). Nothing is carried over from earlier agent reports.

## Environment
Local `astro preview` (port 4321) plus a second build with a dummy form endpoint (port 4322). Headless Chromium 1194 (Playwright 1.56). Fonts self-hosted and verified as loaded (`document.fonts`).

## Automated results: `npm test` → **473 passed, 0 failed, 1 not tested**
| Area | Coverage | Result |
|---|---|---|
| Layout | 12 pages × 360/390/768/1024/1280/1536 px: horizontal overflow, header height (80–96 desktop, 72–80 mobile), desktop nav on one line, no band under header, no console errors | Pass |
| Fonts | Manrope and Inter actually loaded on every page and width | Pass |
| Accessibility (automated) | axe-core WCAG 2.0/2.1/2.2 A+AA + best practice, 13 pages (incl. 404) at 390 and 1280 px | Pass (0 violations) |
| Desktop dropdown | Skip link first, Enter opens, Tab into panel, Escape closes with focus return, outside click closes, panel inside viewport, link navigates | Pass |
| Mobile drawer | At scroll 0 and 2,400px: starts at header bottom and fills viewport (no transform/backdrop clipping), aria-expanded, focus moves in, focus trapped, Escape closes with focus return, CTA reachable, touch targets ≥44px | Pass |
| Zoom | 640px viewport at 2× (≈200% zoom), SEO page, no overflow | Pass |
| Contact form | Package/service preselection from URL, unknown ID ignored, required-field errors with focus to first invalid field, email/URL validation, visible labels, truthful "not active" state with message preserved (no endpoint) | Pass |
| Form delivery states | Intercepted dummy endpoint: 500 → failure message and message kept; double click sends once; retry succeeds with the same idempotency key; package ID and name in payload; form cleared after success. **No real email sent.** | Pass (simulated) |
| No-JS | Packages, prices and exclusions in the SEO page HTML; nav links present | Pass |
| 404 | Unknown path returns HTTP 404 with the branded page (astro preview) | Pass |
| Catalogue | All 50 packages rendered on their family page with the exact approved display price | Pass |
| Output crawl | `scripts/check-output.mjs`: every internal link/anchor resolves, trailing slashes, one H1, title, description and canonical per page | Pass |
| Release guard | `npm run release` with gates open → blocked, nothing built or written | Pass |

## Not tested (with reason)
- **Firefox/WebKit:** engines not installed in this environment.
- **Real inbox receipt:** no approved endpoint or recipient yet (A4).
- **Hostinger behaviour** (HTTPS, `.htaccess`, 404 status, nested routes, caching): no temporary site yet (A6).
- **Manual screen-reader pass:** not performed. Keyboard behaviour is covered by automated tests only.
- **Performance/Core Web Vitals:** no Lighthouse run yet. Lab notes: the static HTML ships about 2 small inline scripts (header, form) and no framework runtime.

## Visual review
Screenshots inspected at readable scale: Home at 1280 and 390, SEO page at 1280 and 390, Services hub at 1280, Contact at 390, desktop dropdown, mobile drawer at two scroll positions. Defects found and fixed in this session:
- Wordmark rendered as "SEOBooster" (HTML compression removed the space).
- Footer logo tinted blue (a dark-link rule overrode the logo colour).
- Unbreakable "titles/descriptions/images/prices/SKUs" overflowed at 360/390px.
- USD badge wrapped under prices in the desktop table.
- Cramped two-line eyebrow on mobile.
- Stretched package facts panel.
- Services hub empty gap and potential orphan card.
- Short 404 meta description (found by the output crawler).

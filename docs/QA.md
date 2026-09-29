# QA record

All results are from this session's own runs. Nothing is carried over from earlier agent reports.

## Release: visual upgrade (29 Sep 2026)
Local `astro preview` (:4321) plus a form-endpoint build (`dist-formtest` on :4322). Headless Chromium 1194 (Playwright 1.56). Fonts self-hosted and verified loaded.

### Automated: `node tests/site.test.mjs` → **485 passed, 0 failed, 1 not tested**
| Area | Coverage | Result |
|---|---|---|
| Layout | 12 pages × 360/390/768/1024/1280/1440: no horizontal overflow, header 80–96px desktop / 72–80px mobile, desktop nav on one line, no band under header, no console errors, brand fonts loaded | Pass |
| Accessibility (automated) | axe-core WCAG 2.0/2.1/2.2 A+AA + best practice, 13 pages incl. 404, at 390 and 1280 | Pass (0 violations) |
| Navigation | Skip link; Services dropdown by keyboard, Escape with focus return, outside click, stays in viewport; mobile drawer at two scroll positions (unclipped, focus trap, Escape, 44px targets); 200% zoom | Pass |
| Images | Every image on 12 pages loads, has intrinsic size; decorative illustrations `alt=""`; worked-example image described as fictional; hero art inline and decorative; social image served as image/jpeg | Pass |
| Honesty labels | Worked example labelled "Illustrative example — fictional store, not client results"; deliverable previews labelled "not client data" | Pass |
| Services hub filter | Filter narrows rows, announces count, empty state, clear restores 50; without JS all 50 rows present and filter hidden; 7 chips resolve | Pass (found and fixed: filter visible without JS) |
| Contact form | Package/service preselection, validation, error focus, labels, truthful not-active state keeps message | Pass |
| Form delivery states | Intercepted dummy endpoint: failure keeps message, double click sends once, retry reuses idempotency key, package in payload, success clears. **No real email sent** | Pass (simulated) |
| Catalogue | All 50 packages rendered with the exact approved price; `npm run check:catalogue` against the approved index | Pass |
| Output crawl | Internal links, anchors, trailing slashes, one H1, title, description and canonical per page | Pass |
| Release guard | Blocked with gates open, nothing written | Pass |

### Lab performance, before (`39e8cbe`) → after, same machine and conditions (cache disabled; not field data)
| Page | Width | Transfer KB | Requests | LCP ms | CLS |
|---|---|---|---|---|---|
| / | 1440 | 114.7 → 125.0 | 10 → 17 | 236 → 112 | 0.009 → 0 |
| /services/ | 1440 | 111.3 → 122.0 | 7 → 15 | 124 → 108 | 0.001 → 0.001 |
| /services/seo/ | 1440 | 119.0 → 123.6 | 11 → 13 | 120 → 108 | 0 → 0 |
| /contact-us/ | 1440 | 97.8 → 98.3 | 6 → 6 | 112 → 104 | 0 → 0 |
| / | 390 | 114.7 → 123.1 | 10 → 15 | 96 → 76 | 0 → 0 |
| /services/ | 390 | 87.3 → 122.0 | 6 → 15 | 76 → 84 | 0 → 0 |
| /contact-us/ | 390 | 73.7 → 98.3 | 5 → 6 | 76 → 64 | 0 → 0 |
Found and fixed during measurement: a font-swap layout shift on /services/ (CLS 0.236) caused by late Manrope/Inter loading; fixed by preloading three font files. Cost: about 24 KB more on light pages. Extra requests are small cacheable SVG illustrations (1.5–2.1 KB each).

### Not tested (with reason)
- **Deployed preview in a browser:** this sandbox's network policy blocks coral-grouse-990787.hostingersite.com. Deployment is verified only through the Hostinger build status and log.
- **Firefox/WebKit:** engines not installed here.
- **Real inbox receipt:** no approved endpoint or recipient.
- **Manual screen-reader pass:** not performed.
- **Lighthouse / field Core Web Vitals:** not run. The figures above are lab measurements only.

## Previous release (28 Sep 2026)
473 passed / 0 failed on the same suite (before the visual upgrade). Superseded by the results above.

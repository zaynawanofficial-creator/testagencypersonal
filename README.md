# SEOBooster.uk: website rebuild

Status: **Stage 3 of 8. The design direction is ready for review. Not for publication.**

## Review it locally
```bash
python3 build.py                     # review build: noindex, approval markers visible
npx http-server site -p 8123 -c-1    # then open http://127.0.0.1:8123
```
Pages built so far: `/` (Home direction) and `/services/seo/` (the service-page pattern). All other links are planned pages and return 404 for now.

## Structure
| Path | Purpose |
|---|---|
| `docs/01-audit-fact-sheet.md` | Stage 1: what's verified, what's worth keeping, blockers, and claims we won't reuse |
| `docs/02-sitemap-and-service-model.md` | Stage 2: navigation, URL plan, page intents, draft redirect map, package model |
| `docs/03-stage-report.md` | Design system, what was built, test results, known limits |
| `docs/04-decisions-needed.md` | Grouped questions for the owner |
| `src/partials/` | Shared head, header and footer (a single source for every page) |
| `src/pages/*.main.html` | Page body content |
| `src/pages.json` | Per-page title, meta description, canonical, breadcrumbs |
| `site/` | Built output plus static assets (`site/assets/` is edited directly) |
| `build.py` | Assembles the pages, writes `robots.txt` and `sitemap.xml` |
| `tests/site.test.js` | Playwright + axe checks: layouts, keyboard, mobile menu, links |

## Safety rails
- The review build is `noindex, nofollow`, and `robots.txt` disallows all crawling.
- `python3 build.py --launch` **refuses to write anything** while any `◆` approval marker or evidence slot remains.
- No structured data is emitted except the breadcrumbs. Organisation schema waits until the legal entity is confirmed.

## Running the tests
```bash
npm i -D playwright axe-core
npx http-server site -p 8123 -s &
node tests/site.test.js   # screenshots go to test-output/shots
```

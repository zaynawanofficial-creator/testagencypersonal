# SEO Booster static website

Astro static build for SEOBooster.uk (Project A). Start with `CLAUDE.md` and `docs/STATUS.md`.

```bash
npm ci
npm run build && npm run preview   # http://localhost:4321 (preview build, noindex)
npm test                           # Playwright + axe; add --shots for screenshots in test-output/
npm run release                    # release guard (blocks until launch gates pass)
```

Editing packages: prices and scopes come only from the approved catalogue. After an approved revision, update `docs/source-master-brief.md`, then run `python3 scripts/extract-catalogue.py && npm run check:catalogue && python3 scripts/catalogue-doc.py`. Family copy, grouping and FAQs live in `src/data/families.ts`.

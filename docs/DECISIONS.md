# Decisions ledger

Hierarchy: current direct instructions > approved catalogue (26 Sep 2026) > brand system > older documents.

| ID | Decision | Source | Date |
|---|---|---|---|
| D-01 | Astro static site; no WordPress/WooCommerce/headless CMS; separate from the WordPress project | Master brief §Project boundary | 28 Sep 2026 |
| D-02 | Seller = Zain Ul Abedeen trading as SEO Booster; brand "SEO Booster" (two words); SEO BOOSTER LTD not presented as seller | Master brief §1 | 28 Sep 2026 |
| D-03 | Prices in USD, clearly labelled; exact display strings from the catalogue; no GBP | Master brief §1 | 28 Sep 2026 |
| D-04 | Catalogue approval is separate from checkout availability; all 50 packages `commerce: not-activated` until gates pass | Master brief §7A | 28 Sep 2026 |
| D-05 | Catalogue data extracted by script from the brief appendix and cross-checked against the index table (not hand-typed) | Implementation choice | 28 Sep 2026 |
| D-06 | Packages grouped within the seven family pages (no 50 thin landing pages); full scope in readable HTML; details disclosure holds exclusions/prerequisites/acceptance | Master brief §2 | 28 Sep 2026 |
| D-07 | Environment strategy: `SITE_MODE=preview` (default) emits noindex meta + `X-Robots-Tag` and canonicals on the preview origin; robots.txt allows crawling so noindex is visible. `release` (only via `scripts/release.mjs`) emits canonicals on https://seobooster.uk | Master brief §5, §7A | 28 Sep 2026 |
| D-08 | Release guard checks configuration BEFORE building, builds into a temp directory, crawls it, and only then promotes to `dist-release/` (previous kept for rollback). A blocked release writes nothing | Master brief §7A | 28 Sep 2026 |
| D-09 | Insights hidden from navigation, footer and sitemap until approved useful content exists (no fabricated articles) | Master brief §2 | 28 Sep 2026 |
| D-10 | Supplied logo not available in this workspace; a text wordmark "SEO Booster" is used in the logo slot. No invented symbol, no favicon until the authorised mark is supplied | Master brief §1 | 28 Sep 2026 |
| D-11 | Fonts self-hosted from @fontsource (Manrope 600/700, Inter 400/500/600, Latin subset, SIL OFL) | Master brief §3 | 28 Sep 2026 |
| D-12 | Contact form built with validation, honeypot, idempotency key, loading/success/failure/retry states; delivery NOT ACTIVATED until an approved endpoint and recipient exist. No mailto fallback shown until a public email is confirmed | Master brief §4, §7A | 28 Sep 2026 |
| D-13 | No evidence/proof blocks and no founder portrait until permissioned material is supplied; Home uses a process-led, founder-led explanation instead | Master brief §3 | 28 Sep 2026 |
| D-14 | Structured data limited to Organization/WebSite (Home), AboutPage (About) and BreadcrumbList; no FAQPage, Review or rating markup | Master brief §5 | 28 Sep 2026 |
| D-15 | Policy pages (privacy, cookies, terms, cancellation) not linked until drafted and reviewed; release guard requires them | Master brief §2 | 28 Sep 2026 |
| D-16 | The earlier prototype on this branch (commit c7f2f98: plain HTML, GBP challenge, invented "S" icon, review markers on-page) is superseded and removed. Reused: palette contrast rules, SERP-anatomy illustration concept, drawer-clipping lesson | Reconciliation | 28 Sep 2026 |
| D-17 | Home hero "0 ranking guarantees, by design" stat: design choice, open to change at design review | Design choice | 28 Sep 2026 |

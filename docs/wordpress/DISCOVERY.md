# WordPress route: discovery (phase 01, in progress)

Started 2 Nov 2026. Source: Hostinger API (read-only). The Elementor MCP endpoint was **not reachable**: the environment's network policy blocks `seobooster.uk` (proxy 403), so no page, product or settings data has been read from WordPress itself yet.

## Target (owner decision D-28)
Production `https://seobooster.uk`, WordPress install id 31317219, account u655401359. Staging copy exists at `staging.seobooster.uk` (id 31348747, created 30 Oct 2026) but the owner chose production.

## Production stack (as reported by Hostinger, 2 Nov 2026)
| Component | Version | Status | Notes |
|---|---|---|---|
| WordPress core | current | no core update available | |
| WooCommerce | 11.2.1 | active | Commerce engine for the kit's route A |
| Elementor | 4.3.5 | active | No Elementor Pro listed |
| MCP Adapter | 0.7.1 | active | Serves the MCP endpoint used by `seo-booster-elementor` |
| WoodMart (parent) / Woodmart Child | 8.6.6 / 1.0.0 | child active | Premium theme; licence status to confirm |
| Woodmart Core, WoodMart Images Optimizer | 1.1.9 / 1.4.0 | active | |
| Contact Form 7 | 6.2.4.1 | active | Current contact route; delivery not yet tested |
| MC4WP: Mailchimp for WordPress | 4.14.1 | active | Mailchimp account and list to confirm |
| Safe SVG | 2.5.2 | active | Allows the SVG illustrations from the Astro build |
| Hostinger Tools / Hub / Reach / AI | various | active | Hostinger AI has an update available |
| Hostinger Preview Domain ×2, Smart Auto Updates ×2 | | **inactive duplicates** | Cleanup candidates (needs approval) |
| Themes Twenty Twenty-Three/Four/Five | | inactive | Keep one default theme as a fallback |
No known vulnerabilities reported for any plugin or theme.

## Early conclusions
- The kit allows continuing existing WoodMart + Elementor work. Recommended: **keep WooCommerce + WoodMart + Elementor** and do not add a block theme or a second page builder (avoids the conflicting-builder risk the kit warns about).
- Reuse from the Astro project: the approved 50-package catalogue (`src/data/catalogue.json`), copy, tokens, SVG illustrations, and the honesty rules.
- Backups: the Hostinger API does not list backups for this hosting type. **Confirm a current backup in hPanel before the first production write.**

## Blockers
1. Network: allow `seobooster.uk` in the environment's Network access settings, then start a new session.
2. Backup confirmation for production (hPanel).
3. From the kit's DECISIONS list: payment gateway/processor for the seller (Zain Ul Abedeen trading as SEO Booster) in USD; tax setup; refund/terms approval; lead inbox.

## Next (once the MCP connects, read-only first)
Inventory pages, templates, menus, WooCommerce products/settings and Elementor kit; map the existing content against the approved catalogue; then write ARCHITECTURE.md, DATA_MODEL.md, ROUTES.md, RISKS.md, BUILD_PLAN.md per phase 01.

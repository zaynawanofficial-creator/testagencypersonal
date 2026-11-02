# WordPress route: discovery (phase 01, in progress)

Started 2 Nov 2026. Sources: Hostinger API, then (once the network allowed it) the Elementor MCP and the WP/WooCommerce REST API, all **read-only**. No production writes have been made.

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

## Live site state (read 2 Nov 2026 via MCP + REST)
- **Fresh install** (28 Oct 2026). WP 7.1.4, PHP 8.5.12, MariaDB 11.8, LiteSpeed, `wp_environment_type=production`, WooCommerce 11.2.1.
- **Content:** pages = Shop, Cart, Checkout, My account (WooCommerce defaults, 1 Nov); Privacy Policy and Refund and Returns Policy are drafts. Posts = "Hello world!" only. **Products: 0.** Menus: none (WoodMart locations `main-menu`, `mobile-menu` unassigned). Homepage = latest posts.
- **Elementor kit:** no global variables, no global classes, no components; Elementor Pro absent (component creation and site parts unavailable via MCP; header/footer would come from the WoodMart header builder, which the MCP cannot edit). Media library: only the WooCommerce placeholder (no logo).
- **WooCommerce settings:** currency USD; store country **US:CA (default, not real)**; store address empty; taxes off; coupons on; guest checkout on; account registration off. Payment gateways: only BACS, cheque and COD, **all disabled**.
- **Site settings:** title "SEO Booster", tagline empty, timezone empty (UTC), comments open by default, admin email accounts@seobooster.uk, one user (`admin`, administrator).
- **Search visibility: indexable.** robots.txt allows crawling, there is no noindex meta, and `wp-sitemap.xml` is published, including a **users sitemap that exposes the `admin` username**.
- **Legacy URLs:** all 23 legacy URLs in `docs/URL-MAP.csv` now return **404** (only `/` returns 200). Any search equity on them is being lost until redirects exist.

## Early conclusions
- The kit allows continuing existing WoodMart + Elementor work. Recommended: **keep WooCommerce + WoodMart + Elementor** and do not add a block theme or a second page builder (avoids the conflicting-builder risk the kit warns about).
- Reuse from the Astro project: the approved 50-package catalogue (`src/data/catalogue.json`), copy, tokens, SVG illustrations, and the honesty rules.
- Backups: the Hostinger API does not list backups for this hosting type. **Confirm a current backup in hPanel before the first production write.**

## Blockers
1. ~~Network~~: resolved 2 Nov 2026 (MCP and REST reachable).
2. Backup confirmation for production (hPanel) before the first write.
3. From the kit's DECISIONS list: payment gateway/processor for the seller (Zain Ul Abedeen trading as SEO Booster) in USD; tax setup; refund/terms approval; lead inbox.

## Next
Inventory pages, templates, menus, WooCommerce products/settings and Elementor kit; map the existing content against the approved catalogue; then write ARCHITECTURE.md, DATA_MODEL.md, ROUTES.md, RISKS.md, BUILD_PLAN.md per phase 01.

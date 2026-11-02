# Production change log: seobooster.uk

Every write to production is listed with its before value, so it can be reversed. No Hostinger backup existed (owner confirmed 2 Nov 2026; the API cannot create one on this plan). The before-values below were read immediately before each change.

## 2 Nov 2026: first approved batch (owner approval in chat)
| # | Change | Before | After | How to reverse |
|---|---|---|---|---|
| 1 | Site timezone (Settings → General) | empty (UTC) | Europe/London | Set timezone back to UTC |
| 2 | Default comment status | open | closed | Settings → Discussion |
| 3 | Default ping status | open | closed | Settings → Discussion |
| 4 | Post 1 "Hello world!" | publish | trash | Posts → Trash → Restore |
| 5 | WooCommerce currency | GBP (set by the reinstall; conflicts with the USD decision) | **USD** | WooCommerce → Settings → General |
| 6 | Store country | already GB when the batch ran | unchanged | n/a |
| 7 | Server and CDN cache cleared (Hostinger, seobooster.uk only) | CDN served HTML up to 7 days old | cleared | n/a |
| 8 | 7 product categories created | none | Digital Marketing 75, SEO 76, Content Writing 77, Web Design & Development 78, Website Maintenance 79, Graphic Design 80, eCommerce Services 81 | Delete the categories |
| 9 | 50 catalogue products created as **draft** (`scripts/wp/seed-products.py`) | 0 SB products | SKU SB-001…SB-050, product IDs 35531–35580 (50); virtual, sold individually; 39 fixed-scope packages priced, 11 from/monthly/per-word packages unpriced on purpose; `sb_commerce=not-activated` | Bin the SB-* products |

Verification: all 50 read back and compared with `src/data/catalogue.json` (name, SKU, draft status, price, category, display price, commerce flag). A script re-run creates nothing (idempotent).

## Observed during the batch (not made by Claude)
A WoodMart **corporate-2 demo import** ran on production during this session: front page set to "Home Corporate-2" (7339); pages About us, Contact us, Blog, Portfolio, Wishlist, Compare, Shop (47); 9 demo blog posts; 10 menus; about 300 media items; **12 published demo products** (furniture, IDs 232–411). Site still indexable. Demo content must be replaced or removed before launch.

## Pending
- Discourage search engines (Settings → Reading): not exposed by the REST API; owner or woodmart MCP.

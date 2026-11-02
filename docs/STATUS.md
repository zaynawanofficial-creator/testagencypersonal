# Status

Updated 29 Sep 2026. Branch `claude/seobooster-uk-website-m55o9k`. See the commit log for the exact commit.

## Milestone board
| Milestone | State | Notes |
|---|---|---|
| A0 Recover and establish | **Done** | Repo held one superseded plain-HTML prototype (c7f2f98), now replaced. Hostinger checked read-only: 5 WordPress sites, **no temporary static site**. Logo and PDFs not present in the workspace. |
| A1 Content and architecture | **Done** | 50 packages extracted and verified against the approved index (`npm run check:catalogue`). 7 family routes, URL map drafted (unknown SEO value kept as unknown). |
| A2 Representative experience | **Done; visual upgrade applied** | Visual upgrade brief (29 Sep): cobalt hero with original SVG artwork, 7 service illustrations, worked example, process outputs, simplified starting points, positive founder section, Services hub mosaic, chips and filter, shared family hero, deliverable previews, social card. |
| A3 Complete site content | In progress | Six non-SEO family pages need an editorial pass (they are accurate but lighter than SEO). Policy drafts not started. Insights hidden. |
| A4 Enquiry implementation | **Blocked** | Needs approved recipient inbox and a form-delivery service/endpoint. Form UI and states are built and tested against an intercepted dummy endpoint only. |
| A5 Commerce | Not started (gated) | Needs approved payment provider, tax configuration, policies and fulfilment capacity. |
| A6 QA and temporary deployment | **In progress** | Preview live at https://coral-grouse-990787.hostingersite.com (created by Zain; Git auto-deploy from this branch). Local QA complete. Deployed output checked only through Hostinger build logs: this sandbox's network policy blocks direct HTTP to the preview domain. |
| A7/A8 | Not started | Launch requires separate approval. |

## States
- **Built:** yes (13 pages). **Saved:** committed and pushed. **Deployed:** to the preview only (auto-deploy on push; verify the latest build in Hostinger). Production NOT deployed. **Tested:** locally in Chromium (docs/QA.md); deployed pages NOT browser-tested from here. **Approved:** NO.

## WordPress route: resume here (updated 2 Nov 2026)
Active work is on **production `seobooster.uk`** (owner's choice, D-28), WoodMart blocks only (D-30), hidden from search engines (D-31).
- Done: discovery (`docs/wordpress/DISCOVERY.md`); approved batches 1–2 (`docs/wordpress/CHANGELOG.md`): timezone, comments, currency USD, 50 catalogue products as drafts (`scripts/wp/seed-products.py`), demo products/posts binned, noindex on.
- Live state: WoodMart corporate-2 demo pages, menus and media still in place; 50 SB draft products; no payment gateway; no policies published.
- Tools: MCP servers `seo-booster-elementor` (Elementor) and `woodmart` (`@automattic/mcp-wordpress-remote` → MCP Adapter) in `~/.claude.json`; skill `woodmart-mcp` in `~/.claude/skills/`. **These live in the container, not the repo**: a fresh container needs them re-added (see D-27, D-29). REST writes use the same admin app password.
- **Next:** (1) `woodmart` MCP: discover abilities, read theme settings; (2) apply brand tokens in WoodMart theme settings (navy #152541, blue #2456E8, lime #D9F76B, paper #FAF9F6, Manrope/Inter); (3) replace demo Home/About/Contact with SEO Booster content from the Astro build (`src/pages`, `src/data/families.ts`); (4) service pages with the package groups; (5) 301 redirects from `docs/URL-MAP.csv`; (6) policies, lead inbox, payment gateway (owner inputs).
- Rules: log every production write in `CHANGELOG.md` with its before value; clear the Hostinger cache after visible changes; publishing or URL changes need owner confirmation.

## Deployments
| Date | Commit | Hostinger build | Result |
|---|---|---|---|
| 28 Sep 2026 | 39e8cbe | 01a0ea1f-20f0-72ca-bae7-ea003b879e93 | completed (first preview) |
| 29 Sep 2026 | 7449928 | 01a0ea9a-5914-720e-b278-f8b9742438b6 | completed; all build checks passed in the log (visual upgrade) |

## Resume action
1. `npm ci && npm run build && npm run preview`, then `npm test` (start `dist-formtest` on :4322 for the form-state tests; see docs/QA.md).
2. After any push: check the latest Hostinger build (`hosting_nodejs_list-builds` for coral-grouse-990787.hostingersite.com) and its log.
3. A3: editorial pass on the six other family pages; draft the policy pages (not published).
4. When supplied: logo → `public/` + `business.json.logo`, then re-run `node scripts/make-og.mjs`; founder photo → `src/assets/` via Astro `<Picture>` in the Home founder section and About (docs/ASSETS.md).

## Open blockers (need Zain)
1. Public email, lead-notification inbox and public phone/WhatsApp (if any). Launch model: enquiry/invoice-led (current) unless online checkout is approved.
2. Logo file and one real founder photo (optional client work with permission).
3. For in-browser checks of the deployed preview from this environment: allow `coral-grouse-990787.hostingersite.com` in the environment's network access settings.

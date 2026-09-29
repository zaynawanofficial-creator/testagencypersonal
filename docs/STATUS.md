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

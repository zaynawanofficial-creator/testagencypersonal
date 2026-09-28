# Stage 3: Visual system, header, Home direction and service-page pattern

## Visual system (proposed)
| Token | Value | Use | Rule |
|---|---|---|---|
| Midnight navy | `#152541` | Main text, dark bands, footer | 14.5:1 on Paper |
| Action blue | `#2456E8` | Links, primary buttons | 5.6:1 on Paper. **Never used as text on navy** (2.6:1). Use `#9DB8FF` there |
| Signal lime | `#D9F76B` | Highlights, markers, the CTA on dark | 12.7:1 with navy. **Never used as text on light** (1.1:1) |
| Paper | `#F7F9FC` | Page background | |
| Slate | `#4A5B70` | Supporting text | 6.6:1 on Paper |

- **Type:** Manrope 600–800 for headings, Inter 400–700 for body text, with system fallbacks. Sizes use a fluid `clamp()` scale.
- **Signature device:** a lime "highlighter" bar. It appears under the key headline phrase, in eyebrows, in process steps and in the icon. It is used sparingly, and only to mean "this matters".
- **Imagery:** no stock photos and no fake dashboards. The hero figure is an annotated search result for a **fictional, labelled** business, showing what SEO work actually changes.
- **Logo:** a temporary wordmark and "S" tile icon derived from the highlighter device (`site/assets/img/mark.svg`). ◆ It needs your approval or a replacement.

## What was built
- A shared header with a Services mega-panel (a click/keyboard disclosure, not hover-only), the primary CTA and a mobile menu.
- A shared footer, with contact and legal details left as approval markers.
- **Home:** what we do, who it's for (and who it isn't), a 4-step process, working commitments, evidence slots, how pricing works, and a CTA explaining what happens after contact.
- **SEO service page (the pattern for all service pages):** the problem, who it suits, scope, deliverables, process with timings, timeline, what we need from you, exclusions, packages (one-time, monthly and quoted, all unpriced), practical questions, related services, and the CTA.
- A build step with shared partials, per-page meta, canonical URLs, BreadcrumbList schema, and the sitemap/robots files, plus a launch guard.

## Test results (28 Sep 2026, headless Chromium)
| Check | Result |
|---|---|
| Horizontal overflow at 390, 768, 1280 and 1536 px, both pages | **Pass** (0 px) |
| One H1 per page, all images have `alt` | **Pass** |
| axe-core, WCAG 2.1 A/AA plus best practice, at 390 and 1280 px | **Pass (0 violations)**, after fixing 2 contrast defects it found |
| Keyboard: skip link first, Services opens with Enter, Esc closes and returns focus, outside click closes | **Pass** |
| Mobile menu: opens, `aria-expanded` updates, scroll lock, Services expands, Esc and toggle close it | **Pass** |
| Tap targets under 44 px (mobile) | **Pass** (0) |
| In-page anchor links | **Pass** |
| Internal links to unbuilt pages | **Expected 404s** (16 planned URLs) |
| `--launch` build with markers present | **Blocked, nothing written** (as intended) |

Defects found by visual review and fixed:
- The mobile menu panel was clipped to the header's height. The header's `backdrop-filter` became the containing block for the fixed-position panel.
- "Graphic design" was orphaned on its own row of the Home services grid.
- The Related services cards stacked full-width on desktop.
- The two contrast failures that axe found.

## Known limits
- **Fonts weren't rendered in testing.** Google Fonts is unreachable from this environment, so the screenshots use system fallbacks. The layout is checked, but final type rendering needs a look in a normal browser.
- The live site, RankRightMedia and Companies House couldn't be reached. The audit relies on search-index snippets.
- No contact form yet (Stage 6). It depends on the hosting and form-destination decisions.
- Tested in Chromium only. Safari and Firefox checks are planned for Stage 7.

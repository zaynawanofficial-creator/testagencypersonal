# Asset manifest

All visual assets on the site are listed here. No stock imagery, AI-generated images, people, offices, client logos or client results are used. No image-generation tool was available in this environment, so the two raster assets in the visual brief (`hero-growth-studio`, `example-wallet-product`) use the brief's specified **fallback**: original SVG compositions.

| ID / file | Type | Source / owner | Created | Licence / permission | Dimensions | Usage | Alt / decorative | Served size |
|---|---|---|---|---|---|---|---|---|
| `hero-growth-studio` → `src/components/HeroArt.astro` | Inline SVG (fallback for raster) | Original, drawn in code for SEO Booster (from production prompt A: three interface panels joined by a lime path; no text, numbers or charts) | 29 Sep 2026 | Project-owned original code | viewBox 800×600 (4:3) | Home hero; social card | Decorative (`aria-hidden`) | Inline in HTML (~6 KB); no request |
| `service-seo.svg` | SVG | Original | 29 Sep 2026 | Project-owned | 640×480 | Home SEO card, SEO page hero, hub mosaic/heading | `alt=""` | 1.9 KB |
| `service-digital-marketing.svg` | SVG | Original | 29 Sep 2026 | Project-owned | 640×480 | Home card, family hero, hub, starting points | `alt=""` | 1.6 KB |
| `service-content-writing.svg` | SVG | Original | 29 Sep 2026 | Project-owned | 640×480 | Home card, family hero, hub | `alt=""` | 1.5 KB |
| `service-web-design.svg` | SVG | Original | 29 Sep 2026 | Project-owned | 640×480 | Home card, family hero, hub, starting points | `alt=""` | 1.8 KB |
| `service-maintenance.svg` | SVG | Original (no uptime figures) | 29 Sep 2026 | Project-owned | 640×480 | Home card, family hero, hub, starting points | `alt=""` | 1.7 KB |
| `service-graphic-design.svg` | SVG | Original | 29 Sep 2026 | Project-owned | 640×480 | Home card, family hero, hub | `alt=""` | 1.7 KB |
| `service-ecommerce.svg` | SVG | Original (no transactions or figures) | 29 Sep 2026 | Project-owned | 640×480 | Home card, family hero, hub | `alt=""` | 2.1 KB |
| `example-wallet-product` → `example-wallet.svg` | SVG (fallback for raster) | Original vector still life of a **fictional**, unbranded wallet | 29 Sep 2026 | Project-owned | 640×480 (4:3) | Home and SEO worked example | Informative: "Illustration of a tan leather bifold wallet… (fictional product)" | 1.8 KB |
| `BrandArt.astro` | Inline SVG | Original abstract brand motif (lime path linking four stages) | 29 Sep 2026 | Project-owned | 400×400 | Home founder, About, Contact | Decorative | Inline |
| Process icons (in `Process.astro`) | Inline SVG | Original four-icon set (brief, plan, implementation, report) | 29 Sep 2026 | Project-owned | 32×32 | Process sections | Decorative | Inline |
| `og-default.jpg` | JPEG | Rendered by `scripts/make-og.mjs` from brand HTML (wordmark, Manrope/Inter, hero SVG). Not an AI image | 29 Sep 2026 | Project-owned | 1200×630 | `og:image` / Twitter card on all pages | Alt in `og:image:alt` | 68 KB |
| Fonts: Manrope 600/700, Inter 400/500/600 | WOFF2 | @fontsource (npm) | n/a | SIL Open Font License 1.1 | Latin subset | Site-wide, self-hosted; Manrope 700, Inter 400/500 preloaded | n/a | ~24 KB each |
| `zain-founder` | Photo | **Not supplied** | n/a | Requires the owner's photo and permission | 4:5 target | Home founder, About | n/a | Text-led fallback in place; no placeholder frame |
| Logo `01-SEOBooster-logo-350x150.png` | PNG | **Not supplied to this workspace** | n/a | Owner's asset | 350×150 | Header, footer, social card | n/a | Text wordmark "SEO Booster" used; no invented symbol |

## Rules
- Decorative illustrations use empty `alt` or `aria-hidden`. Informative images have short, accurate alt text plus adjacent HTML explanation.
- All images have intrinsic `width`/`height`. Only above-the-fold images are eager (family hero art, the first hub mosaic tiles); everything else is lazy-loaded.
- To replace a fallback with a raster: put the original in `src/assets/`, serve it through Astro's `<Image>`/`<Picture>` with responsive widths and AVIF/WebP plus a JPEG fallback, keep it text-free, and update this table.
- Re-run `node scripts/make-og.mjs` when the hero art changes or the approved logo arrives.

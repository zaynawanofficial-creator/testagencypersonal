# SEO Booster: static website (Project A)

**Read first every session:** `docs/STATUS.md` (resume point), `docs/DECISIONS.md`, then `docs/source-master-brief.md` (the authoritative master brief, including the approved 50-package catalogue).

## Identity
- Public brand: **SEO Booster** (exactly two words). Website domain label: SEOBooster.uk.
- Seller: **Zain Ul Abedeen trading as SEO Booster**. Never present SEO BOOSTER LTD (15859293) as the seller.
- Audience: global SMEs and ecommerce brands. British English copy. Prices in **USD**, clearly labelled.
- Legal address (65 High Street, Waltham Cross, EN8 7AE) only where legally or transactionally required; never on marketing pages.

## Architecture
Astro static site (no WordPress, no React app, no database, no runtime server). TypeScript data in `src/data/`.
- `src/data/catalogue.json`: authoritative 50 packages, extracted from the brief by `scripts/extract-catalogue.py`, verified by `scripts/verify-catalogue.py`. Do not hand-edit prices.
- `src/data/families.ts`: seven service families: copy, package grouping (every package exactly once, checked at build), FAQs.
- `src/data/business.json`: launch-gated operational values (public email, phone, logo, policies, Insights visibility). `null`/`false` = not confirmed.
- `src/data/site.ts`: business configuration and the preview/release mode.
- `src/components/`: Header (with mobile drawer), Footer, Logo, PackageComparison, PackageDetails, Price, ClassChip, Process, Faq, EnquiryForm, Breadcrumbs.

## Environment boundaries (never cross without explicit approval)
- **Do not touch** `seobooster.uk` (production WordPress on Hostinger), `staging.seobooster.uk`, DNS, email routing, or any other Hostinger site (shopvious.com, iamfamous.uk, rankrightmedia.online, buyfollowerssingapore.com).
- No temporary static Hostinger site exists yet (checked 28 Sep 2026). Creating one needs approval.
- No live payments. Commerce is `not-activated` for all packages.

## Commands
```bash
npm ci
npm run build          # catalogue check + astro check + preview build (noindex) + .htaccess + output crawl
npm run preview        # serve dist on :4321
npm test               # Playwright + axe suite (needs preview running; FORM_BASE build optional)
npm run release        # release guard; refuses to build while any launch gate is open
```
Report "built", "saved", "deployed", "tested" and "approved" as separate states.

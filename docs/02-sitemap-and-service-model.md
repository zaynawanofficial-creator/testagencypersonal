# Stage 2: Sitemap, service model and page goals (proposal)

## Principles
- **Each URL answers one search intent.** The Services hub covers the broad "digital marketing services" intent, so there's no separate "digital marketing" page competing with it.
- **Build no page without substance.** A service only gets its own URL when we can write scope, exclusions and a process for it. Otherwise it's a section on a parent page.
- **Quote-led by default.** A "Buy" option appears only for fixed-scope packages you've approved, and only once payment has been tested.

## Proposed navigation

```
Services ▾        Approach   About   [Insights]*   Contact   [Request a proposal]
 ├ SEO (featured)
 │   ├ Local SEO
 │   ├ SEO audit (fixed scope)
 │   └ eCommerce SEO
 ├ Paid advertising (Google, Meta, TikTok)
 ├ Content writing
 ├ Website design & development
 ├ Website maintenance
 ├ eCommerce services
 └ Graphic design
```
\* Insights appears only if there's a real publishing plan: at least 2 articles a month, with a named author.

## URL plan and page goals

| URL | Primary intent (example query) | Page goal | Status |
|---|---|---|---|
| `/` | "SEO agency UK" (brand + category) | Explain the offer and route visitors to a service or to contact | Prototype built |
| `/services/` | "digital marketing services UK" | Hub: all services, how to choose, how pricing works | Planned |
| `/services/seo/` | "SEO services UK" | Pillar page: scope, process, packages and the next step | **Prototype built (pattern page)** |
| `/services/seo/local-seo/` | "local SEO services" | Google Business Profile, citations, location pages | Planned |
| `/services/seo/seo-audit/` | "SEO audit service" | Fixed-scope package. First candidate for a purchasable package | Planned |
| `/services/seo/ecommerce-seo/` | "ecommerce SEO agency" | Category and product-page SEO for online stores | Planned. Check it doesn't overlap `/services/ecommerce/` |
| `/services/paid-advertising/` | "PPC agency UK", "Facebook ads agency" | Google, Meta and TikTok ads management. Separate child pages only once each has depth | Planned |
| `/services/content-writing/` | "SEO content writing services" | Content briefs, articles, service-page copy | Planned (confirm offered) |
| `/services/website-design/` | "website design agency UK" | Design and build, with development folded in | Planned |
| `/services/website-maintenance/` | "website maintenance services" | Care plans. Likely recurring | Planned (confirm offered) |
| `/services/ecommerce/` | "Shopify / WooCommerce store setup" | Store builds, product setup, conversion fixes | Planned (confirm offered) |
| `/services/graphic-design/` | "graphic design for social media / brand" | Ad creatives, social templates, brand assets | Planned (confirm offered) |
| `/approach/` | "how does an SEO agency work" | How we work, reporting, what we don't promise | Planned |
| `/about/` | Brand | Who is behind it, using real people only | **Blocked: needs your input** |
| `/contact/` | Brand + "contact" | Enquiry form, with a package pre-selected from `?package=` | Planned |
| `/insights/` | Informational | Only if there's a publishing plan | Decision needed |
| `/privacy/`, `/cookies/`, `/terms/` | n/a | Legal. Must reflect real practice | Blocked (B8) |

## Draft redirect map (301 unless noted)

| Old URL | New URL |
|---|---|
| `/search-engine-optimization/` | `/services/seo/` |
| `/digital-marketing-services/` | `/services/` |
| `/web-designing/` | `/services/website-design/` |
| `/website-development/` | `/services/website-design/` |
| `/facebook-marketing-services/` | `/services/paid-advertising/` |
| `/instagram-marketing-services/` | `/services/paid-advertising/` (or a social page if organic social stays) |
| `/email-marketing/` | `/services/email-marketing/` if kept, otherwise `/services/` |
| `/contact-us/` | `/contact/` |
| `/blog/` (and posts) | `/insights/…` if kept, otherwise map each post to its closest service page |
| `/terms-conditions/` | `/terms/` |
| `/refund-policy/` | `/terms/#refunds` |
| `/product-category/seo/` | `/services/seo/` |
| `/product/advanced-seo-package/`, `/product/on-page-optimization-package/` | `/services/seo/#packages` |
| `/product/local-pro-plan/` | `/services/seo/local-seo/` |
| `/product/*-facebook-*`, `/product/*instagram*`, `/product/social-starter-plan/` | `/services/paid-advertising/` |
| `/product/starter-digital-marketing-plan/`, `/product/elite-marketing-mastery-plan/` | `/services/` |
| Engagement products (likes, views), if retired | 410 Gone, or `/services/paid-advertising/` |

**Before launch:** export the full URL list from the current WordPress site, plus Search Console's top pages and linked pages. The list above comes only from the search index, so it's incomplete.

## Package model (how offers appear on pages)

| Type | How it's shown | Purchase? |
|---|---|---|
| Fixed scope, one-time (for example an SEO audit) | Price in USD, "one-time", deliverables, turnaround | Yes, once approved and payment has been tested |
| Fixed scope, monthly (for example local SEO) | Price in USD "per month", minimum term, how to cancel | Only if you explicitly approve a subscription |
| Variable (ads management, builds, content volume) | "Quote after a short call", what affects the cost | No. Enquiry only |

**Currency challenge:** you asked for USD. UK buyers expect GBP, and showing USD on a .uk agency site will cost conversions with UK SMEs. USD makes sense if your real buyers are international. My recommendation is GBP, with USD only if most of your buyers are outside the UK. Your call.

## Purchase journey (once approved)
1. Package card, then a **scope confirmation** page (what's included and excluded, turnaround, one-time or recurring)
2. **Required client info**: website URL, business name, main goal, account access method
3. **Payment**: Stripe Checkout recommended (hosted, PCI handled by Stripe, supports GBP and USD)
4. **Confirmation page and email**: order reference, what happens next, and when
5. **Fulfilment handoff**: order notification to the named owner, and an onboarding form link sent within an agreed time

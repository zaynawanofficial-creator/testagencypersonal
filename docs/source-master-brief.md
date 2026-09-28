# SEO Booster: Claude master prompt and delivery plan
## Project A: Astro static website, without WordPress

Prepared for Zain • 28 September 2026 • Standalone handoff

**How to use:** Create a separate Claude project and upload this entire file as project knowledge. Attach the supplied SEO Booster logo and any approved client assets. The catalogue appendix is embedded, so this brief does not depend on another prompt. Say: “Follow this master brief. Inspect the existing static project, reconcile its current state, and begin the first unfinished milestone. Keep WordPress and production untouched.” Use Claude Code or a genuinely connected development environment for implementation; ordinary chat without file/deployment access cannot itself build or publish the site.

---

## Project boundary and architecture

Build **SEO Booster as an Astro static website without WordPress**, using a separate repository/workspace and another Hostinger site with a temporary domain. This is the selected static route, not an invitation to compare platforms again. Do not use WordPress as a headless CMS, call the WordPress database, install WooCommerce, or edit `staging.seobooster.uk`. Do not touch `seobooster.uk`, DNS, email routing or the ongoing WordPress project. Do not assume a temporary site exists merely because an earlier assistant planned one.

Use prerendered HTML, modern CSS and minimal browser JavaScript. TypeScript is preferred for data validation and interactive code. Use Astro content collections or another documented typed content structure for services and Insights. Keep the marketing frontend static; forms and verified payments need separately supported services/endpoints. Do not describe a fake client-only submit handler as backend functionality. Do not add a full React application, database, custom customer dashboard or runtime server without a concrete requirement and a recorded architecture decision.

The same agency content, prices and brand apply here as in the WordPress alternative, but the implementation and deployment remain entirely independent. No WordPress-specific instructions from older files apply to this project's code.

### Existing-work caution

The attached historical Claude log reports a branch named `claude/seobooster-uk-website-m55o9k`, two pages, incomplete routes, review markers and test passes. Another continuation reports an Astro build with seven families and 50 package records, email-only contact and checkout disabled. These are historical reports, not an authenticated inspection of the current repository, branch or deployed site. Locate the actual project only through available authorised access; compare its files, commits, tests and package data to this brief. Reuse sound work and correct defects. Do not create a second unrelated codebase simply because the branch name differs, and do not merge reported work blindly. A pushed branch is not a deployed Hostinger website.

## Your role and required outcome

You are my lead designer, developer, content strategist and QA engineer for **SEO Booster**, an agency serving global SMEs and ecommerce brands. My name is Zain Ul Abedeen. Build a beautiful, inspiring, modern, credible and commercially functional agency website. SEO is a clear strength, within the complete approved seven-family offer.

This is an implementation assignment. Produce working, maintainable deliverables and evidence. Do not substitute repeated audits, wireframes, a generic template, a written plan or reassuring progress messages for the build. The website must look designed as a complete experience, with strong composition, typography and mobile behaviour. Functional navigation alone is not design completion.

Treat this document as a standalone project brief. Do not combine this project with the alternative implementation. Never overwrite the other project or the production domain. Follow the platform boundary specified above.

## 1. Authoritative facts and decision hierarchy

Apply current direct instructions first, then the approved catalogue and its Decisions sheet, then the brand system, then older project documents. Old assistant proposals and demo content are not business facts. If evidence conflicts, record the conflict and use the latest explicit decision; ask only if a material conflict remains unresolved.

The approved baseline is `SEO-Booster-Service-Catalog-Approved.xlsx`, approved 26 September 2026. Its complete 50-package specifications and other business decisions are included in the appendix of this document. The numeric column still carries the historical label “Draft price USD”; the workbook title, Decisions sheet and row approval statuses establish these as the approved baseline. Preserve exact fixed prices, “From” qualifiers, billing periods, service-fee qualifiers, scopes and exclusions. Do not replace them with cheaper competitor prices, new tiers or GBP.

| Field | Recorded decision |
| --- | --- |
| Public brand | SEO Booster, exactly two words |
| Website brand/domain | SEOBooster.uk; production is protected until a separate launch decision |
| Seller | Zain Ul Abedeen trading as SEO Booster |
| Audience | Global SMEs and ecommerce brands; British English website copy |
| Position | Accessible professional; direct involvement and clear scope |
| Delivery model | Zain-led delivery with vetted specialists |
| Core platforms served | WordPress, WooCommerce and Shopify; custom technologies by proposal |
| Approved paid channels | Google/YouTube, Meta, Microsoft, LinkedIn, TikTok and Pinterest; specialist availability scoped per proposal |
| Social service scope | Organic, paid, content and publishing; community hours capped in the proposal |
| Multilingual work | Available through appropriate specialists, quote-led with locale and review method defined |
| Currency | USD. Clearly label US dollars; no silent local-currency substitution |
| Fixed packages | Paid in full; activate purchasing only after operational gates pass |
| Bespoke work | Proposal and milestone payments |
| Monthly work | Paid in advance; month-to-month; seven days’ notice before the next billing period |
| Third-party costs | Client-funded unless explicitly included |
| Revision principle | Usually one or two consolidated scoped rounds; exact package terms take priority |
| Lead times | Catalogue baseline, starting after required inputs/access; capacity must support hard promises |
| Tax wording | “Applicable tax determined and shown at checkout”; verify configuration before payment activation |
| Cancellation principle | Completed work and committed third-party costs deducted from any approved cancellation refund; final policy still requires review |
| Legal/transactional address | 65 High Street, Waltham Cross, England, EN8 7AE, where legally or transactionally required |
| Address presentation | Keep the address off marketing pages; do not depict it as a staffed office or visitor location |
| Ecommerce operations | Client remains merchant of record; no assumption that SEO Booster owns inventory or holds client funds |

Do not present SEO BOOSTER LTD, company number 15859293, as the current active seller. Use the approved individual trading identity. Do not reopen the seller or USD decision merely because an earlier Claude audit questioned it. This brief records the business decision; it does not certify legal or tax compliance.

### Contact evidence, not yet a chosen primary channel

The supplied historical Contact PDF lists `zain@seobooster.uk`, `support@seobooster.uk`, `+923016711170` and `+447380817151`. The About PDF additionally contains a personal Gmail address and a Pakistan street address. Do not import those personal details, reuse conflicting addresses, or assume either phone is the chosen public WhatsApp number. The legal-address rule above supersedes old marketing-page address blocks.

Prepare contact components with configurable values. Confirm the primary public email, lead-notification recipient and public phone/WhatsApp choice before activating the final contact route. A historical email address is not proof of a working inbox. Test receipt with an authorised controlled submission. Do not claim a mailto link is a functioning lead form.

### Evidence and legacy claims

The existing About material supports a founder-led story and a Discovery → Strategy → Execution → Reporting process. Rework it into coherent copy. It also contains inconsistent company/team language and experience claims. Do not publish “18 years”, “over a decade”, WordPress-core contribution claims, guaranteed results, team size, certifications, awards, review counts or client logos without specific evidence and permission. Absence of proof is not proof that an individual claim is false; omit it until substantiated.

The supplied logo is `01-SEOBooster-logo-350x150.png`, a transparent navy/blue mark with the tagline “PROFESSIONAL SEO SERVICES”. Use the actual asset, preserve its aspect ratio and test its readability. Request the source SVG/high-resolution original only if required; the supplied PNG is enough to begin. Do not invent a replacement arrow symbol. Derive a favicon from an authorised mark only, checking legibility at small sizes.

## 2. Offer structure and sitemap

The approved families and proposed canonical service paths are:

| Family | Path |
| --- | --- |
| Digital Marketing | `/services/digital-marketing/` |
| SEO | `/services/seo/` |
| Content Writing | `/services/content-writing/` |
| Web Design & Development | `/services/web-design-development/` |
| Website Maintenance | `/services/website-maintenance/` |
| Graphic Design | `/services/graphic-design/` |
| eCommerce Services | `/services/ecommerce/` |

Build Home `/`, Services `/services/`, the seven family pages, About `/about/`, Our Approach `/our-approach/`, Contact `/contact-us/`, and Insights `/insights/` with article and appropriate archive templates. Add privacy, cookies, service terms and cancellation/refund information reflecting actual approved practices. Policy drafts may be prepared during the build; they are not approved legal advice. Prepare a useful 404 page and form success/error states.

Preserve valuable existing slugs where evidence supports them. These paths are the approved catalogue's baseline service paths, not permission to blindly redirect established pages. Build a keep/improve/redirect/retire inventory using supplied exports and available search-performance evidence. If production access has been excluded, use exports and project files; do not touch production just to make the inventory look complete. Unknown SEO value stays explicitly unknown. Do not invent a 25-URL redirect map from an old assistant report.

Do not create 50 thin landing pages merely because the catalogue has 50 rows. Group packages meaningfully within the seven service pages. Give each package complete readable scope through an accessible detail section/page as appropriate. Create extra indexable subservice pages only for a distinct intent and sufficient original content. Keep overlapping Conversion Review and Ecommerce CRO Audit audiences clear. Distinguish design-only packages from design-and-build packages.

Navigation: logo/home link, Home, Services, Our Approach, About, Insights, and a single “Discuss your project” CTA to Contact. The Services dropdown may expose seven families without overwhelming the header. Mobile must provide the same destinations and a clear enquiry route. Hide an empty Insights destination until there is useful approved content, recording that choice. Do not leave links returning 404 in a review-ready milestone.

### Service-page content contract

Every family page needs a specific H1 and proposition, who it suits, problems addressed, scope, deliverables, engagement process, client inputs, realistic timeline, exclusions, revision rules, evidence if available, relevant FAQs, related services and a next step. Use the appendix's exact package limits. Never broaden “up to 25 products” to unlimited, or an outreach service fee to guaranteed placement.

Use a readable comparison and detail structure rather than a wall of pricing cards. At mobile sizes use labelled stacked details or an accessible table with deliberate scrolling; never clip essential scope. Display approved prices even if payment activation is still pending, with an honest enquiry CTA. Fixed-scope, bespoke and ongoing offers must be visibly distinct. Do not add “most popular”, savings badges, urgency, outcome guarantees or star ratings without evidence.

Approved link-related work must retain its limitations: legitimate business profiles/citations, quality research, transparent outreach and reporting; no manufactured endorsements or promises of dofollow, indexation, DA, placement or rankings. Paid placements require client approval and appropriate disclosure/link qualification under current platform guidance. Fake likes/views packages from legacy content are outside this approved catalogue; do not reintroduce them.

Later-only services remain later: 24/7 incident response, marketplace operations for Amazon/eBay/Etsy, and printing/packaging production or fulfilment. Do not advertise them as standard capability.

## 3. Visual direction: Measured momentum

Create calm authority with a recognisable blue signal and restrained lime highlights. Aim for an excellent modern agency site with thoughtful editorial composition and convincing offer presentation. Avoid both an anonymous SaaS-card template and an overdecorated concept that obscures services.

| Token | Specification |
| --- | --- |
| Ink / heading colour | `#152541` |
| Primary action blue | `#2456E8` |
| Restrained lime accent | `#D9F76B` |
| Paper background | `#F7F9FC` |
| White | `#FFFFFF` |
| Body slate | `#4A5B70` |
| Borders | `#DDE5EF` |
| Heading font | Manrope 600/700 |
| Body/navigation/control font | Inter 400/500/600 |
| Body starting point | 17px, line-height 1.6 |
| Content width | Approximately 1200px |
| Hero heading starting point | 56–64px desktop; 38–42px mobile, adapted to actual copy |
| Section heading starting point | 36–44px desktop |
| Rhythm | 8px-based spacing; generous but intentional section spacing |
| Cards | Around 16px corner radius; restraint in shadows and nesting |

Use licensed locally served font files where feasible, with suitable fallbacks. Verify the actual rendered fonts; a screenshot with fallback fonts is not final typography approval. Choose sizes responsively rather than forcing every heading into the same number of lines. Dark text on lime is appropriate; lime on white and blue text on navy require careful contrast verification. Pairwise palette checks do not prove component-level accessibility.

Create coherent buttons, text links, chips, cards, service comparisons, input fields, error messages and focus states. A token system must control these consistently. Use blue for primary action, not every decorative surface. Dark sections should be purposeful accents within a predominantly light site.

### Header requirements, learned from the failed version

The earlier header was rejected for looking basic and awkward, with huge arrow icons and a blank band beneath it. Do not copy that design or call it complete because links work.

Use the supplied full logo at a readable size; balanced logo/nav/CTA proportions; a quiet white surface; clear active/hover/focus states; a subtle border or restrained sticky shadow. Start around 80–96px desktop and 72–80px mobile, refining for the actual logo. Keep the desktop menu on one line until an intentional mobile breakpoint. Mobile controls need usable touch targets, an accessible open/close button and a discoverable enquiry path.

Test sticky transitions, page scroll, dropdown boundaries, focus return, Escape handling, zoom, and long menu labels. A fixed or transformed ancestor must not clip the mobile drawer. No content-hidden-under-header problem or unexplained spacer band. Diagnose actual margins/padding/sticky placeholders; do not conceal the defect with arbitrary negative margins.

### Home composition

Develop one coherent direction, not several unfinished options. Build the header, Home and a representative SEO service page to production-level visual quality before scaling templates.

Home should have: (1) clear audience/offer hero with “Discuss your project” and a secondary service route; (2) useful service organisation across all seven families; (3) evidence when permissioned, otherwise a concrete delivery/process explanation; (4) an engaging process section; (5) selected package/engagement paths without drowning the page in all 50 offers; (6) honest founder-led positioning; (7) practical FAQs where useful; (8) a confident final contact CTA and coherent footer. Vary composition and section rhythm. Avoid an orphaned final service card; a seven-family layout must feel intentional.

Use real authorised work, purposeful diagrams, editorial graphics or relevant product/site screenshots. Do not present stock models as the team, stock logos as clients, abstract growth graphs as results or empty evidence slots as trust signals. No autoplay hero carousel, generic boardroom/handshake imagery, fake dashboard metrics or decorative animation loops. Respect reduced motion. If proof is absent, omit the proof block cleanly; internal review notes belong outside visitor-facing content.

Write specific British English. Explain what is delivered, who it is for, limits and next steps. Avoid vague “we transform your business” filler, keyword stuffing and unsupported superlatives. Do not promise rankings, revenue, AI citations or guaranteed growth.

## 4. Functional and commercial acceptance

Every visible CTA needs a real destination and truthful behaviour. Prepare a primary enquiry form with visible labels, name, email, optional website, service/package interest and message. Budget and timing can be optional if useful. Phone should not be mandatory without a business reason. Carry selected package ID/name into the enquiry reliably; validate on the receiving side. Provide loading, success, validation, delivery-failure and retry behaviour without losing the user's message.

Use a domain-authenticated sender, visitor email as Reply-To, reasonable spam controls, least-privilege access and appropriate data retention. Test input handling, duplicate submissions, spam rejection and actual inbox receipt. A green on-screen message alone is not delivery evidence. Do not expose API keys, mail credentials or personal submission content in client code, analytics or public logs.

For purchases, validate approved seller details, gateway eligibility for these services and USD, tax configuration, terms/privacy/cancellation policy and fulfilment capacity first. Use test mode and authorised test identities. A purchase is complete only when package/price/scope match, payment state is verified, confirmation is correct, an order/work record exists, and the fulfilment owner receives the brief. Test failure, cancellation, duplicate events and relevant refund handling. Never trust a browser success URL as payment proof.

Recurring billing is NOT already approved technically. A monthly price can use a proposal or verified manual invoicing process until a supported subscription solution is selected and tested. Show start dates, renewal/cancellation terms and customer management clearly if automated subscriptions are later activated. Never sell a one-time payment as automatic monthly service.

Analytics should distinguish enquiries, CTA clicks and verified purchases. Do not count a mailto click as a submitted lead or a thank-you page visit as paid revenue. Install nonessential tracking only according to the approved privacy/consent configuration. Do not configure tax rules, legal policies, cookie classifications or processor eligibility from guesses; obtain the relevant operational facts and current authoritative guidance.

## 5. Search, GEO/AEO and accessibility

Make the site useful and crawlable rather than claiming a special AI-ranking shortcut. Give each page a distinct intent, readable HTML copy, one meaningful H1, logical headings, a unique title/description, sensible internal links and accurate image alternatives. Provide verified organisation/person/service information consistent with visible content. Use truthful structured data where applicable; never invent reviews, ratings or FAQ claims to chase rich results.

Use descriptive URLs, appropriate canonicals, sitemap generation, real status codes, a useful 404 and an explicit redirect map. Avoid redirect chains, universal homepage redirects and accidentally indexable search/filter/test pages. Privacy protection and noindex are separate: robots.txt alone is not privacy, and blocking crawling can prevent a crawler from seeing noindex. Check the final host's response and HTML, not just a setting checkbox. Production indexability changes happen only at authorised launch.

For answer-engine usefulness, explain service fit, deliverables, exclusions, process, cost drivers and practical questions directly. Use source-backed statements, accurate authorship, dates where meaningful and clear entity identity. Do not add speculative AI schema or treat `llms.txt` as a substitute for SEO. Verify current official guidance during implementation; no ranking/citation promises.

Target WCAG 2.2 AA for the relevant components: semantic landmarks, usable keyboard order, visible focus, sufficient contrast, labelled fields/errors, accessible dropdowns/drawers, reduced motion, meaningful alt text and touch targets of approximately 44px where practical. Run automated checks AND manual keyboard/screen-reader spot checks. Zero axe findings does not certify full accessibility compliance.

Test at 360, 390, 768, 1024, 1280 and 1536px, plus zoom and intermediate widths. Check header, package details, forms, footer and long text, not only the hero. Use Chromium and a second engine/device when available; state browser coverage honestly. Capture and inspect actual screenshots at readable scale.

Set performance budgets, optimise images and font loading, minimise unnecessary JavaScript and avoid layout shifts. Aim for good Core Web Vitals (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile when field data exists). Record lab conditions and metrics separately; a Lighthouse run cannot prove field INP or promise a permanent score. Prioritise no broken critical journeys over vanity scores.

## 6. Working method and continuity

Use bounded milestones with observable acceptance, but do not force me to send a new prompt for every colour, field or button. Complete authorised reversible work, test it, fix discovered defects and progress through the current milestone. Ask for a consolidated design review at the first polished Home/service pattern, and explicit approval for production cutover, paid purchases, live payment activation, destructive changes or other actions your tools require. Do not ask again for decisions already recorded here. Respect all tool permission rules; this brief is not a bypass.

Do not use special question widgets if plain chat will work. Ask at most three concise material questions together. If something nonblocking is unknown, make a clearly recorded reasonable design choice and continue. A missing case study, font source or payment key must not halt unrelated layout/content work. If a tool fails, inspect the error, make a reasonable supported recovery, then explain the concrete blocker; do not repeat ineffective calls indefinitely.

Maintain `CLAUDE.md` (project identity, environment boundaries and current decisions), `docs/STATUS.md` (done/in-progress/blocked/next), `docs/DECISIONS.md`, `docs/URL-MAP.csv`, `docs/CATALOGUE.md` or equivalent structured catalogue, `docs/QA.md` and `docs/LAUNCH.md`. Keep secrets and private leads out. For WordPress, include page/header/template IDs and export references; for static, include repo/branch/commit/build/deployment identifiers. Save a checkpoint after each meaningful milestone and before risky mutations.

At session start, read these records, inspect the actual current state and resume the next uncompleted item. Do not restart interviews or rebuild completed work because a session ended. At session end, record the exact resume action and remaining blockers. Report “built”, “saved”, “deployed”, “tested” and “approved” as separate states.

Never say “done” after only a save request, successful API call, build exit code or unseen screenshot. Verify the rendered frontend, the editable source/native editor, and the relevant user journey. Do not reuse another agent's claimed tests as your own. Mark skipped or unavailable checks as NOT TESTED with a reason.

### First response and action

Summarise the chosen project/environment in a few sentences, identify available files and capabilities, reconcile the catalogue and existing work, and begin the first safe implementation milestone. Show an actionable milestone board. If no material answer is needed, start building immediately rather than asking whether to proceed.

Only these unresolved inputs may need questions as their implementation stage approaches:

1. Which source-listed business email should be public, which inbox receives leads, and which phone/WhatsApp (if any) should visitors use?
2. Which existing merchant account/payment provider is approved for this seller and USD service sales, and who approves the final policies/tax settings? Use secure access methods, never chat credentials.
3. What real client evidence and founder portrait may be published, and who confirms capacity for package timelines? If none is available yet, proceed with an honest process-led design.

Hosting access or an unavailable exact temporary-site URL is an access dependency, not a reason to reopen the platform decision. Work locally or prepare tested drafts while deployment access is resolved.

### Milestone report format

Give: completed result; exact preview/editor/source location; tests and visual evidence; failures/limitations; updated checkpoint; next milestone. Keep reports concise. Do not claim production launch or business readiness while a critical enquiry, purchase, identity, indexing or usability gate remains open.


## 7A. Static implementation specification

### Source organisation and editability

Use a clear structure such as `src/layouts`, `src/components`, `src/pages`, `src/content`, `src/data`, `src/styles` and `public`. Keep business configuration separate from visual components. Define one authoritative typed catalogue with the original package IDs 1–50; fields should include family, name, classification, numeric USD amount where applicable, display-price text, billing basis, scope, exclusions, prerequisites, revision rules, lead time, renewal, owner, acceptance criteria and commerce activation state.

Separate **catalogue approval** from **checkout availability** in the data model. All 50 rows are approved baseline offers; a payment gate does not make the approved price unknown. A blank numeric price on Multilingual Content & Localisation is deliberate because its display basis is “From $0.15/word”; do not coerce it to zero or free. Store money in an appropriate exact representation and let a trusted payment provider/server enforce payable amounts. Do not parse display strings as authoritative checkout values.

Create reusable Header, Navigation, MobileMenu, Footer, Container, Button, ServiceCard, PackageComparison, PackageDetails, Process, FAQ, Form and SEO metadata components. Design a small family of flexible page patterns rather than identical layouts for every service. Keep package detail text in readable HTML and avoid hiding the entire commercial offer behind JavaScript.

Insights should have frontmatter/content validation, author identity, publication/updated dates, category where useful, related-service links and proper archive/empty states. Do not fabricate articles to fill a grid. Do not create a CMS integration merely because blogging is planned; document the file-based editorial workflow and leave a CMS migration as a later explicit choice.

### Enquiry architecture

Choose one supported form delivery route after verifying hosting capabilities and the approved recipient: a reputable form service, or a separately hosted minimal secure endpoint with authenticated mail. Present any ongoing cost/data processor for approval before purchase or activation. Static files by themselves do not send email. The form endpoint must validate input, apply spam/rate controls, enforce size limits, safely handle origin/CORS as applicable, and return truthful success/error states. Never put mail/API secrets in `public` assets or client-exposed environment variables.

Use a verified email link only as an explicitly labelled fallback. A contact page that merely opens the visitor's email program is a limited interim state, not the completed form requirement. Record form processing, retention, recipients and deletion practices for the privacy document.

### Payments without a WordPress dependency

Once the seller/provider/tax/policy gates pass, prefer a supported provider-hosted checkout for approved fixed packages, for example Payment Links or Checkout if the chosen account supports the seller and services. Stripe is a candidate, not an already approved account or mandatory provider. Never use a client-supplied price to create an authoritative order.

Map catalogue IDs to approved provider prices. Route the user through visible scope confirmation and briefing, then hosted payment. Verify paid state through signed server-side/provider events or a documented verified manual provider workflow. Store/order-reference fulfilment data in the chosen authorised system. Verify webhook signatures and idempotency if using webhooks; handle retries and delayed methods. An unguessable URL or success redirect is not payment verification. Keep payment credentials out of the static build. Collect only the information needed to fulfil the service; never ask for client passwords in an order form.

If this integration is not yet available, ship a clearly labelled enquiry-first review build with approved prices and package-specific enquiry links, while marking commerce as NOT ACTIVATED. Do not claim all business functions are finished or falsely show enabled Buy buttons.

### Hosting, preview and release safety

Inspect the actual Hostinger plan and available static upload/Git/deployment route. For file hosting, deploy the generated static output, usually Astro's `dist/`, to the confirmed temporary site's document root. A Node-based build step does not imply a Node runtime requirement for the static frontend. Do not deploy the source tree or guess another site's `public_html`. Verify the temporary domain, HTTPS, direct nested-route requests, trailing-slash behaviour, 404 status, assets, cache headers and form endpoints after deployment.

Maintain explicit preview and production environments. Protect the preview and emit noindex appropriately. The production domain is a future canonical target only after launch approval; use a documented environment strategy so preview does not emit mixed or accidentally indexable URL signals. At launch, regenerate canonical/OG/sitemap absolute URLs for the production target and validate them.

Build a release guard that detects missing required configuration, draft review markers, invalid package data, broken internal routes and unresolved critical gates. Validate before generating/copying indexable release output or starting deployment. A blocked release must leave the last known good deployment untouched, not write indexable files and fail afterwards. Keep a tested previous deployment for rollback. Do not run a production release simply to test the guard.

## 8A. Delivery plan and milestone acceptance

| Milestone | Work | Acceptance evidence |
| --- | --- | --- |
| A0 — Recover and establish | Inspect actual repo/branch/hosting access; reconcile old reports; record protected environments and available assets | Current file/commit inventory, fact/decision ledger, no production mutations, exact next action |
| A1 — Content and architecture | Validate all 50 catalogue records, sitemap, URL map, component/data plan, contact/payment dependencies | Package IDs/prices/scopes match appendix; seven family routes planned; unknowns isolated |
| A2 — Design and build the representative experience | Implement polished header/footer, Home and SEO page with responsive real content and approved prices | Desktop/mobile screenshots inspected; no clipped logo/menu/gaps; coherent typography; design review requested once |
| A3 — Complete site content | Build other six families, Services, About, Approach, Contact, Insights templates and policy drafts | Real routes resolve; unique useful copy; all packages accessible; no dummy proof or visible review markers |
| A4 — Enquiry implementation | Connect and test approved recipient, validation, spam/error/success flows and package attribution | Controlled message received with correct fields; duplicate/failure tests; privacy practices recorded |
| A5 — Commerce, conditional | Implement fixed-package hosted payment only after gates; keep proposal/monthly routes honest | Provider test payment and failure verified; order/receipt/brief matched; no unauthorised live charge |
| A6 — QA and temporary deployment | Build, crawl, accessibility/manual checks, multi-width screenshots, performance review; deploy to separate Hostinger temporary site | Deployed URL actually verified; no critical broken links/overflow; full test matrix and explicit limitations |
| A7 — Production release preparation | Final URL/redirect map, policy/operational approval, fresh backup, rollback, environment switch plan | Reviewable release package; exact domain-switch action awaiting separate approval |
| A8 — Authorised launch and handover | Deploy only after approval, validate indexing/redirects/forms/payment configuration, provide editing guide | Live critical journeys tested, rollback available, monitoring owner and maintenance instructions documented |

Each milestone may take several work sessions. Checkpoint and resume; do not invent dates or guaranteed delivery durations. If commerce is blocked, continue A6 for an explicitly scoped enquiry-only review version. Do not silently redefine a complete commerce release as enquiry-only.

### Static QA details

Run build/type/content validation, all-route link/status checks, catalogue comparison, form tests, mobile-menu keyboard tests and a release-guard failure test. Check generated HTML contains critical content without JavaScript. Test cache refresh after deployment, deep links directly, and an unknown path returning a genuine 404. Examine mobile screenshots for drawer clipping caused by transform/backdrop-filter, oversized chevrons, grid-span leakage and unintended single-card rows. These occurred in earlier reported work; treat them as regression risks, not as assumed current failures.

The handover must include source repository/commit, reproducible install/build commands using the locked dependency set, separate preview/release instructions, content/package editing instructions, environment variable names without values, deployed temporary URL, QA evidence, delivery/payment dependencies, rollback steps and unresolved decisions.

## Implementation references

Use current official documentation for exact installed versions and provider capabilities. These are technical references, not proof of access to my account:

- Astro static routing: https://docs.astro.build/en/guides/routing/
- Astro configuration: https://docs.astro.build/en/reference/configuration-reference/
- Astro deployment: https://docs.astro.build/en/guides/deploy/
- Hostinger file management: https://support.hostinger.com/en/articles/4548688-basic-actions-in-the-file-manager
- Provider-hosted payment example: https://docs.stripe.com/api/payment-link
- Google AI features and websites: https://developers.google.com/search/docs/appearance/ai-features

## Appendix: complete approved commercial baseline

Source: **SEO-Booster-Service-Catalog-Approved.xlsx**, approved 26 September 2026; retrieved current version 1 for this handoff on 28 September 2026. This appendix carries all 50 rows' substantive fields, including exclusions, prerequisites and acceptance criteria. It is not a new pricing recommendation. Read package details before building cards or transaction products.

Catalogue approval does not mean a payment gateway, recurring mechanism, policies, tax implementation or fulfilment capacity has been verified. Do not transfer an earlier agent's test claims into this project's QA record.

### All-package index

| ID | Family | Package | Classification | Approved display price (USD) |
| --- | --- | --- | --- | --- |
| 1 | Digital Marketing | Digital Growth Audit | Fixed-scope one-time | $399 |
| 2 | Digital Marketing | Analytics & Conversion Tracking Setup | Fixed-scope one-time | $349 |
| 3 | Digital Marketing | Single-Platform Paid Ads Launch | Fixed-scope one-time | $499 |
| 4 | Digital Marketing | Email Marketing Foundation | Fixed-scope one-time | $399 |
| 5 | Digital Marketing | Conversion Review | Fixed-scope one-time | $399 |
| 6 | Digital Marketing | Multi-Channel Campaign Launch | Quote-led bespoke | From $899 |
| 7 | Digital Marketing | Digital Marketing Retainer | Ongoing engagement | From $1,250/month |
| 8 | SEO | SEO Audit Essentials | Fixed-scope one-time | $399 |
| 9 | SEO | SEO Audit Growth | Fixed-scope one-time | $699 |
| 10 | SEO | Ecommerce SEO Audit | Fixed-scope one-time | $899 |
| 11 | SEO | On-Page SEO Sprint | Fixed-scope one-time | $599 |
| 12 | SEO | Technical SEO Fix Sprint | Quote-led bespoke | From $750 |
| 13 | SEO | Local SEO Foundation | Fixed-scope one-time | $499 |
| 14 | SEO | Monthly SEO Growth | Ongoing engagement | From $900/month |
| 15 | SEO | Business Profile Link Pack | Fixed-scope one-time | $199 |
| 16 | SEO | Business Listings & Citation Pack | Fixed-scope one-time | $299 |
| 17 | SEO | Guest Post Outreach Campaign | Fixed-scope one-time | $499 service fee |
| 18 | SEO | Backlink Profile Audit | Fixed-scope one-time | $449 |
| 19 | Content Writing | SEO Blog Article | Fixed-scope one-time | $179 |
| 20 | Content Writing | Long-Form Guide | Fixed-scope one-time | $329 |
| 21 | Content Writing | SEO Service Page | Fixed-scope one-time | $199 |
| 22 | Content Writing | Website Copy Set | Fixed-scope one-time | $649 |
| 23 | Content Writing | Product Description Set | Fixed-scope one-time | $399 |
| 24 | Content Writing | Category Copy Set | Fixed-scope one-time | $349 |
| 25 | Content Writing | Email Sequence Copy | Fixed-scope one-time | $249 |
| 26 | Content Writing | Social Caption Pack | Fixed-scope one-time | $249 |
| 27 | Content Writing | Multilingual Content & Localisation | Quote-led bespoke | From $0.15/word |
| 28 | Web Design & Development | Landing Page UI Design | Fixed-scope one-time | $449 |
| 29 | Web Design & Development | Small Website UI Design | Fixed-scope one-time | $899 |
| 30 | Web Design & Development | Landing Page Design & Build | Fixed-scope one-time | $899 |
| 31 | Web Design & Development | WordPress Business Website | Fixed-scope one-time | $1,699 |
| 32 | Web Design & Development | WordPress Growth Website | Fixed-scope one-time | $2,899 |
| 33 | Web Design & Development | Custom Web Development | Quote-led bespoke | From $3,500 |
| 34 | Website Maintenance | Website Care | Ongoing engagement | $129/month |
| 35 | Website Maintenance | Website Care Growth | Ongoing engagement | $249/month |
| 36 | Website Maintenance | Website Care Pro | Ongoing engagement | $449/month |
| 37 | Graphic Design | Logo Essentials | Fixed-scope one-time | $299 |
| 38 | Graphic Design | Brand Identity System | Fixed-scope one-time | $799 |
| 39 | Graphic Design | Social Media Creative Pack | Fixed-scope one-time | $249 |
| 40 | Graphic Design | Advertising Creative Pack | Fixed-scope one-time | $299 |
| 41 | Graphic Design | Website Graphics Pack | Fixed-scope one-time | $249 |
| 42 | Graphic Design | Business Collateral Pack | Fixed-scope one-time | $299 |
| 43 | eCommerce Services | Shopify or WooCommerce Store Launch | Fixed-scope one-time | $2,499 |
| 44 | eCommerce Services | Shopify or WooCommerce Growth Store | Fixed-scope one-time | $4,250 |
| 45 | eCommerce Services | Catalogue Setup – 25 Products | Fixed-scope one-time | $399 |
| 46 | eCommerce Services | Catalogue Optimisation – 25 Products | Fixed-scope one-time | $549 |
| 47 | eCommerce Services | Ecommerce CRO Audit | Fixed-scope one-time | $549 |
| 48 | eCommerce Services | Product Research Sprint | Fixed-scope one-time | $499 |
| 49 | eCommerce Services | Managed Store Operations | Ongoing engagement | From $1,500/month |
| 50 | eCommerce Services | Managed Store Operations – Growth | Ongoing engagement | From $2,500/month |

### Full package specifications

#### 1. Digital Growth Audit

- **Family:** Digital Marketing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 399
- **Display price (USD):** $399
- **Client fit:** SME or ecommerce business needing a channel plan before execution. One brand, one main market.
- **Exact deliverables:** 90-minute discovery; website and funnel review; channel suitability review; competitor snapshot; measurement gaps; 90-day priority roadmap; recorded or live handover.
- **Exclusions:** Implementation, ad creation, media spend, full SEO crawl, content production, legal/privacy review. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One factual correction round within 7 days.
- **Client prerequisites:** Completed intake, website and channel links, goals, target market, current performance data where available.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal. New audit or implementation scoped separately.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Roadmap names priorities, owners, sequencing and measurable next actions.
- **Approval status:** Approved

#### 2. Analytics & Conversion Tracking Setup

- **Family:** Digital Marketing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 349
- **Display price (USD):** $349
- **Client fit:** One WordPress or Shopify site needing a basic measurement foundation.
- **Exact deliverables:** GA4 property/configuration review; Google Tag Manager container setup or cleanup; up to 5 agreed conversion events; Search Console connection; consent-mode compatibility review; test report.
- **Exclusions:** Consent platform purchase/configuration, server-side tagging, custom app events, historical data repair, dashboard build, ad-platform management. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One correction round for agreed events within 7 days.
- **Client prerequisites:** Admin access to site, GA4, GTM and Search Console; approved event list; working consent solution where legally required.
- **Lead time:** 5–7 business days
- **Renewal behaviour:** No renewal; monitoring quoted separately.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Debug tests show each agreed event firing once with correct parameters.
- **Approval status:** Approved

#### 3. Single-Platform Paid Ads Launch

- **Family:** Digital Marketing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 499
- **Display price (USD):** $499
- **Client fit:** Business launching on one supported platform: Google/YouTube, Meta, Microsoft, LinkedIn, TikTok or Pinterest.
- **Exact deliverables:** Account review; campaign structure; audience/keyword research; one campaign; up to 3 ad groups/ad sets; up to 6 ads; conversion-tracking check; launch checklist; 14-day optimisation review.
- **Exclusions:** Media spend, landing-page build, video production, product feed repair, ongoing management, platform approval guarantees. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One pre-launch copy/targeting revision round.
- **Client prerequisites:** Client-owned ad account and payment method; approved offer, landing page, creative assets and claims; tracking access.
- **Lead time:** 7–10 business days after complete access
- **Renewal behaviour:** No automatic renewal. Ongoing management by monthly proposal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Campaign is published or ready for client-authorised launch; targeting, budget and tracking checklist supplied.
- **Approval status:** Approved

#### 4. Email Marketing Foundation

- **Family:** Digital Marketing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 399
- **Display price (USD):** $399
- **Client fit:** Business with a permission-based list starting or repairing one email channel.
- **Exact deliverables:** Platform setup/review; list and sender checklist; one branded reusable template; one campaign; one 3-email welcome flow; basic tagging; UTM convention; test sends.
- **Exclusions:** Contact acquisition, purchased lists, complex ecommerce flows, ongoing sends, platform fees, guaranteed inbox placement. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated copy/design rounds before activation.
- **Client prerequisites:** Client-owned platform; lawful consent records; verified sending domain; approved copy facts and offer.
- **Lead time:** 7–10 business days
- **Renewal behaviour:** No renewal; ongoing email management quoted monthly.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Test emails render acceptably on common desktop/mobile clients; links and automation triggers tested.
- **Approval status:** Approved

#### 5. Conversion Review

- **Family:** Digital Marketing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 399
- **Display price (USD):** $399
- **Client fit:** Lead-generation or ecommerce site with enough traffic to justify conversion review.
- **Exact deliverables:** Review of up to 8 priority pages; funnel friction analysis; mobile review; CTA/form/cart observations; analytics evidence where available; prioritised test backlog.
- **Exclusions:** Design/build implementation, user research panel, heatmap software, statistically valid experiment results. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One clarification round within 7 days.
- **Client prerequisites:** Priority URLs, business goal, analytics access if available, known customer objections.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal; implementation quoted separately.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Report links every finding to a page, evidence and proposed action.
- **Approval status:** Approved

#### 6. Multi-Channel Campaign Launch

- **Family:** Digital Marketing
- **Classification:** Quote-led bespoke
- **Numeric baseline USD:** 899
- **Display price (USD):** From $899
- **Client fit:** Campaign using two or more paid platforms or requiring coordinated creative and tracking.
- **Exact deliverables:** Channel plan; campaign architecture; platform setup; tracking plan; creative/copy schedule; launch QA; scope-defined optimisation period.
- **Exclusions:** Media spend and unlisted production. Final deliverables depend on approved proposal. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two scoped rounds before launch.
- **Client prerequisites:** Approved brief, budget by platform, client-owned accounts, creative inputs and landing pages.
- **Lead time:** From 10 business days
- **Renewal behaviour:** No renewal unless monthly management is accepted.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Proposal defines channels, asset counts, events, launch criteria and reporting.
- **Approval status:** Approved

#### 7. Digital Marketing Retainer

- **Family:** Digital Marketing
- **Classification:** Ongoing engagement
- **Numeric baseline USD:** 1250
- **Display price (USD):** From $1,250/month
- **Client fit:** SME needing coordinated monthly work across selected channels.
- **Exact deliverables:** Monthly plan; agreed channel execution; performance review; reporting; defined monthly work allocation and owner.
- **Exclusions:** Media spend, unapproved channels, unlimited creative or development, guaranteed revenue. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Monthly plan changes within agreed allocation; scope changes repriced.
- **Client prerequisites:** Baseline audit, working accounts, monthly budget, one approver, timely asset access.
- **Lead time:** Start in 10–15 business days
- **Renewal behaviour:** Month-to-month, billed in advance; cancel at least 7 days before next period.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Monthly report maps completed work, spend, outcomes and next actions.
- **Approval status:** Approved

#### 8. SEO Audit Essentials

- **Family:** SEO
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 399
- **Display price (USD):** $399
- **Client fit:** Small website with up to 100 indexable URLs, one domain and one main market.
- **Exact deliverables:** Technical crawl; indexing, robots, sitemap, canonical and redirect review; template/on-page sample; internal-link review; Search Console review if supplied; prioritised roadmap; 30-minute handover.
- **Exclusions:** Implementation, content writing, backlink acquisition, security/accessibility audit, ranking guarantees. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One factual correction/clarification round within 7 days.
- **Client prerequisites:** Public site plus read-only Search Console/analytics where available; goals and priority services.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Report contains reproducible findings, affected URLs, priority and recommended fixes.
- **Approval status:** Approved

#### 9. SEO Audit Growth

- **Family:** SEO
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 699
- **Display price (USD):** $699
- **Client fit:** Content-rich business site with up to 500 indexable URLs.
- **Exact deliverables:** Everything in Essentials; broader template sampling; keyword/page overlap review; up to 20 priority-page checks; competitor opportunity snapshot; implementation sequence; 60-minute handover.
- **Exclusions:** Implementation, migrations, full log-file analysis, backlink acquisition, guarantees. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One factual correction/clarification round within 7 days.
- **Client prerequisites:** Same as Essentials plus top competitors and commercial priorities.
- **Lead time:** 10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Roadmap separates critical, high, medium and low priorities with owners.
- **Approval status:** Approved

#### 10. Ecommerce SEO Audit

- **Family:** SEO
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 899
- **Display price (USD):** $899
- **Client fit:** Shopify or WooCommerce store with up to 1,000 crawlable URLs.
- **Exact deliverables:** Technical crawl; collection/category, product, faceted navigation and pagination review; structured-data review; indexation and duplicate-content analysis; 25-page sample; prioritised roadmap; handover.
- **Exclusions:** Implementation, feed management, product rewriting, migration, backlink work, ranking guarantees. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One factual correction/clarification round within 7 days.
- **Client prerequisites:** Store and Search Console access; product/collection priorities; markets and languages.
- **Lead time:** 12 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Findings include affected templates/URLs and platform-specific remediation guidance.
- **Approval status:** Approved

#### 11. On-Page SEO Sprint

- **Family:** SEO
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 599
- **Display price (USD):** $599
- **Client fit:** Site with up to 10 agreed pages and stable templates.
- **Exact deliverables:** Intent review; title/meta/H1 improvements; heading and copy recommendations; internal links; image-alt review where relevant; basic schema recommendations; change log.
- **Exclusions:** New long-form copy, technical fixes outside edited pages, development, link acquisition, ranking guarantees. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One consolidated revision round.
- **Client prerequisites:** Approved target pages, CMS access or implementation handoff preference, verified business facts.
- **Lead time:** 7–10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Each page has a unique intent, metadata, heading plan and recorded changes/recommendations.
- **Approval status:** Approved

#### 12. Technical SEO Fix Sprint

- **Family:** SEO
- **Classification:** Quote-led bespoke
- **Numeric baseline USD:** 750
- **Display price (USD):** From $750
- **Client fit:** Site with an audit and a bounded set of technical fixes.
- **Exact deliverables:** Proposal-defined fixes such as redirects, canonicals, sitemap, robots, metadata templates, structured data or internal-link repairs; change log; regression checks.
- **Exclusions:** Redesign, platform migration, server work without access, open-ended issue lists, ranking guarantees. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One correction round for implemented scope.
- **Client prerequisites:** Current backup/staging, audit findings, platform/admin access, rollback owner.
- **Lead time:** From 10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Fix list passes agreed crawl, status-code and frontend checks on staging/live as scoped.
- **Approval status:** Approved

#### 13. Local SEO Foundation

- **Family:** SEO
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 499
- **Display price (USD):** $499
- **Client fit:** One legitimate business location or service-area business.
- **Exact deliverables:** Google Business Profile review; category/service recommendations; NAP consistency review; up to 20 core citation corrections/submissions; local landing-page recommendations; review-process guidance; baseline report.
- **Exclusions:** Fake locations, review generation, ongoing posting, guaranteed map rankings, publisher fees. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One factual correction round.
- **Client prerequisites:** Verified GBP ownership, accurate business identity/address/service area, website, hours and contact details.
- **Lead time:** 10 business days
- **Renewal behaviour:** No renewal; monthly local SEO quoted separately.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Completed listing report and GBP recommendation sheet supplied.
- **Approval status:** Approved

#### 14. Monthly SEO Growth

- **Family:** SEO
- **Classification:** Ongoing engagement
- **Numeric baseline USD:** 900
- **Display price (USD):** From $900/month
- **Client fit:** SME with a stable site and at least a three-month growth horizon.
- **Exact deliverables:** Monthly technical/on-page/content/link priorities defined by proposal; monitoring; implementation allowance; reporting; monthly review.
- **Exclusions:** Guaranteed rankings, unlimited content/development, publisher fees and unapproved link placements. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Monthly priority changes within agreed allocation.
- **Client prerequisites:** Baseline audit, Search Console/analytics access, CMS/staging where needed, one approver.
- **Lead time:** Start in 10–15 business days
- **Renewal behaviour:** Month-to-month, billed in advance; cancel at least 7 days before next period.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Monthly report lists work completed, evidence, outcome signals and next priorities.
- **Approval status:** Approved

#### 15. Business Profile Link Pack

- **Family:** SEO
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 199
- **Display price (USD):** $199
- **Client fit:** New or small business needing a clean set of legitimate profile/listing links.
- **Exact deliverables:** Research and submission to up to 25 relevant, accessible profile or business-listing sites; consistent supplied business data; destination/anchor checks; completion report.
- **Exclusions:** Guaranteed indexation, dofollow status, ranking movement, fabricated profiles, accounts requiring client verification, replacement of sites that reject valid submissions. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Corrections for supplier error within 14 days.
- **Client prerequisites:** Accurate business details, approved description, logo, URL, client completion of email/phone verification when required.
- **Lead time:** 10–15 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Report identifies submitted, live, pending and client-action listings.
- **Approval status:** Approved

#### 16. Business Listings & Citation Pack

- **Family:** SEO
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 299
- **Display price (USD):** $299
- **Client fit:** Local business needing consistent citations in one country.
- **Exact deliverables:** NAP audit; up to 40 relevant directory submissions/corrections; duplicate flags; login handover where permitted; completion report.
- **Exclusions:** Aggregator fees, guaranteed approval/indexation, GBP reinstatement, multiple locations, fake addresses. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Supplier-error corrections within 14 days.
- **Client prerequisites:** Verified legal/trading name, address/service area, phone, categories, hours, website and verification access.
- **Lead time:** 15–20 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Report records source, submitted data, status and required client action.
- **Approval status:** Approved

#### 17. Guest Post Outreach Campaign

- **Family:** SEO
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 499
- **Display price (USD):** $499 service fee
- **Client fit:** Brand with a legitimate site, useful expertise and realistic outreach targets.
- **Exact deliverables:** Prospect research for up to 40 sites; qualification; outreach sequence; one editorial article up to 1,000 words; follow-ups; outreach and response report.
- **Exclusions:** Guaranteed placements, guaranteed metrics/indexation, publisher fees, prohibited niches, paid links presented as editorial endorsements. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One article revision and corrections to outreach facts.
- **Client prerequisites:** Approved topic, author/business facts, target URL, anchor guidance, niche restrictions and publisher budget.
- **Lead time:** 15 business days for outreach cycle
- **Renewal behaviour:** No renewal; further outreach ordered separately.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Prospect and outreach log supplied; any placement requires client approval of separate publisher cost.
- **Approval status:** Approved

#### 18. Backlink Profile Audit

- **Family:** SEO
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 449
- **Display price (USD):** $449
- **Client fit:** Site owner concerned about backlink quality, lost links or prior link work.
- **Exact deliverables:** Link-data consolidation from supplied tools/Search Console; risk-pattern review; anchor/domain analysis; lost-link sample; prioritised action plan; disavow guidance only where evidence supports it.
- **Exclusions:** Guaranteed penalty recovery, manual removal success, outreach campaign, legal review, automatic disavow submission. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One clarification round.
- **Client prerequisites:** Search Console access and available exports from third-party link tools.
- **Lead time:** 7–10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Report distinguishes observed facts, risk signals and recommended actions.
- **Approval status:** Approved

#### 19. SEO Blog Article

- **Family:** Content Writing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 179
- **Display price (USD):** $179
- **Client fit:** Business needing one researched English article up to 1,000 words.
- **Exact deliverables:** Search-intent brief; outline; original draft; title/meta suggestion; up to 3 internal-link suggestions; basic fact/source list; final editable file.
- **Exclusions:** Publishing, custom graphics, interviews, regulated expert review, backlink placement. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One consolidated revision within 7 days.
- **Client prerequisites:** Topic, audience, purpose, factual inputs, brand voice and pages to link.
- **Lead time:** 5 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Final draft meets approved brief, word range and supported-claim requirements.
- **Approval status:** Approved

#### 20. Long-Form Guide

- **Family:** Content Writing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 329
- **Display price (USD):** $329
- **Client fit:** Business needing one authoritative guide up to 2,000 words.
- **Exact deliverables:** Intent/competitor review; detailed outline; original guide; metadata; FAQ suggestions; internal links; source list; final editable file.
- **Exclusions:** Original surveys, interviews, design, publishing, regulated expert sign-off. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated revision rounds.
- **Client prerequisites:** Approved subject expertise and factual sources; audience and conversion goal.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Guide follows approved outline and identifies sources for material factual claims.
- **Approval status:** Approved

#### 21. SEO Service Page

- **Family:** Content Writing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 199
- **Display price (USD):** $199
- **Client fit:** Business with one defined service and verified offer.
- **Exact deliverables:** Search-intent brief; 800–1,200-word page; title/meta; headings; CTA; up to 3 FAQs; internal-link suggestions.
- **Exclusions:** Design, publishing, invented credentials/results, extra pages, legal/regulated review. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One consolidated revision within 7 days.
- **Client prerequisites:** Service scope, audience, differentiators, evidence, pricing if used, approver.
- **Lead time:** 5 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Copy contains one clear intent, accurate scope and supported claims.
- **Approval status:** Approved

#### 22. Website Copy Set

- **Family:** Content Writing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 649
- **Display price (USD):** $649
- **Client fit:** Small business site needing up to 5 core pages and 3,500 total words.
- **Exact deliverables:** Discovery brief; sitemap/content plan; copy for up to 5 agreed pages; metadata; CTA plan; internal-link suggestions; final editable files.
- **Exclusions:** Design/build, more than 5 pages, interviews beyond discovery, legal policies, specialist regulated review. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated revision rounds.
- **Client prerequisites:** Approved sitemap, business facts, offers, proof, audience, brand voice and single approver.
- **Lead time:** 10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** All five pages map to distinct intent and approved business facts.
- **Approval status:** Approved

#### 23. Product Description Set

- **Family:** Content Writing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 399
- **Display price (USD):** $399
- **Client fit:** Ecommerce brand needing up to 20 product descriptions, each up to 150 words.
- **Exact deliverables:** Product benefit copy; feature bullets; tone consistency; basic keyword use; supplied-spec accuracy check; delivery sheet.
- **Exclusions:** Product research from samples, image work, upload, legal claims verification, translations. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One consolidated revision round.
- **Client prerequisites:** Complete product data, specifications, audience, tone and prohibited claims.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Twenty rows delivered with no missing supplied specifications.
- **Approval status:** Approved

#### 24. Category Copy Set

- **Family:** Content Writing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 349
- **Display price (USD):** $349
- **Client fit:** Shopify or WooCommerce store needing up to 5 category/collection pages.
- **Exact deliverables:** Intent review; up to 500 words per page; metadata; headings; internal-link suggestions; FAQ ideas where useful.
- **Exclusions:** Upload, theme edits, product descriptions, regulated claims, translations. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One consolidated revision round.
- **Client prerequisites:** Category URLs/products, audience, brand facts and keyword priorities.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Five distinct drafts avoid keyword overlap and reflect actual catalog.
- **Approval status:** Approved

#### 25. Email Sequence Copy

- **Family:** Content Writing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 249
- **Display price (USD):** $249
- **Client fit:** Business needing one 3-email welcome, nurture or sales sequence.
- **Exact deliverables:** Sequence plan; 3 emails; subject/preheader options; CTA; link/offer placeholders; handoff document.
- **Exclusions:** Platform setup, design template, list acquisition, automation build, deliverability guarantee. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated copy rounds.
- **Client prerequisites:** Audience, sequence goal, offer, proof, sender identity, required links.
- **Lead time:** 5 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Three emails form a coherent sequence with approved claims and CTA.
- **Approval status:** Approved

#### 26. Social Caption Pack

- **Family:** Content Writing
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 249
- **Display price (USD):** $249
- **Client fit:** Brand with an approved monthly content plan and supplied visual topics.
- **Exact deliverables:** 20 platform-adaptable captions; CTA/hashtag guidance; content calendar sheet; tone consistency.
- **Exclusions:** Graphic/video production, posting, community management, trend guarantee. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One consolidated revision round.
- **Client prerequisites:** Brand voice, platforms, campaign themes, offers, dates and visual references.
- **Lead time:** 5 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Twenty captions supplied and mapped to agreed themes/platforms.
- **Approval status:** Approved

#### 27. Multilingual Content & Localisation

- **Family:** Content Writing
- **Classification:** Quote-led bespoke
- **Numeric baseline USD:** Not a flat amount; use the exact display-price basis.
- **Display price (USD):** From $0.15/word
- **Client fit:** Existing or new content requiring another language and specialist review.
- **Exact deliverables:** Scope-defined translation/localisation; terminology sheet; native or qualified reviewer; final QA.
- **Exclusions:** Certified/legal translation unless specified, unsupported languages without reviewer, design reflow. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One linguistic revision round.
- **Client prerequisites:** Source content, target locale, audience, glossary and reviewer requirements.
- **Lead time:** From 7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Proposal names language, locale, reviewer method, word count and file format.
- **Approval status:** Approved

#### 28. Landing Page UI Design

- **Family:** Web Design & Development
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 449
- **Display price (USD):** $449
- **Client fit:** Business needing design files for one focused landing page.
- **Exact deliverables:** Wireframe; one desktop and one mobile design; up to 7 sections; component/style notes; developer handoff.
- **Exclusions:** Copywriting, development, animation prototype, licensed assets, extra breakpoints. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated design rounds.
- **Client prerequisites:** Approved brief, copy, brand assets, CTA and technical constraints.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Approved desktop/mobile files and component notes supplied.
- **Approval status:** Approved

#### 29. Small Website UI Design

- **Family:** Web Design & Development
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 899
- **Display price (USD):** $899
- **Client fit:** Business needing design files for up to 5 unique page layouts.
- **Exact deliverables:** Sitemap confirmation; wireframes; up to 5 desktop/mobile page designs; basic component system; handoff.
- **Exclusions:** Development, copywriting, ecommerce, custom illustrations, usability study. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated design rounds.
- **Client prerequisites:** Approved content, sitemap, brand assets, competitor references and one approver.
- **Lead time:** 12 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Five layouts and reusable component notes supplied.
- **Approval status:** Approved

#### 30. Landing Page Design & Build

- **Family:** Web Design & Development
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 899
- **Display price (USD):** $899
- **Client fit:** Existing healthy WordPress site needing one campaign/service page.
- **Exact deliverables:** Discovery; design/build up to 7 sections in existing editor; responsive layouts; one existing form/CTA connection; basic on-page SEO; browser/editor QA.
- **Exclusions:** New hosting/site setup, new mail system, copy beyond light editing, custom integrations, checkout. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated rounds within approved brief.
- **Client prerequisites:** Staging and backup, admin access, approved copy/assets, working form route and theme/editor compatibility.
- **Lead time:** 10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Page saves, reopens in native editor, works at desktop/tablet/mobile and passes link/form checks.
- **Approval status:** Approved

#### 31. WordPress Business Website

- **Family:** Web Design & Development
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 1699
- **Display price (USD):** $1,699
- **Client fit:** New brochure/service website with up to 5 pages and standard functionality.
- **Exact deliverables:** Discovery; sitemap; theme-based custom design; WordPress setup; up to 5 pages; responsive build; contact form; basic technical/on-page SEO; analytics connection; launch checklist; 14-day defect support.
- **Exclusions:** Hosting/domain/licences, ecommerce, custom application logic, full copywriting, complex migration, ongoing maintenance. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated design/content rounds.
- **Client prerequisites:** Hosting/domain, legal seller/contact facts, approved content/assets, licence budget, one approver.
- **Lead time:** 15–20 business days
- **Renewal behaviour:** No renewal; maintenance optional.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Pages, menu, form, editor, responsive layouts, indexing controls and launch checklist tested.
- **Approval status:** Approved

#### 32. WordPress Growth Website

- **Family:** Web Design & Development
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 2899
- **Display price (USD):** $2,899
- **Client fit:** Growing service business needing up to 10 pages and richer reusable sections.
- **Exact deliverables:** Everything in Business Website; up to 10 pages; blog setup; reusable templates/blocks; one additional standard integration; redirect map for supplied legacy URLs; 30-day defect support.
- **Exclusions:** Ecommerce, membership, bespoke web app, unbounded migration, recurring licences/maintenance. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Three milestone-based rounds.
- **Client prerequisites:** Complete content plan, legacy URL list, assets, integrations and decision maker.
- **Lead time:** 25–30 business days
- **Renewal behaviour:** No renewal; maintenance optional.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Approved scope passes frontend, editor, form, responsive, redirect and indexing checks.
- **Approval status:** Approved

#### 33. Custom Web Development

- **Family:** Web Design & Development
- **Classification:** Quote-led bespoke
- **Numeric baseline USD:** 3500
- **Display price (USD):** From $3,500
- **Client fit:** WordPress project requiring integrations, custom data, advanced templates or migration.
- **Exact deliverables:** Discovery and technical scope; milestone plan; proposal-defined design/development; staging; QA; documentation; launch/rollback plan.
- **Exclusions:** Anything outside signed statement of work; recurring vendor costs. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Milestone acceptance and change-control process.
- **Client prerequisites:** Technical discovery, access, data samples, integration documentation and budget.
- **Lead time:** From 30 business days
- **Renewal behaviour:** Support/maintenance stated in proposal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Statement of work defines functional acceptance tests and handover.
- **Approval status:** Approved

#### 34. Website Care

- **Family:** Website Maintenance
- **Classification:** Ongoing engagement
- **Numeric baseline USD:** 129
- **Display price (USD):** $129/month
- **Client fit:** One standard WordPress or Shopify site needing routine care.
- **Exact deliverables:** Core/theme/plugin or app review; weekly backup verification where supported; uptime/security checks; monthly report; up to 1 hour small content edits.
- **Exclusions:** Redesign, new pages, custom development, hacked-site recovery, premium tools/licences. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Edits within monthly hour; unused time expires.
- **Client prerequisites:** Healthy supported site; admin/hosting access; existing backup capability; emergency contact.
- **Lead time:** Onboarding in 5 business days
- **Renewal behaviour:** Month-to-month, billed in advance; cancel at least 7 days before next period.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Monthly log records checks, updates, backups and used edit time.
- **Approval status:** Approved

#### 35. Website Care Growth

- **Family:** Website Maintenance
- **Classification:** Ongoing engagement
- **Numeric baseline USD:** 249
- **Display price (USD):** $249/month
- **Client fit:** Active business site needing more frequent support.
- **Exact deliverables:** Everything in Care; up to 3 hours small edits/development; monthly performance spot-check; priority response during business hours.
- **Exclusions:** Major features, redesign, malware remediation, around-the-clock support. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Work limited to monthly hours; larger tasks quoted.
- **Client prerequisites:** Same as Care plus staging where updates are material.
- **Lead time:** Onboarding in 5 business days
- **Renewal behaviour:** Month-to-month, billed in advance; cancel at least 7 days before next period.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Monthly log and response record supplied.
- **Approval status:** Approved

#### 36. Website Care Pro

- **Family:** Website Maintenance
- **Classification:** Ongoing engagement
- **Numeric baseline USD:** 449
- **Display price (USD):** $449/month
- **Client fit:** Revenue-critical WordPress or Shopify site needing a larger support allowance.
- **Exact deliverables:** Everything in Growth; up to 6 hours work; weekly performance/security spot-checks; staging for material updates; higher-priority business-hours response.
- **Exclusions:** Unlimited development, guaranteed uptime, 24/7 incident response, third-party outages. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Work limited to monthly hours; change requests scoped.
- **Client prerequisites:** Supported site, staging/backup, access and named approver.
- **Lead time:** Onboarding in 5 business days
- **Renewal behaviour:** Month-to-month, billed in advance; cancel at least 7 days before next period.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Monthly log includes changes, tests, incidents and remaining recommendations.
- **Approval status:** Approved

#### 37. Logo Essentials

- **Family:** Graphic Design
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 299
- **Display price (USD):** $299
- **Client fit:** New small business needing a professional primary logo.
- **Exact deliverables:** Discovery questionnaire; 2 initial concepts; primary logo; one secondary lockup; monochrome version; SVG, PDF, PNG and JPG exports; simple usage sheet.
- **Exclusions:** Naming, trademark search, full brand strategy, custom illustration system, printing. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated revision rounds on one selected concept.
- **Client prerequisites:** Approved business name, audience, positioning, references and decision maker.
- **Lead time:** 7–10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Final files open correctly and include listed formats/versions.
- **Approval status:** Approved

#### 38. Brand Identity System

- **Family:** Graphic Design
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 799
- **Display price (USD):** $799
- **Client fit:** Business needing a consistent visual identity beyond a logo.
- **Exact deliverables:** Brand discovery; 3 concept directions; logo suite; colour palette; typography; graphic style; social/profile assets; concise brand guideline PDF; source/export files.
- **Exclusions:** Naming, legal clearance, packaging range, photography, website design, printing. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Three milestone-based revision rounds.
- **Client prerequisites:** Approved name, audience, positioning, competitor references and one approver.
- **Lead time:** 15–20 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Guidelines document all supplied assets and practical usage rules.
- **Approval status:** Approved

#### 39. Social Media Creative Pack

- **Family:** Graphic Design
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 249
- **Display price (USD):** $249
- **Client fit:** Brand needing 10 static social graphics from supplied themes/copy.
- **Exact deliverables:** 10 platform-sized static designs; one visual direction; editable source where agreed; export files.
- **Exclusions:** Copywriting beyond light edits, video/motion, posting, stock/licence fees. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One consolidated revision round.
- **Client prerequisites:** Brand kit, copy, platform sizes, CTA, dates and approved imagery.
- **Lead time:** 5–7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Ten approved exports match agreed sizes and copy.
- **Approval status:** Approved

#### 40. Advertising Creative Pack

- **Family:** Graphic Design
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 299
- **Display price (USD):** $299
- **Client fit:** Advertiser needing 10 static ad assets across agreed sizes.
- **Exact deliverables:** One campaign visual direction; 10 static variations/sizes; CTA treatment; platform-safe exports; editable source where agreed.
- **Exclusions:** Ad management, video, copy strategy, landing page, platform approval guarantee. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated revision rounds.
- **Client prerequisites:** Approved offer, claims, copy, brand assets, required platform specifications.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Ten files match supplied platform dimensions and approved content.
- **Approval status:** Approved

#### 41. Website Graphics Pack

- **Family:** Graphic Design
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 249
- **Display price (USD):** $249
- **Client fit:** Existing site needing up to 8 branded banners/icons/section graphics.
- **Exact deliverables:** Up to 8 agreed web graphics; responsive size plan where relevant; optimised PNG/WebP/SVG exports as appropriate.
- **Exclusions:** Page design/build, custom illustration set, photography, animation. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One consolidated revision round.
- **Client prerequisites:** Exact placements/dimensions, page screenshots, brand kit, copy and imagery.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Assets supplied in agreed dimensions and web-suitable formats.
- **Approval status:** Approved

#### 42. Business Collateral Pack

- **Family:** Graphic Design
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 299
- **Display price (USD):** $299
- **Client fit:** Business needing up to 5 standard collateral items.
- **Exact deliverables:** Choose up to 5: business card, letterhead, invoice template, email signature, flyer, brochure cover or presentation cover; print/digital exports.
- **Exclusions:** Long brochures, copywriting, printing, packaging, complex presentations. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two consolidated revision rounds.
- **Client prerequisites:** Final copy, dimensions, printer requirements if any, brand assets.
- **Lead time:** 7–10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Five final items supplied with correct dimensions and bleed where specified.
- **Approval status:** Approved

#### 43. Shopify or WooCommerce Store Launch

- **Family:** eCommerce Services
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 2499
- **Display price (USD):** $2,499
- **Client fit:** New standard store with up to 20 products and one market/language.
- **Exact deliverables:** Discovery; theme setup/customisation; core pages; navigation; up to 20 product entries; collections/categories; payments/shipping/tax configuration from client instructions; responsive QA; basic SEO; analytics; launch checklist; 30-day defect support.
- **Exclusions:** Premium theme/apps, custom app/plugin, ERP, subscriptions, complex migration, copy/photo production, legal/tax advice. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Two design rounds plus one pre-launch correction round.
- **Client prerequisites:** Client-owned accounts; products/assets; payment/shipping/tax decisions; policies; licences; one approver.
- **Lead time:** 25–30 business days
- **Renewal behaviour:** No renewal; operations/maintenance optional.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Test order, payment mode, shipping rules, emails, forms, navigation and responsive templates pass agreed checks.
- **Approval status:** Approved

#### 44. Shopify or WooCommerce Growth Store

- **Family:** eCommerce Services
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 4250
- **Display price (USD):** $4,250
- **Client fit:** Growing brand needing up to 50 products, richer merchandising and migration planning.
- **Exact deliverables:** Everything in Store Launch; up to 50 products; enhanced collection templates; filtering/search configuration; review/email integration; supplied URL redirect map; CRO review; 45-day defect support.
- **Exclusions:** Custom ERP/PIM, marketplace integration, bespoke app, extensive data cleaning, ongoing operations. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Three milestone-based rounds.
- **Client prerequisites:** Clean product data, legacy URLs, integrations, brand/content, operational rules and approver.
- **Lead time:** 35–45 business days
- **Renewal behaviour:** No renewal; operations/maintenance optional.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Migration, redirects, test order, analytics and core merchandising journeys pass signed checklist.
- **Approval status:** Approved

#### 45. Catalogue Setup – 25 Products

- **Family:** eCommerce Services
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 399
- **Display price (USD):** $399
- **Client fit:** Existing Shopify or WooCommerce store with clean product data.
- **Exact deliverables:** Create/update up to 25 simple products; supplied titles/descriptions/images/prices/SKUs; categories/collections; variants up to agreed simple limit; completion sheet.
- **Exclusions:** Copywriting, image editing, research, complex variants/bundles, feeds, translations. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Corrections for entry errors within 7 days.
- **Client prerequisites:** Complete spreadsheet and assets; admin access; category/variant rules.
- **Lead time:** 5–7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Twenty-five product records match approved source sheet.
- **Approval status:** Approved

#### 46. Catalogue Optimisation – 25 Products

- **Family:** eCommerce Services
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 549
- **Display price (USD):** $549
- **Client fit:** Store with up to 25 existing products needing better merchandising and search presentation.
- **Exact deliverables:** Title/description and metadata improvements; feature bullets; image-order recommendations; collection/category mapping; internal-link recommendations; change log.
- **Exclusions:** New photography, translations, full keyword research program, feed management, theme redesign. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One consolidated revision round.
- **Client prerequisites:** Accurate product facts, target market, brand voice, access or handoff preference.
- **Lead time:** 7–10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Twenty-five products have recorded changes/recommendations and no unsupported claims.
- **Approval status:** Approved

#### 47. Ecommerce CRO Audit

- **Family:** eCommerce Services
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 549
- **Display price (USD):** $549
- **Client fit:** Shopify or WooCommerce store with traffic and a working purchase journey.
- **Exact deliverables:** Homepage, collection, product, cart and checkout-path review; mobile UX; trust and merchandising review; analytics evidence where available; prioritised test backlog.
- **Exclusions:** Implementation, customer research panel, paid tools, guaranteed conversion lift. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One clarification round.
- **Client prerequisites:** Store URL, analytics access if available, target products/markets and known issues.
- **Lead time:** 7 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Report maps each finding to journey stage, evidence and test recommendation.
- **Approval status:** Approved

#### 48. Product Research Sprint

- **Family:** eCommerce Services
- **Classification:** Fixed-scope one-time
- **Numeric baseline USD:** 499
- **Display price (USD):** $499
- **Client fit:** Merchant seeking evidence-based product opportunities for one target market.
- **Exact deliverables:** Market/category brief; research of up to 10 candidate products; demand/competition indicators; margin-input worksheet; supplier research leads; risk/constraint notes; shortlist.
- **Exclusions:** Product guarantees, sample ordering, supplier contracts, regulatory/legal certification, inventory purchase. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** One clarification round; replacement only for a factual research error.
- **Client prerequisites:** Target country, budget, business model, prohibited categories, desired margin and fulfilment method.
- **Lead time:** 7–10 business days
- **Renewal behaviour:** No renewal.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Research sheet records source date, assumptions, evidence and shortlist rationale.
- **Approval status:** Approved

#### 49. Managed Store Operations

- **Family:** eCommerce Services
- **Classification:** Ongoing engagement
- **Numeric baseline USD:** 1500
- **Display price (USD):** From $1,500/month
- **Client fit:** Shopify or WooCommerce merchant needing day-to-day operational support.
- **Exact deliverables:** Proposal-defined allowance for product research, listings, merchandising, promotions, order administration, customer-support handling and reporting; SOP setup.
- **Exclusions:** Holding client funds, purchasing inventory, legal/tax responsibility, warehouse fulfilment, unlimited tickets/orders, platform fees. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Monthly priority changes within agreed capacity.
- **Client prerequisites:** Client-owned store/accounts; approved SOPs; role permissions; escalation rules; service hours; order/ticket volumes.
- **Lead time:** Onboarding from 10 business days
- **Renewal behaviour:** Month-to-month, billed in advance; cancel at least 7 days before next period.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Monthly operations report records volumes, actions, exceptions and next priorities.
- **Approval status:** Approved

#### 50. Managed Store Operations – Growth

- **Family:** eCommerce Services
- **Classification:** Ongoing engagement
- **Numeric baseline USD:** 2500
- **Display price (USD):** From $2,500/month
- **Client fit:** Higher-volume merchant requiring broader catalogue, promotion and support capacity.
- **Exact deliverables:** Custom staffing/capacity proposal; everything in Managed Operations plus defined higher volumes, campaign calendar, CRO work allocation and weekly reporting.
- **Exclusions:** Uncapped work, 24/7 coverage unless contracted, inventory ownership and third-party liabilities. Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, publisher fees and other third-party costs unless explicitly listed.
- **Revision limits:** Change control through monthly plan.
- **Client prerequisites:** Volume history, access, SOPs, SLAs, escalation owners and forecast.
- **Lead time:** Onboarding from 15 business days
- **Renewal behaviour:** Month-to-month, billed in advance; cancel at least 7 days before next period.
- **Fulfilment owner:** Zain Ul Abedeen accountable; delivery by Zain and vetted SEO Booster specialists.
- **Acceptance evidence:** Proposal states capacity limits, response targets, operating hours and reports.
- **Approval status:** Approved

### Bespoke and later offers

The source calls these amounts “Suggested starting point”; do not convert them into new fixed-scope checkout products. Preserve proposal-led treatment and all Later exclusions.

#### Full digital strategy and implementation

- **Classification:** Quote-led bespoke
- **Current treatment:** Available by proposal
- **What must be defined:** Channels, markets, team, deliverables, reporting, dependencies
- **Source starting point:** $1,250/month
- **Purchase route:** Proposal
- **Launch state:** Approved
- **Notes:** Use Digital Marketing Retainer as entry point

#### PPC management across multiple platforms

- **Classification:** Ongoing engagement
- **Current treatment:** Available by proposal
- **What must be defined:** Platforms, campaign count, spend, feeds, creative, monitoring
- **Source starting point:** $750/month for one platform
- **Purchase route:** Proposal
- **Launch state:** Approved
- **Notes:** Ad spend always separate

#### Organic social management

- **Classification:** Ongoing engagement
- **Current treatment:** Available by proposal
- **What must be defined:** Platforms, post formats/counts, community hours, approvals
- **Source starting point:** $750/month
- **Purchase route:** Proposal
- **Launch state:** Approved
- **Notes:** Paid social scoped separately or combined

#### Advanced email marketing and automation

- **Classification:** Quote-led / ongoing
- **Current treatment:** Available by proposal
- **What must be defined:** Platform, list size, flows, campaign volume, deliverability
- **Source starting point:** $650/month
- **Purchase route:** Proposal
- **Launch state:** Approved
- **Notes:** Permission-based lists only

#### Local SEO ongoing

- **Classification:** Ongoing engagement
- **Current treatment:** Available by proposal
- **What must be defined:** Locations, GBP work, citations, pages, review workflow
- **Source starting point:** $650/month/location
- **Purchase route:** Proposal
- **Launch state:** Approved
- **Notes:** No map ranking guarantee

#### Guest-post placements

- **Classification:** Quote-led bespoke
- **Current treatment:** Available after publisher approval
- **What must be defined:** Niche, traffic/quality checks, article, publisher price, disclosures
- **Source starting point:** Service fee + publisher cost
- **Purchase route:** Proposal
- **Launch state:** Approved
- **Notes:** No guaranteed indexation or ranking

#### Custom WordPress integration or migration

- **Classification:** Quote-led bespoke
- **Current treatment:** Available by proposal
- **What must be defined:** Data, APIs, plugins, downtime, redirects, acceptance tests
- **Source starting point:** $3,500
- **Purchase route:** Proposal
- **Launch state:** Approved
- **Notes:** Requires staging and rollback plan

#### Multilingual content/localisation

- **Classification:** Quote-led bespoke
- **Current treatment:** Available by proposal
- **What must be defined:** Language, locale, word count, reviewer, file format
- **Source starting point:** $0.15/word
- **Purchase route:** Proposal
- **Launch state:** Approved
- **Notes:** Specialist/native QA required

#### 24/7 maintenance or incident response

- **Classification:** Later / quote-led
- **Current treatment:** Do not advertise as standard yet
- **What must be defined:** Staffing, SLA, monitoring, escalation, liability
- **Source starting point:** Custom
- **Purchase route:** Proposal
- **Launch state:** Later
- **Notes:** Current plans use business-hours support

#### Marketplace services (Amazon/eBay/Etsy)

- **Classification:** Later
- **Current treatment:** Excluded from current catalog
- **What must be defined:** Platform specialists, account policy, listing/ads/operations scope
- **Source starting point:** Custom
- **Purchase route:** Proposal
- **Launch state:** Later
- **Notes:** Current ecommerce scope is Shopify + WooCommerce

#### Printing, packaging production and fulfilment

- **Classification:** Later
- **Current treatment:** Excluded from current catalog
- **What must be defined:** Vendors, proofs, freight, quality control, liability
- **Source starting point:** Custom
- **Purchase route:** Proposal
- **Launch state:** Later
- **Notes:** Graphic design currently supplies files only

### Source reconciliation and handoff notes

| Source | How to use it |
| --- | --- |
| Current user directions | Two separate projects and prompts; modern, beautiful agency design; preserve context and progress; do not touch production |
| Approved service workbook | Authoritative seven families, all 50 packages, USD prices, seller identity, customer/fulfilment model, address rule and outstanding launch gates |
| SEOBooster-ChatGPT-Project-Instructions.txt | WordPress architecture and safety boundary; its initial three-service proposal and unresolved-price wording predate the approved catalogue |
| SEOBooster-Brand-and-Build-Playbook.html | Measured momentum brand, token system and staged quality gates; adapt the overly fragmented per-turn workflow to the milestone plan here |
| chatgpt plan for wp.pdf | SEO Booster WordPress/WoodMart/Elementor field guide; version/capability statements must be rechecked |
| claude plan for wp.pdf | Idiello/Shopvious ecommerce blueprint; not the SEO Booster platform decision |
| seobooster.uk about us.pdf | Historical founder/process/content evidence; inconsistent company/experience/contact claims require reconciliation, not blind reuse |
| seobooster.uk contact us.pdf | Historical source for two business emails and two phones; primary public channel and notification destination still need operational selection/testing |
| Pasted text.txt | Earlier platform-neutral brief and Claude progress report; recommendations, blocked lookups and claimed tests are historical, not current verification |
| Supplied logo | The actual SEO Booster mark is the design asset; local attachment paths may change across environments |

RankRightMedia.uk is a structural reference for service organisation and package presentation, not a source of SEO Booster's identity, prices, proof or copy. If it is unavailable, proceed from the approved catalogue; do not block the build or pretend to have inspected it. Do not copy competitor testimonials, layouts verbatim or commercial promises.

Read this document's own platform section and milestone plan. No work from the alternative implementation is authorised by this prompt. Continue from the actual saved state and preserve the catalogue baseline unless Zain records a later revision.


# Stage 1 — Audit and fact sheet

Status date: 28 September 2026
Prepared for: SEOBooster.uk rebuild

## How this audit was done, and its limits

| Source | Access | Result |
|---|---|---|
| Git repository `testagencypersonal` | Full | Empty. No brand assets, business files or existing code supplied. |
| Live site `seobooster.uk` | **Blocked** by this environment's network policy | Not crawled directly. URLs and snippets below come from search-engine index results only. |
| `rankrightmedia.uk` (structural reference) | **Blocked** | Not reviewed. No structure, wording or pricing taken from it. |
| Companies House | **Blocked** directly | Company record seen only through search-index snippets. Needs confirming by you. |
| Connected WordPress staging (`staging.shopvious.com`) | Available | This is the **Shopvious** store, not SEOBooster. Not touched. |

Anything labelled "indexed" below is what search results showed. None of it has been read on the page itself, so treat it as a lead, not a verified fact.

---

## A. Verified or near-verified business facts

| Fact | Source | Confidence | Note |
|---|---|---|---|
| Trading name on site: "SEO Booster UK" | Page titles (indexed) | High | The new brand spells it "SEOBooster". Confirm the preferred form. |
| Legal entity named on site: SEO BOOSTER LTD, company number 15859293 | Site footer (indexed) and Companies House (indexed) | High | |
| Registered office: 65 High Street, Waltham Cross, England, EN8 7AE | Site and Companies House (indexed) | High | This looks like a registered-office address. Confirm whether it's also a place clients can visit. |
| Incorporated 25 July 2024 | Companies House (indexed) | Medium | |
| **Company status: Dissolved, 30 December 2025** | Companies House (indexed) | Medium, **critical** | If this is correct, the site can't name this company, its number, or say it is "registered". See blocker B1. |
| Phone +44 7380 817151, email support@seobooster.uk, hours 10am–5pm | Site (indexed) | Medium | Confirm all three are current and approved for publication. |

## B. Publication blockers

| # | Blocker | Why it matters |
|---|---|---|
| B1 | **Which legal entity trades as SEOBooster now?** | UK company-disclosure rules require a limited company's registered name, number and registered office on its website. If SEO BOOSTER LTD is dissolved, we need the entity (new company, sole trader or other) that will contract with clients and take payment. |
| B2 | **The "18 years" claim** | The current site says "helped grow over the past 18 years". The company was incorporated in 2024. Unless this is backed by a founder's documented personal track record, it has to go. |
| B3 | **"More than half of our team contribute to WordPress core"** | This reads like template copy. It needs evidence (named contributors, profile links) or it has to go. |
| B4 | **Engagement-selling packages** (for example "Gain 1,000 Likes", "Facebook Story Views", "Post Engagement") | Selling likes or views conflicts with Meta's rules on inauthentic behaviour. It also undercuts a trust-led agency brand and can hurt clients' accounts. My recommendation is to retire them (see redirect map). This is your call. |
| B5 | Payment provider and fulfilment owner | Needed before any "Buy" button can go live. Until then every package routes to an enquiry. |
| B6 | Form delivery destination and hosting platform | Needed before the contact route can be tested end to end. |
| B7 | Logo | There's no approved logo. A temporary wordmark is used and flagged. |
| B8 | Privacy, cookie and terms content | The existing Terms and Refund Policy weren't readable from here. The new pages need your actual practices (data processors, retention, refund terms). No invented legal wording will be published as policy. |

## C. Existing content worth preserving or improving

These URLs exist and may have search history or links. We keep the useful intent and redirect the URL.

| Existing URL (indexed) | Topic | Keep the intent? |
|---|---|---|
| `/` | Home | Yes |
| `/search-engine-optimization/` | SEO | Yes, as the core pillar |
| `/digital-marketing-services/` | Digital marketing | Yes, becomes the Services hub |
| `/web-designing/` | Web design | Yes, merged into one website page |
| `/website-development/` | Web development, including stated timelines of 10–12 and 15–20 business days | Yes, merged. **Confirm the timelines are still accurate.** |
| `/facebook-marketing-services/` | Facebook ads and marketing | Yes, as paid social |
| `/instagram-marketing-services/` | Instagram marketing | Yes, as paid social |
| `/email-marketing/` | Email marketing | Only if it's still offered |
| `/contact-us/` | Contact | Yes |
| `/blog/` | Blog | Depends on the publishing plan |
| `/terms-conditions/`, `/refund-policy/`, privacy policy (URL unknown) | Legal | Rewrite from your actual practices |
| `/product-category/seo/` | Shop category | Redirect |
| Local SEO copy (indexed snippet) | Local SEO | Yes, as its own page |

### Existing products (indexed, prices in EUR)

| Product | Indexed price | Recommendation |
|---|---|---|
| Basic SEO Audit | €14.99 per month | Rework it. A recurring audit at this price isn't credible. Make it a one-time fixed-scope audit. |
| On-Page Optimization Package | €74.99 | Candidate fixed-scope package. Scope needs defining. |
| Advanced SEO Package | €179.99 | Candidate. Is it one-time or monthly? Scope needs defining. |
| Local Pro Plan | Unknown | Candidate. The indexed title mentions "local ad targeting", so it's unclear whether this is SEO or ads. |
| Starter Digital Marketing Plan | €1.99 | Retire. The price undermines trust. |
| Social Starter Plan | €49.99 | Review the scope |
| Professional Instagram Growth Plan | €149.99 | Review the scope. Remove any follower or like guarantees. |
| Elite Facebook Marketing Mastery Plan | €249.99 | Review the scope |
| Elite Marketing Mastery Plan ("30-Day Campaign") | €249.99 | Review the scope |
| Advanced Facebook Growth Plan ("1,000 Likes") | €74.99 | **Retire (B4)** |
| Facebook Post Engagement Package ("Boost 5 Posts") | €29.99 | **Retire (B4)**, unless it's genuinely paid boosting with ad spend disclosed |
| Facebook Story Views Package | €99.99 | **Retire (B4)** |

## D. Claims we will NOT carry over without evidence

- "Trusted SEO company", "reputed FB ad agency in London", "top choice of a huge number of businesses"
- "18 years", "WordPress core contributors"
- "Rank higher on giant search engines" (implied outcome)
- Any client logos, testimonials, reviews, results or case studies. None have been supplied.

## E. Proposed additions requiring approval

- Positioning: an SEO-led growth agency for UK small and mid-sized businesses and online stores
- Services: website maintenance, content writing, graphic design, eCommerce services, Google Ads and TikTok Ads. These are in the brief but not confirmed as current offerings.
- Working commitments shown on the site: no ranking guarantees, clients own their accounts and data, written scope before work starts, reporting against agreed measures. These must be commitments you'll actually keep.
- A free initial review or call. That's an offer decision.

## F. Missing information (see `04-decisions-needed.md`)

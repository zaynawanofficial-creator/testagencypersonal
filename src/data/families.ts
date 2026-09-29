import type { FamilyName } from "./catalogue";

export interface Faq { q: string; a: string }
export interface Family {
  name: FamilyName;
  slug: string;
  navLabel: string;
  /** One line for menus and cards. */
  summary: string;
  /** Benefit-led introduction for service cards. */
  benefit: string;
  title: string; // <title>
  description: string; // meta description
  h1: string;
  lede: string;
  suits: string[];
  notFor: string[];
  problems: { title: string; body: string }[];
  /** Package groups; every package in the family must appear exactly once (checked at build). */
  groups: { title: string; intro: string; ids: number[] }[];
  process: { title: string; body: string }[];
  inputs: string[];
  timeline: string;
  faqs: Faq[];
  related: string[]; // slugs
  /** Starting points highlighted in the hero facts panel. */
  entryIds: number[];
  /** Illustrative excerpt of a deliverable format (not client data). SEO uses the worked example instead. */
  example?: { title: string; intro: string; columns: string[]; rows: string[][] };
}

export const families: Family[] = [
  {
    name: "SEO",
    slug: "seo",
    navLabel: "SEO",
    summary: "Audits, fixes, local SEO, legitimate links and monthly growth work.",
    benefit: "Find what is holding your site back, fix it in the right order, and build pages that buyers and search engines understand.",
    title: "SEO Services: Audits, Technical Fixes & Monthly SEO | SEO Booster",
    description:
      "Fixed-price SEO audits from $399, on-page and technical fix sprints, local SEO, legitimate listings and outreach, and monthly SEO from $900/month. Clear scope, no ranking guarantees.",
    h1: "SEO services with a clear scope and a fixed starting price",
    lede:
      "Find out what is holding your site back, fix it in a sensible order, and build the pages and legitimate signals that help search engines and buyers choose you. Every package states exactly what is included, what is not, and what we need from you.",
    suits: [
      "Service businesses and online stores whose customers already search for what they sell",
      "Owners who want a written diagnosis before committing to monthly spend",
      "WordPress, WooCommerce and Shopify sites; other platforms by proposal",
      "Teams that can give access and approve changes within a few days",
    ],
    notFor: [
      "Anyone who needs a guaranteed ranking, traffic figure or AI citation",
      "Bought links presented as editorial endorsements, fake reviews or fake locations",
      "Sites that cannot be changed and have no developer to implement fixes",
    ],
    problems: [
      { title: "Pages compete with each other", body: "Several pages target the same search, so none of them is a clear answer. We map one intent to one page." },
      { title: "Search engines cannot read the site cleanly", body: "Indexing, canonical, redirect and sitemap problems waste crawling and hide the pages that matter." },
      { title: "Local and business details are inconsistent", body: "Mismatched names, addresses and categories across profiles weaken local visibility and trust." },
      { title: "No one knows what changed or why", body: "Without a baseline and a change log, it is impossible to tell whether SEO work is helping." },
    ],
    groups: [
      { title: "Audits: find out what to fix first", intro: "One-time diagnoses with a prioritised roadmap. Choose by site size and type.", ids: [8, 9, 10, 18] },
      { title: "Implementation: fix and improve", intro: "Bounded work on agreed pages or an agreed technical fix list.", ids: [11, 12, 13] },
      { title: "Listings, citations and outreach", intro: "Legitimate profiles, citations and transparent outreach. No promises of dofollow status, indexation, placement or rankings.", ids: [15, 16, 17] },
      { title: "Ongoing SEO", intro: "Monthly work against agreed priorities, billed in advance, month to month.", ids: [14] },
    ],
    process: [
      { title: "Discovery", body: "You complete a short intake and share read-only Search Console and analytics access where available. We record a baseline." },
      { title: "Strategy", body: "We crawl and review the site, then agree priorities, owners and sequencing in a written roadmap." },
      { title: "Execution", body: "Fixes and page improvements are made in order of likely impact, or handed to your developer with clear instructions." },
      { title: "Reporting", body: "You receive a change log and report showing what was done, the evidence behind it and what comes next." },
    ],
    inputs: [
      "Your website address and priority services, products or markets",
      "Read-only Google Search Console and analytics access, where available",
      "CMS access, or the name of the developer who will implement changes",
      "One person who can confirm business facts and approve changes",
    ],
    timeline:
      "Audits take 7 to 12 business days depending on the package. Lead times start once we have the required inputs and access. Technical fixes can be picked up by search engines within weeks of going live; ranking changes from new or improved pages usually take months and are never guaranteed.",
    faqs: [
      { q: "Which SEO audit should I choose?", a: "SEO Audit Essentials suits sites with up to 100 indexable URLs; SEO Audit Growth covers up to 500 URLs with keyword-overlap and competitor work; the Ecommerce SEO Audit is built for Shopify or WooCommerce stores with up to 1,000 crawlable URLs. If you are worried about past link building, the Backlink Profile Audit is separate." },
      { q: "Does an audit include fixing the problems?", a: "No. Audits are diagnosis and a prioritised roadmap. Implementation is available through the On-Page SEO Sprint, the Technical SEO Fix Sprint (by proposal, from $750) or Monthly SEO Growth." },
      { q: "Do you guarantee rankings or backlinks?", a: "No. Search results depend on competitors and search engines we do not control. Link-related packages cover research, legitimate submissions and transparent outreach; they never promise dofollow status, indexation, domain metrics or placement." },
      { q: "How does monthly SEO billing work?", a: "Monthly SEO Growth starts from $900/month, is billed in advance and runs month to month. Cancel at least seven days before the next billing period." },
      { q: "Are publisher or directory fees included?", a: "No. The Guest Post Outreach Campaign is a $499 service fee; any publisher cost needs your separate approval. Directory, aggregator and publisher fees are paid by the client unless a package says otherwise." },
    ],
    related: ["content-writing", "web-design-development", "ecommerce"],
    entryIds: [8, 11, 14],
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    navLabel: "Digital Marketing",
    summary: "Growth audits, tracking, paid ads launches, email and monthly marketing.",
    benefit: "Launch campaigns on the channels that suit your offer, with tracking you can trust from the first day.",
    title: "Digital Marketing Services: Paid Ads, Tracking & Email | SEO Booster",
    description:
      "Digital growth audits, analytics and conversion tracking, paid ads launches on Google, Meta, Microsoft, LinkedIn, TikTok or Pinterest, email foundations and monthly marketing. Prices in USD.",
    h1: "Digital marketing that starts with measurement and a plan",
    lede:
      "Launch paid campaigns, set up tracking you can trust and build an email channel, with a fixed scope for each step. Ad spend always stays in your own accounts and is paid by you.",
    suits: [
      "SMEs and ecommerce brands choosing which channels to invest in",
      "Businesses launching on one ad platform or coordinating several",
      "Anyone whose current tracking cannot say where enquiries or sales come from",
    ],
    notFor: [
      "Guaranteed revenue or return on ad spend",
      "Purchased email lists or bought followers, likes and views",
    ],
    problems: [
      { title: "Spend without a channel plan", body: "Budget is split across platforms without evidence of which suits the offer." },
      { title: "Tracking that cannot be trusted", body: "Missing or duplicated conversion events make every report guesswork." },
      { title: "Campaigns launched without structure", body: "Poor account structure makes it hard to see what works and to scale it." },
    ],
    groups: [
      { title: "Plan and measure", intro: "Start with a channel plan, reliable tracking or a conversion review.", ids: [1, 2, 5] },
      { title: "Launch", intro: "Paid campaigns and email set up with a defined number of campaigns, ads and flows.", ids: [3, 4, 6] },
      { title: "Ongoing marketing", intro: "Coordinated monthly work across selected channels.", ids: [7] },
    ],
    process: [
      { title: "Discovery", body: "We review your goals, market, current channels and tracking." },
      { title: "Strategy", body: "We agree channels, budgets you control, measures and a launch checklist." },
      { title: "Execution", body: "We set up accounts, tracking and campaigns inside your own platforms." },
      { title: "Reporting", body: "Reviews at agreed points show spend, results and the next actions." },
    ],
    inputs: [
      "Client-owned ad, analytics and email accounts with admin access",
      "Your approved offer, landing pages, creative and any claims you make",
      "A payment method on each ad account for media spend",
    ],
    timeline: "Fixed-scope packages take 5 to 10 business days after complete access. Multi-channel launches start from 10 business days by proposal.",
    faqs: [
      { q: "Which ad platforms do you work with?", a: "Google/YouTube, Meta, Microsoft, LinkedIn, TikTok and Pinterest. Specialist availability for each is confirmed in the proposal." },
      { q: "Is ad spend included in the price?", a: "No. Media spend is always separate and paid directly by you to the platform." },
      { q: "How is the Conversion Review different from the Ecommerce CRO Audit?", a: "The Conversion Review covers up to eight priority pages on lead-generation or ecommerce sites. The Ecommerce CRO Audit is specific to Shopify or WooCommerce purchase journeys, from homepage to checkout path." },
    ],
    related: ["seo", "graphic-design", "content-writing"],
    entryIds: [1, 3, 7],
    example: {
      title: "Excerpt from a tracking test report",
      intro: "Analytics & Conversion Tracking Setup ends with a test report. Each agreed event is checked in debug mode.",
      columns: ["Agreed event", "Trigger", "Fires once", "Parameters"],
      rows: [["generate_lead", "Contact form submitted", "Yes", "form_name, page"], ["begin_checkout", "Checkout started", "Yes", "value, currency"], ["phone_click", "Tap on phone link", "Yes", "link_url"]],
    },
  },
  {
    name: "Content Writing",
    slug: "content-writing",
    navLabel: "Content Writing",
    summary: "Articles, guides, service pages, website, product and email copy.",
    benefit: "Clear, original copy that answers what buyers ask, with a fixed word count, price and revision limit.",
    title: "Content Writing Services: SEO Articles, Web & Product Copy | SEO Booster",
    description:
      "Researched SEO articles from $179, long-form guides, service pages, website copy sets, product and category copy, email sequences, social captions and localisation by proposal.",
    h1: "Content writing with a brief, a word count and a clear revision limit",
    lede:
      "Original copy written for readers first and search engines second, based on the facts you supply. Each package states its word range, deliverables and revision rounds.",
    suits: [
      "Businesses that know what they sell but lack time to write about it well",
      "Stores that need product and category copy at a defined volume",
      "Teams preparing a new website or campaign",
    ],
    notFor: ["Invented credentials, results or reviews", "Regulated claims without your own expert review"],
    problems: [
      { title: "Thin pages", body: "Service and category pages say too little for buyers or search engines to understand them." },
      { title: "Copy that ignores intent", body: "Articles chase keywords rather than answering the question a searcher asked." },
    ],
    groups: [
      { title: "Search content", intro: "Articles, guides and service pages built around one search intent.", ids: [19, 20, 21] },
      { title: "Website and store copy", intro: "Core website pages, product descriptions and category copy.", ids: [22, 23, 24] },
      { title: "Email, social and localisation", intro: "Sequences, captions and translated content with specialist review.", ids: [25, 26, 27] },
    ],
    process: [
      { title: "Discovery", body: "We confirm the audience, purpose and the facts we may use." },
      { title: "Strategy", body: "We write a brief and outline around the search intent or goal." },
      { title: "Execution", body: "We draft original copy with sources for material factual claims." },
      { title: "Reporting", body: "You receive editable files and the agreed revision rounds." },
    ],
    inputs: ["Topic, audience and purpose", "Verified business or product facts", "Brand voice and pages to link to", "One approver"],
    timeline: "Most writing packages take 5 to 10 business days from a complete brief. Localisation starts from 7 business days by proposal.",
    faqs: [
      { q: "Do you publish the content?", a: "Publishing is not included in writing packages. It can be added to website or maintenance work." },
      { q: "How is multilingual content priced?", a: "From $0.15 per word, by proposal. The proposal names the language, locale, reviewer method, word count and file format." },
    ],
    related: ["seo", "web-design-development", "ecommerce"],
    entryIds: [19, 21, 22],
    example: {
      title: "Excerpt from an article brief",
      intro: "Every SEO Blog Article starts with a search-intent brief you approve before drafting.",
      columns: ["Brief field", "What it contains"],
      rows: [["Search intent", "What the reader wants to find out or do"], ["Audience", "Who the article is for and what they already know"], ["Outline", "Proposed headings in order"], ["Internal links", "Up to 3 suggested pages on your site"], ["Sources", "Where material factual claims come from"]],
    },
  },
  {
    name: "Web Design & Development",
    slug: "web-design-development",
    navLabel: "Web Design & Development",
    summary: "UI design, landing pages and WordPress websites.",
    benefit: "WordPress websites and landing pages that explain your offer quickly and work on every screen.",
    title: "Web Design & Development: WordPress Websites & Landing Pages | SEO Booster",
    description:
      "Landing page and website UI design, landing page design and build, WordPress business websites from $1,699, growth websites and custom development by proposal. Design-only and design-and-build options.",
    h1: "Websites designed to be found, understood and easy to use",
    lede:
      "Choose design files only, or design and build. WordPress sites are built responsive, with basic technical SEO and a tested launch checklist.",
    suits: [
      "Service businesses that need a new or rebuilt WordPress website",
      "Teams that want design files for their own developer",
      "Campaigns that need one focused landing page",
    ],
    notFor: ["Ecommerce stores (see eCommerce Services)", "Hosting, domains and licences, which are client-funded"],
    problems: [
      { title: "A site that does not explain the offer", body: "Visitors cannot quickly see what you do, who it is for and what to do next." },
      { title: "Slow, fragile builds", body: "Heavy themes and plugins make sites slow and hard to maintain." },
    ],
    groups: [
      { title: "Design only", intro: "Design files and handoff notes for your developer. No development included.", ids: [28, 29] },
      { title: "Design and build", intro: "Designed and built in WordPress, tested before launch.", ids: [30, 31, 32] },
      { title: "Custom development", intro: "Integrations, custom data, advanced templates or migrations by proposal.", ids: [33] },
    ],
    process: [
      { title: "Discovery", body: "We confirm goals, sitemap, content and technical constraints." },
      { title: "Strategy", body: "We agree the page plan, design direction and acceptance checks." },
      { title: "Execution", body: "We design, then build and test on desktop, tablet and mobile." },
      { title: "Reporting", body: "We run the launch checklist and provide defect support for the stated period." },
    ],
    inputs: ["Hosting and domain (client-owned)", "Approved content and brand assets", "Seller and contact facts for the site", "One approver"],
    timeline: "From 7 business days for design-only work to 25 to 30 business days for the WordPress Growth Website. Custom work from 30 business days by proposal.",
    faqs: [
      { q: "Is copywriting included?", a: "Not in full. Website packages include light editing; full copy is available through the Website Copy Set." },
      { q: "Do you build on platforms other than WordPress?", a: "Standard packages are WordPress. Custom technologies are available by proposal." },
    ],
    related: ["website-maintenance", "content-writing", "seo"],
    entryIds: [28, 31, 33],
    example: {
      title: "Excerpt from a launch checklist",
      intro: "WordPress websites are checked against a written launch checklist before go-live.",
      columns: ["Check", "What is tested"],
      rows: [["Pages and menu", "Every agreed page loads and is reachable from the menu"], ["Contact form", "Test submission received at the agreed address"], ["Responsive layouts", "Desktop, tablet and mobile reviewed"], ["Indexing controls", "Correct settings for staging and live"], ["Analytics", "Connection confirmed"]],
    },
  },
  {
    name: "Website Maintenance",
    slug: "website-maintenance",
    navLabel: "Website Maintenance",
    summary: "Monthly care plans for WordPress and Shopify sites.",
    benefit: "Routine updates, checked backups and small edits handled for a fixed monthly fee.",
    title: "Website Maintenance Plans for WordPress & Shopify | SEO Booster",
    description:
      "Monthly website care from $129/month: updates, backup verification, uptime and security checks, reporting and a set allowance of small edits. Month to month, seven days' notice.",
    h1: "Website maintenance with a fixed monthly allowance",
    lede:
      "Routine care for WordPress and Shopify sites, with checks, reporting and a set number of hours for small edits each month. Business-hours support; no 24/7 incident response.",
    suits: ["Healthy WordPress or Shopify sites that need routine care", "Businesses without an in-house developer"],
    notFor: ["Hacked-site recovery or malware remediation", "24/7 monitoring or guaranteed uptime"],
    problems: [
      { title: "Updates nobody owns", body: "Core, theme and plugin updates are skipped until something breaks." },
      { title: "Backups nobody has tested", body: "A backup that has never been checked may not restore." },
    ],
    groups: [{ title: "Care plans", intro: "Choose by the monthly allowance of small edits and check frequency. Unused time expires.", ids: [34, 35, 36] }],
    process: [
      { title: "Discovery", body: "We check the site is healthy and supported, and confirm access and backups." },
      { title: "Strategy", body: "We agree the update routine, emergency contact and staging needs." },
      { title: "Execution", body: "Monthly checks, updates and small edits within your allowance." },
      { title: "Reporting", body: "A monthly log records checks, updates, backups and time used." },
    ],
    inputs: ["Admin and hosting access", "Existing backup capability", "An emergency contact"],
    timeline: "Onboarding takes 5 business days.",
    faqs: [
      { q: "How do I cancel?", a: "Plans are month to month and billed in advance. Cancel at least seven days before the next billing period." },
      { q: "Do unused hours roll over?", a: "No. Unused edit time expires at the end of each month." },
    ],
    related: ["web-design-development", "seo", "ecommerce"],
    entryIds: [34, 35, 36],
    example: {
      title: "Excerpt from a monthly care log",
      intro: "Each month you receive a log of checks, updates, backups and edit time used.",
      columns: ["Item", "What the log records"],
      rows: [["Updates", "Core, theme and plugin or app updates reviewed and applied"], ["Backups", "Backup verification, where supported"], ["Uptime and security", "Checks carried out and anything found"], ["Edit time", "Small edits completed and time used against the allowance"]],
    },
  },
  {
    name: "Graphic Design",
    slug: "graphic-design",
    navLabel: "Graphic Design",
    summary: "Logos, brand identity, social, ad, website and print-ready collateral files.",
    benefit: "A consistent look across your logo, social posts, ads and website graphics, delivered as ready-to-use files.",
    title: "Graphic Design Services: Logos, Brand Identity & Ad Creative | SEO Booster",
    description:
      "Logo design from $299, brand identity systems, social media and advertising creative packs, website graphics and business collateral files. Fixed counts, formats and revision rounds.",
    h1: "Graphic design with fixed counts, formats and revisions",
    lede: "Logos, brand systems and creative packs delivered as files in the formats you need. We supply design files only; printing and production are not included.",
    suits: ["New businesses needing a professional logo or identity", "Brands that need consistent social, ad or website graphics"],
    notFor: ["Printing, packaging production or fulfilment", "Trademark searches or legal clearance"],
    problems: [
      { title: "Inconsistent visuals", body: "Every post, ad and page looks different, which weakens recognition." },
      { title: "Files in the wrong format", body: "Assets arrive at the wrong size or without editable sources." },
    ],
    groups: [
      { title: "Identity", intro: "A primary logo or a complete identity system.", ids: [37, 38] },
      { title: "Creative packs", intro: "Fixed numbers of social, ad, website and collateral designs.", ids: [39, 40, 41, 42] },
    ],
    process: [
      { title: "Discovery", body: "A questionnaire covering audience, positioning and references." },
      { title: "Strategy", body: "We agree the visual direction and the exact list of files." },
      { title: "Execution", body: "Concepts, then refinement within the stated revision rounds." },
      { title: "Reporting", body: "Final files in the listed formats, checked to open correctly." },
    ],
    inputs: ["Approved business name and positioning", "Brand kit, copy and imagery where relevant", "One decision maker"],
    timeline: "5 to 10 business days for creative packs; 15 to 20 business days for a brand identity system.",
    faqs: [{ q: "Do you print business cards or brochures?", a: "No. Graphic design packages supply print-ready and digital files; printing is arranged by you." }],
    related: ["digital-marketing", "web-design-development", "content-writing"],
    entryIds: [37, 38, 40],
    example: {
      title: "Excerpt from a logo file handover",
      intro: "Logo Essentials is delivered as a checked set of files and a simple usage sheet.",
      columns: ["File", "Formats"],
      rows: [["Primary logo", "SVG, PDF, PNG, JPG"], ["Secondary lockup", "SVG, PDF, PNG, JPG"], ["Monochrome version", "SVG, PDF, PNG"], ["Usage sheet", "PDF"]],
    },
  },
  {
    name: "eCommerce Services",
    slug: "ecommerce",
    navLabel: "eCommerce Services",
    summary: "Shopify and WooCommerce stores, catalogues, CRO and store operations.",
    benefit: "Launch or improve a Shopify or WooCommerce store, from catalogue set-up to the checkout journey.",
    title: "Shopify & WooCommerce Services: Store Builds, Catalogues & CRO | SEO Booster",
    description:
      "Shopify or WooCommerce store launches from $2,499, catalogue setup and optimisation for 25 products, ecommerce CRO audits, product research and managed store operations. You remain merchant of record.",
    h1: "Shopify and WooCommerce services, from store launch to daily operations",
    lede:
      "Launch a store, load and improve your catalogue, find conversion problems or hand over routine operations. You stay the merchant of record: your store, your accounts, your funds.",
    suits: ["New stores with up to 20 or 50 products", "Existing Shopify or WooCommerce stores that need catalogue or conversion work", "Merchants who want day-to-day operational support"],
    notFor: ["Amazon, eBay or Etsy marketplace services", "Holding client funds, buying inventory or warehouse fulfilment"],
    problems: [
      { title: "Product pages that do not sell", body: "Thin titles and descriptions, poor image order and weak collection structure." },
      { title: "Checkout friction", body: "Visitors add to cart but do not complete the purchase." },
    ],
    groups: [
      { title: "Store builds", intro: "New Shopify or WooCommerce stores with a test order checked before launch.", ids: [43, 44] },
      { title: "Catalogue and conversion", intro: "Catalogue work for 25 products, conversion auditing and product research.", ids: [45, 46, 47, 48] },
      { title: "Store operations", intro: "Monthly operational capacity defined by proposal.", ids: [49, 50] },
    ],
    process: [
      { title: "Discovery", body: "We confirm products, markets, payment, shipping and tax decisions you have made." },
      { title: "Strategy", body: "We agree scope, product counts and acceptance checks." },
      { title: "Execution", body: "Build, load or optimise, then test the full purchase journey." },
      { title: "Reporting", body: "A completion sheet, change log or monthly operations report." },
    ],
    inputs: ["Client-owned store and accounts", "Clean product data and assets", "Your payment, shipping, tax and policy decisions", "One approver"],
    timeline: "Catalogue and audit work takes 5 to 10 business days. Store launches take 25 to 45 business days depending on the package.",
    faqs: [
      { q: "Is the Ecommerce CRO Audit the same as the Conversion Review?", a: "No. The Ecommerce CRO Audit covers a Shopify or WooCommerce purchase journey, from homepage through collection, product, cart and checkout path. The Conversion Review in Digital Marketing covers up to eight priority pages on any lead-generation or ecommerce site." },
      { q: "Do you configure tax for my store?", a: "We configure payments, shipping and tax from your instructions. We do not provide legal or tax advice." },
    ],
    related: ["seo", "content-writing", "graphic-design"],
    entryIds: [43, 45, 47],
    example: {
      title: "Excerpt from a catalogue completion sheet",
      intro: "Catalogue Setup ends with a completion sheet matched against your source spreadsheet.",
      columns: ["Field", "Checked against your sheet"],
      rows: [["Title and description", "Supplied text entered unchanged"], ["Price and SKU", "Matches the source row"], ["Images", "Supplied images attached in order"], ["Collection or category", "Assigned as agreed"], ["Variants", "Created within the agreed simple limit"]],
    },
  },
];

export const familyBySlug = (slug: string) => families.find((f) => f.slug === slug);
export const familyByName = (name: FamilyName) => families.find((f) => f.name === name)!;
/** Display order for menus and the Services hub (SEO first as the core strength). */
export const familyOrder = ["seo", "digital-marketing", "content-writing", "web-design-development", "ecommerce", "website-maintenance", "graphic-design"];
export const orderedFamilies = familyOrder.map((s) => familyBySlug(s)!);

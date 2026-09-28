// Business configuration. Values here are recorded decisions (docs/DECISIONS.md), not design copy.
// null = not yet confirmed; the release guard blocks launch while a required value is null.
import business from "./business.json";

export const SITE_MODE = __SITE_MODE__;
export const IS_PREVIEW = SITE_MODE !== "release";

export const site = {
  brand: "SEO Booster", // exactly two words
  domainLabel: "SEOBooster.uk",
  founder: "Zain Ul Abedeen",
  seller: "Zain Ul Abedeen trading as SEO Booster",
  // Legal/transactional use only. Never on marketing pages; not a staffed office.
  legalAddress: "65 High Street, Waltham Cross, England, EN8 7AE",
  currencyNote: "All prices are in US dollars (USD).",
  taxNote: "Applicable tax determined and shown at checkout.",
  thirdPartyNote: "Third-party costs, such as ad spend, licences, hosting and publisher fees, are paid by the client unless a package explicitly includes them.",

  contact: {
    publicEmail: business.publicEmail as string | null, // pending: which historical business address is public
    phone: business.phone as string | null, // pending: public phone/WhatsApp, if any
  },

  // Supplied logo 01-SEOBooster-logo-350x150.png not yet provided to this workspace.
  logo: business.logo as null | { src: string; width: number; height: number },

  forms: {
    endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? null,
  },

  commerce: "not-activated" as "not-activated" | "test" | "live",
  insightsVisible: business.insightsVisible, // hidden until there is approved, useful content (D-09)
  policiesPublished: business.policiesPublished, // privacy, cookies, terms, cancellation: drafts pending review (A3)
};

import raw from "./catalogue.json";

export type Classification = "Fixed-scope one-time" | "Quote-led bespoke" | "Ongoing engagement";
export type FamilyName =
  | "Digital Marketing"
  | "SEO"
  | "Content Writing"
  | "Web Design & Development"
  | "Website Maintenance"
  | "Graphic Design"
  | "eCommerce Services";

export interface Package {
  id: number;
  name: string;
  family: FamilyName;
  classification: Classification;
  /** Exact approved display string, e.g. "From $900/month". Never parsed for payment. */
  displayPrice: string;
  /** Integer US cents; null where the basis is not a flat amount (per-word). */
  amountUsdCents: number | null;
  billing: "one-time" | "monthly" | "per-word";
  priceQualifier: "from" | "service-fee" | null;
  clientFit: string;
  deliverables: string;
  exclusions: string;
  standardThirdPartyExclusion: boolean;
  revisions: string;
  prerequisites: string;
  leadTime: string;
  renewal: string;
  owner: string;
  acceptance: string;
  approval: "Approved";
  /** Checkout availability, separate from catalogue approval. */
  commerce: "not-activated" | "test" | "live";
}

export const catalogue = raw as unknown as {
  source: string;
  approved: string;
  currency: "USD";
  standardThirdPartyExclusion: string;
  packages: Package[];
};

export const packages = catalogue.packages;
export const byId = (id: number): Package => {
  const p = packages.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown package id ${id}`);
  return p;
};
export const byFamily = (f: FamilyName) => packages.filter((p) => p.family === f);

export const classLabel: Record<Classification, string> = {
  "Fixed-scope one-time": "Fixed scope",
  "Quote-led bespoke": "By proposal",
  "Ongoing engagement": "Monthly",
};

/** Split a catalogue list ("a; b; c") into items for readable lists. */
export const items = (s: string) =>
  s
    .replace(/\.$/, "")
    .split(/;\s*/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1));

export const packageAnchor = (p: Package) => `package-${p.id}`;

/** Exclusions are comma-separated phrases, sometimes followed by a full sentence. */
export const exclusionItems = (s: string) => {
  const [list, ...rest] = s.split(/\.\s+/);
  const out = list.replace(/\.$/, "").split(/,\s+/).map((x) => x.trim()).filter(Boolean);
  const tail = rest.join(". ").trim();
  return { list: out.map((x) => x.charAt(0).toUpperCase() + x.slice(1)), note: tail ? tail.replace(/\.?$/, ".") : null };
};

const usd = (cents: number) => `$${(cents / 100).toLocaleString("en-US")}`;
/** Lowest approved starting price in a family, stated with its billing basis. */
export const familyStartingPrice = (f: FamilyName) => {
  const list = byFamily(f).filter((p) => p.amountUsdCents !== null);
  const oneTime = list.filter((p) => p.billing === "one-time");
  const pool = oneTime.length ? oneTime : list;
  const min = pool.reduce((a, b) => (b.amountUsdCents! < a.amountUsdCents! ? b : a));
  return `From ${usd(min.amountUsdCents!)}${min.billing === "monthly" ? "/month" : ""}`;
};

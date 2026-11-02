#!/usr/bin/env python3
"""Seed the approved catalogue into WooCommerce as DRAFT products (idempotent by SKU).

Usage:  WP_URL=https://seobooster.uk WP_AUTH="Basic ..." python3 -I scripts/wp/seed-products.py [--dry-run]
- 7 product categories (one per family), created if missing (matched by slug).
- 50 simple, virtual, sold-individually products, status=draft, SKU SB-001..SB-050.
- regular_price is set ONLY for fixed-scope one-time packages. From/monthly/per-word packages get no price,
  so WooCommerce cannot sell them at a wrong amount; they route to enquiry until a billing method is approved.
- Catalogue fields are stored as sb_* meta; commerce state stays "not-activated".
Never edits or deletes existing products: an existing SKU is reported and skipped.
"""
import html, json, os, ssl, sys, urllib.error, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CAT = json.load(open(os.path.join(ROOT, "src", "data", "catalogue.json"), encoding="utf-8"))
BASE = os.environ["WP_URL"].rstrip("/") + "/wp-json/wc/v3"
AUTH = os.environ["WP_AUTH"]
DRY = "--dry-run" in sys.argv
CTX = ssl.create_default_context(cafile=os.environ.get("SSL_CERT_FILE") or None)
SLUGS = {"Digital Marketing": "digital-marketing", "SEO": "seo", "Content Writing": "content-writing",
         "Web Design & Development": "web-design-development", "Website Maintenance": "website-maintenance",
         "Graphic Design": "graphic-design", "eCommerce Services": "ecommerce"}


def api(method, path, body=None):
    req = urllib.request.Request(BASE + path, method=method, data=json.dumps(body).encode() if body is not None else None,
                                 headers={"Authorization": AUTH, "Content-Type": "application/json", "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, context=CTX, timeout=90) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f"{method} {path} -> HTTP {e.code}: {e.read()[:400].decode(errors='replace')}")


def ul(text, sep=";"):
    parts = [p.strip().rstrip(".") for p in text.split(sep) if p.strip()]
    return "<ul>" + "".join(f"<li>{html.escape(p[0].upper() + p[1:])}</li>" for p in parts) + "</ul>"


def description(p):
    ex_list, _, ex_note = p["exclusions"].partition(". ")
    out = [f"<p>{html.escape(p['clientFit'])}</p>",
           "<h3>What's included</h3>", ul(p["deliverables"]),
           "<h3>Not included</h3>", ul(ex_list, ",")]
    if ex_note:
        out.append(f"<p>{html.escape(ex_note)}</p>")
    if p["standardThirdPartyExclusion"]:
        out.append(f"<p><small>{html.escape(CAT['standardThirdPartyExclusion'])}</small></p>")
    out += ["<h3>What we need from you</h3>", f"<p>{html.escape(p['prerequisites'])}</p>",
            "<h3>Timing, revisions and renewal</h3>",
            f"<ul><li>Lead time: {html.escape(p['leadTime'])}</li><li>Revisions: {html.escape(p['revisions'])}</li><li>Renewal: {html.escape(p['renewal'])}</li></ul>",
            "<h3>How delivery is accepted</h3>", f"<p>{html.escape(p['acceptance'])}</p>",
            f"<p><small>{html.escape(p['owner'])} Prices in US dollars (USD). Applicable tax determined and shown at checkout.</small></p>"]
    return "\n".join(out)


def main():
    cats = {c["slug"]: c["id"] for c in api("GET", "/products/categories?per_page=100")}
    for fam, slug in SLUGS.items():
        if slug not in cats:
            if DRY:
                print("would create category", fam); cats[slug] = -1; continue
            cats[slug] = api("POST", "/products/categories", {"name": fam, "slug": slug})["id"]
            print("created category", fam, cats[slug])
    created, skipped = [], []
    for p in CAT["packages"]:
        sku = f"SB-{p['id']:03d}"
        if api("GET", f"/products?sku={sku}&status=any"):
            skipped.append(sku); continue
        fixed = p["classification"] == "Fixed-scope one-time" and p["amountUsdCents"] is not None
        body = {
            "name": p["name"], "sku": sku, "type": "simple", "status": "draft",
            "virtual": True, "downloadable": False, "sold_individually": True,
            "categories": [{"id": cats[SLUGS[p["family"]]]}],
            "short_description": f"<p>{html.escape(p['clientFit'])}</p><p><strong>{html.escape(p['displayPrice'])} USD</strong> · {html.escape(p['classification'])}</p>",
            "description": description(p),
            "meta_data": [{"key": k, "value": v} for k, v in {
                "sb_catalogue_id": p["id"], "sb_classification": p["classification"], "sb_display_price": p["displayPrice"],
                "sb_billing": p["billing"], "sb_price_qualifier": p["priceQualifier"] or "", "sb_lead_time": p["leadTime"],
                "sb_revisions": p["revisions"], "sb_renewal": p["renewal"], "sb_commerce": "not-activated",
                "sb_catalogue_source": f"{CAT['source']} approved {CAT['approved']}"}.items()],
        }
        if fixed:
            body["regular_price"] = f"{p['amountUsdCents'] / 100:.2f}"
        if DRY:
            created.append((sku, p["name"], body.get("regular_price", "no price"))); continue
        r = api("POST", "/products", body)
        created.append((sku, r["id"], body.get("regular_price", "no price")))
    print(f"{'would create' if DRY else 'created'} {len(created)}, skipped {len(skipped)} existing")
    for c in created:
        print("  ", *c)


if __name__ == "__main__":
    main()

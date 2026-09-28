#!/usr/bin/env python3
"""Cross-check src/data/catalogue.json against the index table in the master brief and structural rules."""
import json, re, pathlib, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
cat = json.loads((ROOT / "src/data/catalogue.json").read_text())
brief = (ROOT / "docs/source-master-brief.md").read_text()
idx = brief.split("### All-package index", 1)[1].split("### Full package specifications", 1)[0]
rows = [[c.strip() for c in l.strip("|").split("|")] for l in idx.splitlines() if re.match(r"\|\s*\d+\s*\|", l)]
FAMILIES = {"Digital Marketing", "SEO", "Content Writing", "Web Design & Development", "Website Maintenance", "Graphic Design", "eCommerce Services"}
CLASSES = {"Fixed-scope one-time", "Quote-led bespoke", "Ongoing engagement"}
REQUIRED = ["name", "family", "classification", "displayPrice", "clientFit", "deliverables", "exclusions", "revisions",
            "prerequisites", "leadTime", "renewal", "owner", "acceptance", "approval", "billing", "commerce"]
errs = []
pk = {p["id"]: p for p in cat["packages"]}
if len(rows) != 50: errs.append(f"index has {len(rows)} rows")
for i, fam, name, cls, price in rows:
    p = pk.get(int(i))
    if not p: errs.append(f"missing id {i}"); continue
    for label, a, b in (("family", p["family"], fam), ("name", p["name"], name), ("class", p["classification"], cls), ("price", p["displayPrice"], price)):
        if a != b: errs.append(f"#{i} {label}: spec '{a}' != index '{b}'")
for p in cat["packages"]:
    for f in REQUIRED:
        if not p.get(f): errs.append(f"#{p['id']} missing {f}")
    if p["family"] not in FAMILIES: errs.append(f"#{p['id']} bad family")
    if p["classification"] not in CLASSES: errs.append(f"#{p['id']} bad class")
    if p["approval"] != "Approved": errs.append(f"#{p['id']} not approved")
    if p["billing"] != "per-word":
        digits = re.sub(r"[^\d]", "", p["displayPrice"].split("/")[0])
        if int(digits) * 100 != p["amountUsdCents"]: errs.append(f"#{p['id']} amount/display mismatch")
    elif p["amountUsdCents"] is not None: errs.append(f"#{p['id']} per-word must have null amount")
    if (p["classification"] == "Ongoing engagement") != (p["billing"] == "monthly"): errs.append(f"#{p['id']} ongoing/monthly mismatch")
    if p["commerce"] != "not-activated": errs.append(f"#{p['id']} commerce activated without gate")
if errs:
    sys.exit("Catalogue check FAILED:\n  " + "\n  ".join(errs))
print("Catalogue check passed: 50 packages match the approved index (family, name, classification, display price) and structural rules.")

#!/usr/bin/env python3
"""Extract the approved 50-package catalogue from docs/source-master-brief.md into src/data/catalogue.json.
Run once per approved catalogue revision; the JSON is the authoritative data file the site reads."""
import json, re, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
src = (ROOT / "docs/source-master-brief.md").read_text(encoding="utf-8")
body = src.split("### Full package specifications", 1)[1].split("### Bespoke and later offers", 1)[0]
STD = ("Paid media, hosting, domains, premium themes/apps/plugins, stock assets, translation reviewers, "
       "publisher fees and other third-party costs unless explicitly listed.")
FIELDS = {
    "Family": "family", "Classification": "classification", "Numeric baseline USD": "numeric",
    "Display price (USD)": "displayPrice", "Client fit": "clientFit", "Exact deliverables": "deliverables",
    "Exclusions": "exclusions", "Revision limits": "revisions", "Client prerequisites": "prerequisites",
    "Lead time": "leadTime", "Renewal behaviour": "renewal", "Fulfilment owner": "owner",
    "Acceptance evidence": "acceptance", "Approval status": "approval",
}
out = []
for block in re.split(r"\n#### ", "\n" + body)[1:]:
    head, *lines = block.strip().splitlines()
    m = re.match(r"(\d+)\. (.+)", head)
    rec = {"id": int(m.group(1)), "name": m.group(2).strip()}
    for ln in lines:
        f = re.match(r"- \*\*(.+?):\*\* (.+)", ln)
        if f:
            rec[FIELDS[f.group(1)]] = f.group(2).strip()
    num = rec.pop("numeric")
    rec["amountUsdCents"] = int(num) * 100 if num.isdigit() else None
    ex = rec["exclusions"]
    rec["standardThirdPartyExclusion"] = ex.endswith(STD)
    rec["exclusions"] = ex[: -len(STD)].strip() if rec["standardThirdPartyExclusion"] else ex
    rec["billing"] = ("monthly" if "/month" in rec["displayPrice"] else "per-word" if "/word" in rec["displayPrice"] else "one-time")
    rec["priceQualifier"] = ("from" if rec["displayPrice"].startswith("From") else
                             "service-fee" if "service fee" in rec["displayPrice"] else None)
    rec["commerce"] = "not-activated"  # checkout availability is separate from catalogue approval
    out.append(rec)
assert [r["id"] for r in out] == list(range(1, 51)), "IDs must be 1-50 in order"
dest = ROOT / "src/data/catalogue.json"
dest.write_text(json.dumps({"source": "SEO-Booster-Service-Catalog-Approved.xlsx", "approved": "2026-09-26",
                            "currency": "USD", "standardThirdPartyExclusion": STD, "packages": out}, indent=2, ensure_ascii=False) + "\n")
print("wrote", len(out), "packages")

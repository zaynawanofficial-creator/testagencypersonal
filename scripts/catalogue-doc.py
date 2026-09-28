#!/usr/bin/env python3
"""Generate docs/CATALOGUE.md from src/data/catalogue.json (do not edit the .md by hand)."""
import json, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
d = json.loads((ROOT / "src/data/catalogue.json").read_text())
L = [f"# Service catalogue (generated)\n", f"Source: **{d['source']}**, approved {d['approved']}. Currency: {d['currency']}. "
     "Generated from `src/data/catalogue.json` by `scripts/catalogue-doc.py`. Checkout state is separate from approval: all packages are `not-activated`.\n",
     "| ID | Family | Package | Classification | Display price | Billing | Amount (US cents) | Lead time | Commerce |", "|---|---|---|---|---|---|---|---|---|"]
for p in d["packages"]:
    L.append(f"| {p['id']} | {p['family']} | {p['name']} | {p['classification']} | {p['displayPrice']} | {p['billing']} | {p['amountUsdCents'] if p['amountUsdCents'] is not None else 'n/a (per word)'} | {p['leadTime']} | {p['commerce']} |")
L.append(f"\nStandard third-party exclusion appended to every package: _{d['standardThirdPartyExclusion']}_\n")
(ROOT / "docs/CATALOGUE.md").write_text("\n".join(L) + "\n")
print("wrote docs/CATALOGUE.md")

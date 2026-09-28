#!/usr/bin/env python3
"""Assemble static pages from src/ into site/. No dependencies.

Usage: python3 build.py            # review build (noindex, review markers kept)
       python3 build.py --launch   # production build (indexable); fails if review markers remain
"""
import html, json, pathlib, re, sys

ROOT = pathlib.Path(__file__).parent
SRC, OUT = ROOT / "src", ROOT / "site"
ORIGIN = "https://seobooster.uk"
LAUNCH = "--launch" in sys.argv


def read(p):
    return (SRC / p).read_text(encoding="utf-8")


def breadcrumb_schema(crumbs):
    data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": name, "item": ORIGIN + url}
            for i, (name, url) in enumerate(crumbs)
        ],
    }
    return '  <script type="application/ld+json">' + json.dumps(data, ensure_ascii=False) + "</script>\n"


def build():
    head, top, bottom = read("partials/head.html"), read("partials/chrome-top.html"), read("partials/chrome-bottom.html")
    if LAUNCH:
        top = re.sub(r'<div class="review-bar".*?</div>\s*</div>\s*', "", top, flags=re.S)
    pages = json.loads(read("pages.json"))
    errors, outputs = [], []
    for pg in pages:
        schema = breadcrumb_schema(pg["breadcrumbs"]) if pg.get("breadcrumbs") else ""
        h = head
        for key, val in {
            "title": pg["title"],
            "description": pg["description"],
            "og_title": pg["og_title"],
            "canonical": ORIGIN + pg["path"],
            "robots": "index, follow" if LAUNCH else "noindex, nofollow",
        }.items():
            h = h.replace("{{" + key + "}}", html.escape(val, quote=True))
        h = h.replace("{{schema}}", schema)

        t = top
        if pg.get("nav") == "services":
            t = t.replace('class="nav__toggle"', 'class="nav__toggle is-current"', 1)
        elif pg.get("nav"):
            t = t.replace(f'class="nav__link" href="/{pg["nav"]}/"', f'class="nav__link" href="/{pg["nav"]}/" aria-current="page"')

        doc = h + t + read("pages/" + pg["main"]) + "\n" + bottom + "</body>\n</html>\n"
        if LAUNCH and ('class="decision"' in doc or "evidence-slot" in doc):
            errors.append(f'{pg["out"]}: unresolved review markers')
        outputs.append((OUT / pg["out"], doc))

    if errors:
        sys.exit("Launch build blocked, nothing written:\n  " + "\n  ".join(errors))
    for dest, doc in outputs:
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(doc, encoding="utf-8")
        print("built", dest.relative_to(ROOT))

    if LAUNCH:
        (OUT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {ORIGIN}/sitemap.xml\n")
    else:
        (OUT / "robots.txt").write_text("User-agent: *\nDisallow: /\n# Review build: not for indexing.\n")
    urls = "".join(f"  <url><loc>{ORIGIN}{p['path']}</loc></url>\n" for p in pages)
    (OUT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + "</urlset>\n"
    )


if __name__ == "__main__":
    build()

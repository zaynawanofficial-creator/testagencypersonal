import type { APIRoute } from "astro";
import { families } from "../data/families";
import { site as cfg } from "../data/site";
export const GET: APIRoute = ({ site }) => {
  const paths = ["/", "/services/", ...families.map((f) => `/services/${f.slug}/`), "/our-approach/", "/about/", "/contact-us/", ...(cfg.insightsVisible ? ["/insights/"] : [])];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};

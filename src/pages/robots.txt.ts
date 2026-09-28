import type { APIRoute } from "astro";
import { IS_PREVIEW } from "../data/site";
// Preview: allow crawling so crawlers can SEE the noindex (meta + X-Robots-Tag). Blocking would hide it.
export const GET: APIRoute = ({ site }) =>
  new Response(
    IS_PREVIEW
      ? "User-agent: *\nAllow: /\n# Preview build: every page is noindex via meta robots and X-Robots-Tag.\n"
      : `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", site).href}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );

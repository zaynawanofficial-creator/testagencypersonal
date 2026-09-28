// Release guard + release build. Nothing indexable is written to dist-release unless EVERY gate passes.
// 1) configuration gates (no build)  2) build into a temporary directory  3) crawl it  4) promote atomically.
import { execSync } from "node:child_process";
import { existsSync, readFileSync, rmSync, renameSync, mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { checkOutput } from "./check-output.mjs";
import { htaccess } from "./write-htaccess.mjs";
import { writeFileSync } from "node:fs";

const ROOT = new URL("..", import.meta.url).pathname;
const biz = JSON.parse(readFileSync(join(ROOT, "src/data/business.json"), "utf8"));
const approval = existsSync(join(ROOT, "release-approval.json")) ? JSON.parse(readFileSync(join(ROOT, "release-approval.json"), "utf8")) : {};
const gates = [];
const gate = (ok, msg) => { if (!ok) gates.push(msg); };

try { execSync("python3 scripts/verify-catalogue.py", { cwd: ROOT, stdio: "pipe" }); } catch (e) { gates.push("catalogue: " + e.stderr?.toString().trim()); }
gate(/^https:\/\//.test(process.env.PUBLIC_FORM_ENDPOINT || ""), "enquiry delivery: PUBLIC_FORM_ENDPOINT (https) not set, and a controlled test submission must be received first");
gate(biz.publicEmail, "contact: public email not confirmed (business.json publicEmail)");
gate(biz.logo && existsSync(join(ROOT, "public", biz.logo.src || "")), "brand: supplied logo not placed in public/ and configured (business.json logo)");
gate(biz.policiesPublished, "legal: privacy, cookies, terms and cancellation pages not approved (business.json policiesPublished)");
gate(biz.policiesPublished ? ["privacy", "cookies", "terms"].every((p) => existsSync(join(ROOT, `src/pages/${p}.astro`))) : true, "legal: policy page sources missing");
gate(approval.launchApproved === true && approval.approvedBy && approval.date, "approval: release-approval.json with launchApproved, approvedBy and date is required");
gate(approval.redirectMapApproved === true, "SEO: redirect map (docs/URL-MAP.csv) not approved in release-approval.json");

if (gates.length) {
  console.error("RELEASE BLOCKED. Nothing was built or written.\n  - " + gates.join("\n  - "));
  process.exit(1);
}

const tmp = mkdtempSync(join(tmpdir(), "seob-release-"));
execSync("npx astro build", { cwd: ROOT, stdio: "inherit", env: { ...process.env, SITE_MODE: "release", OUT_DIR: tmp } });
writeFileSync(join(tmp, ".htaccess"), htaccess("release"));
const { errors } = checkOutput(tmp, { release: true });
if (errors.length) {
  rmSync(tmp, { recursive: true, force: true });
  console.error("RELEASE BLOCKED after build; temporary output discarded, dist-release untouched.\n  - " + errors.join("\n  - "));
  process.exit(1);
}
const dest = join(ROOT, "dist-release");
if (existsSync(dest)) renameSync(dest, dest + "-previous");
renameSync(tmp, dest);
console.log("Release output ready in dist-release/ (previous kept in dist-release-previous/ for rollback). Deploy only with approval.");

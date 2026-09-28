# Launch checklist (not approved; nothing deployed)

`npm run release` enforces the machine-checkable gates. Human gates are listed too.

## Gates
- [ ] Public email confirmed → `src/data/business.json.publicEmail`
- [ ] Lead-notification inbox confirmed; form service/endpoint approved (cost and data processor recorded) → `PUBLIC_FORM_ENDPOINT`; controlled submission **received in the inbox**
- [ ] Logo placed in `public/` and configured → `business.json.logo`; favicon derived from the authorised mark
- [ ] Privacy, cookies, terms and cancellation pages drafted, reviewed and approved → `business.json.policiesPublished`
- [ ] Redirect map approved after a WordPress export and Search Console review → `release-approval.json.redirectMapApproved`, rules added to `.htaccess`
- [ ] Temporary Hostinger static site created (approval) and QA'd: HTTPS, nested routes, trailing slashes, real 404 status, `X-Robots-Tag` on preview, cache headers, form endpoint
- [ ] Commerce: stays enquiry-first unless provider, tax, policies and fulfilment gates pass (A5)
- [ ] Launch approval recorded → `release-approval.json` `{ "launchApproved": true, "approvedBy": "...", "date": "..." }`

## Release procedure (after approval)
1. `npm ci && PUBLIC_FORM_ENDPOINT=... npm run release` → produces `dist-release/` (the previous release is kept in `dist-release-previous/`).
2. Back up the current production document root (Hostinger backup), then upload `dist-release/` contents (including `.htaccess`) to the approved document root only.
3. Verify the live site: canonicals, sitemap and robots on https://seobooster.uk, redirects, 404 status, form receipt.
4. Rollback: restore the previous document root from the backup, or upload `dist-release-previous/`.

## Environment variables (names only)
- `SITE_MODE` (`preview` | `release`, set by scripts), `PREVIEW_ORIGIN`, `OUT_DIR`, `PUBLIC_FORM_ENDPOINT`

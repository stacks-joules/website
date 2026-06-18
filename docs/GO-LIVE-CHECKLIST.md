# Go-Live Cutover Checklist — Astro Redesign

Status: **Not launched.** Draft for when we decide to take the Astro redesign to production.

## TL;DR

- The **live** `stacksandjoules.org` is currently served by **Squarespace** (news, press, and the GEO landing pages all live there).
- The **Astro redesign** lives on the `migrate/astro` branch and deploys to a **Netlify branch deploy** (preview).
- The Gatsby `main` branch is an **earlier, abandoned redesign** — it is *not* production. Merging `migrate/astro` → `main` changes nothing visitors see.
- **Going live = pointing the domain (DNS) / Netlify production branch at the Astro site.** That is the real launch event. Merging to `main` is just cleanup afterward.

Do **not** merge `migrate/astro` → `main` as a way to "ship." It has no production effect today and is a one-way action. See `MERGE-TO-MAIN.md` reasoning in the PR history (commit context, 2026-06-13).

---

## Pre-launch verification (on the `migrate/astro` branch deploy)

- [ ] Click through every page on the Netlify branch-deploy URL: `index`, `about`, `team`, `curriculum`, `become-a-student` (Train With Us), `employment-partnerships`, `support-mentors`, `donate`, `404`.
- [ ] Verify the GEO pages render and are linked from Train With Us: `what-is-building-automation-how-to-learn-it`, `can-you-get-a-bas-job-with-no-experience`, `controls-technician-salary-training-path`, `how-to-get-into-building-automation-nyc`, `nyc-building-automation-training`, `charlotte-building-automation-training`, `frequently-asked-questions-stacksjoules`.
- [ ] **Contact form**: submit a real test through the form and confirm the entry lands in Monday.com. The form is handled by `netlify/functions/submitForm.js` (uses `MONDAY_BOARD_ID` + `MONDAY_API_KEY` env vars). Confirm the frontend POSTs to `/.netlify/functions/submitForm` and that the two env vars are set in the **production** Netlify context, not just preview.
- [ ] Confirm `og-image.png`, meta description, and OG/Twitter tags render (view source / use a social-preview debugger). These are in `src/layouts/Layout.astro` + `siteMetadata`.
- [ ] Confirm `robots.txt` and the generated `sitemap-index.xml` are correct for the production domain (`https://stacksandjoules.org`).
- [ ] Mobile / responsive pass on the redesign.

## Content parity vs. the current Squarespace site

The Astro repo does **not** contain the Squarespace `/news` and `/press` archives or the standalone GEO pages as they exist on Squarespace. Decide per section:

- [ ] **News archive** (`/news/...`) — migrate into Astro, drop, or keep on a subdomain? If dropping, plan redirects (below).
- [ ] **Press** (`/press/...`) — same decision.
- [ ] **GEO landing pages** — the Astro versions exist in-repo; confirm they fully replace the Squarespace originals (slugs match: `what-is-building-automation-how-to-learn-it`, etc.). The Squarespace duplicate `building-automation-training-charlotte-nc` is already redirected to the canonical Charlotte page in `astro.config.mjs`.
- [ ] Any other Squarespace-only pages (gallery, benefit/event pages, newsletter signup, etc.) — inventory from `stacksandjoules.org/sitemap.xml` and decide keep/migrate/redirect.

## Redirects (SEO — do NOT skip)

The current live URLs are indexed by Google. Any URL that changes or disappears needs a 301 so we don't lose ranking/traffic.

- [ ] Inventory current indexed URLs: pull `stacksandjoules.org/sitemap.xml` and Google Search Console.
- [ ] Map each old URL → new URL (or → closest relevant page).
- [ ] Add 301 rules. In Astro/Netlify this goes in `public/_redirects` or the `redirects` block in `astro.config.mjs`.
- [ ] Specific known item: `/landing-page` existed on the Gatsby branch (a homepage prototype) — if any campaign/email points there, add `/landing-page  /  301`.
- [ ] Verify redirects after deploy with `curl -I` on a sample of old URLs.

## DNS / Netlify production cutover (the actual launch)

- [ ] In Netlify, set the **production branch** to `migrate/astro` (or merge to `main` first and set production to `main` — see "Branch housekeeping" below).
- [ ] Confirm production env vars are set: `MONDAY_BOARD_ID`, `MONDAY_API_KEY` (and any others the build needs).
- [ ] Point the `stacksandjoules.org` DNS (and `www`) at Netlify, or move the custom domain from the Squarespace site to the Netlify site.
- [ ] Confirm HTTPS/SSL cert provisions for the apex + `www`.
- [ ] Decide `www` vs apex canonical and enforce a redirect one way.
- [ ] Keep the Squarespace site reachable (unpublished but not deleted) for ~30 days as a rollback.

## Post-launch

- [ ] Re-submit the sitemap in Google Search Console; request indexing of key pages.
- [ ] Spot-check Search Console **Coverage** over the following week for 404s from missed redirects.
- [ ] Smoke-test the contact form on the live domain.
- [ ] **Analytics**: neither the Gatsby nor the Astro build currently includes any analytics (no GA/GTM/tracking). If we want traffic data, add it **before** launch so we capture from day one. (Open decision — not yet implemented.)
- [ ] Monitor Netlify function logs for `submitForm` errors.

## Branch housekeeping (after a successful launch)

- [ ] Merge `migrate/astro` → `main` so `main` reflects reality, then set Netlify production to `main` if preferred.
- [ ] Note: merging the Astro tree into `main` deletes the old Gatsby framework files (`gatsby-*`, old `*.tsx` pages, relocated fonts/images) — this is expected and loses no content. The only non-framework deletion is the `/landing-page` prototype.
- [ ] Delete stale branches: `try-claude-patches` (superseded), and any merged feature branches.
- [ ] Dependabot scans `main`; once `main` is the Astro tree, re-run `npm audit fix` and re-triage alerts there. (The 9 dev-only alerts dismissed on 2026-06-13 stay dismissed.)

---

_Last updated: 2026-06-13. Owner: Jon Spooner._

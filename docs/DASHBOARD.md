# Dashboard — Current Status

Last updated: this commit (documentation system established).
Status board for Jersey Shore Home Info. Read this first in every session.

## At a glance

- Project phase: Phase 1 — Foundation & launch readiness.
- Repository: healthy, single branch (main), static site live on Netlify.
- Documentation: being established now (this folder).

## Status legend

- DONE — completed and verified.
- WIP — in progress.
- TODO — planned, not started.
- BLOCKED — cannot proceed until a dependency is resolved.

## Site build status

- DONE — Core town pages built (LBI towns, Stafford, Toms River, Barnegat, Waretown, Little Egg Harbor, Brick).
- DONE — Homepage (index.html) with office listings IDX.
- DONE — Search page (search.html) with FBS SmartFrame MLS search.
- DONE — Legal pages (privacy-policy, terms-of-service, fair-housing).
- DONE — Moving-from-Staten-Island relocation guide.
- DONE — Full SEO/AEO optimization pass across all pages.

## Phase 1 blockers (open)

- BLOCKED/TODO — Photo placeholders: town pages still show "PHOTO PLACEHOLDER" markers instead of real images.
- TODO — Encoding issues: stray mojibake characters appear in rendered copy (for example apostrophes and dashes showing as garbled symbols).
- TODO — Missing trust assets: headshot, brokerage logos, credentials, testimonials/reviews.
- WIP — Weak documentation: addressed by establishing this /docs system.

## Infrastructure notes

- Netlify project "jerseyshorehomeinfo" currently has no environment variables set.
- Sensitive variable policy on untrusted deploys: require approval.

## Current priorities (in order)

1. Establish documentation foundation (this commit).
2. Resolve Phase 1 site blockers (photos, encoding, trust assets).
3. Keep CHANGELOG.md and this dashboard updated as work proceeds.

## How to update this file

When status changes, update the relevant line and the "Last updated" note at the top. Record the change in CHANGELOG.md as well.

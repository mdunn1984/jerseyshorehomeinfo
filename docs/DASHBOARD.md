# Dashboard — Current Status

Last updated: this commit (Town Engine architecture established; Gold Standard certification in place; Stafford Phase A1 complete).
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

## Flagship page — Gold Standard (Stafford Township)

Stafford Township is the designated flagship / "Gold Standard" town page. Progress:

- DONE — Phase A1 (Structural Perfection): removed a stray pre-doctype character, added a visible FAQ section matched 1:1 to the FAQPage JSON-LD with an accessible toggle, and fixed dead on-page anchors (footer #sell/#valuation now point cross-page). Verified: single H1, zero dead on-page anchors, balanced tags, zero mojibake, compliance footer intact.
- DONE — Gold Standard planning: created GOLD_STANDARD_PAGE.md (the certification standard) and audited Stafford against it.
- DONE — Town Engine architecture: established the reusable page-production system (TOWN_PAGE_ENGINE.md, COMPONENT_SPECIFICATIONS.md, CONTENT_MODEL.md, TOWN_BUILD_CHECKLIST.md, TOWN_WORKFLOW.md). Town pages are now produced from a defined blueprint, data model, component library, checklist, and workflow.
- TODO — Photography phase: replace all PHOTO PLACEHOLDER slots and the incorrect hero image with real, town-correct imagery.
- TODO — Statistics phase: verify, source, and date every figure; resolve the LBI drive-time contradiction.
- TODO — Content expansion: add the missing flagship sections (Neighborhoods, Coffee, Transportation, Utilities, Flood, Insurance, etc.).
- TODO — Trust + conversion: real headshot, Weichert branding, testimonials, and an on-page lead-capture form.
- NOT CERTIFIED — Stafford is not yet Gold Standard Certified. See GOLD_STANDARD_PAGE.md section 9 for the full pass/fail/deferred audit and the 100-point checklist.

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
2. Resolve Phase 1 site blockers (photos, encoding, trust assets) and drive Stafford toward Gold Standard certification (see GOLD_STANDARD_PAGE.md).
3. Keep CHANGELOG.md and this dashboard updated as work proceeds.

## How to update this file

When status changes, update the relevant line and the "Last updated" note at the top. Record the change in CHANGELOG.md as well.

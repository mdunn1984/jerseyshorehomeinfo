# Dashboard — Current Status

Last updated: this commit (Trust and Authority foundation added (Sprint 5): homepage credentials/"Why Matt" trust band, inner-page trust strips on the Discovery Center and Stafford, and a clearly-marked testimonials framework — all truthful, no fake testimonials or invented credentials; Unified Lead Capture foundation built (Sprint 4); Lead Generation Engine and Product Backlog established; FlexMLS IDX fully retired from homepage and Discovery Center; Homepage evolved to a discovery-first authority page; Town Engine architecture established; Gold Standard certification in place; Stafford Phase A1 complete).
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
- DONE — Homepage (index.html) evolved into a discovery-first authority page (Sprint 2A): FlexMLS IDX retired and removed, listings section replaced with an "Explore Ocean County communities" discovery section, Discovery Center integrated into the nav, positioning shifted toward smarter decisions, and unverified market statistics removed. See CHANGELOG.md.
- DONE — Search page (search.html) rebuilt as the Jersey Shore Discovery Center and aligned with the homepage: FlexMLS IDX retired and removed, the listing-search embed replaced with a "Ready to take the next step?" CTA section, plus town/area/goal discovery, buyer/seller/relocation paths, high-value verticals, and a visible FAQ. See CHANGELOG.md.
- DONE — Legal pages (privacy-policy, terms-of-service, fair-housing).
- DONE — Moving-from-Staten-Island relocation guide.
- DONE — Full SEO/AEO optimization pass across all pages.
- DONE — Lead Generation Engine and Product Backlog established (Sprint 3, documentation only): LEAD_GENERATION_ENGINE.md defines how every page converts visitors into leads, and PRODUCT_BACKLOG.md is the ROI-ranked command center for all future features. See CHANGELOG.md.
- DONE — Unified Lead Capture foundation built (Sprint 4, implementation): reusable on-site lead form on the homepage with standardized field names, validation, and success/error states; one shared controller binding every [data-lead-form]; a single Netlify function (netlify/functions/lead.js) as the one lead endpoint with honeypot spam protection and priority scoring; standardized GA4 form/CTA events with consistent tracking added to search.html. CRM/automation intentionally deferred. See CHANGELOG.md and LEAD_GENERATION_ENGINE.md.
- DONE — Trust and Authority foundation added (Sprint 5, implementation): homepage trust band (verified credentials plus an honest "Why Matt" strip) above the agent CTA; compact credential trust strips near the Matt sections on search.html and stafford-township.html; a clearly-marked testimonials framework on the homepage (no fake reviews; invites real, permission-based testimonials). No invented credentials, statistics, or service areas; existing real headshot kept; compliance and the lead foundation preserved. See CHANGELOG.md.
- OPEN — Lead delivery: the lead endpoint (netlify/functions/lead.js) currently only validates, normalizes, and logs leads server-side. Still required to deliver each lead immediately to Matt and a future CRM: an email/notification send and a CRM forward wired at the documented integration point in the function. No third-party service is configured yet.

## Flagship page — Gold Standard (Stafford Township)

Stafford Township is the designated flagship / "Gold Standard" town page. Progress:

- DONE — Phase A1 (Structural Perfection): removed a stray pre-doctype character, added a visible FAQ section matched 1:1 to the FAQPage JSON-LD with an accessible toggle, and fixed dead on-page anchors (footer #sell/#valuation now point cross-page). Verified: single H1, zero dead on-page anchors, balanced tags, zero mojibake, compliance footer intact.
- DONE — Gold Standard planning: created GOLD_STANDARD_PAGE.md (the certification standard) and audited Stafford against it.
- DONE — Town Engine architecture: established the reusable page-production system (TOWN_PAGE_ENGINE.md, COMPONENT_SPECIFICATIONS.md, CONTENT_MODEL.md, TOWN_BUILD_CHECKLIST.md, TOWN_WORKFLOW.md). Town pages are now produced from a defined blueprint, data model, component library, checklist, and workflow.
- WIP — Photography phase: production plan complete (see STAFFORD_PHOTOGRAPHY_PLAN.md — 17 specified shots, one-day route, equipment + weather). Next: capture the imagery and replace all PHOTO PLACEHOLDER slots and the incorrect hero image with real, town-correct photography.
- TODO — Statistics phase: verify, source, and date every figure; resolve the LBI drive-time contradiction.
- WIP — Content expansion: production plan complete (see STAFFORD_CONTENT_PLAN.md — current score ~32/100, target 92—95/100; 35 topic blocks, Local Knowledge section, 25—35 FAQ bank, 100 content ideas). Next: implement the missing flagship sections (Neighborhoods, Schools deep, Waterfront, Flood/Taxes/Insurance, Commute, expanded FAQ) with sourced data.
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
4. Select and execute future work from PRODUCT_BACKLOG.md by ROI, guided by LEAD_GENERATION_ENGINE.md, instead of guesswork.

## How to update this file

When status changes, update the relevant line and the "Last updated" note at the top. Record the change in CHANGELOG.md as well.

# Jersey Shore Home Info — Documentation Hub

This is the documentation root for the Jersey Shore Home Info website (jerseyshorehomeinfo.com), the digital real estate platform of Matt Dunn, REALTOR (Weichert Realtors, Ship Bottom, NJ).

This /docs folder is the single source of truth for how the project is planned, built, maintained, and governed. When in doubt, the documents here outweigh memory, chat history, or assumptions.

## How to use this folder

Start here, then read in this order:

1. DASHBOARD.md — current status at a glance: what is done, in progress, and blocked.
2. PROJECT_BIBLE.md — the master overview of the whole project: stack, hosting, structure, and ground truth.
3. ROADMAP.md — phased plan and priorities.
4. NON_NEGOTIABLES.md — hard rules that must never be broken.

## Document index

- DASHBOARD.md — live status board and current priorities.
- PROJECT_BIBLE.md — master project reference and ground truth.
- DOCS_STANDARDS.md — how documentation itself is written and maintained.
- BRAND_BIBLE.md — voice, identity, and positioning for Jersey Shore Home Info.
- WEBSITE_BIBLE.md — technical reference for the site: stack, pages, hosting, IDX.
- BUSINESS_PLAN.md — the business behind the website.
- PAGE_STANDARDS.md — the standard every page must meet.
- ROADMAP.md — phased plan, milestones, and priorities.
- NON_NEGOTIABLES.md — rules that override everything else.
- CHANGELOG.md — running log of meaningful changes.

## Town Engine (page production system)

The system for producing Gold Standard town pages consistently and at scale. Read GOLD_STANDARD_PAGE.md first (the bar), then the Engine docs.

- GOLD_STANDARD_PAGE.md - certification standard and 100-point checklist for a flagship town page.
- TOWN_PAGE_ENGINE.md - master blueprint: architecture, goals, information architecture, and section order.
- COMPONENT_SPECIFICATIONS.md - reusable component contracts for each page section.
- CONTENT_MODEL.md - the town data model (every field a town page can contain).
- TOWN_BUILD_CHECKLIST.md - the 100-point production acceptance gate.
- TOWN_WORKFLOW.md - the production workflow from research to continuous improvement.

## Ground truth (from repository audit)

- Repository: mdunn1984/jerseyshorehomeinfo
- Branch: main only (single-branch workflow)
- Stack: static HTML site (no build framework)
- Hosting: Netlify
- Listings: FBS SmartFrame IDX (MLS search on search.html, office listings on index.html)
- Status: documentation system being established as of this commit

## Source of truth principle

The repository and these documents are the source of truth — not conversation history. Any new session, contributor, or AI assistant should begin by reading this folder before making changes.

# Changelog

A running log of meaningful changes to Jersey Shore Home Info. Newest entries on top. Record documentation, site, and infrastructure changes here. Keep DASHBOARD.md in sync.

## Format

Each entry: a date or milestone heading, followed by concise bullet points describing what changed and why.

## Unreleased / 2026

### Discovery Center IDX retirement (search.html)

Aligned the Discovery Center (search.html) with the homepage by retiring the FlexMLS IDX integration after the subscription was canceled. The page is now a decision-first discovery hub rather than a live listings portal.

- **IDX retired:** Removed the FlexMLS embed from search.html entirely, including the iframe, the embed wrapper, the "Browse available listings" section, and all "powered by FlexMLS" / live MLS messaging. No hidden iframes or dead integrations were left in the code.
- **Discovery-first replacement:** Replaced the embed section with a "Ready to take the next step?" section offering seven next-step pathways to existing pages and anchors: Talk with Matt, Explore Ocean County towns, Explore Long Beach Island, Moving from Staten Island, Request a local market read, Start a buyer conversation, and Discuss selling your home.
- **Honest positioning:** Added copy clarifying the site is a discovery hub, not a Zillow-style listings portal, and that current listings, private opportunities, and pricing come from a direct conversation with Matt. Removed any implication of real-time or live MLS access.
- **FAQ updated:** Rewrote the "Can I still search active listings here?" question and answer (visible text and FAQPage schema kept in sync) to reflect that the page no longer displays an MLS feed.
- **CSS cleanup:** Removed the now-orphaned page-specific styles tied to the retired embed (.mls-banner, the listing-card block, .embed-section, .embed-wrap). Preserved .embed-note and the footer .mls-disclaimer.
- **Compliance preserved:** Weichert Realtors, NJ License #2442118, Fair Housing, Equal Housing Opportunity, and the "believed accurate but not guaranteed" disclaimer all remain intact.
- **Verification:** Zero FlexMLS references, zero iframes, zero IDX references, zero href="#", one H1, valid JSON-LD (RealEstateAgent, Person, BreadcrumbList, WebPage, FAQPage), and FAQ schema matching the visible FAQ. Commit: 7d0cfe4.

### Homepage evolution, Sprint 2A (IDX retirement)

Evolved the homepage from a search-first page into a discovery-first authority page, and retired the FlexMLS IDX integration after the subscription was canceled.

- **IDX retired:** Removed the homepage FlexMLS embed (disabled Link ID 1z97256e44mg) entirely, including the iframe, wrapper, the "Currently on the Market" listings section, the disabled-link error experience, and the related MLS messaging. No hidden iframes or dead integrations were left in the code.
- **Discovery-first replacement:** Replaced the listings section with an "Explore Ocean County communities" section offering six pathways to existing pages only: the Discovery Center, Ocean County towns, Long Beach Island, the Moving from Staten Island guide, Talk with Matt, and a buyer consultation.
- **Discovery Center integration:** Renamed the "Search" navigation item (desktop and mobile) to "Discovery Center" and added Discovery Center pathways throughout the homepage flow.
- **Positioning:** Shifted the hero, title, and meta toward "make smarter real estate decisions" rather than "search for homes," presenting Jersey Shore Home Info as a local authority platform.
- **Statistics:** Removed the unverified "Spring 2026 Market Snapshot" figures (LBI median, Stafford median, days on market, sale-to-list ratio with year-over-year precision) and replaced them with an honest "Local Market Read" section that routes visitors to Matt for a current, town-specific briefing. No data was invented.
- **CTA and link hygiene:** Repointed the previously dead "Browse Homes" anchor to the Discovery Center, softened the hero search bar copy, and added the missing FAQ section anchor so all in-page links resolve.
- **Compliance preserved:** Weichert Realtors, NJ License #2442118, Fair Housing, Equal Housing Opportunity, and the listing disclaimer remain intact. One H1, valid structured data, no FlexMLS references remain.
- **Note:** The Discovery Center page (search.html) still references a now-retired FlexMLS embed in its markup; cleaning that up is deferred to a future sprint per Sprint 2A scope.

### Search rebuilt as Discovery Center

Repositioned search.html from a listings-first page into the Jersey Shore Discovery Center, the front door for choosing the right town, property type, and real estate path before browsing listings.

- **New structure:** hero with Talk With Matt and Explore Towns CTAs, quick discovery cards, Browse by Area (Ocean County, Long Beach Island, Monmouth County), Browse by Property Goal, buyer and seller paths, relocation feature, high-value verticals (commercial, land, investment, luxury and waterfront), market intelligence preview, retained FlexMLS listing search, Matt contact section, and a visible FAQ.
- **IDX:** preserved the existing FlexMLS embed as a secondary tool; removed the redundant custom filter bar and static placeholder listing cards. No real-time or updated-daily claims.
- **Verticals:** commercial, land, investment, and luxury or waterfront labeled Coming soon and routed to Matt contact rather than dead links.
- **SEO and AEO:** unique title and meta description, single H1, twelve H2 sections, BreadcrumbList, WebPage, RealEstateAgent, Person, and FAQPage schema. FAQ schema matches the visible FAQ exactly.
- **Integrity:** zero href="#", zero broken image references, zero mojibake, compliance footer preserved (Weichert, NJ License #2442118, Fair Housing, Equal Housing Opportunity, listing disclaimer). All internal links point to existing pages or homepage anchors.

### Stafford Township — Gold Standard track (Phase A1 + planning)

Work toward making `stafford-township.html` the flagship "Gold Standard" town page.

- **Phase A1 — Structural Perfection (`stafford-township.html`):** Removed a stray em-dash that preceded `<!DOCTYPE html>` (no-wording-change byte fix). Added a visible FAQ section (`id="faq"`) whose three Q&As match the existing `FAQPage` JSON-LD verbatim, with an accessible keyboard-operable toggle (`aria-expanded`), resolving the previously orphaned schema, the dead `#faq` links, and the `SpeakableSpecification` target. Repointed the footer `#sell` and `#valuation` links to their cross-page destinations (`/#sell`, `/#valuation`). Post-commit verification: single H1, zero dead on-page anchors, balanced tags (sections/scripts/divs), zero mojibake, and the compliance footer (License #2442118, EHO, Fair Housing, disclaimer) intact. Committed as `feat: Stafford Gold Standard Phase A1 – structural perfection`.
- **Gold Standard planning:** Added `GOLD_STANDARD_PAGE.md`, the certification standard for every town page — purpose, the full flagship section architecture, technical/content/photography/trust/conversion standards, a 100-point certification checklist, and a Stafford pass/fail/deferred audit. Stafford is **not yet Gold Standard Certified**; remaining items (photography, statistic verification, content expansion, trust assets, lead capture) are documented and deferred to their own scoped phases.
- Updated `DASHBOARD.md` to add a flagship Gold Standard status block for Stafford and reflect Phase A1 completion.

### Phase 1 foundation cleanup

Site-wide launch-readiness cleanup of low-risk defects across all 19 HTML pages. See `PHASE_1_AUDIT.md` for the full audit.

- **Encoding / mojibake:** Repaired double-encoded UTF-8 sequences (garbled smart quotes, em dashes, and the Equal Housing Opportunity badge glyph) across 8 pages. No wording changed; only corrupted bytes restored.
- **Dead links:** Replaced every footer brand `href="#"` with `/` (homepage) and every Guides nav dropdown `href="#"` with `/moving-from-staten-island`. After the fixes, zero `href="#"` links remain across all 19 pages.
- **Broken Matt Dunn headshot references:** Fixed broken `/images/matt-dunn.jpg` references to the existing `/images/matt-dunn-headshot.jpg` — two `<img>` tags on `moving-from-staten-island.html` and one JSON-LD structured-data `image` field on `terms-of-service.html`.
- **Legal pages completed:** During the recovery audit, the three legal pages (`privacy-policy.html`, `terms-of-service.html`, `fair-housing.html`) were found to still contain the footer-brand and Guides `href="#"` dead links because they use a different nav markup that the first cleanup pass missed. These were fixed during recovery.
- **Deferred (out of scope):** Missing `og-image.jpg` social-share image (needs design) and PHOTO PLACEHOLDER slots on 7 pages (need photography) remain open by design.

### Documentation system established

- Created the /docs folder as the project's single source of truth.
- Added README.md (documentation hub and reading order).
- Added DASHBOARD.md (live status board).
- Added PROJECT_BIBLE.md (master project reference and ground truth).
- Added DOCS_STANDARDS.md (how documentation is written and maintained).
- Added BRAND_BIBLE.md (voice, identity, positioning).
- Added WEBSITE_BIBLE.md (technical reference: stack, hosting, IDX, pages).
- Added BUSINESS_PLAN.md (business context behind the site).
- Added PAGE_STANDARDS.md (per-page quality bar).
- Added ROADMAP.md (phased plan and priorities).
- Added NON_NEGOTIABLES.md (hard rules).
- Added CHANGELOG.md (this file).
- Updated the root README.md to describe the project and point to docs/README.md.

## Earlier project history (summarized from git history)

### May 21, 2026

- Full SEO/AEO optimization pass applied across all pages (index, search, all town pages, guides, and legal pages).
- Search page refinements: removed a redundant filter bar (IDX handles search natively) and fixed an IDX subheading contrast issue.

### May 20-21, 2026

- Integrated live FBS SmartFrame IDX: MLS search on search.html and office listings on index.html.
- Added the "moving from Staten Island" Jersey Shore relocation guide.
- Replaced a Beach Haven image with an East Coast colonial home photo.
- Added Privacy Policy, Terms of Service, and Fair Housing pages (site-specific).

## How to use this file

When you complete a meaningful change, add a bullet under the most relevant heading (create a new dated heading if needed) and update DASHBOARD.md to reflect the new status.

## Related documents

- DASHBOARD.md — current status.
- ROADMAP.md — what is planned.
- DOCS_STANDARDS.md — change discipline.

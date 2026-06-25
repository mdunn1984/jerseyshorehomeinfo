# Changelog

A running log of meaningful changes to Jersey Shore Home Info. Newest entries on top. Record documentation, site, and infrastructure changes here. Keep DASHBOARD.md in sync.

## Format

Each entry: a date or milestone heading, followed by concise bullet points describing what changed and why.

## Unreleased / 2026

### Lead Email Delivery (Sprint 4.1)

Completed the lead delivery layer in netlify/functions/lead.js. Every successful, normalized submission now sends an email to Matt (mdunn@weichert.com) via Resend before the endpoint reports success. Added a sendLeadEmail helper with clean HTML and plain-text templates that include Lead Type, Lead Source, Lead Intent, Lead Priority, Name, Phone, Email, Message, Page URL, and Timestamp (all HTML-escaped). The API key and addresses come only from environment variables (RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL); no secrets are hardcoded. Error handling is fail-loud: if the email send fails, the reason is logged and the function returns a 502 server error rather than silently succeeding. Existing behavior is preserved — normalization, honeypot spam protection, priority scoring, validation (400/422), and the GA4-facing analytics logging are all unchanged, and the send runs only after honeypot and validation pass so spam and invalid submissions never trigger an email and there are no duplicates.

### Stafford Photography Scaffold (Sprint 8C)

Prepared stafford-township.html for licensed photography without adding any image files or downloading anything. Replaced all 15 decorative photo placeholders with image-ready markup: each slot now uses an img element pointing at a final SEO-friendly path under /images/stafford/, with descriptive alt text, a visible caption, width and height for layout stability, and an HTML comment naming the pending file. The decorative slot box remains as a graceful fallback so layout stays stable until real files are uploaded — no broken-image icons and no uppercase placeholder text remain. Added scoped CSS for the image and caption layer. Created docs/PHOTO_LICENSES.md with a full thirteen-column manifest; every row is marked Pending human upload / license confirmation. No licenses are claimed, no external images are hotlinked, and no image files were added. Compliance, lead form, and schema preserved (one H1, eight JSON-LD blocks valid).

### Stafford Gold Standard Waterfront (Sprint 8B)

Added the definitive Waterfront Living section to stafford-township.html (after Neighborhoods). No other HTML pages touched.

- **New on-page section (#waterfront):** explains what waterfront living means in Stafford and the difference between lagoon, bayfront, water-access, and inland homes; covers the boating/kayaking/fishing lifestyle; and details dock ownership, bulkheads, boat lifts, water depth/tide, bridge clearance, maintenance, and seasonal considerations.
- **Flood + insurance as general guidance only:** explicit verify-per-property framing (FEMA flood zone, base flood elevation, elevation certificate, NFIP/private flood, wind/homeowners) — no invented zones, figures, or determinations; restates the believed-accurate-not-guaranteed disclaimer.
- **Marinas, boat ramps, and Barnegat Bay access** described generically (no fabricated names, services, or rules); who it suits, pros, trade-offs, buyer questions, and seller prep.
- **Matt's Local Take:** one clearly-labeled, experience-based evergreen subsection — educational guidance, no invented stories or fabricated transactions.
- **SEO/AEO:** added an Article entity (about Beach Haven West, Barnegat Bay, Manahawkin Bay) and 3 supported waterfront FAQ pairs with visible+schema parity (FAQPage now 6 Q&A). Existing schema preserved (8 JSON-LD blocks total).
- **Conversion:** buyer, seller/valuation, and waterfront-consultation CTAs plus a direct phone link; internal links to Neighborhoods, Discovery Center, and the moving-from-Staten-Island guide. No dead links.
- **Integrity:** one H1 preserved; lead/CTA and prior sections intact; scoped CSS added; ~1,950 words added (page ~3,270 to ~5,230). No invented data.
- **Commit:** feat: Stafford Gold Standard waterfront implementation (stafford-township.html b001fa0).

### Stafford Gold Standard Neighborhoods (Sprint 8A)

First real Gold Standard content implementation on stafford-township.html. Added a Neighborhoods section; no other HTML pages touched.

- **New on-page section (#neighborhoods):** profile cards for Ocean Acres, Manahawkin, Beach Haven West, Cedar Run, and the Stafford Park & Mill Creek area, each covering overview, housing style, who it suits, lifestyle, nearby amenities, schools served, water access (where applicable), and buyer/seller considerations.
- **Truth-first:** evergreen language only — no invented statistics, flood zones, HOA details, school rankings, or fabricated boundaries. Specific figures remain slots to be sourced and dated in later sprints.
- **Internal linking:** wired to existing real targets only (Stafford home search, moving-from-Staten-Island guide, home valuation, Matt Dunn, and the adjacent Little Egg Harbor/West Creek page). No dead links.
- **SEO/AEO:** added an ItemList of Place entities (one per neighborhood) as JSON-LD; existing RealEstateAgent, BreadcrumbList, Place, FAQPage, and Person schema preserved.
- **Conversion:** each card carries listing and valuation CTAs; section closes with a no-pressure neighborhood-recommendation prompt and direct phone link.
- **Added scoped CSS** for the neighborhood grid/cards; one H1 preserved; lead/CTA and FAQ blocks intact; ~1,570 words added (page ~1,700 to ~3,270).
- **Commit:** feat: Stafford Gold Standard neighborhood implementation (stafford-township.html 0f0960f).

### Stafford Content Production Plan (Sprint 7A)

Established the content production plan to expand Stafford Township into the definitive local authority guide. Planning only — no HTML, CSS, JS, photography, or website content changed.

- **New doc (docs/STAFFORD_CONTENT_PLAN.md):** audits the current ~1,700-word page (10 sections, 3 FAQs, thin contextual linking), scores it ~32/100, and lays out the roadmap to a target of 92—95/100.
- **Per-section gap analysis:** every existing section scored for missing topics, entities, internal links, FAQs, local expertise, trust signals, and an opportunity rating.
- **Expansion plan:** 35 production blocks covering neighborhoods, HOAs, schools, parks/trails/boat ramps/marinas/fishing/golf, dining/coffee/breweries, shopping, healthcare/urgent care, libraries/gyms/daycares, senior/55+, luxury/waterfront, commercial/investment, taxes/flood/insurance, and transportation/commute/utilities/internet — each with entities to verify, links, a local-expertise hook, word target, schema, and priority.
- **Local Knowledge section:** an insider-content originality engine (sunrise/sunset spots, hidden gems, traffic shortcuts, weekend itineraries, and more).
- **AI/AEO + FAQ bank:** target of 25—35 question-shaped FAQ pairs (buyer/seller/relocation/local) plus a backlog of 100 future content ideas grouped into 10 categories.
- **Truth-first discipline:** every statistic, ranking, tax/flood/insurance figure, and school detail is a slot to be sourced and dated at implementation; no invented data; compliance and single-H1 preserved.
- **No code, photography, or content changes; lead foundation and trust elements untouched.**

### Stafford Photography Production Plan (Sprint 6A)

Established the production-ready photography plan to take Stafford Township to Gold Standard. Planning only — no HTML, CSS, JS, or image files changed.

- **New doc (docs/STAFFORD_PHOTOGRAPHY_PLAN.md):** a full image manifest of 17 specified shots, each documented across 24 fields (purpose, page location, orientation, resolution, desktop/mobile crop, time of day, season, GPS waypoint, camera angle, drone/ground, primary/backup subject, alt text, SEO file name, caption, related schema, priority, launch-required flag, and replacement notes).
- **Placeholder coverage:** all 9 existing photo-slot placeholders on stafford-township.html are mapped to specific shots (hero, lake, waterfront home, bay sunset, school, community center, youth sports, wildlife refuge, retail corridor); the incorrect neighboring-town hero framing is corrected in the spec.
- **Gold Standard gaps:** 8 additional shots cover categories not yet slotted (neighborhoods, healthcare, dining/coffee, marinas/boat ramps, events, drone establishing, seasonal/off-season, and an optional local-context headshot).
- **One-day shoot logistics:** an optimized west-to-east route in eight geographic clusters, a ~7:40 sunrise-to-sunset time estimate, an equipment list, weather/FAA/refuge considerations, and backup locations for every primary shot.
- **No code or asset changes; lead foundation and compliance untouched.**

### Trust and Authority Foundation (Sprint 5)

Increased visitor confidence by strengthening truthful trust signals and adding clearly-marked frameworks for future trust assets. No fake testimonials, invented credentials, or fabricated statistics. People-focused, not technology-focused.

- **Homepage trust band (index.html):** added a credentials-and-"Why Matt" band inside the agent section, directly above the contact links and lead form. Shows verified credentials (REALTOR&#174;, Weichert Realtors; NJ License #2442118; Ocean County &amp; Long Beach Island; Ship Bottom, NJ office) plus four honest "why work with Matt" points drawn from the existing bio (local resident in Ocean Acres, made the Staten Island move himself, honest/direct, discovery-first).
- **Inner-page trust strips (search.html, stafford-township.html):** added a compact credentials strip near each page's Matt section so brokerage and license appear close to the CTA on every reviewed page. Consistent presentation across the site.
- **Testimonials framework (index.html):** new, clearly-marked placeholder section between the agent and valuation sections. Explains that only real, permission-based testimonials will be published (no invented or anonymous reviews), invites past clients to share via the contact form, and shows dashed placeholder cards labeled as future verified buyer/seller/relocation reviews. No fake content.
- **Verified, not invented:** the real agent headshot already on the homepage was left in place (no headshot placeholder added). Monmouth County is referenced only as the existing copy already states (a growing secondary market); no new service areas, years-of-experience claims, or statistics were fabricated.
- **Preserved:** the Sprint 4 unified lead form, controller, endpoint, and GA4 events are untouched; compliance intact on every page (Weichert Realtors, NJ License #2442118, Equal Housing Opportunity, accuracy disclaimer, each office independently owned and operated); one H1 per page; no FlexMLS/IDX or iframes; Stafford's existing photo placeholders preserved.
- **Lead delivery (documented, not changed):** the lead endpoint (netlify/functions/lead.js) still only validates, normalizes, and logs each lead server-side. To deliver every lead immediately to Matt and a future CRM, an email/notification step and a CRM forward must be wired at the documented integration point (see DASHBOARD.md and LEAD_GENERATION_ENGINE.md). No third-party integration was added because none is configured.

### Unified Lead Capture Foundation (Sprint 4)

Built the shared lead-capture system so every important CTA can feed one consistent pipeline. Implementation sprint: foundation only (no CRM, no automation, no third-party integrations).

- **Reusable lead form component (index.html):** added an accessible on-site contact form in the homepage contact area with standardized field names (name, email, phone, message, leadType), a hidden honeypot, client-side validation, and consistent success/error states. Drives lead type/source via data-* attributes so future pages reuse the same markup. Adds a real `#contact` anchor target.
- **Shared lead controller:** one delegated script binds every `[data-lead-form]` on a page — no per-page logic, no duplicated validation. Posts a normalized lead to the shared endpoint and reports status.
- **Shared backend (netlify/functions/lead.js):** single entry point that validates, normalizes, honeypot-filters, and priority-scores every lead, returning a consistent JSON result. CRM/email/automation intentionally deferred; the one future integration point is documented in-code.
- **Standardized analytics:** GA4 form events (lead_form_view, lead_form_submit, generate_lead, lead_form_invalid, lead_form_error) with lead_source/lead_type/lead_priority. Added consistent CTA click tracking (phone_click, email_click, outbound_weichert) to search.html, which previously fired no events — analytics is now consistent across pages.
- **Documentation:** LEAD_GENERATION_ENGINE.md gained a Unified Lead Capture Architecture section (CTA inventory, lead model, reusable component, backend, analytics, privacy/spam, future CRM readiness).
- Compliance preserved: Weichert Realtors, NJ License #2442118, Equal Housing Opportunity, and the accuracy disclaimer remain intact; one H1 per page; no FlexMLS/IDX or iframes reintroduced.

### Lead Generation Engine and Product Backlog (Sprint 3)

Established the project's lead-generation system and ROI-ranked product backlog. Documentation only; no site code was changed this sprint.

- **LEAD_GENERATION_ENGINE.md created:** the conversion blueprint defining how every page turns visitors into qualified leads. Covers purpose, business goals, seven conversion journeys (buyer, seller, commercial, land, investment, luxury, relocation), primary and secondary CTAs, phone/email/consultation/valuation strategies, trust triggers, lead-magnet opportunities, future CRM and AI qualification, measurement and success metrics, and future expansion.
- **PRODUCT_BACKLOG.md created:** the project command center listing every planned and proposed feature across 20 categories (51 items), each scored for Business Value, Lead Generation Value, SEO, AEO, and Difficulty, with dependencies, estimated sprint, status, and priority. Items are ranked by a lead-generation-weighted ROI score so future work is chosen by business impact, with a Top 25 ROI shortlist, a Top 10 quick-wins list, and a sprint-by-sprint implementation order.
- **References updated:** DASHBOARD.md and ROADMAP.md now point to the Lead Generation Engine and Product Backlog as the conversion blueprint and the ROI-ranked queue that drives future development.
- **Scope honored:** no HTML, CSS, JavaScript, images, Netlify, sitemap, or robots changes; documentation only.

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

# Town Page Engine

The master blueprint for every town page on jerseyshorehomeinfo.com. This document defines the Town Engine: the reusable architecture, goals, information model, and component system that lets the project produce Gold Standard town pages consistently and at scale. It treats a static-HTML town page as if it were the output of a CMS template, so that hundreds of pages can be produced without reinventing the structure each time.

This document is architecture only. It does not change any HTML, CSS, JavaScript, town page, image, or statistic. It governs how town pages are designed; the per-page quality bar lives in PAGE_STANDARDS.md and the certification bar lives in GOLD_STANDARD_PAGE.md.

## Purpose

The Town Engine exists to make town pages a product, not a series of one-off builds. It converts the lessons captured in GOLD_STANDARD_PAGE.md into a repeatable system: a defined section order, a defined data model (CONTENT_MODEL.md), a defined component library (COMPONENT_SPECIFICATIONS.md), a defined production workflow (TOWN_WORKFLOW.md), and a defined acceptance gate (TOWN_BUILD_CHECKLIST.md). Any contributor, future team member, AI assistant, or future automation can assemble a Gold Standard page by following the Engine instead of inventing structure.

## Scope

In scope: the architecture, goals, information architecture, component contracts, schema plan, analytics plan, certification process, and expansion path for town pages. Out of scope: homepage and search page design (see WEBSITE_BIBLE.md), guide and legal page design (see PAGE_STANDARDS.md), brand voice (see BRAND_BIBLE.md), and any implementation work (deferred to explicitly scoped build phases).

## Audience

Product and engineering owners, content and photography contributors, SEO/AEO specialists, QA reviewers, future automation and API builders, and any future AI assistant picking up the project. Read DASHBOARD.md and PROJECT_BIBLE.md first, then this document.

## Responsibilities

- Engine owner: keeps this blueprint current and authoritative; approves changes to section order and component contracts.
- Content owner: supplies verified local data per CONTENT_MODEL.md.
- Photography owner: supplies the media manifest per GOLD_STANDARD_PAGE.md section 5.
- SEO/AEO owner: owns metadata, schema, and answer-first content.
- QA owner: runs TOWN_BUILD_CHECKLIST.md and records certification.

## Dependencies

- GOLD_STANDARD_PAGE.md (certification standard and 100-point checklist).
- PAGE_STANDARDS.md (minimum per-page bar).
- WEBSITE_BIBLE.md (stack, hosting, IDX, conventions).
- BRAND_BIBLE.md (voice and identity).
- NON_NEGOTIABLES.md (hard rules: compliance, IDX integrity, no placeholders, clean UTF-8, source of truth).
- CONTENT_MODEL.md, COMPONENT_SPECIFICATIONS.md, TOWN_BUILD_CHECKLIST.md, TOWN_WORKFLOW.md (the rest of the Engine).

---

## 1. Goals

### Business Goals
Establish Matt Dunn as the obvious local authority in each town, generate qualified buyer and seller leads, and build a durable, compounding content asset (see PROJECT_BIBLE.md, BUSINESS_PLAN.md). Each town page is long-term digital real estate, not a disposable landing page.

### SEO Goals
Rank for "[town] homes for sale" and the long tail of neighborhood, school, waterfront, 55+, new-construction, and relocation queries. One clean URL per town, self-referential canonical, unique metadata, complete internal linking, and valid structured data.

### AEO Goals
Answer engine optimization: every page opens with an answer-first intro that directly answers "what is [town] known for," mirrors its FAQ in FAQPage schema, and exposes Speakable targets that actually exist on the page. The goal is to be the cited source in AI answers about each town.

### Lead Generation Goals
Convert visitors into conversations: valuation requests, buyer consultations, seller consultations, calls, texts, and form submissions. Lead capture must be on-page and must not depend on bouncing the user elsewhere.

### Content Goals
Verified, sourced, dated, contradiction-free local content in one consistent local voice. No filler, no generic AI writing, no placeholders (NON_NEGOTIABLES.md).

### Trust Goals
Display brokerage, license, Fair Housing and Equal Housing commitments, real testimonials, a real headshot, and authentic community involvement (GOLD_STANDARD_PAGE.md section 6).

### Conversion Goals
Primary and secondary CTAs above the fold and repeated at close; valuation, buyer-consult, seller-consult, phone, text, email, and a lead form, all instrumented in GA4.

---

## 2. Information Architecture

### Page Hierarchy
One H1 (town name). Each major section is an H2 with a stable anchor id. Sub-blocks (for example individual schools or neighborhoods) are H3. No skipped heading levels. The hierarchy is the same on every town page so that schema, analytics, and navigation are predictable.

### Navigation Flow
Global fixed nav (Towns mega-menu, Guides, Search, Sell, About, Free Valuation CTA) is inherited from the site shell and is identical across town pages. In-page flow runs top to bottom through the section order in section 4, with the closing CTA and footer as the exit.

### User Journey
A typical visitor arrives from search or an AI answer, reads the answer-first intro and Market Snapshot, scans the lifestyle and neighborhood sections relevant to them, checks schools/flood/taxes as needed, reads FAQ and reviews to build trust, and then converts through a CTA or the lead form.

### Desktop Flow
Multi-column grids for stats, neighborhoods, schools, amenities, and gallery; mega-menu navigation; persistent CTAs. Hero is full-width with the primary CTA in view.

### Mobile Flow
Single-column stack, collapsible nav, tap-to-call and tap-to-text surfaced early, lazy-loaded media, and a sticky or repeated CTA. Mobile is the primary design target; desktop is the enhancement.

### Internal Linking Strategy
Every town page links to: related/adjacent towns, relevant guides (for example moving-from-staten-island), the filtered search for that town, and back to the homepage. Cross-page anchors use absolute paths (for example /#valuation). On-page anchors must resolve to real ids (no dead anchors; enforced by TOWN_BUILD_CHECKLIST.md).

### Entity Relationships
The town is the primary entity. It contains neighborhoods, schools, parks, amenities, and developments; it is contained in a county; it relates to adjacent towns and to the agent (Matt Dunn / Weichert). These relationships are expressed in content, internal links, and schema (Place containedInPlace AdministrativeArea; RealEstateAgent areaServed; BreadcrumbList).

---

## 3. Required Platform Elements

### Required Components
Every section in section 4 maps to a reusable component defined in COMPONENT_SPECIFICATIONS.md. Components are inherited from the site shell (nav, footer) or assembled per page from the content model.

### Required Schema
RealEstateAgent, Person, Place, BreadcrumbList, and FAQPage at minimum, plus SpeakableSpecification. Optional/expansion: VideoObject (videos), Review/AggregateRating (testimonials), and ItemList (neighborhoods). Every schema claim must map to visible content (no orphaned schema).

### Required CTAs
Primary "View Homes For Sale" (to filtered search), secondary "Free Home Valuation," plus phone, text, email, buyer-consult, and seller-consult paths. See COMPONENT_SPECIFICATIONS.md CTA component.

### Required Media
Hero, lifestyle, neighborhood, schools, parks, marinas/waterfront, commercial, drone/aerial, real Matt Dunn headshot, community, and seasonal imagery, each optimized with descriptive alt (GOLD_STANDARD_PAGE.md section 5). Video and gallery are expansion media.

### Required Local Data
The full field set in CONTENT_MODEL.md (town facts, market figures, schools, neighborhoods, amenities, flood/insurance, developments, media, reviews, FAQs, related towns). Every figure verified, sourced, and dated.

### Required Trust Signals
Weichert branding, NJ License #2442118, Fair Housing, Equal Housing Opportunity, testimonials, real headshot, and community involvement.

### Required Conversion Elements
On-page lead form with success state (no sensitive financial fields), plus the CTA set above. Lead capture is mandatory for certification.

### Required Accessibility
WCAG 2.1 AA target: descriptive alt, keyboard operability, correct ARIA state on interactive elements, AA color contrast, visible focus, labeled form inputs, descriptive link text, headings used for structure.

### Required Performance Standards
Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms. Sized images, lazy-loading below the fold, efficient fonts, no unused heavy scripts. See COMPONENT_SPECIFICATIONS.md per-component performance notes.

### Required Compliance
Fair Housing and Equal Housing honored at all times; brokerage and license shown; listing-data disclaimer present; IDX integration preserved and never wrapped in redundant custom search UI (NON_NEGOTIABLES.md).

### Required Analytics
GA4 base tag plus events for phone, email/text, valuation, search, outbound, and town-link clicks. New conversion surfaces (lead form, consult CTAs) must emit events. See section 6 and COMPONENT_SPECIFICATIONS.md.

---

## 4. Town Page Architecture (section order)

The canonical section order. Sections marked Core are required for certification; sections marked Expansion are added when town data supports them. Each section below lists: Purpose, Business Value, SEO Value, AEO Value, Lead Value, Dependencies, Inputs, Outputs, Schema, and Future Expansion. Inputs reference fields in CONTENT_MODEL.md; component contracts live in COMPONENT_SPECIFICATIONS.md.

### 4.1 Hero (Core)
- Purpose: establish the town, set tone, surface the primary CTA.
- Business Value: first impression and immediate path to convert.
- SEO Value: H1 with primary keyword; LCP image.
- AEO Value: anchors the answer-first intro.
- Lead Value: primary CTA in view.
- Dependencies: site shell nav; hero image (correct town).
- Inputs: town_name, tagline, hero_image, primary_cta.
- Outputs: H1, hero media, CTA.
- Schema: feeds BreadcrumbList and Place name.
- Future Expansion: dynamic seasonal hero; live market badge.

### 4.2 Market Snapshot (Core)
- Purpose: verified at-a-glance market facts.
- Business Value: signals authority and current knowledge.
- SEO/AEO Value: structured, quotable stats.
- Lead Value: motivates valuation/search.
- Dependencies: verified, dated figures.
- Inputs: median_price, median_taxes, days_on_market, inventory, drive_time, population.
- Outputs: stat grid with source/as-of.
- Schema: optional Dataset/Place context.
- Future Expansion: live IDX-driven figures.

### 4.3 Quick Facts (Core)
- Purpose: scannable orienting facts (county, zip, founded, type).
- Business/SEO/AEO Value: entity disambiguation and snippet fuel.
- Lead Value: low; supports trust.
- Inputs: county, zip_codes, area, municipality_type, principal_community.
- Outputs: fact list. Schema: Place properties.
- Future Expansion: linked entities (county page, region page).

### 4.4 About the Community (Core)
- Purpose: who lives here and the real-estate character.
- Business Value: demonstrates local expertise.
- SEO/AEO Value: primary descriptive content.
- Lead Value: builds rapport.
- Inputs: about_copy, character_notes.
- Outputs: prose section. Schema: Place description.
- Future Expansion: history and demographic depth.

### 4.5 Neighborhoods (Core)
- Purpose: the named areas buyers ask about.
- Business Value: captures neighborhood-level intent.
- SEO/AEO Value: high-value long-tail; entity list.
- Lead Value: high; buyers self-identify.
- Inputs: neighborhoods[] (name, character, price_band, waterfront_flag).
- Outputs: neighborhood cards/list. Schema: ItemList (expansion).
- Future Expansion: dedicated neighborhood sub-pages (500+).

### 4.6 Schools (Core)
- Purpose: districts and schools by grade band.
- Business Value: decisive for family buyers.
- SEO/AEO Value: strong query magnet.
- Lead Value: high.
- Inputs: districts[], schools[] (name, grades, type, enrollment).
- Outputs: schools grid. Schema: EducationalOrganization (expansion).
- Future Expansion: ratings, boundaries, links.

### 4.7 Parks (Core) and 4.8 Trails (Expansion)
- Purpose: recreation and open space.
- Value: lifestyle SEO; relocation appeal.
- Inputs: parks[], trails[] (name, features).
- Outputs: feature grid. Schema: Place/TouristAttraction (expansion).
- Future Expansion: maps, trail length, difficulty.

### 4.9 Restaurants / 4.10 Coffee / 4.11 Shopping (Core lifestyle group)
- Purpose: day-to-day lifestyle signals for relocating buyers.
- Value: lifestyle long-tail; relocation trust.
- Inputs: restaurants[], coffee_shops[], shopping[].
- Outputs: amenity lists. Schema: LocalBusiness (expansion).
- Future Expansion: curated guides per category.

### 4.12 Healthcare (Core)
- Purpose: hospitals, urgent care, major medical.
- Value: relocation and 55+ decision factor.
- Inputs: hospitals[], urgent_care[].
- Outputs: list. Schema: Hospital/MedicalClinic (expansion).

### 4.13 Transportation (Core)
- Purpose: commute routes, drive times, transit, airports.
- Value: commuter and relocation intent.
- Inputs: routes[], drive_times[], transit[], airports[].
- Outputs: transportation section. Schema: none required.

### 4.14 Utilities (Core)
- Purpose: electric, water/sewer, gas, internet providers.
- Value: practical relocation content.
- Inputs: utilities[], internet_providers[].
- Outputs: provider list.

### 4.15 Flood Information (Core)
- Purpose: factual flood-zone context, non-alarmist, verify-independently.
- Value: critical for shore buyers; trust.
- Inputs: flood_zones[], fema_notes.
- Outputs: flood section with disclaimer.
- Future Expansion: address-level lookup link.

### 4.16 Insurance Considerations (Core)
- Purpose: flood/wind/homeowners factors framed as discussion points, not advice.
- Value: shore-specific trust.
- Inputs: insurance_notes.
- Outputs: considerations section.

### 4.17 New Construction / 4.18 Luxury / 4.19 Waterfront / 4.20 55+ / 4.21 Investment / 4.22 Commercial (Expansion segments)
- Purpose: segment-specific landing content where the town supports it.
- Business Value: high-intent, high-value buyer segments.
- SEO/AEO Value: dedicated long-tail capture.
- Lead Value: very high.
- Inputs: developments[], luxury_areas[], waterfront_areas[], age_restricted_communities[], investment_notes, commercial_districts[].
- Outputs: segment blocks or links to segment sub-pages.
- Future Expansion: dedicated segment pages per town.

### 4.23 Real Estate Market / Market Report (Core)
- Purpose: market character plus the FBS SmartFrame IDX (or clear link to filtered /search). Never wrap IDX in redundant custom search UI.
- Value: the conversion engine and freshness signal.
- Inputs: market_copy, idx_embed_or_link.
- Outputs: IDX/section. Schema: none required.
- Future Expansion: periodic market report module.

### 4.24 Community Events (Expansion)
- Purpose: local events; freshness and community ties.
- Inputs: events[]. Outputs: events list. Schema: Event (expansion).

### 4.25 Videos (Expansion) and 4.26 Gallery (Expansion)
- Purpose: rich media engagement.
- Inputs: videos[], gallery_images[].
- Outputs: video embeds, gallery. Schema: VideoObject, ImageObject.

### 4.27 FAQ (Core)
- Purpose: visible Q&A matched 1:1 to FAQPage schema.
- Value: AEO, snippets, objection handling.
- Inputs: faqs[]. Outputs: accessible FAQ. Schema: FAQPage + Speakable.

### 4.28 Matt Dunn (Core)
- Purpose: agent bio, credentials, local connection.
- Value: trust and conversion.
- Inputs: agent_bio, headshot, credentials.
- Outputs: agent block. Schema: Person, RealEstateAgent.

### 4.29 Reviews / Testimonials (Core)
- Purpose: social proof.
- Value: conversion lift.
- Inputs: testimonials[] (quote, name, context).
- Outputs: reviews block. Schema: Review/AggregateRating (expansion).

### 4.30 Lead Capture (Core)
- Purpose: on-page conversion form.
- Value: the primary lead surface.
- Inputs: form fields (name, contact, intent); no sensitive financial fields.
- Outputs: form with success state; GA4 events.

### 4.31 Related Pages (Core)
- Purpose: internal linking to towns, guides, search.
- Value: SEO link equity and journey continuity.
- Inputs: related_towns[], related_guides[].
- Outputs: related-links block.

### 4.32 Footer (Core)
- Purpose: global compliance and navigation.
- Value: compliance and trust.
- Inputs: site shell footer.
- Outputs: footer with license, EHO, Fair Housing, disclaimer.

---

## 5. Certification Process

A town page is built via TOWN_WORKFLOW.md and accepted via TOWN_BUILD_CHECKLIST.md, which operationalizes the 100-point checklist in GOLD_STANDARD_PAGE.md section 8. A page is published only after it passes every checklist item and is recorded as certified in DASHBOARD.md and CHANGELOG.md. The Engine does not lower the bar; it makes reaching the bar repeatable.

## 6. Analytics Plan

Inherit the existing GA4 base tag and event model (phone_click, town_link_click, free_valuation_click, search_homes_click, outbound). Extend with events for new conversion surfaces: lead_form_submit, buyer_consult_click, seller_consult_click, text_click, and video_play. Event names are defined once here and reused by every component so reporting stays consistent across 100+ towns.

## 7. Future Expansion

The Engine is designed for a 10-20 year horizon: 100+ towns and 500+ neighborhoods; segment sub-pages (new construction, luxury, waterfront, 55+, investment, commercial, land); a future CMS or headless data source backed by CONTENT_MODEL.md; future APIs that serve the same content model; future automation and AI assistants that assemble pages from components; a future mobile app and CRM integration consuming the same data and events. Because section order, components, data model, and analytics are defined independently of any single page, new surfaces can be added without rewriting existing pages.

## Standards

This document follows DOCS_STANDARDS.md: Markdown, single H1, shallow H2/H3 nesting, ASCII punctuation, and cross-references instead of duplication. It does not restate the certification checklist (GOLD_STANDARD_PAGE.md), the data fields (CONTENT_MODEL.md), the component contracts (COMPONENT_SPECIFICATIONS.md), the workflow (TOWN_WORKFLOW.md), or the acceptance gate (TOWN_BUILD_CHECKLIST.md); it links to them.

## Related Documents

- GOLD_STANDARD_PAGE.md - certification standard and 100-point checklist.
- COMPONENT_SPECIFICATIONS.md - per-component contracts.
- CONTENT_MODEL.md - the town data model.
- TOWN_BUILD_CHECKLIST.md - production acceptance gate.
- TOWN_WORKFLOW.md - production workflow.
- PAGE_STANDARDS.md, WEBSITE_BIBLE.md, BRAND_BIBLE.md, NON_NEGOTIABLES.md, PROJECT_BIBLE.md, ROADMAP.md, DASHBOARD.md.

## Future Expansion

See section 7. As segment sub-pages and a data backend are introduced, this blueprint will gain a "Sub-page Engine" section and a data-source binding section; until then it governs single-file town pages.

## Revision History

- 2026 - Phase B: initial Town Engine blueprint established (documentation only; no code or pages changed).

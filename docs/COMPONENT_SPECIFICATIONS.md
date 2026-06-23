# Component Specifications

The reusable component library for town pages. Every section of a town page is treated as a component with a defined contract: inputs, outputs, props, media, accessibility, schema, performance, and responsive behavior. This is written like component documentation for a UI framework, even though the site is static HTML, so that pages can be assembled predictably and future automation or a CMS can bind data to the same contracts.

This document is architecture only. It does not change any HTML, CSS, JavaScript, or page. Section order and goals live in TOWN_PAGE_ENGINE.md; data fields live in CONTENT_MODEL.md; the acceptance gate lives in TOWN_BUILD_CHECKLIST.md.

## Purpose

Define each town-page section once, as a component, so it can be reused across every town without redesign. A component contract makes it clear what data a section needs, what it renders, how it must behave on mobile and desktop, what schema it emits, and how it must perform.

## Scope

In scope: the component contracts for every section listed in TOWN_PAGE_ENGINE.md section 4, plus the shared shell components (Nav, Footer) and shared primitives (CTA, Section wrapper, Media). Out of scope: actual markup, styles, and scripts (implementation is a later, scoped phase), and non-town pages.

## Audience

Builders and future automation assembling town pages, QA reviewers checking component compliance, and future CMS/API developers binding data to components.

## Responsibilities

- Component owner: maintains the contract and versions it when the shared shell changes.
- Builder: supplies required inputs from CONTENT_MODEL.md and respects each contract.
- QA: verifies accessibility, schema, and performance notes per component against TOWN_BUILD_CHECKLIST.md.

## Dependencies

- TOWN_PAGE_ENGINE.md (section order, goals, analytics event names).
- CONTENT_MODEL.md (field definitions referenced as inputs).
- GOLD_STANDARD_PAGE.md (accessibility, performance, media, trust standards).
- NON_NEGOTIABLES.md (IDX integrity, compliance, no placeholders, clean UTF-8).

---

## Component contract format

Each component is documented with: Purpose, Inputs, Outputs, Props, Images, Accessibility, Schema, Performance, Mobile, Desktop, and Future Enhancements. "Inputs" name fields from CONTENT_MODEL.md. "Props" are presentation options (variant, theme, order). Components that are part of the site shell (Nav, Footer) are inherited and identical across all town pages.

---

## 1. Shell and primitive components

### 1.1 Nav (shell, inherited)
- Purpose: global navigation and the persistent Free Valuation CTA.
- Inputs: site nav model (towns list, guides, search, sell, about).
- Outputs: fixed header, Towns mega-menu, mobile toggle.
- Props: active-town highlight.
- Accessibility: keyboard-operable menu, aria-expanded on toggles, focus visible.
- Schema: none. Performance: minimal; no layout shift on load.
- Mobile: collapsible. Desktop: mega-menu. Future: search-in-nav.

### 1.2 Footer (shell, inherited)
- Purpose: global compliance and navigation.
- Inputs: site footer model.
- Outputs: town links, explore links, contact, and the compliance block (Weichert, NJ License #2442118, Fair Housing, Equal Housing Opportunity, listing-data disclaimer).
- Accessibility: descriptive link text, contrast AA.
- Schema: none required. Performance: trivial.
- Mobile: stacked columns. Desktop: multi-column. Future: dynamic year, locale.

### 1.3 Section wrapper (primitive)
- Purpose: consistent section spacing, eyebrow, heading, optional alt background, and a stable anchor id.
- Props: id, eyebrow, title, variant (default/alt), media-slot.
- Accessibility: H2 per section, no skipped levels.
- Future: collapsible long sections on mobile.

### 1.4 CTA (primitive)
- Purpose: a single, reusable call to action.
- Inputs: label, href or action, intent (search/valuation/buyer-consult/seller-consult/phone/text/email).
- Outputs: button or link with the correct GA4 event.
- Props: variant (primary/secondary/navy), size.
- Accessibility: descriptive label (no bare "click here"), focus visible.
- Schema: none. Performance: trivial.
- Mobile: full-width option; tap-to-call/text surfaced. Desktop: inline.
- Future: sticky mobile CTA bar.

### 1.5 Media (primitive)
- Purpose: a single image or media slot with required alt and optimization.
- Inputs: src, alt, role (informative/decorative), loading (eager for hero LCP, lazy below fold), width/height or aspect-ratio.
- Accessibility: descriptive alt or marked decorative.
- Performance: sized to prevent CLS; modern format where possible.
- Schema: ImageObject (when part of gallery). Future: responsive srcset, art direction.

---

## 2. Section components

### 2.1 Hero
- Purpose: establish the town and surface the primary CTA.
- Inputs: town_name, tagline, hero_image (correct town), primary_cta, aeo_intro.
- Outputs: H1, hero media (LCP), tagline, CTA, answer-first intro.
- Props: overlay strength, alignment.
- Images: one signature wide/aerial shot of the correct town.
- Accessibility: H1 once; sufficient overlay contrast for text.
- Schema: contributes to BreadcrumbList and Place name.
- Performance: hero image is the LCP element; preload and size it.
- Mobile: full-height stack, CTA above the fold. Desktop: full-width.
- Future Enhancements: seasonal/dynamic hero; live market badge.

### 2.2 Market Snapshot
- Inputs: median_price, median_taxes, days_on_market, inventory, drive_time, population (each with source + as-of).
- Outputs: stat grid with sourced, dated figures.
- Props: number of stats, theme.
- Accessibility: stats readable by screen readers (label + value).
- Schema: optional Place/Dataset context. Performance: trivial.
- Mobile: 2-up grid. Desktop: 4-up. Future: live IDX figures.

### 2.3 Quick Facts
- Inputs: county, zip_codes, area, municipality_type, principal_community.
- Outputs: fact list. Schema: Place properties. Future: linked entities.

### 2.4 About the Community
- Inputs: about_copy, character_notes. Outputs: prose.
- Accessibility: readable line length, headings for structure.
- Schema: Place description. Future: history/demographics depth.

### 2.5 Neighborhoods
- Inputs: neighborhoods[] (name, character, price_band, waterfront_flag).
- Outputs: neighborhood cards/list. Props: card vs list.
- Schema: ItemList (expansion). Future: neighborhood sub-pages.

### 2.6 Schools
- Inputs: districts[], schools[] (name, grades, type, enrollment).
- Outputs: schools grid grouped by grade band.
- Schema: EducationalOrganization (expansion). Future: ratings/boundaries.

### 2.7 Parks and 2.8 Trails
- Inputs: parks[], trails[] (name, features). Outputs: feature grid.
- Schema: Place/TouristAttraction (expansion). Future: maps, metrics.

### 2.9 Restaurants / 2.10 Coffee / 2.11 Shopping
- Inputs: restaurants[], coffee_shops[], shopping[]. Outputs: amenity lists.
- Schema: LocalBusiness (expansion). Future: curated category guides.

### 2.12 Healthcare
- Inputs: hospitals[], urgent_care[]. Outputs: list.
- Schema: Hospital/MedicalClinic (expansion).

### 2.13 Transportation
- Inputs: routes[], drive_times[], transit[], airports[]. Outputs: section.

### 2.14 Utilities
- Inputs: utilities[], internet_providers[]. Outputs: provider list.

### 2.15 Flood Information
- Inputs: flood_zones[], fema_notes. Outputs: factual section with verify-independently disclaimer.
- Accessibility: plain language. Future: address-level lookup link.

### 2.16 Insurance Considerations
- Inputs: insurance_notes. Outputs: considerations framed as discussion points, not advice.

### 2.17 Segment components (New Construction, Luxury, Waterfront, 55+, Investment, Commercial)
- Inputs: developments[], luxury_areas[], waterfront_areas[], age_restricted_communities[], investment_notes, commercial_districts[].
- Outputs: segment blocks or links to future segment sub-pages.
- Lead Value: very high. Future: dedicated per-town segment pages.

### 2.18 Real Estate Market / Market Report
- Inputs: market_copy, idx_embed_or_link.
- Outputs: market section and the FBS SmartFrame IDX embed or a clear link to filtered /search.
- Constraint: never wrap IDX in redundant custom search UI (NON_NEGOTIABLES.md).
- Future: periodic market-report module.

### 2.19 Community Events
- Inputs: events[]. Outputs: events list. Schema: Event (expansion).

### 2.20 Videos and 2.21 Gallery
- Inputs: videos[], gallery_images[]. Outputs: embeds and gallery.
- Schema: VideoObject, ImageObject. Performance: lazy-load, posters.
- Accessibility: captions/transcripts target; alt on gallery images.

### 2.22 FAQ
- Inputs: faqs[] (question, answer). Outputs: visible Q&A matched 1:1 to FAQPage schema, with accessible toggle (aria-expanded, keyboard-operable).
- Schema: FAQPage + SpeakableSpecification targeting existing ids.
- Constraint: no orphaned schema. Future: search within FAQ.

### 2.23 Matt Dunn (Agent)
- Inputs: agent_bio, headshot (real img + alt), credentials.
- Outputs: agent block with contact.
- Schema: Person, RealEstateAgent. Future: video intro.

### 2.24 Reviews / Testimonials
- Inputs: testimonials[] (quote, name, context).
- Outputs: reviews block. Schema: Review/AggregateRating (expansion).

### 2.25 Lead Capture
- Inputs: form fields (name, contact, intent). No sensitive financial fields.
- Outputs: form with success state; emits lead_form_submit GA4 event.
- Accessibility: labeled inputs, error states, focus management.
- Future: CRM integration, progressive profiling.

### 2.26 Related Pages
- Inputs: related_towns[], related_guides[]. Outputs: internal links to towns, guides, and filtered search.

---

## Standards

Follows DOCS_STANDARDS.md: single H1, shallow nesting, ASCII punctuation, cross-reference instead of duplication. Component contracts intentionally reference CONTENT_MODEL.md fields and GOLD_STANDARD_PAGE.md standards rather than restating them.

## Related Documents

- TOWN_PAGE_ENGINE.md - section order, goals, analytics events.
- CONTENT_MODEL.md - input field definitions.
- GOLD_STANDARD_PAGE.md - accessibility, performance, media, trust standards.
- TOWN_BUILD_CHECKLIST.md - per-component acceptance.
- NON_NEGOTIABLES.md - IDX integrity and compliance constraints.

## Future Expansion

As segment sub-pages, video, and a data backend arrive, components will gain variants (for example a segment-page Hero) and data-binding notes. Components are versioned with the shell so existing pages stay consistent.

## Revision History

- 2026 - Phase B: initial component library established (documentation only).

# Content Model

The data model for a town page. This document defines every field a town page can contain, as if the static site were backed by a database or CMS. It is the schema that CONTENT contributors fill in, that COMPONENT_SPECIFICATIONS.md components consume as inputs, and that a future CMS, API, or automation would bind to. Defining the model once lets the project scale to 100+ towns and 500+ neighborhoods with consistent, verifiable data.

This document is architecture only. It does not change any HTML, CSS, JavaScript, page, image, or statistic.

## Purpose

Provide a single, authoritative definition of town data: field names, types, sources, whether required, update cadence, validation, display rules, and dependencies. This decouples content from presentation so the same data can drive a page today and an app, API, or CMS tomorrow.

## Scope

In scope: the town entity and its related sub-entities (neighborhoods, schools, parks, amenities, developments, media, reviews, FAQs, related towns). Out of scope: site-wide config (nav, footer), non-town pages, and implementation/storage choices (the model is storage-agnostic).

## Audience

Content and research contributors, component builders, QA, and future CMS/API/automation developers.

## Responsibilities

- Content owner: populates and maintains field values; ensures every figure is verified, sourced, and dated.
- Data owner: maintains this model and validation rules.
- QA: checks required fields, validation, and source/as-of metadata via TOWN_BUILD_CHECKLIST.md.

## Dependencies

- TOWN_PAGE_ENGINE.md (which sections consume which fields).
- COMPONENT_SPECIFICATIONS.md (components reference these fields as inputs).
- GOLD_STANDARD_PAGE.md and NON_NEGOTIABLES.md (verification, sourcing, no unverified statistics).

---

## Field definition format

Each field is defined by: Type, Source, Required?, Update Frequency, Validation Rules, Display Rules, Dependencies. Types include: string, text (long), integer, decimal, money, percent, boolean, enum, url, image-ref, video-ref, date, geo, and list-of (object). Every statistic-type field carries two metadata companions: source (where the figure came from) and as_of (the date/period it represents). A field with a number but no source/as_of fails validation and must not be published.

## Common metadata (applies to statistic fields)

- source: string. Required for any published statistic.
- as_of: date or period. Required for any published statistic.
- verified_by / verified_on: optional provenance for audit.

---

## 1. Town core identity

- town_name - string - Source: official municipal name - Required: yes - Update: rarely - Validation: non-empty; matches canonical town list in WEBSITE_BIBLE.md - Display: H1 and title - Dependencies: hero, breadcrumbs, schema.
- principal_community - string - common name (for example Manahawkin) - Required: if applicable - Update: rarely - Display: intro/quick facts.
- county - enum (Ocean County, ...) - Source: state/municipal - Required: yes - Display: quick facts - Schema: Place containedInPlace.
- zip_codes - list-of string - Required: yes - Validation: 5-digit NJ zips - Display: quick facts.
- municipality_type - enum (township, borough, city, CDP) - Required: yes - Display: quick facts/about.
- area - decimal (sq mi) - Source: Census/municipal - Required: no - Validation: > 0 - Display: quick facts.
- geo - geo (lat, lng) - Source: authoritative - Required: yes - Validation: within NJ bounds - Schema: Place geo.
- canonical_url - url - Required: yes - Validation: production URL pattern - Display: canonical tag.

## 2. Market data (all require source + as_of)

- median_price - money - Source: MLS/market report - Required: yes - Update: quarterly - Validation: > 0; source + as_of present - Display: market snapshot.
- median_taxes - money/year - Required: no - Update: yearly - Validation: > 0; source + as_of.
- days_on_market - integer - Required: no - Update: quarterly - Validation: >= 0; source + as_of.
- inventory_count - integer - Required: no - Update: monthly/quarterly - Validation: >= 0; source + as_of.
- price_trend - percent - Required: no - Update: quarterly - Validation: source + as_of.
- drive_time_to_lbi - string/integer minutes - Required: yes for LBI-adjacent towns - Validation: single canonical value used everywhere on the page (no contradictions) - Display: snapshot/about.
- population - integer - Source: Census - Required: yes - Update: yearly/decennial - Validation: > 0; source + as_of - Display: snapshot/quick facts.

## 3. Schools

- school_districts - list-of object (name, type) - Source: NJ DOE/district - Required: yes - Update: yearly - Validation: non-empty.
- elementary_schools - list-of object (name, grades, type, enrollment, source, as_of) - Required: yes - Update: yearly.
- middle_schools - list-of object (same shape) - Required: if applicable.
- high_schools - list-of object (same shape) - Required: yes.
- Display: schools grid grouped by grade band. Schema: EducationalOrganization (expansion).

## 4. Neighborhoods and developments

- neighborhoods - list-of object (name, character, price_band, waterfront_flag, age_restricted_flag) - Source: local knowledge/MLS areas - Required: yes - Update: as needed - Validation: unique names - Display: neighborhoods section; future sub-pages.
- developments / builder_communities - list-of object (name, builder, status, type) - Required: no - Update: as needed.
- luxury_areas - list-of object (name, notes) - Required: no.
- waterfront_areas - list-of object (name, water_type, dockage) - Required: no.
- age_restricted_communities - list-of object (name, age, hoa) - Required: no - Display: 55+ segment.
- hoas - list-of object (name, scope, fees_note) - Required: no - Validation: fees marked unverified unless sourced.
- commercial_districts - list-of object (name, notes) - Required: no - Display: commercial segment.
- investment_notes - text - Required: no - Display: investment segment.

## 5. Recreation and amenities

- parks - list-of object (name, features) - Required: yes - Update: as needed.
- trails - list-of object (name, length, features) - Required: no.
- boat_ramps - list-of object (name, access) - Required: no.
- marinas - list-of object (name, services) - Required: no.
- golf_courses - list-of object (name, type) - Required: no.
- restaurants - list-of object (name, cuisine) - Required: no (recommended).
- coffee_shops - list-of object (name) - Required: no (recommended).
- shopping - list-of object (name, type) - Required: no (recommended).
- libraries - list-of object (name, system) - Required: no.
- community_events - list-of object (name, season, notes) - Required: no - Schema: Event (expansion).

## 6. Services and infrastructure

- hospitals - list-of object (name, system) - Required: if applicable.
- urgent_care - list-of object (name) - Required: no.
- utilities - list-of object (kind, provider) - Required: no - kinds: electric, water, sewer, gas.
- internet_providers - list-of object (name, type) - Required: no.
- transportation - object (routes[], drive_times[], transit[], airports[]) - Required: yes (at least primary routes) - Validation: drive_times consistent with market data drive_time fields.

## 7. Risk and compliance context

- flood_zones - list-of object (zone, notes) - Source: FEMA - Required: yes for shore towns - Update: on FEMA revision - Validation: factual, non-alarmist; include verify-independently note - Display: flood section.
- fema_notes - text - Required: no.
- insurance_notes - text - Required: no - Display: insurance considerations - Rule: framed as factors to discuss, not advice.

## 8. Media (see GOLD_STANDARD_PAGE.md section 5 for the manifest)

- hero_image - image-ref (src, alt, correct-town) - Required: yes - Validation: depicts the correct town; alt present.
- lifestyle_images - list-of image-ref - Required: yes.
- neighborhood_images - list-of image-ref - Required: recommended.
- school_images - list-of image-ref - Required: recommended.
- park_images - list-of image-ref - Required: recommended.
- marina_images / waterfront_images - list-of image-ref - Required: if applicable.
- commercial_images - list-of image-ref - Required: recommended.
- drone_images - list-of image-ref - Required: at least one.
- matt_headshot - image-ref - Required: yes - Validation: real headshot, alt present (no CSS-background placeholder).
- community_images - list-of image-ref - Required: recommended.
- seasonal_images - list-of image-ref - Required: at least one.
- videos - list-of video-ref (src, title, poster) - Required: no - Schema: VideoObject.
- gallery_images - list-of image-ref - Required: no - Schema: ImageObject.
- All images: Validation - descriptive alt, sized to prevent CLS, optimized format; Update - as photography is captured.

## 9. Trust and conversion

- testimonials - list-of object (quote, name, context, source) - Required: yes - Validation: real, attributable - Schema: Review (expansion).
- reviews_aggregate - object (rating, count, source) - Required: no - Schema: AggregateRating (expansion).
- agent_bio - text - Required: yes (shared, town-tailored allowed).
- agent_credentials - list-of string - Required: yes.
- community_involvement - text - Required: recommended.
- lead_form_intents - enum list (buy, sell, valuation, relocate, invest) - Required: yes - Rule: no sensitive financial fields collected.

## 10. Content and relationships

- aeo_intro - text - Required: yes - Rule: answer-first; mirrored in FAQ where relevant.
- about_copy - text - Required: yes.
- faqs - list-of object (question, answer) - Required: yes - Validation: must match FAQPage schema 1:1.
- related_towns - list-of town-ref - Required: yes - Validation: valid town slugs; adjacency preferred.
- related_guides - list-of url - Required: recommended.
- market_copy - text - Required: yes.
- idx_embed_or_link - object (mode: embed|link, target) - Required: yes - Rule: preserve FBS SmartFrame IDX; no redundant custom search UI.

---

## Validation summary

A field set is publishable only when: all Required fields are present; every statistic carries source and as_of; drive-time and other repeated figures are internally consistent; every image has alt and is the correct subject; FAQs match schema 1:1; and IDX rules are honored. These rules are enforced operationally by TOWN_BUILD_CHECKLIST.md.

## Standards

Follows DOCS_STANDARDS.md: single H1, shallow nesting, ASCII punctuation, cross-reference instead of duplication. The model defines data only; presentation rules live in COMPONENT_SPECIFICATIONS.md and standards live in GOLD_STANDARD_PAGE.md.

## Related Documents

- TOWN_PAGE_ENGINE.md - which sections use which fields.
- COMPONENT_SPECIFICATIONS.md - components that consume these fields.
- GOLD_STANDARD_PAGE.md - photography manifest and content standards.
- TOWN_BUILD_CHECKLIST.md - where validation is enforced.
- NON_NEGOTIABLES.md - verification and IDX rules.

## Future Expansion

This model is storage-agnostic so it can back a future CMS, headless API, or automation. Future additions: per-neighborhood records as first-class entities (for 500+ neighborhood sub-pages), localized content variants, and time-series market data feeding live snapshots.

## Revision History

- 2026 - Phase B: initial content model established (documentation only).

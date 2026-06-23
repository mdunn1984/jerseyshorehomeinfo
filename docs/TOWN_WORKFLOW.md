# Town Workflow

The production workflow for building a Gold Standard town page, from research to continuous improvement. It defines the ordered stages, and for each stage the inputs, outputs, owner, dependencies, quality gates, and exit criteria. The workflow connects the rest of the Town Engine: it consumes CONTENT_MODEL.md data, assembles COMPONENT_SPECIFICATIONS.md components into the TOWN_PAGE_ENGINE.md architecture, and ends at the TOWN_BUILD_CHECKLIST.md gate before publish.

This document is process and architecture only. It does not change any HTML, CSS, JavaScript, page, image, or statistic.

## Purpose

Make town-page production a repeatable pipeline rather than an ad hoc effort. Anyone (a contributor, a future team member, or a future AI assistant) can pick up a town at any stage and know exactly what the inputs, outputs, and exit criteria are.

## Scope

In scope: the end-to-end production process for a single town page. Out of scope: the standards themselves (GOLD_STANDARD_PAGE.md), the data model (CONTENT_MODEL.md), and component contracts (COMPONENT_SPECIFICATIONS.md), which this workflow references.

## Audience

Production owners and contributors across research, photography, content, SEO/AEO, QA, and publishing, plus future automation that may execute or assist any stage.

## Responsibilities

- Workflow owner: maintains the pipeline and resolves stage handoffs.
- Stage owners: named per stage below.
- QA owner: owns the Gold Standard Audit and QA gates.

## Dependencies

- TOWN_PAGE_ENGINE.md, COMPONENT_SPECIFICATIONS.md, CONTENT_MODEL.md, TOWN_BUILD_CHECKLIST.md, GOLD_STANDARD_PAGE.md, NON_NEGOTIABLES.md.

---

## Pipeline overview

Research -> Photography -> Content -> SEO -> AEO -> Schema -> Review -> Gold Standard Audit -> QA -> Publish -> Analytics -> Continuous Improvement

Stages are sequential for first build but iterative in practice; a failed quality gate returns the town to the relevant earlier stage. No stage may be skipped for a Gold Standard build.

## Stages

### 1. Research
- Inputs: CONTENT_MODEL.md field list; town selection from the canonical list.
- Outputs: populated content model with verified, sourced, dated data.
- Owner: Content/Research.
- Dependencies: authoritative sources (Census, NJ DOE, FEMA, MLS/market reports).
- Quality Gate: every Required field present; every statistic has source + as_of; no contradictions.
- Exit Criteria: content model approved as complete and verified.

### 2. Photography
- Inputs: media manifest (GOLD_STANDARD_PAGE.md section 5); shot list per CONTENT_MODEL.md media fields.
- Outputs: real, optimized, correctly-subject images with alt text drafted.
- Owner: Photography.
- Dependencies: research (which neighborhoods/landmarks to shoot).
- Quality Gate: hero is the correct town; required image types captured; images optimized.
- Exit Criteria: media set complete and approved (no placeholders remain).

### 3. Content
- Inputs: verified content model; brand voice (BRAND_BIBLE.md).
- Outputs: section copy (about, neighborhoods, schools, segments, FAQ answers, market copy, AEO intro).
- Owner: Content.
- Dependencies: research, photography (captions/context).
- Quality Gate: no filler, no generic AI writing, no placeholders; consistent voice; figures match the model.
- Exit Criteria: copy reviewed and on-voice.

### 4. SEO
- Inputs: content; target queries.
- Outputs: title, meta description, canonical, OG/Twitter, heading structure, internal links.
- Owner: SEO/AEO.
- Dependencies: content.
- Quality Gate: unique metadata; keyword in H1; no dead links; clean URL.
- Exit Criteria: SEO metadata complete.

### 5. AEO
- Inputs: content; FAQ.
- Outputs: answer-first intro; FAQ phrasing; Speakable targets.
- Owner: SEO/AEO.
- Dependencies: content, SEO.
- Quality Gate: answer-first phrasing; FAQ ready to mirror in schema.
- Exit Criteria: AEO content finalized.

### 6. Schema
- Inputs: content, SEO, AEO outputs.
- Outputs: RealEstateAgent, Person, Place, BreadcrumbList, FAQPage, Speakable (plus expansion schema as applicable).
- Owner: SEO/AEO or Engineering.
- Dependencies: AEO (FAQ), content (entities).
- Quality Gate: schema valid; matches visible content 1:1; no orphaned schema.
- Exit Criteria: structured data validated.

### 7. Review
- Inputs: assembled draft page (components per COMPONENT_SPECIFICATIONS.md).
- Outputs: reviewed draft with issues logged.
- Owner: Builder + Content.
- Dependencies: all prior stages.
- Quality Gate: section order matches TOWN_PAGE_ENGINE.md; components used correctly.
- Exit Criteria: draft ready for formal audit.

### 8. Gold Standard Audit
- Inputs: draft page; GOLD_STANDARD_PAGE.md.
- Outputs: pass/fail/deferred audit against the certification standard.
- Owner: QA.
- Dependencies: review.
- Quality Gate: certification-level review of all categories.
- Exit Criteria: audit complete; blocking items identified.

### 9. QA
- Inputs: audit results; TOWN_BUILD_CHECKLIST.md.
- Outputs: scored 100-point checklist; sign-off or returned items.
- Owner: QA.
- Dependencies: Gold Standard Audit.
- Quality Gate: 100% of applicable points pass; accessibility and CWV verified.
- Exit Criteria: full pass recorded; no open Fails.

### 10. Publish
- Inputs: certified page; sitemap.
- Outputs: page live on main (Netlify deploy); sitemap.xml updated.
- Owner: Engineering/Publisher.
- Dependencies: QA pass.
- Quality Gate: main stays deployable; compliance and IDX intact.
- Exit Criteria: page live; DASHBOARD.md and CHANGELOG.md updated with certification record.

### 11. Analytics
- Inputs: live page; GA4 event model (TOWN_PAGE_ENGINE.md section 6).
- Outputs: verified event firing; baseline metrics.
- Owner: Analytics.
- Dependencies: publish.
- Quality Gate: all required events fire; data flowing.
- Exit Criteria: analytics confirmed and baselined.

### 12. Continuous Improvement
- Inputs: analytics; new data; user feedback.
- Outputs: prioritized updates (refresh stats, expand sections, add segments).
- Owner: Product/Content.
- Dependencies: analytics.
- Quality Gate: changes re-enter the workflow at the relevant stage and re-pass the checklist.
- Exit Criteria: ongoing; each change is re-certified before publish.

---

## Quality gates summary

Each stage has an explicit exit criterion; the two hard gates are the Gold Standard Audit (stage 8) and QA (stage 9). A page cannot reach Publish without passing both and recording certification, per GOLD_STANDARD_PAGE.md and TOWN_BUILD_CHECKLIST.md.

## Standards

Follows DOCS_STANDARDS.md: single H1, shallow nesting, ASCII punctuation, cross-reference instead of duplication. The workflow references standards and checklists rather than restating them.

## Related Documents

- TOWN_PAGE_ENGINE.md - architecture and analytics events.
- COMPONENT_SPECIFICATIONS.md - components assembled during build.
- CONTENT_MODEL.md - the data gathered in Research.
- TOWN_BUILD_CHECKLIST.md - the QA gate at stage 9.
- GOLD_STANDARD_PAGE.md - the certification standard at stage 8.
- DASHBOARD.md and CHANGELOG.md - where certification is recorded.

## Future Expansion

As automation and a data backend arrive, individual stages can be partially automated (for example schema generation from the content model, or analytics verification), and a parallel sub-page workflow can be added for segment pages. The stage contracts stay stable so automation can slot into any stage.

## Revision History

- 2026 - Phase B: initial production workflow established (documentation only).

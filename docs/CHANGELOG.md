# Changelog

A running log of meaningful changes to Jersey Shore Home Info. Newest entries on top. Record documentation, site, and infrastructure changes here. Keep DASHBOARD.md in sync.

## Format

Each entry: a date or milestone heading, followed by concise bullet points describing what changed and why.

## Unreleased / 2026

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

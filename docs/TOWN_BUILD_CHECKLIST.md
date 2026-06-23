# Town Build Checklist

The production acceptance gate for every town page. A town page cannot be published until every item here passes. This checklist operationalizes the certification standard in GOLD_STANDARD_PAGE.md and the architecture in TOWN_PAGE_ENGINE.md into a concrete, 100-point, category-by-category gate that QA runs before publish.

This document is process and architecture only. It does not change any HTML, CSS, JavaScript, page, image, or statistic.

## Purpose

Give QA and builders one definitive pass/fail gate so that quality does not depend on memory or individual judgment. Every town reaches the same bar the same way. The checklist mirrors the 100-point certification in GOLD_STANDARD_PAGE.md section 8 and adds production-readiness categories (grammar, internal/external links, UX) so a page is publish-ready, not just structurally correct.

## Scope

In scope: the acceptance criteria for publishing a town page. Out of scope: how to build (TOWN_WORKFLOW.md), what data to gather (CONTENT_MODEL.md), and component contracts (COMPONENT_SPECIFICATIONS.md).

## Audience

QA reviewers (primary), builders (self-check before handoff), and the certification record-keeper who logs results in DASHBOARD.md and CHANGELOG.md.

## Responsibilities

- Builder: runs the checklist as a self-check before requesting review.
- QA owner: runs the authoritative pass and records the score.
- Engine owner: keeps this checklist aligned with GOLD_STANDARD_PAGE.md.

## Dependencies

- GOLD_STANDARD_PAGE.md (the certification source of truth).
- TOWN_PAGE_ENGINE.md, COMPONENT_SPECIFICATIONS.md, CONTENT_MODEL.md.
- NON_NEGOTIABLES.md (hard rules that any item here also enforces).

---

## How to use

Score each item Pass or Fail. A Fail blocks publish. Items that genuinely do not apply to a town (for example marinas in a landlocked town) are marked N/A and do not count against the score, but the reason must be recorded. Target: 100/100 applicable points. Record the final score and certification status per the Final Approval section.

## Categories and points (100 total)

### 1. Foundation (6)
1. Correct file at repo root with clean URL.
2. Clean doctype, no stray leading characters.
3. Valid UTF-8, zero mojibake.
4. Balanced, valid HTML structure.
5. Single H1; no skipped heading levels.
6. Page registered in sitemap.xml.

### 2. Content (8)
7. Answer-first AEO intro present.
8. About section complete and on-voice.
9. All Core sections from TOWN_PAGE_ENGINE.md present.
10. No filler or padding.
11. No generic AI-sounding copy.
12. No placeholders of any kind.
13. Brand voice consistent (BRAND_BIBLE.md).
14. Neighborhood and school details present and accurate.

### 3. SEO (6)
15. Unique title tag.
16. Unique meta description.
17. Primary keyword in H1.
18. Self-referential canonical.
19. Open Graph + Twitter complete with working image.
20. Clean, descriptive internal URL structure.

### 4. AEO (4)
21. FAQ content mirrored in FAQPage schema.
22. Speakable targets exist on the page.
23. Answer-first phrasing for key questions.
24. Entity facts (county, type) present for disambiguation.

### 5. Schema (6)
25. RealEstateAgent JSON-LD valid.
26. Person JSON-LD valid.
27. Place JSON-LD valid.
28. BreadcrumbList JSON-LD valid.
29. FAQPage JSON-LD valid and matches visible FAQ 1:1.
30. No orphaned schema (all schema maps to visible content).

### 6. Accessibility (8)
31. Descriptive alt on every informative image.
32. Decorative images marked appropriately.
33. Keyboard-operable interactive elements.
34. Correct ARIA state on toggles (FAQ aria-expanded).
35. Color contrast meets AA.
36. Visible focus indicators.
37. Form inputs labeled.
38. Descriptive link text (no bare "click here").

### 7. Performance (6)
39. LCP image preloaded/sized.
40. Below-fold images lazy-loaded.
41. Images sized (width/height or aspect-ratio) to prevent CLS.
42. Modern image formats where possible.
43. Fonts loaded efficiently.
44. No unused render-blocking scripts.

### 8. Core Web Vitals (3)
45. LCP < 2.5s.
46. CLS < 0.1.
47. INP < 200ms.

### 9. Photography (8)
48. Hero image is the correct town.
49. Lifestyle image present.
50. Neighborhood image(s) present.
51. Schools image present.
52. Parks image present.
53. Commercial/downtown image present.
54. At least one drone/aerial image.
55. Real Matt Dunn headshot (img with alt; not a CSS background).

### 10. Video (2)
56. Any embedded video lazy-loads with a poster.
57. VideoObject schema present for embedded video (if used).

### 11. Trust (7)
58. Client reviews present.
59. Attributed testimonials present.
60. Weichert brokerage branding present.
61. NJ License #2442118 visible.
62. Fair Housing present and linked.
63. Equal Housing Opportunity present and rendering cleanly.
64. Community-involvement signal present.

### 12. Lead Generation (6)
65. Primary CTA above the fold.
66. Secondary CTA present.
67. On-page lead form with success state.
68. Tap-to-call present and tracked.
69. Tap-to-text present and tracked.
70. Email contact present and tracked.

### 13. Compliance (5)
71. Listing-data disclaimer present.
72. Fair Housing and Equal Housing honored.
73. Brokerage and license displayed.
74. IDX preserved; no redundant custom search UI.
75. No sensitive financial fields collected.

### 14. Analytics (5)
76. GA4 base tag present.
77. phone_click event fires.
78. valuation/search CTA events fire.
79. lead_form_submit event fires.
80. outbound and town_link events fire.

### 15. Internal Links (4)
81. Zero dead on-page anchors.
82. Cross-page anchors use correct absolute paths.
83. Related towns/guides/search links present.
84. Breadcrumb path correct.

### 16. External Links (2)
85. External links valid and relevant.
86. target="_blank" links use rel="noopener".

### 17. Grammar (3)
87. Spelling correct throughout.
88. Grammar and punctuation correct (ASCII-clean where applicable).
89. Consistent terminology and capitalization.

### 18. Mobile (4)
90. Single-column layout verified.
91. Nav collapses and is operable.
92. CTAs reachable; tap-to-call/text surfaced.
93. No horizontal scroll or overflow.

### 19. Desktop (3)
94. Grids and mega-menu render correctly.
95. Hero and media render at full width without shift.
96. Persistent CTA visible.

### 20. User Experience (2)
97. Logical reading order and scan-ability.
98. No console errors.

### 21. Certification (1)
99. All applicable items above pass.

### 22. Final Approval (1)
100. QA sign-off recorded with score and date.

---

## Scoring

- Count Pass items out of applicable points (N/A items removed from the denominator with a recorded reason).
- Publishable only at 100% of applicable points.
- Any Fail is a hard block; fix and re-run.

## Final Approval

On a full pass: record "Gold Standard Certified - [town] - [date] - score X/100 (Y applicable)" in DASHBOARD.md and add an entry to CHANGELOG.md. Without this record, the page is not certified regardless of its state.

## Standards

Follows DOCS_STANDARDS.md: single H1, shallow nesting, ASCII punctuation, cross-reference instead of duplication. This checklist intentionally mirrors and operationalizes GOLD_STANDARD_PAGE.md section 8 rather than redefining the standard.

## Related Documents

- GOLD_STANDARD_PAGE.md - certification standard (source of truth).
- TOWN_PAGE_ENGINE.md - architecture and section order.
- COMPONENT_SPECIFICATIONS.md - component contracts.
- CONTENT_MODEL.md - data and validation.
- TOWN_WORKFLOW.md - the workflow that ends at this gate.
- NON_NEGOTIABLES.md - hard rules.

## Future Expansion

As segment sub-pages, video, and live market data arrive, this checklist gains optional sub-checklists (for example a segment-page gate) while the core 100-point gate remains the baseline for every town page.

## Revision History

- 2026 - Phase B: initial 100-point build checklist established (documentation only).

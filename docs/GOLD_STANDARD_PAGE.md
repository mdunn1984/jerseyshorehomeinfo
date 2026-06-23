# Gold Standard Page — Certification Standard

The definitive certification standard for every town page on jerseyshorehomeinfo.com. A page is the "Gold Standard" only when it passes every requirement in this document. This is the bar the flagship Stafford Township page is being built to, and the template every other town page will be measured against.

Pair this with PAGE_STANDARDS.md (the minimum quality bar), WEBSITE_BIBLE.md (technical reference), BRAND_BIBLE.md (voice), and NON_NEGOTIABLES.md (hard rules). Where this document is stricter than PAGE_STANDARDS.md, this document governs for flagship pages.

---

## 1. Purpose

A Gold Standard page is a fully realized, verified, conversion-ready town page that functions as a long-term local-authority resource — not a thin landing page. It is the most complete, accurate, and trustworthy presentation of a town that the site can produce.

It exists to:

- Establish Matt Dunn as the obvious local expert for that town (BRAND_BIBLE positioning: hyper-local, trusted advisor, long-term resource).
- Rank and answer well in search and AI answer engines (SEO/AEO) so buyers and sellers find the page.
- Convert visitors into conversations — valuation requests, buyer/seller consultations, calls, texts, and form leads.
- Serve as a reusable, certifiable template so every town page can reach the same bar with predictable effort.

Business goals supported: lead generation (valuations and consultations), brand authority, organic discoverability, and reduced rework through a repeatable standard.

---

## 2. Required Sections

The complete flagship page architecture, top to bottom. Every section below is required unless explicitly marked optional. Sections must appear in a logical reading order and each must have a stable anchor \`id\` for internal linking and schema.

1. **Hero** — town name (single H1), one-line positioning tagline, real local hero image, and a primary CTA in view.
2. **Market Snapshot** — verified, dated quick-stats (e.g., median sale price, days on market, inventory, drive time, population). Every number sourced.
3. **About the Community** — what the town is, who lives there, and its real-estate character.
4. **Neighborhoods** — the named subdivisions/areas buyers ask about (e.g., Beach Haven West, Ocean Acres) with a sentence of real character each.
5. **Schools** — districts and schools by grade band, with current, verified details.
6. **Parks** — parks, preserves, and recreation.
7. **Restaurants** — notable local dining.
8. **Coffee** — coffee shops / cafes (lifestyle signal for relocating buyers).
9. **Shopping** — retail centers and everyday shopping.
10. **Healthcare** — hospitals, urgent care, major medical.
11. **Transportation** — commute routes, drive times, public transit, airports.
12. **Utilities** — providers (electric, water/sewer, gas, internet) where relevant.
13. **Flood Information** — flood zones, FEMA context, and what buyers should verify (factual, non-alarmist, "verify independently").
14. **Insurance Considerations** — flood/wind/homeowners considerations framed as factors to discuss, not advice.
15. **Real Estate Market** — market character and the FBS SmartFrame IDX (or a clear link to /search filtered to the town). Do not wrap IDX in redundant custom search UI.
16. **FAQ** — visible Q&A that matches the FAQPage JSON-LD exactly (no orphaned schema).
17. **Testimonials** — real client reviews with attribution.
18. **Matt Dunn** — agent bio, credentials, and local connection.
19. **Contact** — phone, text, email, brokerage address.
20. **Lead Capture** — on-page valuation/consultation form.
21. **Related Pages** — internal links to related towns, guides, and /search.
22. **Footer** — global footer with full compliance block.

Optional/lifestyle sub-blocks (Coffee, Shopping, Restaurants) may be grouped under an "Amenities & Lifestyle" umbrella as long as each topic is genuinely covered.

---

## 3. Technical Standards

- **SEO:** Unique, descriptive title tag and meta description; primary keyword in H1; clean URL; canonical set.
- **AEO:** A concise, answer-first intro that directly answers "what is [town] known for"; FAQ content mirrored in schema; Speakable specification targets that exist on the page.
- **Schema (JSON-LD):** RealEstateAgent, Person, Place, BreadcrumbList, and FAQPage at minimum. Every schema claim must correspond to visible page content. No orphaned schema.
- **Accessibility:** WCAG 2.1 AA target. Logical landmarks, descriptive alt text on every informative image, keyboard-operable interactive elements with correct ARIA state (e.g., FAQ aria-expanded), sufficient color contrast, visible focus.
- **Performance:** Lean, render-blocking-minimized, lazy-loaded below-the-fold imagery, no unused heavy scripts.
- **Core Web Vitals:** Targets — LCP < 2.5s, CLS < 0.1, INP < 200ms (field-representative).
- **Heading hierarchy:** Exactly one H1; H2 per major section; no skipped levels.
- **Internal links:** No dead links; every on-page hash anchor resolves to a real id; cross-page anchors use the correct path (e.g., /#valuation).
- **External links:** Valid, relevant, rel="noopener" on target="_blank".
- **Canonical:** Self-referential canonical to the production URL.
- **Metadata:** Open Graph and Twitter card complete, with a working share image.
- **GA4 events:** Phone, email/text, CTA (valuation, search), outbound, and town-link events fire correctly.
- **JSON-LD:** Valid, parseable, and consistent with visible content.
- **Image optimization:** Correctly sized, modern formats where possible, explicit width/height (or aspect-ratio) to prevent layout shift, descriptive alt, lazy-loading below the fold.

---

## 4. Content Standards

- Every factual claim must be verified before publishing.
- Every statistic must be sourced and dated (source + "as of" period).
- No contradictory information anywhere on the page (e.g., one drive time, used consistently).
- No filler or padding.
- No generic AI-sounding writing; copy must sound like one knowledgeable local voice per BRAND_BIBLE.
- No placeholders of any kind ("PHOTO PLACEHOLDER", lorem ipsum, TODO) in production.
- Honest, no-pressure tone; listing data noted as believed accurate but not guaranteed and independently verifiable.

---

## 5. Photography Standards

Real, locally authentic imagery only — no generic stock where local is expected. Every image needs descriptive alt text and optimization (Section 3). Document every required image per page:

- **Hero** — signature wide shot of the town (correct town — not a neighboring town's landmark).
- **Lifestyle** — people-scale shots conveying day-to-day life.
- **Neighborhood** — representative homes/streets for named neighborhoods.
- **Schools** — school campus/exterior.
- **Parks** — parks, trails, preserves.
- **Marinas** — waterfront, docks, lagoons (where applicable).
- **Commercial** — downtown/retail corridor.
- **Drone** — at least one aerial establishing shot.
- **Matt** — professional headshot (real <img>, alt text).
- **Community** — events, landmarks, civic life.
- **Seasonal** — at least one off-season/seasonal image showing year-round character.

Do not replace any images in this phase. This section defines the target manifest only.

---

## 6. Trust Standards

- **Reviews** — real client reviews surfaced on page.
- **Testimonials** — attributed testimonials (name/initial + context).
- **Brokerage information** — Weichert Realtors clearly displayed, with branding.
- **License** — NJ License #2442118 visible.
- **Fair Housing** — Fair Housing commitment and link present.
- **Equal Housing** — Equal Housing Opportunity statement/badge present and rendering cleanly.
- **Contact information** — phone, text, email, office address, all correct and clickable.
- **Professional headshots** — real Matt Dunn headshot, not a placeholder background.
- **Community involvement** — local ties / involvement that reinforces authenticity.

---

## 7. Conversion Standards

- **Primary CTA** — "View Homes For Sale" (to /search filtered to town).
- **Secondary CTA** — "Free Home Valuation."
- **Valuation** — on-page or one-click path to a valuation request.
- **Buyer consultation** — clear path to book a no-pressure buyer conversation.
- **Seller consultation** — clear path to a seller/listing conversation.
- **Phone** — tap-to-call, GA4 tracked.
- **Text** — tap-to-text option.
- **Email** — mailto, GA4 tracked.
- **Lead form** — on-page capture (name, contact, intent) with success state; no sensitive financial fields.

CTAs must be present above the fold and repeated at a logical closing point. Lead capture must not depend on bouncing the user to another page.

---

## 8. Certification Checklist (100 points)

A page is **Gold Standard Certified** only when all 100 items pass. Group weights shown.

### A. Structure & Sections (20)
1. Single H1 with town name.
2. Hero present with real local image.
3. Hero tagline present.
4. Market Snapshot section present.
5. About the Community section present.
6. Neighborhoods section present.
7. Schools section present.
8. Parks section present.
9. Restaurants covered.
10. Coffee covered.
11. Shopping covered.
12. Healthcare covered.
13. Transportation covered.
14. Utilities covered.
15. Flood Information covered.
16. Insurance Considerations covered.
17. Real Estate Market / IDX section present.
18. Related Pages section present.
19. Global footer present.
20. Logical section order with stable anchor ids.

### B. SEO / AEO / Schema (15)
21. Unique title tag.
22. Unique meta description.
23. Primary keyword in H1.
24. Self-referential canonical.
25. Open Graph complete.
26. Twitter card complete.
27. Working OG/share image.
28. RealEstateAgent JSON-LD valid.
29. Person JSON-LD valid.
30. Place JSON-LD valid.
31. BreadcrumbList JSON-LD valid.
32. FAQPage JSON-LD valid.
33. Answer-first AEO intro present.
34. Speakable targets exist on page.
35. No orphaned schema (all schema maps to visible content).

### C. Technical Integrity (15)
36. Clean doctype, no stray leading characters.
37. Valid UTF-8, zero mojibake.
38. Balanced tags (sections/divs/scripts).
39. Exactly one H1; no skipped heading levels.
40. Zero dead on-page anchors.
41. Cross-page anchors use correct paths.
42. External links valid with rel="noopener".
43. GA4 base tag present.
44. GA4 phone event fires.
45. GA4 CTA (valuation/search) events fire.
46. GA4 outbound events fire.
47. Mobile-responsive layout verified.
48. No console errors.
49. IDX integration intact (no redundant custom search UI).
50. Sitemap includes the page.

### D. Performance & CWV (10)
51. LCP < 2.5s.
52. CLS < 0.1.
53. INP < 200ms.
54. Images sized with width/height or aspect-ratio.
55. Below-fold images lazy-loaded.
56. Modern image formats where possible.
57. No render-blocking unused scripts.
58. Fonts loaded efficiently (preconnect/display swap).
59. Total page weight within budget.
60. No layout shift on interaction.

### E. Accessibility (10)
61. Descriptive alt on every informative image.
62. Decorative images marked appropriately.
63. Keyboard-operable interactive elements.
64. Correct ARIA state on toggles (e.g., FAQ aria-expanded).
65. Color contrast meets AA.
66. Visible focus indicators.
67. Logical landmark structure.
68. Form inputs have labels.
69. Link text is descriptive (no bare "click here").
70. Headings used for structure, not styling.

### F. Content & Verification (10)
71. Every factual claim verified.
72. Every statistic sourced and dated.
73. No contradictory figures across the page.
74. No filler/padding.
75. No generic AI-sounding copy.
76. No placeholders of any kind.
77. Brand voice consistent (knowledgeable, local, no-pressure).
78. Neighborhood names accurate.
79. School details current.
80. Listing-data disclaimer present.

### G. Photography (8)
81. Hero image is the correct town.
82. Lifestyle image present.
83. Neighborhood image(s) present.
84. Schools image present.
85. Parks image present.
86. Commercial/downtown image present.
87. At least one drone/aerial image.
88. Real Matt Dunn headshot (<img> with alt).

### H. Trust (7)
89. Client reviews present.
90. Attributed testimonials present.
91. Weichert brokerage branding present.
92. NJ License #2442118 visible.
93. Fair Housing present and linked.
94. Equal Housing Opportunity present and rendering cleanly.
95. Community-involvement signal present.

### I. Conversion (5)
96. Primary CTA above the fold.
97. Secondary CTA present.
98. On-page lead-capture form with success state.
99. Tap-to-call, tap-to-text, and email all present and tracked.
100. Closing CTA repeated at the end of the page.

A page that fails any single item is **not** certified. Record certification status and the failing items in DASHBOARD.md and CHANGELOG.md.

---

## 9. Stafford Township — Gold Standard Audit (as of Phase A2)

Status key: PASS / FAIL / DEFERRED (planned for a later, explicitly scoped phase).

Phase A1 (structural perfection) is complete; this audit reflects the post-A1 state.

### Summary
- PASS: structural integrity, base SEO/AEO/schema, FAQ schema-to-visible parity, compliance footer, base GA4, IDX-respecting CTA.
- FAIL: missing flagship sections, real photography, trust assets, on-page lead capture.
- DEFERRED: photography, statistic verification, content expansion, trust assets, lead form — each scoped to its own later phase.

### Section-by-section
- Hero — PASS (structure, H1, tagline) / FAIL (real image — DEFERRED to photography phase; hero currently references a neighboring-town image + placeholder slot).
- Market Snapshot — PARTIAL: present but figures unverified and internally contradictory (LBI drive time stated three ways). FAIL on verification — DEFERRED to statistics phase.
- About the Community — PASS (on-brand copy).
- Neighborhoods — DEFERRED (named areas appear in prose; no dedicated section yet).
- Schools — PASS (detailed by grade band; details to be re-verified in statistics phase).
- Parks — PASS.
- Restaurants — PARTIAL (appears in amenities list; no dedicated treatment).
- Coffee — FAIL (not covered) — DEFERRED to content expansion.
- Shopping — PARTIAL (amenities list).
- Healthcare — PARTIAL (hospital listed in amenities).
- Transportation — FAIL (no dedicated section) — DEFERRED.
- Utilities — FAIL — DEFERRED.
- Flood Information — FAIL — DEFERRED.
- Insurance Considerations — FAIL — DEFERRED.
- Real Estate Market / IDX — PARTIAL (CTA links to /search?town=; no on-page IDX yet) — DEFERRED.
- FAQ — PASS (visible FAQ added in A1; matches FAQPage schema exactly; accessible toggle).
- Testimonials — FAIL — DEFERRED to trust phase.
- Matt Dunn — PARTIAL (strong bio) / FAIL (headshot is a CSS background placeholder, not a real <img>) — DEFERRED.
- Contact — PASS (phone + email) / Text option missing — DEFERRED.
- Lead Capture — FAIL (no on-page form; CTAs bounce to /#valuation) — DEFERRED to conversion phase.
- Related Pages — PARTIAL (footer town links exist; no in-body related-pages block) — DEFERRED.
- Footer — PASS (full compliance block intact).

### Technical
- Doctype/encoding/tags/anchors — PASS (resolved in A1).
- Single H1 / heading order — PASS.
- Canonical / OG / Twitter / JSON-LD — PASS.
- GA4 base + events — PASS.
- Performance / CWV — NOT YET MEASURED — DEFERRED.
- Accessibility full sweep — PARTIAL (FAQ ARIA added in A1; full AA sweep DEFERRED).

### Content
- Verification, sourcing/dating, contradiction removal — FAIL/DEFERRED to statistics phase (notably the LBI drive-time contradiction).
- Placeholders — FAIL (photo placeholders remain) — DEFERRED to photography phase.

### Conversion
- Primary/secondary CTA — PASS (present).
- On-page lead form / text option — FAIL — DEFERRED.

### Certification verdict
Stafford Township is **NOT yet Gold Standard Certified**. Phase A1 cleared the structural gate; remaining items are tracked above and will be implemented only in their own explicitly scoped phases.

---

## Related documents

- PAGE_STANDARDS.md — minimum per-page bar.
- WEBSITE_BIBLE.md — technical reference.
- BRAND_BIBLE.md — voice and identity.
- NON_NEGOTIABLES.md — hard rules.
- DASHBOARD.md — live status.
- CHANGELOG.md — record of changes.

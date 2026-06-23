# Phase 1 Foundation Audit

Site-wide audit of jerseyshorehomeinfo.com for Phase 1 launch-readiness defects. Findings are based on a programmatic scan of the raw HTML source on the main branch and the local images/ inventory. Status tags: FIXED, DEFERRED (needs photography/design), OPEN.

## Method

- Fetched the raw bytes of all 19 HTML pages and inspected actual byte sequences (not just rendered text) to distinguish true defects from rendering artifacts.
- Cross-referenced every image reference against the local images/ folder.
- Counted dead links, placeholder markers, and encoding artifacts per page.

## Summary of findings

| Defect class | Occurrences | Disposition |
| --- | --- | --- |
| Character encoding / mojibake | 60 across 8 pages | FIXED |
| Dead link: footer brand logo (href="#") | 19 (one per page) | FIXED |
| Dead link: Guides nav dropdown (href="#") | 19 (one per page) | FIXED |
| Broken image: matt-dunn.jpg | 2 (one page) | FIXED |
| Missing image: og-image.jpg | 32 references | DEFERRED (design) |
| PHOTO PLACEHOLDER slots | 63 across 7 pages | DEFERRED (photography) |

## 1. Character encoding / mojibake (FIXED)

The source files declare UTF-8 but contained double-encoded byte sequences: the original UTF-8 bytes of smart punctuation were re-encoded as Latin-1, producing garbled output. Confirmed by inspecting raw bytes (for example "County's" was stored as the byte run C3 A2 C2 80 C2 99).

Characters affected and their correct restorations:

- Right single quote: rendered garbled, restored to the apostrophe character (U+2019).
- Em dash: rendered garbled, restored to the em dash (U+2014).
- Equal Housing Opportunity badge glyph: rendered garbled, restored to its intended symbol (U+2295).

Counts by page: index 3, search 2, long-beach-island 5, stafford-township 14, toms-river 9, barnegat 3, waretown 10, little-egg-harbor 14. The remaining pages were already clean.

The fix decodes each double-encoded run back to its correct character. No wording was changed; only the corrupted bytes were repaired.

## 2. Dead links (FIXED)

Every page contained two href="#" dead links:

- Footer brand logo: the footer "Jersey Shore Home Info" logo linked to href="#". Repointed to the homepage (/).
- Guides nav dropdown parent: the "Guides" top-nav item linked to href="#". Repointed to /moving-from-staten-island, the only existing guide and the dropdown's sole child. The dropdown submenu is unchanged.

After the initial fix pass, the town and content pages were clean. During the recovery audit, the three legal pages (privacy-policy.html, terms-of-service.html, fair-housing.html) were found to still contain both href="#" dead links: their navigation uses a different markup (<li class="dropdown guides">) than the town pages, so the first pass missed them. These were repointed during recovery using the same mapping (footer brand to /, Guides to /moving-from-staten-island). After the recovery fixes, zero href="#" links remain across all 19 pages.

## 3. Broken image reference (FIXED)

- moving-from-staten-island.html referenced /images/matt-dunn.jpg, which does not exist. The correct local asset is matt-dunn-headshot.jpg (used on all other pages). Updated the reference to the existing local file.

During the recovery audit, a second broken reference to /images/matt-dunn.jpg was found in the JSON-LD structured-data "image" field on terms-of-service.html (not an <img> tag, so the original scan missed it). It was also updated to matt-dunn-headshot.jpg during recovery.

## 4. Missing image: og-image.jpg (DEFERRED — design)

All pages reference /images/og-image.jpg as the Open Graph / Twitter social-share image (32 references total), but this file is not present in images/. Social shares will show a broken or default preview.

Action needed: create a branded 1200x630 px social-share image named og-image.jpg (logo + tagline + coastal photo) and add it to images/. No safe local substitute exists, so the references were left unchanged to avoid pointing at a mismatched image.

## 5. PHOTO PLACEHOLDER slots (DEFERRED — photography)

Seven pages use styled placeholder slots (div.photo-slot with descriptive text) where real local photography is required. These describe specific, location-accurate scenes that cannot be safely substituted with the generic stock currently in images/ without misrepresenting the location.

Pages and counts (9 slots each): long-beach-island, stafford-township, toms-river, barnegat, waretown, little-egg-harbor, brick.

Representative images needed (from the placeholder descriptions):

- Long Beach Island: LBI aerial; oceanfront beach with dune fencing; cedar-shingled beach house; Barnegat Bay sunset/docks; LBI school/community building; Beach Haven boardwalk / Bay Village shops; Fantasy Island Amusement Park; surfers near Harvey Cedars/Ship Bottom; Manahawkin Bay Bridge causeway entrance.
- Stafford Township: Manahawkin causeway aerial; Manahawkin Lake / Stafford Forge with kayaks; typical Stafford neighborhood; plus the remaining slots listed in source.
- Toms River, Barnegat, Waretown, Little Egg Harbor, Brick: town-specific aerials, downtowns, parks, schools, and waterfront scenes as described in each page's placeholder text.

Until licensed local photography is available, these slots remain in place. They are stable (no broken image tags) but are not production-ready under PAGE_STANDARDS.

## Local image inventory (available for safe use)

barnegat-boardwalk.jpg, brick-waterfront.jpg, coastal-home.jpg, hero-barnegat-lighthouse.jpg, jersey-shore-beach.jpg, matt-dunn-headshot.jpg, nj-neighborhood.jpg, sunset-neighborhood.jpg, toms-river-town.jpg, waretown-apartments.jpg, waterfront-aerial.jpg.

## Functional links spot-check

- Town links (/long-beach-island, /toms-river, etc.), /search, and legal links (/privacy-policy, /terms-of-service, /fair-housing) use real relative paths.
- Header CTAs use anchor targets on the homepage (/#sell, /#agent, /#valuation). These resolve to homepage sections; verify those anchors exist on index.html during Phase 2 content work.
- Phone and email: rendered in the footer contact block; confirm tel: and mailto: wiring during Phase 2 (not part of this pass).

## Pages still blocked for launch

The seven pages with PHOTO PLACEHOLDER slots remain blocked on photography. All pages remain blocked on the missing og-image.jpg for correct social sharing. No page is blocked by encoding or dead-link defects after this pass.

## Related documents

- DASHBOARD.md — overall status.
- PAGE_STANDARDS.md — the bar each page must meet.
- ROADMAP.md — Phase 1 scope.
- CHANGELOG.md — record of the fixes applied.

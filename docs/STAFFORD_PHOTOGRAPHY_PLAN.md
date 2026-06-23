# Stafford Township — Photography Production Plan

> **Status:** Production plan only. No HTML, CSS, JS, or image files are changed by this document.
> **Goal:** Eliminate every placeholder on `stafford-township.html` with authentic, local Stafford Township / Manahawkin photography and certify the page to Gold Standard (see `docs/GOLD_STANDARD_PAGE.md` Section 5).
> **Owner:** Matt Dunn (REALTOR, Weichert Realtors). Each Weichert office is independently owned and operated.
> **Scope reference:** PRODUCT_BACKLOG item "Replace all PHOTO PLACEHOLDER slots" + "Stafford Gold Standard certification."

---

## 1. Purpose

`stafford-township.html` currently contains **9 photo-slot placeholders** (`.photo-slot`) and a text-only agent section. None resolve to a real `<img>` on the page yet. The hero placeholder even references a neighboring-town framing, which Gold Standard Section 5 explicitly forbids ("correct town — not a neighboring town's landmark").

This plan defines a **production-ready manifest**: every image required, with full shooting specification, so that a single day in Stafford Township yields every asset needed to reach Gold Standard photography (Section G, 8 points).

This document does **not** replace any placeholder. Replacement is a separate, later implementation sprint.

---

## 2. How to read each image spec

Each image below documents 24 fields:

Image Name | Purpose | Page Location | Section | Orientation | Recommended Resolution | Desktop Crop | Mobile Crop | Best Time of Day | Season | GPS / Shooting Location | Suggested Camera Angle | Drone or Ground | Primary Subject | Backup Subject | Alt Text | SEO File Name | Caption | Related Schema | Priority | Required Before Launch? | Future Replacement Notes

Naming convention for SEO file names: `stafford-[subject]-[descriptor].webp` (deliver WebP + JPG fallback; see GOLD_STANDARD_PAGE Section 3 for optimization).

GPS coordinates below are approximate center points for the named location and should be field-verified; they are starting waypoints for navigation, not survey-grade.

---

## 3. Image Manifest

Total images specified: **17** — 9 map directly to existing `.photo-slot` placeholders; 8 cover Gold Standard categories not yet slotted (added in a later content sprint).

### Existing placeholder slots (must-fill)

| ID | Image | Maps to current placeholder |
|---|---|---|
| H1 | Stafford Township Hero Aerial | Hero — aerial (currently mis-references a neighboring town) |
| C1 | Manahawkin Lake Lifestyle | Manahawkin Lake / Stafford Forge with kayaks and walking path |
| N1 | Beach Haven West Waterfront Colonial | Stafford colonial in Beach Haven West with a boat at the dock |
| W1 | Manahawkin Bay Sunset from the Causeway | Manahawkin Bay sunset from the Causeway bridge |
| S1 | Southern Regional High School | Southern Regional High School exterior or campus aerial |
| P1 | Manahawkin Lake Park / Community Center | Stafford Township Community Center or Manahawkin Lake Park |
| P2 | Youth Sports at a Stafford Field | Youth lacrosse or soccer game on a Stafford field |
| NA1 | Edwin B. Forsythe National Wildlife Refuge | Edwin B. Forsythe National Wildlife Refuge wetlands trail |
| CM1 | Stafford Park / Bay Avenue Retail Corridor | Bay Avenue shopping district or Stafford Park retail center |

### Gold Standard category gaps (add with future content sections)

M1 (headshot upgrade), NB1 (neighborhoods), HC1 (healthcare), RC1 (restaurants/coffee), MR1 (marinas/boat ramps), EV1 (events), DR1 (drone establishing), SE1 (seasonal/off-season).

---

### H1. Stafford Township Hero Aerial

| Field | Specification |
|---|---|
| **Image Name** | Stafford Township Hero Aerial |
| **Purpose** | Signature wide establishing shot that opens the page and answers "where am I?" instantly. Replaces the current placeholder that wrongly references a neighboring-town framing. |
| **Page Location** | Hero section, top of page (full-bleed background behind H1). |
| **Section** | town-hero / "Stafford Township" |
| **Orientation** | Landscape (wide 16:9 or wider) |
| **Recommended Resolution** | 4000x2250 px min (deliver 2560px-wide web master) |
| **Desktop Crop** | 21:9 letterbox, subject weighted left-of-center so H1 text sits in open sky on the right |
| **Mobile Crop** | 4:5 vertical crop keeping the causeway approach and waterfront band centered |
| **Best Time of Day** | Golden hour — 1 hour after sunrise or 1 hour before sunset for warm low-angle light |
| **Season** | Late spring through early fall (full green marsh, active water) |
| **GPS / Shooting Location** | ~39.6700, -74.1850 — airspace over Manahawkin / Stafford mainland looking east toward the bay and Causeway approach |
| **Suggested Camera Angle** | High aerial, camera tilted ~25-35 deg down, horizon kept in top third |
| **Drone or Ground** | Drone |
| **Primary Subject** | Stafford mainland waterfront + Causeway approach + Manahawkin Bay |
| **Backup Subject** | Manahawkin Bay sunset wide from the same airspace if approach angle is obstructed |
| **Alt Text** | Aerial view of Stafford Township, New Jersey, with the Manahawkin Bay waterfront and Causeway approach |
| **SEO File Name** | `stafford-hero-aerial-manahawkin-bay.webp` |
| **Caption** | Stafford Township — the mainland gateway to Long Beach Island. |
| **Related Schema** | Place / image of LocalBusiness page hero |
| **Priority** | P0 — HIGHEST |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Re-shoot annually for seasonal freshness; keep an off-season variant for winter campaigns. |

### C1. Manahawkin Lake Lifestyle

| Field | Specification |
|---|---|
| **Image Name** | Manahawkin Lake Lifestyle |
| **Purpose** | Community / lifestyle image conveying everyday, year-round life by the water. |
| **Page Location** | First content section, lead photo. |
| **Section** | town-section / "A real town with real schools..." |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 1:1 center on the path and water |
| **Best Time of Day** | Morning or late afternoon, soft light |
| **Season** | Spring or fall (foliage + comfortable activity) |
| **GPS / Shooting Location** | ~39.6926, -74.2585 — Manahawkin Lake Park, walking path and lakefront |
| **Suggested Camera Angle** | Ground level, eye height, leading line along the path toward the water |
| **Drone or Ground** | Ground |
| **Primary Subject** | Manahawkin Lake with walking path; kayaks or paddlers if present |
| **Backup Subject** | Stafford Forge Wildlife Management Area pond if lake access is poor |
| **Alt Text** | Walking path along Manahawkin Lake in Stafford Township with people enjoying the waterfront |
| **SEO File Name** | `stafford-manahawkin-lake-lifestyle.webp` |
| **Caption** | Morning walks at Manahawkin Lake — part of everyday life in Stafford. |
| **Related Schema** | Place (Park) |
| **Priority** | P1 |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Capture a kayak-in-motion variant for the parks section. |

### N1. Beach Haven West Waterfront Colonial

| Field | Specification |
|---|---|
| **Image Name** | Beach Haven West Waterfront Colonial |
| **Purpose** | Representative housing-style shot for the lagoon neighborhoods — the signature "boat at the dock" Stafford lifestyle. |
| **Page Location** | Content section, housing example photo. |
| **Section** | town-section / "A real town with real schools..." |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 4:5 keeping home + dock + boat |
| **Best Time of Day** | Mid-morning (even light on the home facade, no harsh shadows) |
| **Season** | Late spring to early fall (boating season, full landscaping) |
| **GPS / Shooting Location** | ~39.6500, -74.2300 — a Beach Haven West lagoon street (use a listing or with owner permission) |
| **Suggested Camera Angle** | Three-quarter front of the home from across or along the lagoon, boat in frame |
| **Drone or Ground** | Ground |
| **Primary Subject** | Typical Stafford colonial in Beach Haven West with a boat at a private dock |
| **Backup Subject** | Any well-kept lagoon-front home with dock if a colonial is unavailable |
| **Alt Text** | Waterfront colonial home with a private boat dock in Beach Haven West, Stafford Township |
| **SEO File Name** | `stafford-beach-haven-west-waterfront-home.webp` |
| **Caption** | Lagoon living in Beach Haven West — a boat at your own dock. |
| **Related Schema** | Place / Residence (illustrative) |
| **Priority** | P1 |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Shoot only with owner/listing permission; refresh when a flagship listing is available. |

### W1. Manahawkin Bay Sunset from the Causeway

| Field | Specification |
|---|---|
| **Image Name** | Manahawkin Bay Sunset from the Causeway |
| **Purpose** | Waterfront emotional anchor; conveys the bay setting and the LBI connection. |
| **Page Location** | Content section, atmosphere photo. |
| **Section** | town-section / "A real town with real schools..." |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 21:9 panoramic |
| **Mobile Crop** | 1:1 center on the sun and reflection |
| **Best Time of Day** | Sunset / blue hour |
| **Season** | Any (summer for warm tones, winter for dramatic skies) |
| **GPS / Shooting Location** | ~39.6580, -74.1730 — Manahawkin Bay / Route 72 Causeway vantage (pull-off or pedestrian path, never the active roadway) |
| **Suggested Camera Angle** | Low, water in foreground, sun on the horizon |
| **Drone or Ground** | Ground (drone optional, airspace permitting) |
| **Primary Subject** | Manahawkin Bay sunset with the Causeway bridge silhouette |
| **Backup Subject** | Bay sunset without bridge from a public bayfront access point |
| **Alt Text** | Sunset over Manahawkin Bay viewed from near the Causeway in Stafford Township |
| **SEO File Name** | `stafford-manahawkin-bay-sunset-causeway.webp` |
| **Caption** | Sunset over Manahawkin Bay. |
| **Related Schema** | Place |
| **Priority** | P1 |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Keep both a bridge and no-bridge version for layout flexibility. |

### S1. Southern Regional High School

| Field | Specification |
|---|---|
| **Image Name** | Southern Regional High School |
| **Purpose** | Schools credibility — the top-rated district is a primary buyer driver. |
| **Page Location** | Schools section, lead photo. |
| **Section** | town-section / "Stafford Township and Southern Regional..." |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 4:5 on the main entrance/signage |
| **Best Time of Day** | Mid-morning, even light |
| **Season** | Any school-active season (greenery preferred) |
| **GPS / Shooting Location** | ~39.6840, -74.2470 — Southern Regional High School / Middle School campus, Cedar Bridge Rd |
| **Suggested Camera Angle** | Three-quarter exterior including identifying signage; aerial optional |
| **Drone or Ground** | Ground (drone optional for campus aerial) |
| **Primary Subject** | Southern Regional High School exterior or campus aerial |
| **Backup Subject** | Stafford Township Intermediate / Oxycocus / McKinley school exterior |
| **Alt Text** | Southern Regional High School campus in Stafford Township, New Jersey |
| **SEO File Name** | `stafford-southern-regional-high-school.webp` |
| **Caption** | Southern Regional — consistently top-rated. |
| **Related Schema** | Place / EducationalOrganization (illustrative, not endorsement) |
| **Priority** | P0 |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Shoot from public vantage; avoid identifiable students for privacy. |

### P1. Manahawkin Lake Park / Community Center

| Field | Specification |
|---|---|
| **Image Name** | Manahawkin Lake Park / Community Center |
| **Purpose** | Parks + civic life; shows the town is built for year-round families. |
| **Page Location** | Parks section, lead photo. |
| **Section** | town-section / "Parks, the bay, and a town built for year-round families." |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 4:5 on the building/playground |
| **Best Time of Day** | Late morning to midday (active), or golden hour for warmth |
| **Season** | Spring through fall |
| **GPS / Shooting Location** | ~39.6926, -74.2585 — Manahawkin Lake Park / Stafford Township Community Center |
| **Suggested Camera Angle** | Eye-level wide showing facility + green space |
| **Drone or Ground** | Ground |
| **Primary Subject** | Stafford Township Community Center or Manahawkin Lake Park grounds |
| **Backup Subject** | Bicentennial / Stafford rec fields entrance |
| **Alt Text** | Manahawkin Lake Park and the Stafford Township Community Center |
| **SEO File Name** | `stafford-community-center-manahawkin-lake-park.webp` |
| **Caption** | Where Stafford families gather year-round. |
| **Related Schema** | Place (Park) |
| **Priority** | P1 |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Pair with an events-day variant when a town event is scheduled. |

### P2. Youth Sports at a Stafford Field

| Field | Specification |
|---|---|
| **Image Name** | Youth Sports at a Stafford Field |
| **Purpose** | Lifestyle / community — the "rec to Southern Regional" athletic pipeline narrative. |
| **Page Location** | Content section, lifestyle photo. |
| **Section** | town-section / "Parks... / A pipeline of athletes..." |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 1:1 on the action |
| **Best Time of Day** | Game time — typically weekend morning or weekday early evening |
| **Season** | Spring (lacrosse/soccer) or fall (soccer/football) |
| **GPS / Shooting Location** | ~39.6820, -74.2550 — Stafford Township rec fields / Bicentennial Park complex |
| **Suggested Camera Angle** | Low, side-on to the action with field depth |
| **Drone or Ground** | Ground |
| **Primary Subject** | Youth lacrosse or soccer game on a Stafford field |
| **Backup Subject** | Empty well-kept field with goals if no game scheduled |
| **Alt Text** | Youth sports game on a recreation field in Stafford Township |
| **SEO File Name** | `stafford-youth-sports-field.webp` |
| **Caption** | From Stafford rec to Southern Regional. |
| **Related Schema** | Place / SportsActivityLocation |
| **Priority** | P2 |
| **Required Before Launch?** | No (nice-to-have; obtain consent and avoid identifiable minors) |
| **Future Replacement Notes** | Requires parental consent for any identifiable child; prefer wide/anonymous framing or blur. |

### NA1. Edwin B. Forsythe National Wildlife Refuge

| Field | Specification |
|---|---|
| **Image Name** | Edwin B. Forsythe National Wildlife Refuge |
| **Purpose** | Nature / waterfront character; year-round outdoor identity and the conservation setting. |
| **Page Location** | Content section, nature photo. |
| **Section** | town-section / "Parks... year-round families." |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 21:9 panoramic wetlands |
| **Mobile Crop** | 4:5 on the trail leading into the marsh |
| **Best Time of Day** | Early morning (birds active, soft light) or golden hour |
| **Season** | Spring or fall migration for wildlife; summer for lush marsh |
| **GPS / Shooting Location** | ~39.5100, -74.3600 — Edwin B. Forsythe NWR, Wildlife Drive / wetlands trail (Stafford-adjacent unit) |
| **Suggested Camera Angle** | Low, trail or boardwalk as a leading line into open wetland |
| **Drone or Ground** | Ground (drone restricted in refuge — verify rules, do not fly if prohibited) |
| **Primary Subject** | Forsythe National Wildlife Refuge wetlands trail / boardwalk |
| **Backup Subject** | Stafford Forge WMA or Cedar Run marsh overlook |
| **Alt Text** | Wetlands trail at the Edwin B. Forsythe National Wildlife Refuge near Stafford Township |
| **SEO File Name** | `stafford-forsythe-wildlife-refuge-wetlands.webp` |
| **Caption** | Protected wetlands minutes from home. |
| **Related Schema** | Place (TouristAttraction / Park) |
| **Priority** | P1 |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Check refuge photography + drone regulations before shooting; ground-only if drones prohibited. |

### CM1. Stafford Park / Bay Avenue Retail Corridor

| Field | Specification |
|---|---|
| **Image Name** | Stafford Park / Bay Avenue Retail Corridor |
| **Purpose** | Commercial / shopping — "where Stafford gets things done"; daily-convenience proof. |
| **Page Location** | Commercial section, lead photo. |
| **Section** | town-section / "Where Stafford gets things done." |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 4:5 on a recognizable storefront cluster |
| **Best Time of Day** | Mid-morning (open, lit, low crowds) or dusk for warm storefront glow |
| **Season** | Any |
| **GPS / Shooting Location** | ~39.6620, -74.2360 — Stafford Park retail center / Route 72 & Bay Avenue corridor |
| **Suggested Camera Angle** | Eye-level streetscape with depth down the retail row |
| **Drone or Ground** | Ground |
| **Primary Subject** | Bay Avenue shopping district or Stafford Park retail center |
| **Backup Subject** | Manahawkin Town Center / Costco-anchored center exterior |
| **Alt Text** | Stafford Park retail center along the Route 72 shopping corridor in Stafford Township |
| **SEO File Name** | `stafford-park-retail-corridor.webp` |
| **Caption** | Everyday shopping, all in one place. |
| **Related Schema** | Place / ShoppingCenter |
| **Priority** | P2 |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Avoid foregrounding any single brand sign; keep framing brand-neutral. |

### M1. Matt Dunn Professional Headshot (Stafford context)

| Field | Specification |
|---|---|
| **Image Name** | Matt Dunn Professional Headshot (Stafford context) |
| **Purpose** | Trust — a real, professional agent photo. A headshot asset (matt-dunn-headshot.jpg) already exists; this is an optional Stafford-context upgrade, not a replacement of a missing asset. |
| **Page Location** | Agent section "Meet Matt Dunn." |
| **Section** | section agent |
| **Orientation** | Portrait (and one landscape variant) |
| **Recommended Resolution** | 2000x2500 px portrait |
| **Desktop Crop** | 4:5 head-and-shoulders |
| **Mobile Crop** | 1:1 tight on face/shoulders |
| **Best Time of Day** | Open shade or golden hour for flattering, even skin tones |
| **Season** | Any |
| **GPS / Shooting Location** | Stafford waterfront, Manahawkin Lake, or a recognizable local backdrop (agent location) |
| **Suggested Camera Angle** | Eye-level, slight three-quarter turn, friendly approachable expression |
| **Drone or Ground** | Ground |
| **Primary Subject** | Matt Dunn, professional and approachable, with a subtle local Stafford backdrop |
| **Backup Subject** | Clean neutral-background studio-style headshot (already on hand) |
| **Alt Text** | Matt Dunn, REALTOR with Weichert Realtors, Jersey Shore real estate specialist |
| **SEO File Name** | `matt-dunn-stafford-headshot.webp` |
| **Caption** | Matt Dunn — your local Stafford Township specialist. |
| **Related Schema** | Person (RealEstateAgent) |
| **Priority** | P2 (existing asset already satisfies the baseline) |
| **Required Before Launch?** | No |
| **Future Replacement Notes** | Optional brand refresh; keep the existing headshot until a local-context version is captured. |

### NB1. Ocean Acres Neighborhood Street

| Field | Specification |
|---|---|
| **Image Name** | Ocean Acres Neighborhood Street |
| **Purpose** | Neighborhoods — representative homes/streets for a named Stafford neighborhood (Matt is an Ocean Acres resident). |
| **Page Location** | Neighborhoods context (new Gold Standard section or within community copy). |
| **Section** | Neighborhoods (to be added in content sprint) |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 4:5 down the street |
| **Best Time of Day** | Golden hour for warm residential feel |
| **Season** | Spring/summer (mature landscaping) |
| **GPS / Shooting Location** | ~39.6700, -74.2700 — Ocean Acres residential street, Stafford Township |
| **Suggested Camera Angle** | Eye-level leading line down a tree-lined street |
| **Drone or Ground** | Ground |
| **Primary Subject** | Well-kept Ocean Acres residential street |
| **Backup Subject** | Any established Stafford single-family neighborhood street |
| **Alt Text** | Tree-lined residential street in the Ocean Acres neighborhood of Stafford Township |
| **SEO File Name** | `stafford-ocean-acres-neighborhood-street.webp` |
| **Caption** | Ocean Acres — an established Stafford neighborhood. |
| **Related Schema** | Place |
| **Priority** | P2 |
| **Required Before Launch?** | No |
| **Future Replacement Notes** | Add when the Neighborhoods section is built; respect resident privacy (no plates/people). |

### HC1. Hackensack Meridian Southern Ocean Medical Center

| Field | Specification |
|---|---|
| **Image Name** | Hackensack Meridian Southern Ocean Medical Center |
| **Purpose** | Healthcare — a key relocation/retiree concern; major local hospital. |
| **Page Location** | Healthcare context (Gold Standard gap). |
| **Section** | Healthcare (to be added in content sprint) |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 4:5 on the entrance |
| **Best Time of Day** | Mid-morning, even light |
| **Season** | Any |
| **GPS / Shooting Location** | ~39.6650, -74.2520 — Hackensack Meridian Health Southern Ocean Medical Center, Route 72 |
| **Suggested Camera Angle** | Three-quarter exterior with identifying signage |
| **Drone or Ground** | Ground |
| **Primary Subject** | Southern Ocean Medical Center exterior |
| **Backup Subject** | Stafford-area urgent care or medical plaza |
| **Alt Text** | Hackensack Meridian Southern Ocean Medical Center in Stafford Township |
| **SEO File Name** | `stafford-southern-ocean-medical-center.webp` |
| **Caption** | A full-service hospital, right in town. |
| **Related Schema** | Place / Hospital (illustrative) |
| **Priority** | P2 |
| **Required Before Launch?** | No |
| **Future Replacement Notes** | Public-vantage exterior only; no patient/staff identification. |

### RC1. Local Restaurant / Coffee Lifestyle

| Field | Specification |
|---|---|
| **Image Name** | Local Restaurant / Coffee Lifestyle |
| **Purpose** | Restaurants + Coffee categories (currently uncovered per Gold Standard audit). |
| **Page Location** | Dining/lifestyle context (Gold Standard gap). |
| **Section** | Dining (to be added in content sprint) |
| **Orientation** | Landscape + one portrait |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 1:1 on a coffee cup / plated dish detail |
| **Best Time of Day** | Late morning (coffee) or evening (restaurant ambiance) |
| **Season** | Any |
| **GPS / Shooting Location** | Bay Avenue / Route 72 dining corridor, Stafford Township (with owner permission) |
| **Suggested Camera Angle** | Eye-level, warm interior or storefront; detail shot of food/coffee |
| **Drone or Ground** | Ground |
| **Primary Subject** | Welcoming local coffee shop or restaurant scene |
| **Backup Subject** | Storefront exterior of a recognizable local eatery |
| **Alt Text** | Local coffee shop in Stafford Township |
| **SEO File Name** | `stafford-local-coffee-dining.webp` |
| **Caption** | Local flavor, walkable and welcoming. |
| **Related Schema** | Place / FoodEstablishment (illustrative) |
| **Priority** | P3 |
| **Required Before Launch?** | No |
| **Future Replacement Notes** | Shoot with business owner permission; keep brand-neutral where possible. |

### MR1. Lagoon Marina / Boat Ramp

| Field | Specification |
|---|---|
| **Image Name** | Lagoon Marina / Boat Ramp |
| **Purpose** | Marinas + Boat Ramps categories; reinforces the boating-lifestyle value driver. |
| **Page Location** | Waterfront/boating context (Gold Standard gap). |
| **Section** | Waterfront (within community section) |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 4:5 on docked boats |
| **Best Time of Day** | Early morning calm water or golden hour |
| **Season** | Boating season (late spring to early fall) |
| **GPS / Shooting Location** | ~39.6450, -74.2250 — a Beach Haven West / mainland lagoon marina or public boat ramp |
| **Suggested Camera Angle** | Low along the dock line; boats and lagoon receding into frame |
| **Drone or Ground** | Ground (drone optional for overhead of slips) |
| **Primary Subject** | Lagoon marina with docked boats or a public boat ramp |
| **Backup Subject** | Empty boat ramp with bay beyond |
| **Alt Text** | Marina with docked boats on a Stafford Township lagoon |
| **SEO File Name** | `stafford-lagoon-marina-boat-ramp.webp` |
| **Caption** | Bay access from your own backyard. |
| **Related Schema** | Place / BoatTerminal (illustrative) |
| **Priority** | P2 |
| **Required Before Launch?** | No |
| **Future Replacement Notes** | Combine logistically with N1 (Beach Haven West) — same geographic cluster. |

### EV1. Stafford Community Event

| Field | Specification |
|---|---|
| **Image Name** | Stafford Community Event |
| **Purpose** | Events / civic life category; people-scale proof of an active community. |
| **Page Location** | Community / events context (Gold Standard gap). |
| **Section** | Community (within community section) |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 1:1 on the crowd/activity |
| **Best Time of Day** | Whenever the event occurs |
| **Season** | Event-dependent (summer festivals, fall fairs, holiday lighting) |
| **GPS / Shooting Location** | Manahawkin Lake Park, Stafford rec complex, or Bay Ave — during a scheduled town event |
| **Suggested Camera Angle** | Eye-level among the activity with depth |
| **Drone or Ground** | Ground |
| **Primary Subject** | A Stafford community event with families and activity |
| **Backup Subject** | Decorated/staged event grounds before crowds arrive |
| **Alt Text** | Community event in Stafford Township with families gathered |
| **SEO File Name** | `stafford-community-event.webp` |
| **Caption** | A town that shows up for each other. |
| **Related Schema** | Event (illustrative) |
| **Priority** | P3 |
| **Required Before Launch?** | No |
| **Future Replacement Notes** | Schedule around the town events calendar; obtain consent for any close-up identifiable people. |

### DR1. Drone Establishing — Stafford Mainland to Bay

| Field | Specification |
|---|---|
| **Image Name** | Drone Establishing — Stafford Mainland to Bay |
| **Purpose** | Mandatory aerial establishing shot (Gold Standard requires at least one). Distinct from H1 hero by being a neutral mid-page establishing frame. |
| **Page Location** | Mid-page establishing / section divider. |
| **Section** | Community / overview |
| **Orientation** | Landscape (and one vertical for mobile) |
| **Recommended Resolution** | 4000x2250 px |
| **Desktop Crop** | 21:9 wide aerial |
| **Mobile Crop** | 9:16 vertical aerial for mobile divider |
| **Best Time of Day** | Golden hour |
| **Season** | Late spring to early fall |
| **GPS / Shooting Location** | ~39.6650, -74.2000 — airspace over Stafford mainland looking toward Manahawkin Bay and LBI |
| **Suggested Camera Angle** | High aerial, ~30 deg down, bay and barrier island on the horizon |
| **Drone or Ground** | Drone |
| **Primary Subject** | Stafford mainland transitioning to bay and LBI on the horizon |
| **Backup Subject** | Tighter aerial of the lagoon neighborhoods |
| **Alt Text** | Aerial establishing view of Stafford Township mainland reaching toward Manahawkin Bay and Long Beach Island |
| **SEO File Name** | `stafford-drone-establishing-bay-lbi.webp` |
| **Caption** | Stafford Township — mainland convenience, island access. |
| **Related Schema** | Place |
| **Priority** | P1 |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Fly within FAA rules; check for TFRs and refuge no-fly zones before launch. |

### SE1. Off-Season / Seasonal Stafford

| Field | Specification |
|---|---|
| **Image Name** | Off-Season / Seasonal Stafford |
| **Purpose** | Mandatory seasonal image proving year-round character (Gold Standard requires at least one off-season frame). |
| **Page Location** | Seasonal accent within community or parks section. |
| **Section** | Seasonal |
| **Orientation** | Landscape |
| **Recommended Resolution** | 3000x2000 px |
| **Desktop Crop** | 3:2 full |
| **Mobile Crop** | 4:5 |
| **Best Time of Day** | Golden hour (low winter sun) or crisp midday |
| **Season** | Late fall or winter (bare trees, quiet bay, holiday touches) |
| **GPS / Shooting Location** | Manahawkin Lake Park or a bayfront access point, Stafford Township — off-season |
| **Suggested Camera Angle** | Eye-level or low; emphasize calm, light, and openness |
| **Drone or Ground** | Ground (drone optional) |
| **Primary Subject** | Stafford in the off-season — quiet lake/bay, seasonal light, holiday or autumn touches |
| **Backup Subject** | Snow-dusted park or marsh if available |
| **Alt Text** | Stafford Township in the off-season, showing its quiet year-round character |
| **SEO File Name** | `stafford-seasonal-off-season.webp` |
| **Caption** | Beautiful in every season, not just summer. |
| **Related Schema** | Place |
| **Priority** | P1 |
| **Required Before Launch?** | Yes |
| **Future Replacement Notes** | Capture on a separate off-season day; this is the one image the single summer/fall route cannot fully cover. |


---

## 4. Category Coverage (Gold Standard Section 5 manifest)

| Category | Covered by | Status |
|---|---|---|
| Hero | H1, DR1 | Planned |
| Community | P1, EV1, DR1 | Planned |
| Neighborhoods | N1, NB1 | Planned |
| Parks | P1, C1, NA1 | Planned |
| Schools | S1 | Planned |
| Shopping | CM1 | Planned |
| Restaurants | RC1 | Planned |
| Coffee | RC1 | Planned |
| Healthcare | HC1 | Planned |
| Waterfront | W1, C1, MR1 | Planned |
| Marinas | MR1 | Planned |
| Boat Ramps | MR1 | Planned |
| Nature | NA1, SE1 | Planned |
| Events | EV1 | Planned |
| Housing Styles | N1, NB1 | Planned |
| Commercial Areas | CM1, MR1 | Planned |
| Matt Dunn | M1 (existing asset baseline) | Baseline met |
| Lifestyle | C1, P2, RC1 | Planned |
| Drone | DR1, H1 | Planned |
| Seasonal | SE1 | Planned (separate off-season day) |

Every Gold Standard photography category is accounted for. One category — **Seasonal (SE1)** — cannot be authentically captured on a single summer/fall day and is scheduled as a short second off-season visit.

---

## 5. One-Day Photography Route

The route is sequenced to minimize backtracking by grouping shots geographically, moving roughly **west-to-east** (mainland interior to bayfront) and chasing the light: soft early-morning and golden-hour bookends for the hero/drone/water shots, flat midday light for building exteriors.

All times assume a single shooter with one ground camera plus one drone. Times include setup, multiple frames/brackets, and short travel between clustered stops.

### Cluster A — Sunrise & Mainland Drone (early)
1. **DR1 + H1 — Drone establishing + hero aerial.** Launch from an open mainland vantage near the bay approach at first golden light. Capture both the hero (H1) and the neutral establishing (DR1) frames while light is best, plus a vertical for mobile. *(45 min)*

### Cluster B — Lake & Parks (morning)
2. **C1 — Manahawkin Lake lifestyle.** Walking path + water; kayaks if present. *(25 min)*
3. **P1 — Community Center / Manahawkin Lake Park.** Facility + green space, same park grounds. *(20 min)*
4. **P2 — Youth sports field** (if a game is scheduled this morning; otherwise an empty well-kept field). Adjacent rec complex. *(20 min)*
5. **SE1 candidate / seasonal note** — grab any quiet park frames usable year-round (true off-season frame is a separate visit). *(10 min)*

### Cluster C — Schools & Civic (late morning, flat light is fine)
6. **S1 — Southern Regional High School** exterior/campus; optional quick campus aerial. *(25 min)*

### Cluster D — Commercial & Healthcare Corridor (midday)
7. **CM1 — Stafford Park / Bay Avenue retail corridor.** Streetscape. *(25 min)*
8. **HC1 — Southern Ocean Medical Center** exterior, same Route 72 corridor. *(15 min)*
9. **RC1 — Local coffee/restaurant** along the corridor (with owner permission). *(25 min)*

### Cluster E — Neighborhoods (early afternoon)
10. **NB1 — Ocean Acres neighborhood street.** Tree-lined residential. *(20 min)*

### Cluster F — Lagoon, Marinas & Waterfront Homes (afternoon)
11. **N1 — Beach Haven West waterfront colonial** (with listing/owner permission). *(30 min)*
12. **MR1 — Lagoon marina / boat ramp**, same Beach Haven West cluster. *(20 min)*

### Cluster G — Nature Refuge (late afternoon)
13. **NA1 — Edwin B. Forsythe NWR wetlands trail.** Verify drone rules — ground-only if restricted. *(40 min)*

### Cluster H — Golden Hour Finale (sunset)
14. **W1 — Manahawkin Bay sunset from the Causeway** vantage (public pull-off / pedestrian path only). *(35 min)*
15. **DR1 secondary** — optional golden-hour aerial top-up if airspace and light cooperate. *(15 min)*

### Events & Headshot (schedule-dependent)
- **EV1 — Community event:** slot in only if a town event falls on the shoot date; otherwise schedule separately around the events calendar.
- **M1 — Matt Dunn local-context headshot:** optional; capture during any golden-hour window at a scenic stop (the existing studio headshot already meets the baseline).

---

## 6. Estimated Shooting Time

| Block | Time |
|---|---|
| Cluster A (drone/hero, sunrise) | 0:45 |
| Cluster B (lake/parks) | 1:15 |
| Cluster C (schools) | 0:25 |
| Cluster D (commercial/healthcare/dining) | 1:05 |
| Cluster E (neighborhood) | 0:20 |
| Cluster F (lagoon/marina/home) | 0:50 |
| Cluster G (nature refuge) | 0:40 |
| Cluster H (sunset/golden hour) | 0:50 |
| Travel + buffer between clusters | ~1:30 |
| **Total core shoot** | **~7:40 (one full day, sunrise to sunset)** |

The 9 must-fill placeholder slots (H1, C1, N1, W1, S1, P1, P2, NA1, CM1) are all captured within the core day. The seasonal frame (SE1) and any community event (EV1) are the only items that may require a short second visit.

---

## 7. Required Equipment

- Mirrorless or DSLR body (full-frame preferred) + backup body.
- Lenses: wide zoom (16-35mm equivalent) for landscapes/streetscapes; standard zoom (24-70mm) for general; short telephoto (70-200mm) for compression on water/sports and the headshot.
- Drone with ND filters (for hero/establishing aerials) — registered, with current firmware.
- Spare batteries (camera x3+, drone x4+) and a fast charger.
- High-capacity, fast SD/CFexpress cards + on-site backup drive or second card slot.
- Sturdy tripod (sunset/blue-hour long exposures) + circular polarizer + graduated ND.
- Lens cloths, rain cover, and a sun hood.
- Phone with offline maps + this plan + the events calendar.
- Model/property release forms (for N1 home, M1 if anyone is in frame, RC1 business interiors, P2/EV1 if identifiable people appear).
- Reflector or small LED for the optional headshot.

---

## 8. Weather Considerations

- **Ideal:** Clear-to-partly-cloudy. A few clouds add drama to the hero and sunset frames; flat overcast is acceptable (even preferable) for building exteriors (S1, HC1, CM1) but weak for water/aerials.
- **Avoid for drone (DR1/H1/aerials):** winds above ~20 mph, rain, or fog. Check FAA B4UFLY for TFRs and verify no-fly zones near the wildlife refuge before launching.
- **Wind & water:** calm mornings give glassy water for C1/MR1/W1 reflections; afternoon chop is fine for energy but less for mirror shots.
- **Light:** plan the hero/drone at sunrise and the bay sunset at golden hour; reserve harsh midday for exteriors and corridor shots.
- **Heat/insects:** summer marsh shoots (NA1) need bug protection and hydration.
- **Contingency:** if the forecast turns, prioritize the 9 must-fill ground shots (weather-tolerant) and reschedule only the aerials and sunset.

---

## 9. Backup Locations

- **Hero/aerial (H1/DR1):** alternate mainland vantage further along the bay if the primary launch point is obstructed or restricted.
- **Lake (C1/P1):** Stafford Forge Wildlife Management Area as a water/nature substitute.
- **Schools (S1):** a Stafford Township elementary/intermediate school exterior if regional campus access is limited.
- **Commercial (CM1):** Manahawkin Town Center / Route 72 anchored centers.
- **Waterfront home (N1) / marina (MR1):** any permitted lagoon-front home/dock or public boat ramp in the mainland lagoon network.
- **Nature (NA1):** Cedar Run / Stafford Forge marsh overlooks if the refuge drive is closed.
- **Sunset (W1):** a public bayfront access point without the bridge in frame.

---

## 10. Lead-Delivery & Launch Note

This plan changes no code and does not affect the unified lead foundation. The lead system status is unchanged: leads are validated and logged at the Netlify function, with email/CRM forwarding still **OPEN** at the documented integration point (tracked in `docs/DASHBOARD.md`). Replacing placeholders with these images is a separate implementation sprint and does not require lead-system changes.

**Required before a Gold Standard launch (must-fill):** H1, C1, N1, W1, S1, P1, NA1, CM1 (8 of the 9 slots are launch-blocking; P2 youth-sports is desirable but optional due to consent constraints). DR1 and SE1 are strongly recommended to satisfy the mandatory Drone and Seasonal categories.

---

## 11. Future Media Opportunities

- Short-form vertical video (drone reveal + walking-tour clips) for social and the hero.
- A seasonal refresh library (one shoot per season) to keep the page evergreen.
- Listing-tied photography that doubles as neighborhood content (with owner permission).
- A community-event series captured across the year for the Events category.
- Optional 360/virtual elements for waterfront and park experiences.

---

## 12. Compliance & Ethics Reminders

- Authentic, local imagery only — correct town, never a neighboring-town landmark (Gold Standard Section 5).
- No identifiable minors without parental consent (P2, EV1); prefer wide/anonymous framing.
- Property and business shots require owner/listing permission (N1, MR1, RC1, HC1, CM1).
- Respect refuge and FAA rules for all drone work (DR1, H1, aerials).
- No license plates, no private individuals foregrounded without release.
- All delivered images get descriptive alt text and optimization per GOLD_STANDARD_PAGE Section 3.

---

*End of Stafford Township Photography Production Plan.*

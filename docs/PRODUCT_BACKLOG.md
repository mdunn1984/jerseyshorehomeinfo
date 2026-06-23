# Product Backlog

The project command center for Jersey Shore Home Info. This is the single, ranked list of every planned and proposed feature, scored so future work can be selected by business impact instead of guesswork. It is a living document: update scores, status, and ranking as the project evolves, and record meaningful changes in CHANGELOG.md. It works hand in hand with LEAD_GENERATION_ENGINE.md (which defines how pages convert) and ROADMAP.md (which defines the phased plan).

This sprint is documentation only. Nothing here has been implemented; the backlog defines what to build next and in what order.

## How to read this backlog

Every item is scored on six axes from 1 (lowest) to 10 (highest):

- **Business Value (BV)** - direct contribution to the business: revenue potential, authority, and strategic importance.
- **Lead Generation Value (LGV)** - how strongly the item creates or improves qualified leads, per LEAD_GENERATION_ENGINE.md.
- **SEO Value (SEO)** - contribution to organic search visibility and rankings.
- **AEO Value (AEO)** - contribution to answer-engine and AI-citation visibility.
- **Difficulty (Diff)** - estimated effort and complexity to deliver (higher means harder).

Each item also carries Dependencies, an Estimated Sprint, a Status (TODO, WIP, DONE, BLOCKED), and a Priority (Critical, High, Medium, Low).

## ROI scoring method

To rank by return on investment, each item gets a weighted value score that reflects this project's priorities (lead generation first, then business value, then discoverability):

value = (BV x 0.35) + (LGV x 0.40) + (SEO x 0.15) + (AEO x 0.10)

ROI = (value / Difficulty) x 10

A higher ROI means more impact per unit of effort. ROI is the default ranking lens, but Priority and Dependencies still govern sequencing: a Critical foundational item (for example the contact form backend) may rank below a quick win on raw ROI yet must be built earlier because other items depend on it. Use ROI to decide what is worth doing, and Dependencies plus Sprint to decide when.

## Backlog at a glance

- Total items: 51
- Categories: 20
- Scope of this document: planning only (no implementation this sprint).
- Default ranking: ROI (impact per unit of effort), bounded by Priority and Dependencies.

## Top 25 highest-ROI items

Ranked by ROI (impact per unit of effort). This is the recommended "what to do" shortlist.

| Rank | Title | Category | BV | LGV | SEO | AEO | Diff | ROI | Sprint | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Real agent headshot | Photography | 8 | 8 | 2 | 3 | 2 | 33 | S4 | High | TODO |
| 2 | Brokerage + credential assets | Photography | 7 | 7 | 2 | 3 | 2 | 29.3 | S4 | High | TODO |
| 3 | Discovery Center journey CTA audit | Discovery Center | 6 | 7 | 3 | 3 | 2 | 28.3 | S4 | Medium | TODO |
| 4 | Fix pre-existing dead anchors | Technical Debt | 5 | 4 | 4 | 3 | 2 | 21.3 | S4 | Medium | TODO |
| 5 | Homepage trust band (brokerage + credentials) | Homepage | 8 | 7 | 3 | 3 | 3 | 21.2 | S4 | High | TODO |
| 6 | Fix mojibake / encoding issues | Technical Debt | 7 | 5 | 6 | 5 | 3 | 19.5 | S4 | High | TODO |
| 7 | Accessibility regression checklist | Accessibility | 5 | 3 | 3 | 3 | 2 | 18.5 | S5 | Low | TODO |
| 8 | Analytics + lead tracking foundation | Analytics | 8 | 8 | 5 | 4 | 4 | 17.9 | S4 | Critical | TODO |
| 9 | Homepage testimonials module | Homepage | 8 | 8 | 4 | 4 | 4 | 17.5 | S5 | High | TODO |
| 10 | Homepage lead-capture form | Homepage | 9 | 10 | 4 | 5 | 5 | 16.5 | S4 | High | TODO |
| 11 | Town page on-page lead form | Town Pages | 9 | 10 | 4 | 5 | 5 | 16.5 | S5 | High | TODO |
| 12 | Valuation request flow | Lead Capture | 9 | 10 | 4 | 5 | 5 | 16.5 | S4 | Critical | TODO |
| 13 | Origin-specific relocation guides | Relocation | 8 | 8 | 9 | 8 | 5 | 16.3 | S5 | High | TODO |
| 14 | Relocation consultation flow | Relocation | 7 | 8 | 3 | 4 | 4 | 16.3 | S5 | High | TODO |
| 15 | Contact form backend | Lead Capture | 9 | 10 | 3 | 4 | 5 | 16 | S4 | Critical | TODO |
| 16 | Conversion + journey dashboards | Analytics | 7 | 8 | 3 | 3 | 4 | 16 | S5 | High | TODO |
| 17 | Luxury private consultation flow | Luxury | 7 | 8 | 2 | 3 | 4 | 15.6 | S7 | Medium | TODO |
| 18 | Commercial inquiry capture | Commercial | 6 | 7 | 3 | 4 | 4 | 14.4 | S6 | Medium | TODO |
| 19 | Land inquiry capture | Land | 6 | 7 | 3 | 4 | 4 | 14.4 | S6 | Medium | TODO |
| 20 | Investment inquiry capture | Investment | 6 | 7 | 3 | 4 | 4 | 14.4 | S7 | Medium | TODO |
| 21 | Agent intro video | Video | 6 | 7 | 3 | 4 | 4 | 14.4 | S6 | Medium | TODO |
| 22 | Town comparison guide | Town Pages | 7 | 7 | 8 | 7 | 5 | 14.3 | S6 | Medium | TODO |
| 23 | Verify + source all statistics | Technical Debt | 8 | 6 | 7 | 7 | 5 | 13.9 | S4 | High | TODO |
| 24 | Discovery Center goal-intake | Discovery Center | 7 | 9 | 3 | 4 | 5 | 13.8 | S4 | High | TODO |
| 25 | Lead magnet delivery | Lead Capture | 7 | 8 | 5 | 5 | 5 | 13.8 | S6 | Medium | TODO |

## Top 10 quickest wins

High value relative to low effort (Difficulty 4 or lower), ranked by value. These are the fastest ways to move the needle and are ideal early picks.

| Rank | Title | Category | Value | Diff | ROI | Sprint | Why it is a quick win |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Analytics + lead tracking foundation | Analytics | 7.15 | 4 | 17.9 | S4 | Unlocks measurement for everything that follows. |
| 2 | Homepage testimonials module | Homepage | 7 | 4 | 17.5 | S5 | Strong conversion lift once testimonials exist. |
| 3 | Real agent headshot | Photography | 6.6 | 2 | 33 | S4 | Lifts trust on every page for near-zero build effort. |
| 4 | Relocation consultation flow | Relocation | 6.5 | 4 | 16.3 | S5 | High value relative to low effort. |
| 5 | Conversion + journey dashboards | Analytics | 6.4 | 4 | 16 | S5 | High value relative to low effort. |
| 6 | Homepage trust band (brokerage + credentials) | Homepage | 6.35 | 3 | 21.2 | S4 | High-visibility trust lift with light markup. |
| 7 | Luxury private consultation flow | Luxury | 6.25 | 4 | 15.6 | S7 | High value relative to low effort. |
| 8 | Brokerage + credential assets | Photography | 5.85 | 2 | 29.3 | S4 | Site-wide credibility from a small asset drop-in. |
| 9 | Fix mojibake / encoding issues | Technical Debt | 5.85 | 3 | 19.5 | S4 | Polish that improves credibility everywhere. |
| 10 | Commercial inquiry capture | Commercial | 5.75 | 4 | 14.4 | S6 | High value relative to low effort. |

## Suggested implementation order

Grouped by estimated sprint, ordered by ROI within each sprint. Earlier sprints front-load foundations (lead capture, analytics, trust assets, the flagship town page) that unlock later, higher-leverage work. Sprint numbers continue from the completed Sprints 1-2 (Discovery Center and homepage) and this planning sprint.

**Sprint 4**

- Real agent headshot (Photography, ROI 33, High)
- Brokerage + credential assets (Photography, ROI 29.3, High)
- Discovery Center journey CTA audit (Discovery Center, ROI 28.3, Medium)
- Fix pre-existing dead anchors (Technical Debt, ROI 21.3, Medium)
- Homepage trust band (brokerage + credentials) (Homepage, ROI 21.2, High)
- Fix mojibake / encoding issues (Technical Debt, ROI 19.5, High)
- Analytics + lead tracking foundation (Analytics, ROI 17.9, Critical)
- Homepage lead-capture form (Homepage, ROI 16.5, High)
- Valuation request flow (Lead Capture, ROI 16.5, Critical)
- Contact form backend (Lead Capture, ROI 16, Critical)
- Verify + source all statistics (Technical Debt, ROI 13.9, High)
- Discovery Center goal-intake (Discovery Center, ROI 13.8, High)
- Stafford Gold Standard certification (Town Pages, ROI 13.2, Critical)
- Replace all PHOTO PLACEHOLDER slots (Photography, ROI 12.5, Critical)

**Sprint 5**

- Accessibility regression checklist (Accessibility, ROI 18.5, Low)
- Homepage testimonials module (Homepage, ROI 17.5, High)
- Town page on-page lead form (Town Pages, ROI 16.5, High)
- Origin-specific relocation guides (Relocation, ROI 16.3, High)
- Relocation consultation flow (Relocation, ROI 16.3, High)
- Conversion + journey dashboards (Analytics, ROI 16, High)
- Page standards audit pass (Technical Debt, ROI 13.8, Medium)
- AEO content structuring for AI answers (AI Assistant, ROI 12.9, Medium)
- Consultation scheduling (Lead Capture, ROI 12.1, High)
- Roll out Town Engine to all towns (Town Pages, ROI 11.9, Critical)
- Accessibility audit + fixes (Accessibility, ROI 10.4, High)

**Sprint 6**

- Commercial inquiry capture (Commercial, ROI 14.4, Medium)
- Land inquiry capture (Land, ROI 14.4, Medium)
- Agent intro video (Video, ROI 14.4, Medium)
- Town comparison guide (Town Pages, ROI 14.3, Medium)
- Lead magnet delivery (Lead Capture, ROI 13.8, Medium)
- Commercial landing page (Commercial, ROI 12.6, Medium)
- Town-level market reports (Market Reports, ROI 12, High)
- Land landing page (Land, ROI 11.8, Medium)
- Call tracking attribution (Analytics, ROI 11.8, Medium)
- Neighborhood page template (Neighborhood Pages, ROI 11.3, Medium)
- Performance tuning pass (Performance, ROI 11.3, Medium)
- Image optimization pipeline (Performance, ROI 11.1, Medium)
- CRM integration (CRM, ROI 9.5, High)

**Sprint 7**

- Luxury private consultation flow (Luxury, ROI 15.6, Medium)
- Investment inquiry capture (Investment, ROI 14.4, Medium)
- Seasonal market outlook (Market Reports, ROI 13.3, Medium)
- Luxury vertical page (Luxury, ROI 12.3, High)
- Priority neighborhood pages (Neighborhood Pages, ROI 11.9, Medium)
- Investment vertical page (Investment, ROI 11.3, Medium)
- Follow-up sequences (CRM, ROI 9.7, Medium)

**Sprint 8**

- Newsletter / market update opt-in (Future Ideas, ROI 11.4, Low)
- Town video tours (Video, ROI 9.9, Medium)
- School + lifestyle data layers (Future Ideas, ROI 9.6, Low)
- Mortgage / affordability tools (Future Ideas, ROI 9, Low)

**Sprint 9**

- AI site assistant / lead qualifier (AI Assistant, ROI 7.7, Medium)
- Interactive town map (Future Ideas, ROI 6.1, Low)

## Full backlog by category

The complete, detailed backlog. Each category groups related items with full scoring, dependencies, sprint, status, and priority.

### Homepage

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage lead-capture form | Add an on-page contact/valuation form so homepage visitors can convert without leaving. | 9 | 10 | 4 | 5 | 5 | 16.5 | Contact form backend | S4 | TODO | High |
| Homepage trust band (brokerage + credentials) | Add a visible Weichert logo, license, and credentials strip near the hero. | 8 | 7 | 3 | 3 | 3 | 21.2 | Brokerage assets | S4 | TODO | High |
| Homepage testimonials module | Add a real testimonials/reviews section to lift conversion. | 8 | 8 | 4 | 4 | 4 | 17.5 | Collected testimonials | S5 | TODO | High |

### Discovery Center

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Discovery Center goal-intake | Add a "what fits my goals" intake replacing retired MLS search intent. | 7 | 9 | 3 | 4 | 5 | 13.8 | Contact form backend | S4 | TODO | High |
| Discovery Center journey CTA audit | Ensure every discovery card routes to a converting next step. | 6 | 7 | 3 | 3 | 2 | 28.3 | - | S4 | TODO | Medium |

### Town Pages

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Stafford Gold Standard certification | Finish the flagship: photos, verified stats, missing sections, trust + on-page form. | 10 | 9 | 9 | 8 | 7 | 13.2 | Photography, Statistics, Form | S4 | WIP | Critical |
| Roll out Town Engine to all towns | Produce every town page to Gold Standard via the Town Engine. | 10 | 9 | 10 | 9 | 8 | 11.9 | Stafford certification | S5 | TODO | Critical |
| Town page on-page lead form | Add a per-town valuation/contact form to each town page. | 9 | 10 | 4 | 5 | 5 | 16.5 | Contact form backend | S5 | TODO | High |
| Town comparison guide | Cross-town comparison content + CTA (lead magnet). | 7 | 7 | 8 | 7 | 5 | 14.3 | Town pages | S6 | TODO | Medium |

### Neighborhood Pages

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Neighborhood page template | Define a sub-town neighborhood page type in the Town Engine. | 7 | 6 | 8 | 7 | 6 | 11.3 | Town Engine | S6 | TODO | Medium |
| Priority neighborhood pages | Build high-demand neighborhood pages (LBI enclaves). | 7 | 7 | 8 | 7 | 6 | 11.9 | Neighborhood template | S7 | TODO | Medium |

### Commercial

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Commercial landing page | Build a commercial vertical page replacing the direct-to-Matt fallback. | 6 | 7 | 6 | 5 | 5 | 12.6 | - | S6 | TODO | Medium |
| Commercial inquiry capture | Commercial-specific intake (asset type, intent). | 6 | 7 | 3 | 4 | 4 | 14.4 | Contact form backend | S6 | TODO | Medium |

### Land

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Land landing page | Build a land/lots vertical page with feasibility focus. | 6 | 6 | 6 | 5 | 5 | 11.8 | - | S6 | TODO | Medium |
| Land inquiry capture | Land-specific intake (location, buildability, budget). | 6 | 7 | 3 | 4 | 4 | 14.4 | Contact form backend | S6 | TODO | Medium |

### Luxury

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Luxury vertical page | Discreet, presentation-led luxury page and private consult CTA. | 8 | 8 | 6 | 5 | 6 | 12.3 | Photography, Video | S7 | TODO | High |
| Luxury private consultation flow | White-glove discreet inquiry path. | 7 | 8 | 2 | 3 | 4 | 15.6 | Contact form backend | S7 | TODO | Medium |

### Investment

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Investment vertical page | Data-led investment page (yield, seasonal, value-add). | 7 | 7 | 6 | 6 | 6 | 11.3 | Market data | S7 | TODO | Medium |
| Investment inquiry capture | Strategy-aware investor intake. | 6 | 7 | 3 | 4 | 4 | 14.4 | Contact form backend | S7 | TODO | Medium |

### Relocation

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Origin-specific relocation guides | Expand relocation content beyond Staten Island (Brooklyn, NJ metro). | 8 | 8 | 9 | 8 | 5 | 16.3 | Relocation template | S5 | TODO | High |
| Relocation consultation flow | Relocation-focused intake and scheduling. | 7 | 8 | 3 | 4 | 4 | 16.3 | Contact form backend | S5 | TODO | High |

### Photography

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Replace all PHOTO PLACEHOLDER slots | Source real, town-correct imagery for every page. | 9 | 7 | 7 | 5 | 6 | 12.5 | - | S4 | TODO | Critical |
| Real agent headshot | Add a real agent headshot site-wide (trust trigger). | 8 | 8 | 2 | 3 | 2 | 33 | - | S4 | TODO | High |
| Brokerage + credential assets | Weichert logo and credential badges. | 7 | 7 | 2 | 3 | 2 | 29.3 | - | S4 | TODO | High |

### Video

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Town video tours | Short town walkthrough videos for top towns. | 7 | 7 | 7 | 6 | 7 | 9.9 | Photography | S8 | TODO | Medium |
| Agent intro video | A short personal intro video from Matt. | 6 | 7 | 3 | 4 | 4 | 14.4 | - | S6 | TODO | Medium |

### Market Reports

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Town-level market reports | Verified, dated market reports per town (lead magnet). | 8 | 9 | 8 | 8 | 7 | 12 | Statistics phase, Market data | S6 | TODO | High |
| Seasonal market outlook | Periodic shore market outlook content. | 6 | 7 | 7 | 7 | 5 | 13.3 | Market data | S7 | TODO | Medium |

### AI Assistant

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AI site assistant / lead qualifier | Conversational assistant that answers and qualifies. | 7 | 8 | 4 | 7 | 9 | 7.7 | Verified content, Analytics | S9 | TODO | Medium |
| AEO content structuring for AI answers | Structure content so AI/answer engines cite the site. | 6 | 6 | 7 | 9 | 5 | 12.9 | - | S5 | TODO | Medium |

### Lead Capture

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Contact form backend | Build the core form submission pipeline (foundation for many items). | 9 | 10 | 3 | 4 | 5 | 16 | Netlify env approval | S4 | TODO | Critical |
| Valuation request flow | Structured Free Home Valuation intake. | 9 | 10 | 4 | 5 | 5 | 16.5 | Contact form backend | S4 | TODO | Critical |
| Consultation scheduling | Direct booking flow for buyer/seller/luxury consults. | 8 | 9 | 3 | 4 | 6 | 12.1 | Contact form backend | S5 | TODO | High |
| Lead magnet delivery | Gated value delivery (guides, reports) capturing intent. | 7 | 8 | 5 | 5 | 5 | 13.8 | Contact form backend, Market reports | S6 | TODO | Medium |

### CRM

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CRM integration | Route leads to a CRM with source/journey/intent. | 7 | 9 | 2 | 3 | 7 | 9.5 | Contact form backend, Netlify env approval | S6 | TODO | High |
| Follow-up sequences | Automated nurture for captured leads. | 6 | 8 | 2 | 2 | 6 | 9.7 | CRM integration | S7 | TODO | Medium |

### Analytics

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Analytics + lead tracking foundation | Stand up analytics and event tracking (prerequisite to optimize). | 8 | 8 | 5 | 4 | 4 | 17.9 | - | S4 | TODO | Critical |
| Conversion + journey dashboards | Per-page and per-journey conversion reporting. | 7 | 8 | 3 | 3 | 4 | 16 | Analytics foundation | S5 | TODO | High |
| Call tracking attribution | Attribute phone leads to page and journey. | 6 | 8 | 2 | 3 | 5 | 11.8 | Analytics foundation | S6 | TODO | Medium |

### Performance

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Performance tuning pass | Improve load speed and Core Web Vitals. | 6 | 5 | 7 | 5 | 5 | 11.3 | - | S6 | TODO | Medium |
| Image optimization pipeline | Optimize/serve responsive images as photography lands. | 6 | 5 | 7 | 4 | 5 | 11.1 | Photography | S6 | TODO | Medium |

### Accessibility

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Accessibility audit + fixes | WCAG pass across all pages (contrast, ARIA, keyboard). | 7 | 4 | 5 | 4 | 5 | 10.4 | - | S5 | TODO | High |
| Accessibility regression checklist | Add a11y checks to the build checklist. | 5 | 3 | 3 | 3 | 2 | 18.5 | Accessibility audit | S5 | TODO | Low |

### Technical Debt

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fix mojibake / encoding issues | Resolve garbled punctuation across pages; enforce UTF-8. | 7 | 5 | 6 | 5 | 3 | 19.5 | - | S4 | TODO | High |
| Fix pre-existing dead anchors | Normalize broken in-page anchors (e.g. search.html footer anchors). | 5 | 4 | 4 | 3 | 2 | 21.3 | - | S4 | TODO | Medium |
| Verify + source all statistics | Verify, source, and date every figure; resolve LBI drive-time contradiction. | 8 | 6 | 7 | 7 | 5 | 13.9 | - | S4 | TODO | High |
| Page standards audit pass | Verify every page against PAGE_STANDARDS.md. | 6 | 5 | 6 | 5 | 4 | 13.8 | - | S5 | TODO | Medium |

### Future Ideas

| Title | Description | BV | LGV | SEO | AEO | Diff | ROI | Deps | Sprint | Status | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Interactive town map | Map-based town discovery experience. | 5 | 5 | 5 | 4 | 8 | 6.1 | Town pages | S9 | TODO | Low |
| Mortgage / affordability tools | Calculators as engagement + capture. | 5 | 6 | 5 | 5 | 6 | 9 | Contact form backend | S8 | TODO | Low |
| Newsletter / market update opt-in | Light-touch ongoing nurture channel. | 4 | 6 | 3 | 3 | 4 | 11.4 | Contact form backend, CRM integration | S8 | TODO | Low |
| School + lifestyle data layers | Deeper local data for town pages. | 6 | 5 | 7 | 6 | 6 | 9.6 | Town Engine | S8 | TODO | Low |

## Maintenance

Keep this backlog current. When an item ships, mark it DONE and record it in CHANGELOG.md. When priorities shift, re-score and re-rank. When new ideas appear, add them with full scoring so they can be compared on equal footing. Review the Top 25 and Quick Wins lists at the start of each sprint to choose work by ROI rather than guesswork.

## Related documents

- LEAD_GENERATION_ENGINE.md - how every page converts visitors into leads.
- ROADMAP.md - the phased plan this backlog feeds.
- DASHBOARD.md - current status board.
- BUSINESS_PLAN.md - business context and revenue model.
- GOLD_STANDARD_PAGE.md and TOWN_PAGE_ENGINE.md - the page quality bar and production system.
- NON_NEGOTIABLES.md - the hard rules that bound every item.

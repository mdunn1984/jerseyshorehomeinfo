# Project Bible — Jersey Shore Home Info

The master reference for the entire project. This document describes what the project is, how it is built, and the ground truth that everything else depends on. If another document conflicts with reality, fix the document — but this file should always reflect the verified state of the project.

## 1. What this project is

Jersey Shore Home Info (jerseyshorehomeinfo.com) is the digital real estate platform of Matt Dunn, a REALTOR with Weichert Realtors based in Ship Bottom, NJ. The site is a local-authority resource for buyers and sellers across Ocean County and Long Beach Island (LBI), combining town guides, an MLS-powered home search, and lead capture (valuations and contact).

The strategic intent is to treat the website as long-term digital real estate: a durable, well-documented asset managed with enterprise discipline rather than a disposable brochure site.

## 2. Business identity

- Agent: Matt Dunn, REALTOR
- Brokerage: Weichert Realtors (each office independently owned and operated)
- Office: 326 W Ninth St, Ship Bottom, NJ 08008
- Phone: 917-524-5676
- Email: mdunn@weichert.com
- NJ License: #2442118
- Compliance: Equal Housing Opportunity; Fair Housing commitment

## 3. Technical ground truth

- Repository: mdunn1984/jerseyshorehomeinfo
- Version control: Git, single branch (main). No feature branches at audit time.
- Stack: static HTML (one HTML file per page). No build framework or bundler observed.
- Hosting/CI: Netlify (netlify.toml in repo root; a netlify/ folder present).
- Listings/IDX: FBS SmartFrame IDX — MLS search embedded on search.html; office listings embedded on index.html.
- SEO: a full SEO/AEO optimization pass has been applied across all pages.

## 4. Site map (pages at repo root)

- index.html — homepage with office listings.
- search.html — MLS home search.
- Town pages: long-beach-island, long-beach-township, ship-bottom, beach-haven, surf-city, barnegat-light, harvey-cedars, stafford-township, toms-river, barnegat, waretown, little-egg-harbor, brick.
- moving-from-staten-island.html — relocation guide.
- Legal: privacy-policy.html, terms-of-service.html, fair-housing.html.
- Support files: sitemap.xml, robots.txt, favicon.svg, images/, netlify/, netlify.toml.

## 5. Coverage area

Long Beach Island and surrounding mainland Ocean County: Long Beach Township, Ship Bottom, Beach Haven, Surf City, Barnegat Light, Harvey Cedars, plus Stafford Township, Barnegat, Waretown, Little Egg Harbor, Toms River, and Brick.

## 6. Known issues / open blockers (Phase 1)

- Photo placeholders: many town pages render "PHOTO PLACEHOLDER" text instead of real images.
- Encoding issues: garbled characters (mojibake) appear where apostrophes, em dashes, and similar punctuation should be.
- Missing trust assets: agent headshot, brokerage logos, credentials, and reviews/testimonials are not yet in place.
- Documentation: previously inadequate; this /docs system addresses it.

## 7. Operating principle

The repository plus this /docs folder are the single source of truth. New sessions begin by reading docs/DASHBOARD.md and this file, then running a status check, before any changes are made.

## 8. Related documents

- DASHBOARD.md — current status.
- WEBSITE_BIBLE.md — deeper technical reference.
- BRAND_BIBLE.md — voice and identity.
- BUSINESS_PLAN.md — the business model.
- ROADMAP.md — phased plan.
- NON_NEGOTIABLES.md — hard rules.

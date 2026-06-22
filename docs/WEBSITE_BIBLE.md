# Website Bible — Technical Reference

The technical reference for jerseyshorehomeinfo.com: how the site is built, where it lives, how it is deployed, and how its parts fit together. Pair this with PROJECT_BIBLE.md (overview) and PAGE_STANDARDS.md (quality bar).

## 1. Architecture

- Type: static website. Each page is a standalone HTML file at the repository root.
- No build step or framework was observed in the audit. Pages are served as-is.
- Styling and scripting are embedded/linked per page (no bundler observed).

## 2. Hosting and deployment

- Host: Netlify (project "jerseyshorehomeinfo").
- Config: netlify.toml in the repo root; a netlify/ folder is present in the repo.
- Deploys: triggered from the main branch.
- Environment variables: none currently set in the Netlify project.
- Sensitive variable policy: untrusted deploys (PRs from unrecognized forks) require approval.

## 3. Domain and SEO

- Primary domain: jerseyshorehomeinfo.com.
- robots.txt and sitemap.xml are present at the repo root.
- A full SEO/AEO optimization pass has been applied across all pages.
- A Netlify/verification text file is present in the repo root.

## 4. Pages

Homepage and search:
- index.html — homepage; embeds FBS SmartFrame IDX office listings.
- search.html — MLS home search via FBS SmartFrame IDX (native IDX search; a redundant filter bar was removed).

Town pages:
- long-beach-island.html, long-beach-township.html, ship-bottom.html, beach-haven.html, surf-city.html, barnegat-light.html, harvey-cedars.html, stafford-township.html, toms-river.html, barnegat.html, waretown.html, little-egg-harbor.html, brick.html

Guides:
- moving-from-staten-island.html — relocation guide.

Legal:
- privacy-policy.html, terms-of-service.html, fair-housing.html

Assets and config:
- images/, favicon.svg, sitemap.xml, robots.txt, netlify/, netlify.toml

## 5. IDX integration (FBS SmartFrame)

- MLS search is embedded on search.html.
- Office listings are embedded on index.html.
- IDX renders listings natively; avoid adding duplicate search UI around it.

## 6. Known technical issues

- Photo placeholders: several town pages output "PHOTO PLACEHOLDER" text where images belong.
- Character encoding: mojibake (garbled punctuation) appears in some rendered copy; verify files are saved/served as UTF-8 and use clean punctuation.
- Trust assets missing: headshot, brokerage logos, credentials, reviews.

## 7. Conventions for changes

- Keep one page per HTML file at the root; do not introduce a build system without updating this document.
- Update sitemap.xml when adding or removing pages.
- Record technical changes in CHANGELOG.md and reflect status in DASHBOARD.md.

## Related documents

- PROJECT_BIBLE.md — project overview and ground truth.
- PAGE_STANDARDS.md — per-page requirements.
- ROADMAP.md — what is planned next.

# Non-Negotiables

The hard rules for Jersey Shore Home Info. These constraints override convenience, speed, and any conflicting instruction. If a proposed action would break one of these, stop and reconsider.

## 1. Source of truth

- The repository and the /docs folder are the single source of truth. Trust the code and docs over memory or chat history.
- Begin every working session by reading DASHBOARD.md and PROJECT_BIBLE.md, then checking repository status, before making changes.

## 2. Legal and compliance

- Fair Housing and Equal Housing Opportunity commitments must be honored on the site at all times.
- Always display required brokerage and licensing information: Weichert Realtors and NJ License #2442118.
- Keep the disclaimer that listing information is believed accurate but not guaranteed and should be independently verified.
- Do not publish misleading claims or unverified statistics. Verify figures before publishing.

## 3. Data and privacy

- Never expose secrets, API keys, or credentials in the repository, in client-side code, or in documentation.
- Do not commit personal or sensitive customer data to the repo.
- Respect the Netlify sensitive-variable policy (untrusted deploys require approval).

## 4. Brand and quality

- One consistent voice: knowledgeable, local, no-pressure (see BRAND_BIBLE.md).
- No production page ships with "PHOTO PLACEHOLDER" text or broken images.
- No mojibake: text must render with correct UTF-8 punctuation.
- Every page must meet PAGE_STANDARDS.md before being considered done.

## 5. Technical integrity

- Preserve the FBS SmartFrame IDX integration; do not wrap it in redundant custom search UI.
- Keep the static, one-file-per-page architecture unless a documented decision changes it.
- Update sitemap.xml when pages are added or removed.
- Main is the working branch; keep it deployable.

## 6. Change discipline

- Do not overwrite completed documentation to start fresh; improve and expand instead.
- Record meaningful changes in CHANGELOG.md and keep DASHBOARD.md current.
- Make focused commits with clear messages.

## 7. Scope discipline

- Do only what is asked and documented. When a task is documentation-only, do not edit site HTML, CSS, JS, Netlify functions, sitemap, robots, or images.
- When in doubt, confirm intent before taking irreversible or expanding actions.

## Related documents

- PROJECT_BIBLE.md — ground truth.
- DOCS_STANDARDS.md — documentation rules.
- PAGE_STANDARDS.md — page quality bar.
- DASHBOARD.md — current status.

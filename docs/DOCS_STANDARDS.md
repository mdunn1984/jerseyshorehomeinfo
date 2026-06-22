# Documentation Standards

How documentation in this repository is written, structured, and maintained. These standards keep the /docs folder consistent, trustworthy, and useful as the project's source of truth.

## 1. Purpose

Documentation exists to make the project resilient. If a session ends, a machine restarts, or a different assistant picks up the work, the docs — not chat history — carry the context forward.

## 2. File conventions

- Format: Markdown (.md) only.
- Naming: UPPER_SNAKE_CASE.md for top-level reference docs (for example PROJECT_BIBLE.md). README.md is the lone exception.
- Location: all documentation lives in /docs. No documentation in the repo root except the root README.md, which points here.
- Encoding: UTF-8. Use plain ASCII punctuation (straight quotes, hyphens) to avoid the mojibake problems seen elsewhere in the project.

## 3. Structure of a document

Each document should have:

- A single H1 title matching its purpose.
- A short opening paragraph stating what the document is and who it is for.
- Logical H2 sections. Keep nesting shallow (H2/H3).
- A closing "Related documents" section where cross-references help.

## 4. Writing style

- Be concrete and verifiable. Prefer facts confirmed from the repository or live site over assumptions.
- Mark anything uncertain clearly (for example "unverified" or "assumed").
- Keep sentences plain and direct. Avoid filler.
- Use status tags consistently: DONE, WIP, TODO, BLOCKED.

## 5. Source of truth rules

- The repository is authoritative. If a document disagrees with the actual code or site, treat the document as out of date and correct it.
- Do not overwrite completed documents to "start fresh." Improve, expand, cross-reference, and organize instead.
- Avoid duplication. If two documents would say the same thing, put it in one and link from the other.

## 6. Change discipline

- Every meaningful documentation change is recorded in CHANGELOG.md.
- DASHBOARD.md is updated whenever project status changes.
- Keep commits focused and message them clearly.

## 7. Review before creating

Before adding a new document, read the existing ones. Confirm the content does not already exist elsewhere, and that the new file has a distinct, non-overlapping purpose.

## Related documents

- README.md — index and reading order.
- NON_NEGOTIABLES.md — hard rules that govern all work.
- CHANGELOG.md — where changes are logged.

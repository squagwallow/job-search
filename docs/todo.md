project_slug: job-search
doc_type: todo
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/docs/todo.md

# TODO

Priority-ordered. Top items first.

## Priority 1 — Get the core Upwork workflow usable
1. Populate `upwork/profile.md` — paste your current Upwork profile text (title, rate, overview, specialized profiles, skills).
2. Populate `upwork/portfolio.md` — list each portfolio item following the format in that file.
3. Populate `upwork/strategy.md` — what you're actively targeting, pay floor, dealbreakers, signals of strong/weak listings.
4. Test `process/job-search-prompt.md` with: "do a job search on upwork". Log any behavior to correct in `prompt-engineer-entry.md`.

## Priority 2 — General-jobs silo
5. Populate `general-jobs/linkedin-profile.md` — paste LinkedIn headline, about, experience.
6. Populate `general-jobs/indeed-profile.md` — only if it differs meaningfully from LinkedIn.
7. Populate `general-jobs/strategy.md` — availability, target pay, role types, dealbreakers.
8. Add resume variants to `general-jobs/resumes/` using the naming convention in that folder's README.

## Priority 3 — Writing layer
9. Populate `process/cover-letter-style-guide.md` — voice, default structure, channel conventions, 2–3 excerpt examples.
10. Add 3–5 approved writing samples to `process/writing-samples/` using `formats/writing-sample-format.md`.

## Priority 4 — Test and refine
11. Test `process/prepare-application-prompt.md` against a listing you already applied to.
12. Update `prompt-engineer-entry.md` with test results and any approved changes.

## Priority 5 — Live use
13. Run a fresh-thread Upwork job search using only the entry URL.
14. Flag jobs during that session — confirm they land in `queue/flagged-jobs.md`.
15. Start a new thread and ask for queued jobs — confirm the queue workflow.

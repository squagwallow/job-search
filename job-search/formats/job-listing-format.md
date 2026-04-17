project_slug: job-search
doc_type: format-spec
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/formats/job-listing-format.md

# Format Spec — Job Listing

Every job surfaced, logged, or documented in this project uses this format. This is the canonical structure; other files reference it rather than redefine it.

## Required fields

- **ID** — short slug, `[source]-[YYYYMMDD]-[NN]`. Example: `upwork-20260417-01`.
- **Title** — job title as posted.
- **Company / Client** — company name or Upwork client handle.
- **Source** — Upwork, LinkedIn, Indeed, company site, referral, etc.
- **Link** — direct URL to the specific live posting. **Required.** If there is no fixed live link, the job does not get logged.
- **Posted** — date the listing was posted (YYYY-MM-DD).
- **Pay** — rate or range as stated, with unit (e.g., `$80–$120/hr`, `$85k–$110k annual`, `fixed $2,500`).
- **Priority tag** — `high` / `medium` / `low` / `skip`. Default: `medium` when surfaced. May be extended with application state in the queue file (see below).
- **Dealbreaker check** — `pass` or `fail: [reason]`.

## Optional fields

- **Location / remote** — if specified.
- **Tags** — freeform, e.g., `ai-prompt-engineering`, `clinical`, `notion`.
- **Notes** — one-line on why it looked promising, or any flag worth carrying.

## Canonical rendered format

```
### [Title] — [Company/Client]
- ID: `upwork-20260417-01`
- Source: Upwork
- Link: https://www.upwork.com/jobs/~01abc...
- Posted: 2026-04-15
- Pay: $80–$120/hr
- Priority: high
- Dealbreaker check: pass
- Tags: ai-prompt-engineering, notion
- Notes: Client has repeat-hire history; scope matches portfolio item #3.
```

## Examples

**Good:**
```
### Senior AI Prompt Engineer — Acme Analytics
- ID: `linkedin-20260417-02`
- Source: LinkedIn
- Link: https://www.linkedin.com/jobs/view/3987654321
- Posted: 2026-04-16
- Pay: $120k–$150k annual
- Priority: high
- Dealbreaker check: pass
- Tags: ai-prompt-engineering, remote
- Notes: Remote OK, part-time listed as option.
```

**Bad — missing fixed link (do not log):**
```
### Prompt Engineer — Various
- Source: aggregator search
- Link: https://www.indeed.com/jobs?q=prompt+engineer
```

**Bad — dealbreaker not flagged:**
```
### Research Scientist — Well-known Lab
- ...
- Priority: medium
(Listing says "PhD required" — should be `Dealbreaker check: fail: PhD required` and discarded or explicitly flagged.)
```

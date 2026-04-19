project_slug: job-search
doc_type: orchestration-index
updated_at: 2026-04-19
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/prompt-engineer-entry.md

# Prompt Engineer Entry — job-search

You are auditing and refining the prompt and automation base for this project. Read this document fully before touching any file. Work through items one at a time. Propose changes before implementing. Update this index when anything changes.

Before proposing any structural change to a prompt or entry.md, fetch the Encyclopedia:
https://elaborate-belekoy-9e0eef.netlify.app/llm-design-encyclopedia

## Prompt Inventory

| Prompt | File | Status | Last tested | Notes |
|--------|------|--------|-------------|-------|
| Job Search | `process/job-search-prompt.md` | Draft | Never | Needs live test on both upwork and general-jobs silos. |
| Prepare Application Materials | `process/prepare-application-prompt.md` | Draft | Never | Test against a listing the user already applied to; check whether the fit assessment matches the user's own read. |

## Automation Inventory

| Automation | File/Service | Trigger | Dependencies | Status |
|------------|--------------|---------|--------------|--------|
| _(none at initialization)_ |  |  |  |  |

## Orchestration Map

Three structural layers:

**Context layer** — user identity and strategy, by silo:
- `upwork/profile.md`, `upwork/strategy.md`, `upwork/portfolio.md`
- `general-jobs/linkedin-profile.md`, `general-jobs/indeed-profile.md`, `general-jobs/strategy.md`, `general-jobs/resumes/`

**Format layer** — canonical specs every other file references:
- `formats/job-listing-format.md` — referenced by the job search prompt, the prepare-application prompt, and the Notion Flagged Jobs database.
- `formats/writing-sample-format.md` — referenced by `process/writing-samples/` and the prepare-application prompt's cover-letter sub-workflow.

**Activation layer** — engineered prompts that read the other two layers:
- `process/job-search-prompt.md` reads the relevant silo + job listing format, appends to Notion Flagged Jobs database via `notion-job-search` MCP.
- `process/prepare-application-prompt.md` reads the relevant silo + job listing format; its cover-letter sub-workflow additionally reads `process/cover-letter-style-guide.md` and Notion Writing Samples database.

**Notion layer** — active databases (v1 architecture, `notion-job-search` MCP integration):
- Flagged Jobs database — canonical job queue. LLM appends jobs here. Human edits status directly in Notion.
- Writing Samples database — catalog with tags and use-case metadata. Content files stay in `process/writing-samples/` in git.

`entry.md` is the bootstrap — every session loads it, and it points conditionally at everything else. `docs/user-guide.md` is the human-facing surface for the no-directive default behavior.

## Known Issues / Audit Flags

_(empty at initialization — populate as issues are discovered in live use)_

## Evaluation Notes

_(empty at initialization — populate after each live test with: what was tested, what worked, what didn't, whether the prompt was updated)_

## Suggested Test Initiations

**Job Search prompt:**
- "do a job search on upwork, 10 jobs" — fresh thread, entry URL only. Normal case.
- "search for jobs" — should prompt for silo before proceeding. Edge case: ambiguous directive.
- "find 5 ai prompt engineer roles on linkedin" — general-jobs silo, role-specific. Normal case.

**Prepare Application prompt:**
- "let's apply for [paste link to a real listing]" — full flow. Normal case.
- "let's apply for [3 job IDs from queue]" — batch flow with Step 1–4 table. Normal case.
- Apply against a listing that has a video submission requirement — should surface that in Step 1 and prioritize it over cover letter in Step 5. Edge case: protective ordering.

**No-directive default:**
- Load entry URL with nothing else — should surface user-guide orientation and ask what you want to do. Edge case: empty input.

**Notes block auto-trigger:**
- Begin a task that involves decisions — THREAD NOTES block should appear from turn 1. Verify turn counter increments correctly.

**Revision mode:**
- Say "inspect `process/job-search-prompt.md`" — session should switch to maintenance mode, load Encyclopedia, propose no change, wait for direction. Edge case: mode switch.

**Notion write test:**
- Issue a job search directive — verify LLM appends results to Notion Flagged Jobs rather than git.
- Say "mark [job ID] as applied" — verify LLM patches the correct Notion row.

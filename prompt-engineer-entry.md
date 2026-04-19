project_slug: job-search
doc_type: orchestration-index
updated_at: 2026-04-19
url: https://raw.githubusercontent.com/squagwallow/job-search/v1-notion-mcp/prompt-engineer-entry.md

# Prompt Engineer Entry — job-search

You are auditing and refining the prompt and automation base for this project. Read this document fully before touching any file. Work through items one at a time. Propose changes before implementing. Update this index when anything changes.

Before proposing any structural change to a prompt or entry.md, fetch the Encyclopedia:
https://elaborate-belekoy-9e0eef.netlify.app/llm-design-encyclopedia

## Prompt Inventory

| Prompt | File | Status | Last tested | Notes |
|--------|------|--------|-------------|-------|
| Job Search | `process/job-search-prompt.md` | Active | 2026-04-19 | Playwright as primary tool confirmed. Keyword strategy updated. GoHighLevel-heavy keywords excluded. Batch snippet evaluation before navigating to individual listings. |
| Prepare Application Materials | `process/prepare-application-prompt.md` | Active | 2026-04-19 | SEEDS block replaced with 6-field structured style profile extraction. PLAN step added before outline. Sub-step D expanded with sweeping-claim check and em dash scan as named items. |
| Cover Letter Style Guide | `process/cover-letter-style-guide.md` | Active | 2026-04-19 | Sweeping-claim prohibition added with worked example. Length fixed to 150–250 words. Em dash rule hardened. |
| Notion Proposal Skeleton | `process/notion-proposal-skeleton.md` | Active | 2026-04-19 | 4 swap zones, 2 pre-written portfolio hooks. For Notion niche search sessions — fill one skeleton per qualifying listing, send 5 per session. |

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

- **General-jobs silo not ported.** All general-jobs files exist on `main` branch only. The silo is referenced in entry.md conditional reading but is unusable until ported to `v1-notion-mcp`. Blocking general-jobs track entirely.
- **SEEDS block fully deprecated.** Any prompt or doc still referencing "SEEDS" or "3 quoted seed sentences" is outdated. The replacement is the 6-field structured style profile extraction in `process/prepare-application-prompt.md`.
- **Encyclopedia portfolio item unhosted.** The encyclopedia is referenced in entry.md and prompt-engineer-entry.md conditional reading but the portfolio page still needs Netlify hosting before it can be used as a case study or submission asset.
- **Evaluation Notes and Known Issues were empty at initialization** — populated 2026-04-19 from working session learnings.

## Evaluation Notes

**2026-04-19 — First full working session (Playwright + Notion write)**

What was tested: Full job search session using Playwright. Queue sync against Notion Flagged Jobs. Three process docs updated live. One proposal drafted and submitted (Proposal 03 — AI Trainer & Upskilling Consultant, corporate niche).

What worked:
- Playwright batch snippet evaluation before navigating to individual listings is the correct method — significantly faster than per-listing navigation.
- Notion queue read/write confirmed working end-to-end.
- Notion niche (workspace builder) confirmed as highest-volume deliverable lane (~12–15 relevant listings/week). Now the primary Phase 1 focus.
- Proposal skeleton (4 swap zones) produced a submittable proposal efficiently.
- 6-field style profile extraction produces better voice lock than the deprecated SEEDS block.
- PLAN step before outline catches structural problems before drafting.

What didn't work / was updated:
- SEEDS block (3 quoted seed sentences) was insufficient for voice lock — replaced entirely.
- Sub-step D (draft review) was under-specified — sweeping-claim check and em dash scan now named as explicit checklist items.
- `ai workflow automation` keyword skews GoHighLevel/CRM results — excluded from keyword strategy.
- LLM generating proposals from scratch without style extraction + PLAN — produces off-voice drafts. Rule: for complex proposals (4+ explicit deliverables), user drafts, LLM edits.

Whether prompts were updated: Yes — `job-search-prompt.md`, `prepare-application-prompt.md`, `cover-letter-style-guide.md` all updated this session. `process/notion-proposal-skeleton.md` created new.

## Suggested Test Initiations

**Job Search prompt:**
- "do a job search on upwork, 10 jobs" — fresh thread, entry URL only. Normal case.
- "search for jobs" — should prompt for silo before proceeding. Edge case: ambiguous directive.
- "find 5 ai prompt engineer roles on linkedin" — general-jobs silo, role-specific. Normal case. ⚠ Blocked until general-jobs silo ported to v1-notion-mcp.
- "search notion claude upwork" — Notion niche search. Should use Playwright, fill skeleton per result, target 5 proposals.

**Prepare Application prompt:**
- "let's apply for [paste link to a real listing]" — full flow. Normal case.
- "let's apply for [3 job IDs from queue]" — batch flow with Step 1–4 table. Normal case.
- Apply against a listing that has a video submission requirement — should surface that in Step 1 and prioritize it over cover letter in Step 5. Edge case: protective ordering.

**No-directive default:**
- Load entry URL with nothing else — should surface user-guide orientation and ask what you want to do.

**Revision mode:**
- Say "inspect `process/job-search-prompt.md`" — session should switch to maintenance mode, load Encyclopedia, propose no change, wait for direction.

**Notion write test:**
- Issue a job search directive — verify LLM appends results to Notion Flagged Jobs rather than git.
- Say "mark [job ID] as applied" — verify LLM patches the correct Notion row.

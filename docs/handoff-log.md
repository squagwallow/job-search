project_slug: job-search
doc_type: handoff-log
updated_at: 2026-04-19
url: https://raw.githubusercontent.com/squagwallow/job-search/v1-notion-mcp/docs/handoff-log.md

# Handoff Log

Append-only, reverse chronological. Most recent entry on top.

## Entry format

```
## [Date] — [Short label]

### Current Status
[1-3 sentences]

### Completed This Session
- [item]

### Decisions Made (Carry Forward)
- [decision]

### Blockers / Open Questions
- [item or "none"]

### Next Action
[specific first move for next session]

### Required Reading for Next Session
- [file] — load [always / if trigger]

### Do Not Repeat
- [item or "none"]
```

---

## 2026-04-19 — v1 architecture deployment on v1-notion-mcp branch

### Current Status
v1 architecture fully deployed and verified on the v1-notion-mcp branch. Git holds orchestration layer. Notion holds active databases (Flagged Jobs + Writing Samples), both seeded with real data. Claude Desktop has GitHub MCP and Notion MCP (scoped) confirmed working. End-to-end session test is the only remaining verification step.

### Completed This Session
- Created v1-notion-mcp branch off main (main untouched)
- Set up GitHub MCP in Claude Desktop — write access confirmed
- Set up scoped Notion MCP in Claude Desktop — read/write/update confirmed
- Playwright MCP added to Claude Desktop config
- Updated entry.md for v1 architecture: Notion Layer section, THREAD NOTES format, encyclopedia conditional reading
- Updated prompt-engineer-entry.md: Notion layer in orchestration map, encyclopedia reference
- Appended all v1 decisions to docs/decision-log.md
- Created Notion Flagged Jobs database — seeded with 3 jobs from archived flagged-jobs.md
- Created Notion Writing Samples database — seeded with 4 samples from process/writing-samples/
- Archived queue/flagged-jobs.md — queue now lives in Notion
- Updated docs/current-state.md and this handoff log

### Decisions Made (Carry Forward)
- v1 architecture: git = orchestration, Notion = user surface. Both layers confirmed working.
- Notion internal integration token only — never managed OAuth.
- One Notion integration per project — scoping is architectural, not prompt-based.
- Notion database creation requires one manual step (human creates blank DB, LLM populates schema).
- Notion MCP ID nuance: use URL-derived database_id for row creation, not the data_source id field.
- THREAD NOTES always-on with turn counter — replaces triggered format.
- Encyclopedia loads only in revision mode when editing prompts or entry.md structure.
- Claude Desktop = primary LLM surface. Perplexity = mobile/web fallback.
- main branch stays untouched as v0 archive.

### Blockers / Open Questions
- End-to-end session test not yet run.
- Does the LLM load entry doc, read Notion queue, and write back without extra prompting?

### Next Action
Open a fresh Claude Desktop chat. Paste:
`Load my entry doc: https://raw.githubusercontent.com/squagwallow/job-search/v1-notion-mcp/entry.md`
Then say "do a job search on upwork" and verify the session reads strategy from git, appends results to Notion Flagged Jobs, and doesn't require manual context re-explanation.

### Required Reading for Next Session
- entry.md (v1-notion-mcp branch) — always
- docs/upwork-income-strategy.md — always for Upwork sessions
- upwork/strategy.md — always for Upwork sessions
- Notion: Flagged Jobs — check queue status before searching

### Do Not Repeat
- Using the managed OAuth Notion connector (claude.ai built-in) — workspace-wide, not scoped.
- Using the data_source `id` field as database_id for row creation — returns 404; use URL-derived ID instead.
- Pushing architecture decisions to main branch — v1 work stays on v1-notion-mcp until declared stable.

---

## 2026-04-17 — Content population + first live job search test

### Current Status
Upwork silo fully populated. First live job search run completed using browser extension. Improved batch JS search method identified. 3 jobs queued for application. Exit protocol updated to default to GitHub connector check or downloadable folder.

### Completed This Session
- Crawled and populated upwork/profile.md via browser extension
- Populated upwork/portfolio.md (3 items + encyclopedia queue task)
- Populated upwork/strategy.md (golden goose strategy, phase structure, keyword notes from live test)
- Created docs/upwork-income-strategy.md
- Added upwork-income-strategy.md to entry.md conditional reading
- Crawled all 4 submitted Upwork proposals as writing samples
- Drafted process/cover-letter-style-guide.md from proposal analysis
- Ran first live job search test — 3 jobs surfaced and queued
- Identified improved search method: batch JS tile extraction
- Updated exit protocol in entry.md

### Decisions Made (Carry Forward)
- Remove fixed-price-only filter from job searches — too restrictive
- Batch JS extraction is the correct evaluation method
- No em dashes in proposals — style guide updated, existing samples noted

### Blockers / Open Questions
- Style guide is rough draft; update after first outcomes land

### Next Action
Run a full job search session using the improved batch JS method.

### Required Reading for Next Session
- entry.md — always
- docs/upwork-income-strategy.md — always for Upwork sessions
- upwork/strategy.md — always for Upwork sessions

### Do Not Repeat
- Navigating to each listing individually before batch-evaluating from snippets
- Fixed-price-only filter on searches
- Keyword "ai workflow automation" — skews GHL/CRM, not a fit

---

## 2026-04-17 — v0.4 skill retrofit

### Current Status
Repo scaffold retrofitted to skill v0.4. New standing instructions added to entry.md. New user guide added.

### Completed This Session
- Updated entry.md with three new standing-instruction sections
- Created docs/user-guide.md
- Appended v0.4 retrofit decisions to docs/decision-log.md

### Decisions Made (Carry Forward)
- Notes block: on by default with auto-triggers
- Revision mode triggers: "inspect repo", "update system", "revise [file]"
- No-directive default: surface user guide

### Next Action
Continue content population per docs/todo.md.

### Do Not Repeat
- v0.4 retrofit decisions are settled; do not re-propose.

---

## 2026-04-17 — Initialization

### Current Status
Repo scaffold generated. All protocol documents written in full. Content documents stubbed. Two engineered prompts and two format specs complete.

### Completed This Session
- Full interview and project decomposition
- Generated all scaffold files
- Decision log populated

### Next Action
Populate content documents per priority order in docs/todo.md, starting with Upwork profile.

### Do Not Repeat
- Structural decisions are settled. Do not re-propose folder layout.

project_slug: job-search
doc_type: handoff-log
updated_at: 2026-04-25
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/docs/handoff-log.md

# Handoff Log

Append-only, reverse chronological. Most recent entry on top.

---

## 2026-04-25 — Repo audit, branch consolidation, orchestration layer archived

### Current Status
Eight-branch sprawl consolidated to `main` plus a safety archive tag. Old `main` (2026-04-17 baseline) preserved at `archive/pre-consolidation-2026-04-25`. Main now at SHA `eba116f`, includes the full v1-notion-mcp content (Notion-niche pivot, populated general-jobs strategy and master profile, Spinwheel portfolio, hardened prompts) plus the orphan Vendasta writing sample, plus the orchestration-layer strip, entry.md rewrite, and CLAUDE.md harness rules. Repo is now a static documentation vault, not a runtime. LLM-driven agentic search and structured cover letter cascade are archived as failed experiments. All 8 redundant branches deleted. Next sitting: build platform-native saved searches on Upwork, LinkedIn, Indeed; submit first proposals.

### Completed This Session
- Audit of all 8 branches and content drift between them
- Tagged old main as `archive/pre-consolidation-2026-04-25` (safety net)
- Fast-forwarded main to v1-notion-mcp (23 commits ahead)
- Cherry-picked Vendasta writing sample from `claude/update-current-state-docs-2DuBu`
- User deleted all 8 redundant branches via web UI: `v1`, `v1-notion-mcp`, six `claude/*` branches
- Moved 4 orchestration files to `archive/`: prompt-engineer-entry.md, job-search-prompt.md, prepare-application-prompt.md, notion-proposal-skeleton.md
- Rewrote `entry.md` slim and model-agnostic: repo map, standing rules, notes block spec, handoff protocol pointer. Dropped conditional reading hierarchy, revision mode, no-directive default, Notion MCP layer description. Added "if you are Claude, read CLAUDE.md before anything else" pointer in session-start sequence.
- Rewrote `README.md` with docs-vault framing
- Added `archive/README.md` explaining what was archived and when to revive
- Wrote `CLAUDE.md` (option 4B): branching policy (commit to main, no claude/* branches), commit hygiene, mass-edit pre-confirmation rules, tooling scope, pointer to entry.md for model-agnostic stuff
- Action item list and 1-4 hour next-sitting plan produced (lives in this conversation; not yet committed as a file)

### Decisions Made (Carry Forward)
- Repo is a documentation vault, model-agnostic. Not a runtime, not single-LLM.
- LLM-driven agentic search is archived. Job surfacing moves to platform-native saved searches and email digests on Upwork, LinkedIn, Indeed RSS.
- Structured cover letter cascade is archived. Cover letter automation deprioritized; ad-hoc drafting until job surfacing is solid.
- Make.com aggregator deferred to week 2-3, only if daily flow stable. Estimated 6-10 hour build, ~50% LLM-assistable.
- Per-session branching policy: **option 4B**. `CLAUDE.md` at the repo root holds the standing rule "commit directly to main, do not create claude/* branches." Every Claude session reads it on startup. No more manual override needed.
- Notes block and handoff protocol kept; live in `entry.md` (model-agnostic). State management (handoff-log, decision-log, current-state, todo) is project memory, not orchestration.
- Spinwheel/Cornflower/Job-search portfolio hooks remain in `archive/notion-proposal-skeleton.md` for reference; not active.
- Daily ritual target: ~30 min, fixed time, capped duration. Bounded streams over open-ended browsing.
- Proposal velocity target: 2-4 per day in early days; revisit after 7 days of digest data.

### Blockers / Open Questions
- Upwork search syntax in 2026: full nested boolean unconfirmed. User to test `"phrase" -exclusion` syntax in Upwork search bar before saving.
- Queue-in-Notion-vs-markdown: still TBD. `queue/flagged-jobs.md` is the live file on main; the v1-notion-mcp Notion MCP integration was archived along with the orchestration layer. Decide once daily ritual is in motion.
- Notes block destination: lives in `entry.md` for now. May migrate to a Claude Project system prompt or top-level Claude memory if/when daily flow shifts to a Claude Project.

### Next Action
Block 1 (~30 min — already done this session): repo cleanup, orchestration strip, entry.md rewrite. Done.

Block 2 (~60-90 min, user solo): build saved searches.
- Upwork: test syntax with `"notion workflow" -gohighlevel`. Build 4-5 narrow saved searches. Enable daily email notifications. Filters: min hourly $50, min fixed $200, payment-verified only.
- LinkedIn: 3-4 saved searches by role cluster (Group Facilitator / AI Trainer / Pre-licensed Therapist / Behavioral Health). Filters: past 24 hours, Contract OR Part-time, Easy Apply OFF. Daily email alert on each.
- Indeed: 2-3 search URLs with `&format=rss` appended; add to Feedly free tier.

Block 3 (~30-60 min): first live triage. Run saved searches manually. Pick top 2-3 listings. Draft proposals manually using Spinwheel/Cornflower/Job-search hooks from `archive/notion-proposal-skeleton.md` for portfolio anchors. Submit. Log to `queue/flagged-jobs.md`.

Block 4 (optional): same on LinkedIn.

End-of-day target: 2-4 proposals submitted, search infrastructure live, repo clean.

### Required Reading for Next Session
- `entry.md` — always
- `CLAUDE.md` — always, if the session is Claude (any surface). Other models skip.
- `docs/handoff-log.md` (this entry) — always
- `upwork/strategy.md` + `upwork/profile.md` + `upwork/portfolio.md` — when working on Upwork track
- `general-jobs/strategy.md` + `general-jobs/master-profile.md` — when working on general-jobs track
- `process/cover-letter-style-guide.md` + `process/writing-samples/` — only if drafting a cover letter
- `archive/notion-proposal-skeleton.md` — reference only; portfolio hook language is reusable

### Do Not Repeat
- Creating new `claude/*` branches per session. CLAUDE.md prohibits this; commit to main directly.
- LLM-driven agentic job search. Use platform-native saved searches and email digests instead.
- Structured cover letter cascade with PLAN block + SEEDS + checklist + voice-lock pass. Produces rigid drafts.
- Conditional reading hierarchy in entry.md. Just point at the repo and load what's relevant.
- Adding orchestration that the LLM is supposed to "execute" rather than reference.
- Building Make.com or other automation before daily digest pattern proves working.

---

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

## 2026-04-19 — Search, queue sync, process rebuild, proposal 03, Notion niche setup

### Current Status
Full working session. Job search run with Playwright. Queue synced. All three process docs updated. One proposal submitted (03 — corporate upskilling). Notion workspace niche targeted as primary golden goose lane. Profile updated. Notion skeleton and case study prompt ready. Next session: Notion niche search + send 5 proposals.

### Completed This Session
- Playwright job search: 5 keyword passes, ~45 listings reviewed, 3 high-priority surfaced
- Notion queue pulled and synced (8 jobs): 05 canned, 03 apply, 04 corrected, 07 skip, 02 skip
- upwork/strategy.md: delivery capability filter added, scope realism, Phase 1 pattern update
- job-search-prompt.md: Playwright as primary tool, keyword strategy updated, GoHighLevel excluded
- prepare-application-prompt.md: SEEDS block replaced with structured 6-field style profile extraction; PLAN step added before outline; Sub-step D expanded with sweeping-claim check and em dash scan as named items
- cover-letter-style-guide.md: sweeping-claim prohibition with worked example added; length fixed to 150-250 words; em dash rule hardened
- entry.md: notes block moves to END of each response
- process/notion-proposal-skeleton.md created: 4 swap zones, 2 pre-written portfolio hooks, usage rules
- Writing sample added: 2026-04-19-upwork-corporate-ai-upskilling.md
- Proposal 03 (AI Trainer & Upskilling Consultant) drafted by user, edited by LLM, submitted
- Volume analysis: Notion niche confirmed as highest-volume deliverable golden goose lane (~12-15 relevant listings/week)
- Profile updated: headline now includes Notion, overview sentence added, skills reordered
- Cornflower Health v2 Notion architecture doc identified in Drive — case study source material
- Case study write-up prompt prepared for new thread
- Session v1 branch erroneously created during session — not used

### Decisions Made (Carry Forward)
- Notion workspace builder is the primary Phase 1 golden goose niche
- Playwright is the required search tool; web search is fallback only
- Style profile extraction (6 named fields) is mandatory before any draft — not informal seed quotes
- PLAN block is mandatory before outline — both must be visible before draft begins
- No draft may be presented without Stage 2 voice lock pass completed and violations fixed
- Sweeping evaluative claims about a field are prohibited (added to style guide with example)
- Proposal velocity target: 5 proposals per Notion niche search session using skeleton
- For complex proposals (4+ explicit deliverables), user drafts and LLM edits — not LLM-generated
- General-jobs silo exists on main branch only; needs porting to v1-notion-mcp before use
- Mpathic2 careers page identified as strong general-jobs target (mental health + AI safety angle)

### Blockers / Open Questions
- Notion architecture case study: in progress in separate thread
- Proposal 03 (upskilling): submitted, no response yet
- Queue items 04 (Notion migration), 06 (Claude+Marketing), 08 (AI Business Teacher): still active, no proposals sent
- Encyclopedia portfolio item: still needs Netlify hosting

### Next Action
New thread. Load entry doc. Run Playwright search on `notion claude` and `notion automation workflow`. Fill skeleton for each listing that has a clear swap A. Send 5 proposals.

### Required Reading for Next Session
- entry.md (v1-notion-mcp branch) — always
- upwork/strategy.md — always
- process/notion-proposal-skeleton.md — load for any Notion niche search session
- Notion: Flagged Jobs — check queue before searching
- process/writing-samples/ — load 2 closest samples before any proposal draft

### Do Not Repeat
- LLM generating proposals from scratch without style profile extraction and PLAN step
- Skipping the Sub-step D checklist before presenting a draft
- Using the SEEDS block format (3 quoted sentences) — replaced by 6-field structured profile
- Navigating to individual Upwork listings before batch-evaluating from snippets
- Keyword 'ai workflow automation' — GoHighLevel-heavy, not a fit
- Erroneously creating new git branches during a working session

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

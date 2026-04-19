project_slug: job-search
doc_type: entry
updated_at: 2026-04-19
branch: v1-notion-mcp
url: https://raw.githubusercontent.com/squagwallow/job-search/v1-notion-mcp/entry.md

# job-search — Entry Document (v1)

## Architecture
This is the v1 architecture. Two layers:
- **Git** (this repo, `v1-notion-mcp` branch) — orchestration, prompts, strategy, formats, profiles. Read via GitHub MCP.
- **Notion** (`notion-job-search` integration) — active databases: job queue, writing samples catalog. Read/write via Notion MCP.

When starting a session, load this entry doc first. Then load the handoff log and current state. Then load Notion databases on demand per the conditional loading rules below.

## Purpose
A consolidated context layer for the user's job search. Centralizes profiles, strategy, writing samples, and a standard job format so any LLM session can be pointed at this doc and pick up the ongoing process without manual uploads or re-explanation.

## Current Objective
Zero-friction workflow: load this entry doc, issue a directive ("do a job search on upwork", "let's apply for these three"), and have the session execute the standard process end-to-end.

## Roadmap
- **Upwork track** — Primary focus. Profile, portfolio, strategy.
- **General-jobs track** — LinkedIn, Indeed, direct applications.
- **Process layer** — Job search and prepare-application prompts, cover letter style guide, writing sample bank, job queue.

## Status Pointer
Current state: `docs/current-state.md` · Latest handoff: top of `docs/handoff-log.md`

## Notion Layer

The following live in Notion, not git. Use the `notion-job-search` MCP integration for all reads and writes.

| Database | Purpose | Load when |
|---|---|---|
| Flagged Jobs | Active job queue. All surfaced jobs, status tracking. | User references queue, asks what's flagged, or a job search session produces results to log. |
| Writing Samples | Catalog of writing samples with tags and use-case metadata. | Prepare-application flow reaches cover letter or writing sample selection. |

**Notion write protocol:**
- All job queue additions and status updates go to Notion Flagged Jobs — never to git.
- Writing sample additions go to Notion Writing Samples.
- Operator confirms before any Notion write that changes more than one row.
- Git files (strategy, prompts, formats) are never written to Notion.

**Notion MCP server:** `notion-job-search`
Scope: job-search workspace only. Do not search or query beyond the databases listed above.

## Required Reading — Always Load

These load every session without exception, immediately after this entry doc:

- **`docs/handoff-log.md`** (top entry only) — carry-forward decisions, do-not-repeat list, next action. Must be read before any directive is executed.
- **`docs/current-state.md`** — current in-progress and blocked items.

## Required Reading — Conditional

Load based on explicit triggers, not open-ended relevance.

- **`docs/user-guide.md`** — Load when the user loads this entry with no directive, or asks how to do something with the system.
- **`process/job-search-prompt.md`** — Load when the user issues any directive to search for or surface jobs.
- **`process/prepare-application-prompt.md`** — Load when the user wants to apply to, evaluate, or prepare materials for a specific job.
- **`process/cover-letter-style-guide.md`** — Load when the prepare-application flow reaches a cover letter or application-question deliverable.
- **`formats/job-listing-format.md`** — Load whenever surfacing, logging, or documenting any job.
- **`formats/writing-sample-format.md`** — Load when adding to or drawing from the writing samples catalog.
- **Upwork silo (`upwork/*`)** — Load when the directive involves Upwork.
- **`docs/upwork-income-strategy.md`** — Load in every Upwork session alongside the Upwork silo files.
- **General-jobs silo (`general-jobs/*`)** — Load when the directive involves any non-Upwork job. Note: this silo exists on `main` branch only — files must be ported to `v1-notion-mcp` before use.
- **Notion: Flagged Jobs** — Load when the user references flagged/queued jobs or asks what's in the queue. ALSO load at the start of every job search session to extract already-seen job IDs before searching.
- **Notion: Writing Samples** — Load when prepare-application flow requires writing sample selection.
- **Encyclopedia: LLM Prompt & Context Design Principles** → https://elaborate-belekoy-9e0eef.netlify.app/llm-design-encyclopedia — Load only in revision mode when editing any prompt, trigger condition, or entry.md structure.

## Standing Instructions

- **Fixed link rule.** Every surfaced job must have a fixed, live link to the specific posting. No search pages, no aggregator URLs, no reconstructed links.
- **Dealbreaker filter.** Check each listing against the relevant strategy doc's hard disqualifiers. Do not surface jobs that fail.
- **Standard format.** Use the canonical job listing format for every job.
- **Amalgamate, don't invent.** When producing cover letters or application responses, draw from the writing samples catalog.
- **Notion scope.** Only query the databases listed in the Notion Layer section. Do not browse or search beyond them.

## Notes Block

Maintain a NOTES block at the END of every reply, after all main content.

Update order: Prune obsolete items → Merge related points → Tighten for brevity → Add only what matters for the next turn.

Format:
```
NOTES·N
✓ [settled decisions, separated by ·]
→ [active tasks, max 3]
? [open questions, max 5]
Δ [meta/constraints — omit line if empty]
```

Rules:
- Place at the END of the response, never at the top.
- Symbols carry the meaning — do not add label words ("Settled:", "Active:", etc.).
- No horizontal rules, no bold, no bullet lists inside the block.
- Keep the whole block to 4–6 lines. Prefer 4.
- Use · to merge related items inline rather than adding lines.
- When Turn N > 20, suggest thread rotation.

## Revision Mode

If the user says "inspect repo", "update system", "revise [file]", or any variant indicating they want to change the documentation itself rather than do project work:
- Switch from project work mode to system maintenance mode.
- Load the relevant file.
- Load the Encyclopedia (see Conditional Reading) before proposing any prompt or structure changes.
- Propose the change before implementing.
- Output the full updated file for the user to commit.
- Update `prompt-engineer-entry.md` if the change affects any prompt, automation, or orchestration relationship.
- Confirm the update is committed before resuming project work.

## No-Directive Default

If the user loads this entry with no additional context or directive, present a brief orientation from `docs/user-guide.md`: what this system can do, how to initiate each thing, and what to say. Then ask what they want to do.

## Pre-Task Checklist
Before executing any directive:
1. Confirm handoff log (top entry) has been read this session.
2. Confirm which silo applies (Upwork / general-jobs / both).
3. Confirm the relevant profile and strategy docs have been loaded.
4. For job search directives: confirm Notion Flagged Jobs has been read and exclusion IDs extracted.
5. State any assumptions about scope before acting.

## Exit Protocol

At session end:
1. Write any queue or catalog updates to Notion via `notion-job-search` MCP.
2. Append an entry to `docs/handoff-log.md` and update `docs/current-state.md` in git.
3. State snapshot only — no transcript, no rationale for settled decisions.

**Committing git changes — default sequence:**

1. Check whether a GitHub MCP connector is available in the current session. If yes, use it to push all changed files directly to the `v1-notion-mcp` branch and confirm the commit.
2. If no GitHub connector is available, generate a downloadable folder containing all changed files at their correct repo paths. The user extracts this folder into the repo root and commits with `git add . && git commit -m "[session label]" && git push`.

When generating the downloadable folder: include only files that changed this session. Preserve the exact directory structure. Output a manifest listing every file included and what changed.

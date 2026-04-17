project_slug: job-search
doc_type: entry
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/entry.md

# job-search — Entry Document

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

## Required Reading — Conditional

Load based on explicit triggers, not open-ended relevance.

- **`docs/user-guide.md`** — Load when the user loads this entry with no directive, or asks how to do something with the system.
- **`process/job-search-prompt.md`** — Load when the user issues any directive to search for or surface jobs.
- **`process/prepare-application-prompt.md`** — Load when the user wants to apply to, evaluate, or prepare materials for a specific job.
- **`process/cover-letter-style-guide.md`** — Load when the prepare-application flow reaches a cover letter or application-question deliverable.
- **`formats/job-listing-format.md`** — Load whenever surfacing, logging, or documenting any job.
- **`formats/writing-sample-format.md`** — Load when adding to or drawing from the writing samples bank.
- **Upwork silo (`upwork/*`)** — Load when the directive involves Upwork.
- **General-jobs silo (`general-jobs/*`)** — Load when the directive involves any non-Upwork job.
- **`queue/flagged-jobs.md`** — Load when the user references flagged/queued jobs or asks what's in the queue.

## Standing Instructions

- **Fixed link rule.** Every surfaced job must have a fixed, live link to the specific posting. No search pages, no aggregator URLs, no reconstructed links.
- **Dealbreaker filter.** Check each listing against the relevant strategy doc's hard disqualifiers. Do not surface jobs that fail.
- **Standard format.** Use the canonical job listing format for every job.
- **Amalgamate, don't invent.** When producing cover letters or application responses, draw from the writing samples bank.

## Notes Block

Maintain a notes block throughout sessions per these rules.

Triggered on:
- First major decision point → prompt: "we're starting to make decisions — want me to start taking notes?" If yes, activate.
- Thread getting long → prompt: "this thread is getting substantial — want me to start tracking notes and context?" If yes, activate.
- User says any of: "note that", "keep track", "where are we", "give me an update", "what's our status" → activate immediately, no prompt needed.
- A decision is made, a task is completed, or a state-changing action occurs → update if already active.

Once active: stays on until user says "pause notes".

Format:
```
─── THREAD NOTES ──────────────────
✓ [Settled decisions]
→ [Active tasks]
? [Open questions]
⚑ [Flagged for next thread]
Context: [0–25% | 25–50% | 50–75% | 75%+ compact soon]
───────────────────────────────────
```

Append to responses only when the block changes. Do not append to every response.

## Revision Mode

If the user says "inspect repo", "update system", "revise [file]", or any variant indicating they want to change the documentation itself rather than do project work:
- Switch from project work mode to system maintenance mode.
- Load the relevant file.
- Propose the change before implementing.
- Output the full updated file for the user to commit.
- Update `prompt-engineer-entry.md` if the change affects any prompt, automation, or orchestration relationship.
- Confirm the update is committed before resuming project work.

## No-Directive Default

If the user loads this entry with no additional context or directive, present a brief orientation from `docs/user-guide.md`: what this system can do, how to initiate each thing, and what to say. Then ask what they want to do.

## Pre-Task Checklist
Before executing any directive:
1. Confirm which silo applies (Upwork / general-jobs / both).
2. Confirm the relevant profile and strategy docs have been loaded.
3. State any assumptions about scope before acting.

## Exit Protocol
At session end: append an entry to `docs/handoff-log.md` and update `docs/current-state.md`. State snapshot only — no transcript, no rationale for settled decisions.

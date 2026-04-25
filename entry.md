project_slug: job-search
doc_type: entry
updated_at: 2026-04-25
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/entry.md

# job-search — Entry Document

A personal job-search documentation vault. Profile, strategy, portfolio, writing samples, and project state. Model-agnostic — any LLM (Claude, ChatGPT, Perplexity, etc.) can be pointed at this repo and pick up the work.

This file is the index. It does not orchestrate. It points at the data.

---

## Repo map

```
docs/
  current-state.md            # What's done / in progress / not started
  decision-log.md             # Settled decisions, append-only
  handoff-log.md              # Session state snapshots, reverse chronological
  todo.md                     # Priority-ordered action list
  upwork-income-strategy.md   # Income math, phase milestones, rate ladder

formats/
  job-listing-format.md       # Canonical job record format
  writing-sample-format.md    # Cover letter / sample format

process/
  cover-letter-style-guide.md # Voice, structure, channel conventions
  writing-samples/            # Sample bank, tagged

upwork/                       # Upwork silo: profile, portfolio, strategy
general-jobs/                 # Non-Upwork silo: master profile, linkedin, indeed, strategy, resumes
queue/flagged-jobs.md         # Lightweight apply queue (status: live)

archive/                      # Deprecated orchestration prompts. Reference only.
```

---

## When starting a session

1. Read this file.
2. Read the top entry of `docs/handoff-log.md` for current state and next action.
3. Load only the silo and files relevant to the directive (Upwork → `upwork/*` + `docs/upwork-income-strategy.md`; general-jobs → `general-jobs/*`).
4. Proceed.

No conditional reading hierarchy. No revision mode. No no-directive default. Just point at the repo, load what's relevant for the task at hand, work.

---

## Standing rules

- **Fixed live links.** Every job referenced or surfaced must have a direct URL to the specific posting. No aggregator URLs, no search pages, no reconstructed links.
- **Dealbreaker filter.** Check each listing against the relevant strategy doc's hard disqualifiers before surfacing or proposing.
- **Standard format.** Use the canonical job listing format (`formats/job-listing-format.md`) when logging jobs.
- **Amalgamate, don't invent.** When producing cover letters or application responses, draw from the writing samples bank in `process/writing-samples/`.
- **No em dashes.** Rewrite sentences instead. Never use the em dash or en dash as punctuation.
- **No AI-isms.** No "leverage," "delve," "seamlessly," "tailored," "in today's fast-paced world," or any phrase a model uses to sound professional.

---

## Notes block

Maintain a NOTES block at the END of every reply, after all main content.

Update order: Prune obsolete items → Merge related points → Tighten for brevity → Add only what matters for the next turn.

Format:
```
NOTES·N
checkmark [settled decisions, separated by middle-dot]
arrow [active tasks, max 3]
question-mark [open questions, max 5]
delta [meta/constraints — omit line if empty]
```

Use the literal symbols (checkmark glyph, right arrow, question mark, delta) in actual output. Listed by name above only to avoid em-dash-adjacent typography in this file.

Rules:
- Place at the END of the response, never at the top.
- Symbols carry meaning. No label words ("Settled:", "Active:", etc.).
- No horizontal rules, no bold, no bullet lists inside the block.
- Keep the whole block to 4 to 6 lines. Prefer 4.
- Use the middle-dot character to merge related items inline rather than adding lines.

Activate on:
- First decision point in a working session.
- User says any of: "note that," "keep track," "where are we," "give me an update," "what's our status."
- A decision is made or a state-changing action occurs (update if already active).

Deactivate when user says "pause notes."

---

## Handoff protocol

When a thread is getting long, context is drifting, or the user says "generate a handoff": produce an entry in the format below and append it to the top of `docs/handoff-log.md`. The entry is the durable record of session state for the next thread.

Format:
```
## [Date] [Short label]

### Current Status
[1 to 3 sentences]

### Completed This Session
- [item]

### Decisions Made (Carry Forward)
- [decision]

### Blockers / Open Questions
- [item or "none"]

### Next Action
[specific first move for next session]

### Required Reading for Next Session
- [file] [always / if trigger]

### Do Not Repeat
- [item or "none"]
```

State snapshot only. No transcript. No rationale for settled decisions (those go to `docs/decision-log.md`).

---

## What this repo is not

- Not a runtime. Don't try to "execute" the repo.
- Not an agent. Don't expect the repo to surface jobs by itself; that's the human's daily ritual using saved searches and digests.
- Not a single-LLM tool. Any model can read it. Claude-specific harness behavior (if any) lives in `CLAUDE.md`, not here.

# job-search

Personal job-search documentation vault. Profile, strategy, portfolio, writing samples, and project state.

Model-agnostic. Any LLM (Claude, ChatGPT, Perplexity, etc.) can be pointed at this repo and pick up the work. The repo is documentation, not a runtime.

## Entry URL

```
https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/entry.md
```

Paste that URL into a fresh LLM thread to load the index. The session reads `entry.md`, then the top of `docs/handoff-log.md`, then whichever silo the task touches.

## Daily use

Job surfacing happens through saved searches and email digests on Upwork, LinkedIn, and Indeed RSS feeds. The repo is the strategy and identity layer the LLM session reads when evaluating listings or drafting application materials.

## Structure

```
entry.md                          # Index. Repo map, standing rules, notes block, handoff protocol.

docs/
  current-state.md                # What's done / in progress / not started
  decision-log.md                 # Settled decisions
  handoff-log.md                  # Session state snapshots
  todo.md                         # Priority-ordered action list
  upwork-income-strategy.md       # Income math, phase milestones, rate ladder

formats/
  job-listing-format.md           # Canonical job record format
  writing-sample-format.md        # Cover letter / sample format

process/
  cover-letter-style-guide.md     # Voice, structure, channel conventions
  writing-samples/                # Sample bank, tagged

upwork/                           # Upwork silo (profile, portfolio, strategy)
general-jobs/                     # Non-Upwork silo (master profile, linkedin, indeed, strategy, resumes)
queue/flagged-jobs.md             # Lightweight apply queue

archive/                          # Deprecated orchestration prompts. Reference only.
```

## What changed (2026-04-25)

The repo was consolidated from 8 branches down to `main` plus a safety archive (`archive/pre-consolidation-2026-04-25`). The orchestration layer (conditional reading rules, agentic search prompt, structured cover letter cascade) was archived; LLM-driven agentic search degraded in quality and the structural cover letter prompt produced rigid drafts. Job surfacing moved to platform-native saved searches and email digests. The repo is now a static documentation vault.

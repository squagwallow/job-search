# job-search

Personal context layer for agentic job search and application prep.

This repo is designed to be loaded by an LLM at the start of any job-search session. Do not read it sequentially — the LLM navigates it by trigger condition from `entry.md`.

## Entry URL

```
https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/entry.md
```

Paste that URL into a fresh LLM thread to pick up the ongoing job-search process.

## For humans

See [`docs/user-guide.md`](docs/user-guide.md) for trigger phrases, workflows, and a worked example of a full session.

## For the LLM

- [`entry.md`](entry.md) — conditional reading index, standing instructions, notes block spec, revision mode spec
- [`prompt-engineer-entry.md`](prompt-engineer-entry.md) — orchestration index; load when auditing or refining the prompt base
- [`docs/decision-log.md`](docs/decision-log.md) — settled decisions, carry forward
- [`docs/handoff-log.md`](docs/handoff-log.md) — reverse-chron session state snapshots

## Structure

```
entry.md                          # Bootstrap — every session starts here
prompt-engineer-entry.md          # Orchestration index for prompt audits

docs/
  current-state.md                # What's done / in progress / not started
  decision-log.md                 # Settled decisions
  handoff-log.md                  # Session state snapshots
  todo.md                         # Priority-ordered action list
  user-guide.md                   # Human-facing how-to

formats/
  job-listing-format.md           # Canonical job record format
  writing-sample-format.md        # Cover letter / sample format

process/
  job-search-prompt.md            # SOP: surface jobs agentically
  prepare-application-prompt.md   # SOP: audit → compare → fit → strategy → actions
  cover-letter-style-guide.md     # Voice, structure, channel conventions
  writing-samples/                # Approved samples bank

upwork/                           # Upwork silo (profile, portfolio, strategy)
general-jobs/                     # Non-Upwork silo (LinkedIn, Indeed, resumes, strategy)
queue/flagged-jobs.md             # Lightweight apply queue
```

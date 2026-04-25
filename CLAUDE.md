# CLAUDE.md

Claude-specific harness rules for this repo. Other LLMs (ChatGPT, Perplexity, Gemini, etc.) should ignore this file and read `entry.md` for model-agnostic guidance.

This file overrides any conflicting default behavior.

---

## Branching policy

**Do not create new branches. Commit directly to `main`.**

This repo is a personal documentation vault. Per-session branching produces sprawl that obscures the linear history we need. The repo was consolidated from 8 branches down to `main` plus a safety archive on 2026-04-25 specifically because of branch sprawl from prior Claude Code sessions.

Specifically:
- Do not create `claude/*` branches per session.
- Do not open a pull request for documentation edits unless the user explicitly asks for one.
- If your harness defaults to creating a session branch, override it: check out `main` locally, make changes there, push to `main`.
- If you cannot push directly to `main` for a permissions reason, ask the user before creating any other branch.

The only branches that should exist on the remote are:
- `main` — the working branch
- `archive/pre-consolidation-2026-04-25` — safety tag, do not modify
- Any active session branch the harness auto-created at session start (auto-cleans on session end; do not develop on it)

## Commit hygiene

- One logical change per commit. Don't batch the consolidation work, the new feature, and the typo fix into one commit.
- Commit message: short subject line, then a body listing what changed. No marketing language.
- Do not skip hooks. Do not use `--no-verify`.

## Mass edits and destructive operations

Before any of the following, surface the plan and wait for explicit confirmation:
- Deleting or renaming more than two files at once.
- Rewriting any file in `upwork/`, `general-jobs/`, `process/cover-letter-style-guide.md`, or `process/writing-samples/` — these are the durable identity and strategy data.
- Modifying or deleting anything in `archive/`.
- Any `git reset`, `git push --force`, or branch deletion.

Editing `docs/`, `formats/`, `entry.md`, `README.md`, `CLAUDE.md`, or `queue/flagged-jobs.md` does not require pre-confirmation as long as the change is consistent with the active session's stated goals.

## Tooling

- GitHub MCP is available for this repo (scope: `squagwallow/job-search`). Use it for branch listing, PR reads, and remote file operations when local git would be slower or unavailable. Do not use it on other repositories.
- Local git operations are fine for normal commits and pushes.
- Do not run scrapers, browsers, or job-surfacing automations. The repo is a docs vault; surfacing happens outside it (saved searches, email digests, RSS).

## Notes block and handoff protocol

These are model-agnostic and live in `entry.md`. Follow them as specified there.

If `entry.md` and this file conflict on anything, this file wins for Claude sessions.

## What to do at session start (Claude-specific addendum)

The order from `entry.md` applies, with one Claude-specific clarification: when the user starts a fresh thread by pasting the entry URL, do not begin work until you have read both `entry.md` and this file. After that, read the top of `docs/handoff-log.md` and proceed.

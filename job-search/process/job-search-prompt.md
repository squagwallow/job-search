project_slug: job-search
doc_type: sop
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/process/job-search-prompt.md

# Prompt — Job Search

## Purpose
Execute an agentic job search that returns jobs matching the user's strategy and profile, in the standard listing format, with dealbreakers filtered out and only fixed live links included.

## Activation
User says any variant of:
- "do a job search on upwork"
- "search for jobs" (no channel specified → ask which silo)
- "find me [N] jobs for [role type]"

## Process

### Step 1 — Determine silo
If the user specified Upwork or general-jobs, proceed.  
If not, ask: "Upwork, general jobs, or both?"

### Step 2 — Load context
- Upwork → `upwork/profile.md`, `upwork/strategy.md`, `upwork/portfolio.md`
- General-jobs → `general-jobs/linkedin-profile.md`, `general-jobs/strategy.md`, any relevant resume variants in `general-jobs/resumes/`

Always also load `formats/job-listing-format.md`.

### Step 3 — Confirm assumptions (pre-task checklist)
Before searching, state back in one or two lines:
- Which silo you're searching
- What role types and must-haves from the strategy doc
- What dealbreakers you're filtering against
- How many jobs to return (default: 10)

Proceed unless the user corrects.

### Step 4 — Surface jobs
Search agentically using the loaded context. For each candidate:

- **Hard gate 1 — fixed live link.** Is there a direct URL to the specific posting? If no, discard silently. No aggregator URLs. No search pages. No reconstructed links.
- **Hard gate 2 — dealbreakers.** Does the listing state a dealbreaker from the strategy doc (PhD required, on-site only when strategy says remote-only, pay below floor, etc.)? Default: discard. Override and log with `dealbreaker check: fail: [reason]` only if the job is otherwise very strong and worth the user's awareness.

Continue until the target count is met.

### Step 5 — Return results
Return all jobs in the canonical format from `formats/job-listing-format.md`. Group by priority if useful. End with a one-line summary: "X jobs returned, Y discarded for missing links, Z discarded for dealbreakers."

If fewer than the target count pass both gates, say so explicitly rather than padding.

### Step 6 — Queue handoff
After presenting the list, ask: "Any you want to flag for the apply queue?"

If the user names IDs (e.g., "2, 5, 6" or "upwork-20260417-02"), append those entries to `queue/flagged-jobs.md` in the same listing format. Do not remove them from the result set.

## Defaults

- Return 10 jobs unless otherwise specified.
- Default priority when surfacing: `medium`. Upgrade to `high` only if the job has a strong specific match to a portfolio item or a strategy priority.
- Marginal dealbreakers: discard by default.

## Standing rules (non-negotiable)

- Every surfaced job has a fixed live link to the specific posting.
- Every surfaced job has been checked against the strategy's dealbreakers.
- Every surfaced job uses the canonical listing format.
- Never invent a link, pay range, or posted date. If any required field is unknown, state so in the Notes field.

## Completion condition
User has a list of jobs they can act on, formatted consistently, with no link-chasing required.

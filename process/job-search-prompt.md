project_slug: job-search
doc_type: sop
updated_at: 2026-04-19
url: https://raw.githubusercontent.com/squagwallow/job-search/v1-notion-mcp/process/job-search-prompt.md

# Prompt — Job Search

## Purpose
Execute an agentic job search that returns jobs matching the user's strategy and profile, in the standard listing format, with dealbreakers filtered out and only fixed live links included.

## Activation
User says any variant of:
- "do a job search on upwork"
- "search for jobs" (no channel specified → ask which silo)
- "find me [N] jobs for [role type]"

## Process

### Step 0 — Read Notion queue and build exclusion list (MANDATORY FIRST STEP)
Before running any search, read the Notion Flagged Jobs database via `notion-job-search` MCP.
Extract all job IDs (the `~` numeric ID from each record's link field).
Store as an exclusion set. Any search result whose job ID matches this set is silently discarded — do not surface, do not log, do not comment on.

This step is non-negotiable. Do not begin keyword searches until the exclusion set is built.

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
- How many IDs are in the exclusion set

Proceed unless the user corrects.

### Step 4 — Surface jobs using Playwright (preferred tool)

**Primary method: Playwright browser automation.** Use Playwright to navigate Upwork search pages directly. This is the default — do not fall back to web search unless Playwright is unavailable.

**Playwright search workflow:**

1. Run 4–6 keyword searches sequentially using `browser_run_code`. Navigate to:
   `https://www.upwork.com/nx/search/jobs/?q=[keyword]&sort=recency&per_page=20`

2. On each results page, use `page.evaluate()` to extract all job links in a single JavaScript batch call — do not navigate to individual listings yet. Extract: title, href, and snippet text.

3. Evaluate all titles and snippets from the batch against strategy filters AND the exclusion set from Step 0. Silently discard any job whose ID is in the exclusion set. Identify the top candidates worth navigating to.

4. Navigate to individual listings only for top candidates. Extract full body text via `page.evaluate(() => document.body.innerText)`.

5. Clean all links: strip to canonical form `https://www.upwork.com/jobs/~[job_id]/`.

**Fallback:** If Playwright is unavailable in the session, use web search with the same keyword list. Note the fallback in the summary line.

**For each candidate listing, apply:**

- **Hard gate 1 — fixed live link.** Direct URL to the specific posting required. Discard silently if absent.
- **Hard gate 2 — dealbreakers.** Check against strategy doc hard disqualifiers. Discard by default.
- **Hard gate 3 — exclusion set.** Any job ID matching the Notion queue is silently discarded regardless of fit.
- **Hard gate 4 — client rate signal.** If client avg hourly rate paid well below $65/hr floor, treat as soft dealbreaker.

Continue until target count is met.

### Step 5 — Return results
Return all jobs in the canonical format from `formats/job-listing-format.md`. End with a one-line summary: "X jobs returned, Y discarded for missing links, Z discarded for dealbreakers, N excluded (already in queue)."

If fewer than the target count pass all gates, say so explicitly rather than padding.

### Step 6 — Queue handoff
After presenting the list, ask: "Any you want to flag for the apply queue?"

If the user names IDs, write those entries to the Notion Flagged Jobs database via `notion-job-search` MCP.

---

## Search keyword strategy

**PRIMARY niche — Notion workspace builder (Phase 1 confirmed golden goose, run every session first):**
Volume confirmed at ~12–15 relevant listings/week. Use the notion-proposal-skeleton for these.
- `notion claude`
- `notion automation workflow`
- `notion workspace design`
- `notion migration training`
- `notion systems builder`

**PRIMARY cluster — Claude ecosystem (high differentiator, run every session):**
- `claude mcp`
- `claude cowork`
- `claude onboarding`
- `claude training`
- `ai workshop facilitator`

**Secondary cluster — training/facilitation:**
- `ai upskilling`
- `ai trainer corporate`
- `chatgpt workshop`
- `ai tools training`
- `llm training`

**Secondary cluster — health/ops angle:**
- `health data automation`
- `clinical workflow automation`

**Keywords to actively filter out or skip:**
- `ai workflow automation` — skews heavily toward GoHighLevel/CRM generalists
- `gohighlevel` — scope mismatch
- `LLM pipeline` — skews toward engineering builds

---

## Defaults

- Return 10 jobs unless otherwise specified.
- Default priority when surfacing: `medium`. Upgrade to `high` only if strong specific match.
- Marginal dealbreakers: discard by default.

## Standing rules (non-negotiable)

- Step 0 (queue read + exclusion set) runs before any search. No exceptions.
- Every surfaced job has a fixed live link to the specific posting.
- Every surfaced job has been checked against the strategy's dealbreakers.
- Every surfaced job uses the canonical listing format.
- Never invent a link, pay range, or posted date.
- Queue writes go to Notion, not to git files.

## Completion condition
User has a list of jobs they can act on, formatted consistently, with no link-chasing required.

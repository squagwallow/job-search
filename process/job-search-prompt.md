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

### Step 4 — Surface jobs using Playwright (preferred tool)

**Primary method: Playwright browser automation.** Use Playwright to navigate Upwork search pages directly. This is the default — do not fall back to web search unless Playwright is unavailable.

**Playwright search workflow:**

1. Run 4–6 keyword searches sequentially using `browser_run_code`. Navigate to:
   `https://www.upwork.com/nx/search/jobs/?q=[keyword]&sort=recency&per_page=20`

2. On each results page, use `page.evaluate()` to extract all job tiles in a single JavaScript batch call — do not navigate to individual listings yet. Extract: title, link (`a[href*="/jobs/"]`), and snippet text from `article[data-test]` elements.

3. Evaluate all titles and snippets from the batch against strategy filters. Identify the top 2–4 candidates per search pass worth navigating to.

4. Navigate to individual listings only for top candidates. Extract full body text via `page.evaluate(() => document.body.innerText)`.

5. Clean all links: Upwork job links sometimes contain `span-class-highlight` cruft. Strip to canonical form: `https://www.upwork.com/jobs/~[job_id]/`. The job ID is the `~0220...` segment at the end.

**Fallback:** If Playwright is unavailable in the session, use web search with the same keyword list. Note the fallback in the summary line.

**For each candidate listing, apply:**

- **Hard gate 1 — fixed live link.** Direct URL to the specific posting required. No aggregator URLs, no search pages, no reconstructed links. Discard silently if absent.
- **Hard gate 2 — dealbreakers.** Check against strategy doc hard disqualifiers. Discard by default. Override with `dealbreaker check: fail: [reason]` only if the job is otherwise very strong.
- **Hard gate 3 — client rate signal.** If client profile shows avg hourly rate paid well below the $65/hr floor (e.g., under $30/hr), treat as a soft dealbreaker. Flag it in Notes rather than hard-discarding unless the rate disparity is extreme.

Continue until target count is met.

### Step 5 — Return results
Return all jobs in the canonical format from `formats/job-listing-format.md`. Group by priority if useful. End with a one-line summary: "X jobs returned, Y discarded for missing links, Z discarded for dealbreakers."

If fewer than the target count pass all gates, say so explicitly rather than padding.

### Step 6 — Queue handoff
After presenting the list, ask: "Any you want to flag for the apply queue?"

If the user names IDs (e.g., "2, 5, 6" or "upwork-20260419-01"), write those entries to the Notion Flagged Jobs database via `notion-job-search` MCP. Do not remove them from the result set.

---

## Search keyword strategy

Run 4–6 of these per session. Mix primary and secondary clusters. Rotate across sessions to avoid staleness.

**Primary cluster — Claude ecosystem (highest differentiator, run every session)**
- `claude mcp`
- `claude cowork`
- `claude onboarding`
- `claude training`
- `notion claude`
- `ai workshop facilitator`

**Secondary cluster — training/facilitation**
- `ai upskilling`
- `ai trainer corporate`
- `chatgpt workshop`
- `ai tools training`
- `llm training`

**Secondary cluster — no-code/workflow tools**
- `notion automation workflow`
- `n8n workflow`
- `zapier automation`
- `airtable automation`
- `notion systems builder`

**Secondary cluster — health/ops angle**
- `health data automation`
- `clinical workflow automation`
- `medical ops automation`

**Keywords to actively filter out or skip:**
- `ai workflow automation` — skews heavily toward GoHighLevel/CRM generalists
- `gohighlevel` — scope mismatch, no competitive edge
- `LLM pipeline` — skews toward engineering builds requiring deep coding

---

## Defaults

- Return 10 jobs unless otherwise specified.
- Default priority when surfacing: `medium`. Upgrade to `high` only if the job has a strong specific match to a portfolio item, a strategy priority, or explicitly mentions Claude/Cowork/MCP.
- Marginal dealbreakers: discard by default.

## Standing rules (non-negotiable)

- Every surfaced job has a fixed live link to the specific posting.
- Every surfaced job has been checked against the strategy's dealbreakers.
- Every surfaced job uses the canonical listing format.
- Never invent a link, pay range, or posted date. If any required field is unknown, state so in the Notes field.
- Queue writes go to Notion, not to git files.

## Completion condition
User has a list of jobs they can act on, formatted consistently, with no link-chasing required.

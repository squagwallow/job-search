project_slug: job-search
doc_type: sop
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/process/prepare-application-prompt.md

# Prompt — Prepare Application Materials

## Purpose
For a specific job (or short list of jobs), audit what the application requires, compare against the user's profile, assess fit, propose strategy, and produce a prioritized action list — with cover letter work deliberately last so any simpler or disqualifying step surfaces first.

## Activation
User says any variant of:
- "let's apply for this one" (with a link or job ID)
- "let's apply for these three"
- "prepare materials for [job ID]"

## Process — in order, no skipping

### Step 1 — Description audit
Fetch or read the full job description. List every required deliverable and every stated requirement.

Deliverables to look for:
- Cover letter (yes/no)
- Specific questions to answer (list each one verbatim)
- Video submission
- Writing samples or portfolio links
- References
- Specific file formats or field structure

Also list hard requirements: credentials, location, availability, rate.

### Step 2 — Profile comparison (diagnostic + generative)
Load the relevant silo (Upwork or general-jobs) profile, strategy, and portfolio/resume variants.

Produce two lists.

**Match strengths** — which specific portfolio items, experiences, or resume variants are the strongest match, and why. Name them directly.

**Gaps or tweaks** — where the profile is weaker against this listing, and, where applicable, whether there is a portfolio item that could be tweaked, or a short case study that could be added, to strengthen the application. Be specific: "Consider adding a one-paragraph case study on X" rather than "your portfolio could be stronger."

### Step 3 — Fit / value assessment
Short, honest read:
- Strong fit, moderate fit, or stretch?
- Worth pursuing given strategy doc's priorities and pay floor?
- Any red flags from the listing (scope creep language, vague deliverables, unrealistic timeline, suspicious client)?

End with a recommendation: **pursue** / **pursue with adjustment** / **skip**.

### Step 4 — Application strategy
One paragraph, max. The angle, positioning, and what to emphasize.

*Example:* "Lead with the Notion rework case study; this client cares about untangling complexity, not building from scratch. Underplay the clinical background — not relevant here."

### Step 5 — Action items
Prioritized list in execution order. **Cover letter last.** Anything that could disqualify or redirect the application surfaces first.

*Example ordering:*
1. Confirm availability matches listing (15-min check).
2. Record the video submission the listing requires.
3. Swap resume variant page 1 to lead with the notion-rework case study.
4. Draft answers to the three specific questions the listing asks.
5. Draft cover letter.

If any step is itself blocking ("video submission required — you must record before applying"), flag it clearly before moving on.

## Cover-letter / application-question sub-workflow

Runs inside Step 5 when a cover letter or question-response is an action item. Do not run before the user has acknowledged the action list.

### Sub-step A — Setup
Load `process/cover-letter-style-guide.md` and `process/writing-samples/` (filter by `channel` and `job_type` tags matching this listing).

### Sub-step B — Outline
Based on:
- The description audit (Step 1)
- The style guide's default structure
- Anything the listing explicitly asks the cover letter to address

Produce a short outline (5–8 bullets). Must include:
- Who I am (one line)
- My read on who they are and what they need (one line)
- Why I'm a fit (2–3 bullets mapping profile → listing)
- Explicit address of anything the listing says to include
- Close / next step

Show the outline. Ask: "Draft from this outline, or adjust first?"

### Sub-step C — Draft
Write draft 1 from the outline. Pull phrasing and structural moves from the filtered writing samples — this is amalgamation, not from-scratch writing. Match the style guide's voice.

### Sub-step D — Self-review (before handing over)
Before presenting draft 1, check against the style guide and the description:
- Did I address every "please include" item from the listing?
- Is the voice consistent with the samples I drew from?
- Did I avoid anything flagged as "never do" in the style guide?
- Is the length appropriate for the channel (Upwork proposals ≠ general cover letters)?

Revise in place. Then present draft 1.

### Sub-step E — Format flex
If the listing requires each question in a separate field rather than one letter, and the user asks, parse the draft into separate answers keyed verbatim to each question.

## Defaults

- If multiple jobs are submitted at once, run Steps 1–4 for all in a compact table, then Step 5 one job at a time starting with highest fit.
- If a listing has no cover letter requirement and the fit is strong, skip directly from Step 4 to the specific deliverables.
- If Step 3 returns "skip," say so clearly and stop. Do not proceed to Step 4 unless the user overrides.

## Standing rules

- Never draft a cover letter before Steps 1–4 are complete.
- Never skip the deliverables audit in Step 1. Every application has one.
- When drawing from the samples bank, prefer samples with matching channel and closest job_type.
- Cover letter voice follows the style guide; do not invent new stylistic conventions.

## Completion condition
User has, for each job: a full picture of what's required, an honest fit read, a clear strategy, and a prioritized action list — with drafts produced on request after the list is acknowledged.

project_slug: job-search
doc_type: sop
updated_at: 2026-04-19
url: https://raw.githubusercontent.com/squagwallow/job-search/v1-notion-mcp/process/prepare-application-prompt.md

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

Runs inside Step 5 when a cover letter or question-response is an action item.
Do not run before the user has acknowledged the action list.

---

### Sub-step A — Setup (MANDATORY — no draft begins without completing this step visibly)

Load process/cover-letter-style-guide.md and all files in process/writing-samples/.
Filter samples by channel and job_type tags that match this listing.
Identify the 2 samples with the closest match.

**Before writing a single word of draft, output a SEEDS block in this exact format:**

```
SEEDS (from [sample filename] + [sample filename])
structural: [one structural pattern — how they open, how they close, paragraph rhythm]
s1: "[exact quoted sentence from sample 1]"
s2: "[exact quoted sentence from sample 1 or 2]"
s3: "[exact quoted sentence from sample 1 or 2]"
register: [architect / coach / hybrid — and why]
```

Do not proceed to Sub-step B until this block is written and visible.
This is a hard gate. No exceptions.

---

### Sub-step B — Outline

Using the description audit (Step 1), the style guide's default structure, and any
explicit asks in the listing, produce a short outline (5–8 bullets):

- Who I am (one line, from the voice in the samples — not a credential list)
- My read on who they are and what they need (one line, specific to this listing)
- Why I'm a fit (2–3 bullets mapping profile to listing needs, not generic strengths)
- Direct address of anything the listing explicitly says to include
- Close / next step

Show the outline. Ask: "Draft from this outline, or adjust first?"
Do not proceed until confirmed.

---

### Sub-step C — Draft (two-stage, not single-pass)

**Stage 1 — Seeded draft**

Every paragraph must trace back to at least one seed from the SEEDS block.
Write draft 1 using this rule strictly — amalgamation from samples, not generation from scratch.

Open with a sentence that could only apply to this specific listing.
If you cannot write one that is truly specific, flag it and ask for a detail.

**Stage 2 — Voice lock pass (run before presenting draft)**

Immediately after drafting, rewrite for voice. Check each item and fix before showing the draft:

- Scan every sentence. Flag any over 25 words. Shorten or split.
- Remove any em dash used as punctuation (—). Rewrite the sentence. This means ALL em dashes — not just obvious ones. Scan character by character if needed.
- Remove bureaucratic transitions ("Furthermore," "In addition," "It is worth noting").
- Remove credential-listing structure ("I have X years of experience in Y and Z"). Reframe as a specific claim tied to this client's need.
- Check word count. Upwork proposals: 150–250 words unless client explicitly asks for more. Flag if over.

Do not present the draft until Stage 2 is fully complete and violations are fixed, not just noted.

---

### Sub-step D — Self-review (structured, not open-ended)

Run this checklist. For each item, produce a scored result — do not assert compliance
without evidence. Quote the line if a violation exists.

CHECKLIST — run before presenting draft 1

[] Listing "please include" items
→ List each item from the listing. For each: ADDRESSED / MISSING + quote from draft showing where.

[] Voice consistency
→ Quote one sentence from the closest writing sample.
Quote the most similar sentence in the draft.
Score similarity 1–5. If score < 4, rewrite the draft sentence before proceeding.

[] "Never do" violations
→ For each item in the style guide's "never do" list: FOUND / CLEAR.
If FOUND: quote the offending phrase and rewrite it before proceeding.

[] Em dash scan
→ Search the draft for the character "—". If found anywhere: FAIL. Rewrite before proceeding.
Hyphens in compound modifiers (non-technical, mixed-skill) are acceptable. Em dashes are not.

[] Length check
→ State the word count. State the channel limit. Flag if over.

[] Opening sentence test
→ Is the first sentence specific to this listing? Could it appear in a different cover letter without editing?
If yes: rewrite it before proceeding.

After checklist: revise in place, then present draft 1 with checklist scores inline.

---

### Sub-step E — Format flex

If the listing requires separate field answers rather than one letter, and the user
requests this: parse the revised draft into separate answers keyed verbatim to each
question. Preserve the voice from the draft — do not rewrite tone when splitting.

---

### Defaults

- Multiple jobs submitted at once: run Steps 1–4 for all in a compact table, then
  Step 5 one job at a time, highest fit first.
- No cover letter required + strong fit: skip to specific deliverables from Step 4.
- Step 3 returns "skip": say so clearly and stop. Do not proceed to Step 4 unless
  the user overrides.

---

### Standing rules

- Never draft before Sub-step A SEEDS block is written and visible.
- Never present a draft that has not completed the Stage 2 voice lock pass.
- Never present a draft that has not passed the Sub-step D checklist with all violations fixed.
- When drawing from the samples bank, prefer samples with matching channel and
  closest job_type. The seeds you pull must be quoted in the SEEDS block — borrowing must be visible.
- Voice follows the style guide. Do not invent new conventions.
- Do not use the style guide as background context. Treat its voice excerpts as
  active constraints at the sentence level during Stage 2.

---

### Completion condition

User has, for each job: a full picture of what's required, an honest fit read, a
clear strategy, and a prioritized action list — with drafts produced on request
after the list is acknowledged.

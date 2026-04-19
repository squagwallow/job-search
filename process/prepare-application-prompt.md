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

### Sub-step A — Style Profile Extraction (MANDATORY HARD GATE)

This step runs BEFORE the outline and BEFORE any draft text.
No draft begins until the STYLE PROFILE block is written and visible in the response.

Load process/cover-letter-style-guide.md and all files in process/writing-samples/.
Select the 2 samples whose channel and job_type tags most closely match this listing.
Run a dedicated extraction pass on those samples — do not skip to generation.

Output this block in full before proceeding:

```
STYLE PROFILE (from [sample 1 filename] + [sample 2 filename])

sentence rhythm:
  [describe avg sentence length, variation pattern, whether short punches appear,
  any notable burstiness — e.g. "declaratives run 8-14 words; occasional 2-4 word
  punches after longer setup sentences"]

paragraph structure:
  [how paragraphs open, how they close, how they connect to the next one,
  typical paragraph length in sentences]

voice markers:
  [specific recurring moves — e.g. "opens on client's situation not self;
  questions embedded mid-body not saved for close; never names a credential
  without immediately connecting it to client's problem"]

vocabulary register:
  [formality level, field terms present, what's conspicuously absent,
  any phrases or constructions that recur]

hook pattern:
  [exact structural description of how the closest sample opens —
  quote the first sentence verbatim, then describe its structure]

banned phrases confirmed absent:
  [run the style guide never-do list against the samples; note any that appeared
  so they can be avoided in the draft too]

register: [architect / coach / hybrid]
reason: [one sentence on why, tied to this specific job type]
```

Do not write the outline or draft until this block exists in the response.
This is a hard gate. Quoting three sentences is not sufficient — all six fields above must be completed.

---

### Sub-step B — Plan

Before writing the outline, output a PLAN block:

```
PLAN
- samples seeding from: [filenames]
- style markers I will apply: [list 3-4 specific items from the profile above]
- opening move: [describe the specific first-sentence structure, not the content]
- proof anchor: [which portfolio item or experience, and why this one not others]
- what the listing explicitly asks for that must appear: [list verbatim]
- what I will not include: [anything tempting but off-register or irrelevant]
```

Do not proceed until the PLAN block is written.

---

### Sub-step C — Outline

Using the description audit (Step 1), the style profile (Sub-step A), the plan (Sub-step B), and any explicit asks in the listing, produce a short outline (5-8 bullets):

- Opening move (from the hook pattern in the style profile)
- Bridge (connect writer to this specific problem — one move, not two)
- Proof anchor (named specifically)
- Specifics (what the listing explicitly asked for)
- Close / next step

Show the outline. Ask: "Draft from this outline, or adjust first?"
Do not proceed until confirmed.

---

### Sub-step D — Draft (two-stage, not single-pass)

**Stage 1 — Seeded draft**

Every paragraph must trace back to at least one named style marker from the STYLE PROFILE block.
Amalgamation from samples — not generation from scratch.

Open with a sentence that could only apply to this specific listing.
If you cannot write one that is truly specific, stop, flag it, and ask for a detail.

**Stage 2 — Voice lock pass (run before presenting draft)**

Immediately after drafting, check each item and fix before showing anything:

- Scan every sentence. Any over 25 words: shorten or split.
- Search the entire draft for the character "—". If found anywhere: rewrite that sentence. No exceptions.
- Remove any sweeping evaluative claim about a field or practice that the writer has no standing to make. If a general observation is needed, rewrite it grounded in a specific experience.
- Remove bureaucratic transitions ("Furthermore," "In addition," "It is worth noting").
- Remove credential-listing structure ("I have X years of experience in Y and Z"). Reframe as a specific claim tied to this client's need.
- Check word count. Upwork proposals: 150-250 words unless client explicitly asks for more. Flag if over.

Do not present the draft until Stage 2 is fully complete and all violations are fixed, not noted for later.

---

### Sub-step E — Self-review (structured, not open-ended)

Run this checklist before presenting the draft. Score each item. Quote the line if a violation exists.

[] Listing "please include" items
-> List each item from the listing. For each: ADDRESSED / MISSING + quote from draft showing where.

[] Voice consistency
-> Quote one sentence from the closest writing sample.
   Quote the most similar sentence in the draft.
   Score similarity 1-5. If score < 4: rewrite the draft sentence before proceeding.

[] "Never do" violations
-> For each item in the style guide's "never do" list: FOUND / CLEAR.
   If FOUND: quote the phrase, rewrite it, show the rewrite.

[] Em dash scan
-> State: "Searched draft for character —." FOUND / CLEAR.
   If FOUND anywhere: FAIL. Rewrite before proceeding.

[] Sweeping claim scan
-> State: "Checked for evaluative claims about field/practice." FOUND / CLEAR.
   If FOUND: quote and rewrite.

[] Length check
-> State the word count. State the channel limit. Flag if over.

[] Opening sentence test
-> Quote the first sentence. Could it appear in a different cover letter without editing?
   If yes: rewrite before proceeding.

After checklist: revise in place. Then present the draft with checklist scores inline.

---

### Sub-step F — Format flex

If the listing requires separate field answers rather than one letter, and the user
requests this: parse the revised draft into separate answers keyed verbatim to each
question. Preserve the voice from the draft — do not rewrite tone when splitting.

---

### Defaults

- Multiple jobs submitted at once: run Steps 1-4 for all in a compact table, then
  Step 5 one job at a time, highest fit first.
- No cover letter required + strong fit: skip to specific deliverables from Step 4.
- Step 3 returns "skip": say so clearly and stop. Do not proceed to Step 4 unless
  the user overrides.

---

### Standing rules

- STYLE PROFILE block must appear before outline, plan, or draft. No exceptions.
- PLAN block must appear before outline. No exceptions.
- Never present a draft that has not completed the Stage 2 voice lock pass with all violations fixed.
- Never present a draft that has not passed the Sub-step E checklist with all violations fixed.
- Style profile extraction is a discrete pass on the samples — not background inference.
  All six fields must be populated from actual sample evidence, not assumed.
- Voice follows the style guide. Do not invent new conventions.

---

### Completion condition

User has, for each job: a full picture of what's required, an honest fit read, a
clear strategy, and a prioritized action list — with drafts produced on request
after the list is acknowledged.

project_slug: job-search
doc_type: format-spec
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/formats/writing-sample-format.md

# Format Spec — Writing Sample

Covers approved cover letters, Upwork proposal bodies, and responses to specific application questions. One sample per file in `process/writing-samples/`.

## Filename convention

`[YYYY-MM-DD]-[channel]-[short-slug].md`

- `channel` is `upwork` or `general`.
- Examples:
  - `2026-03-12-upwork-notion-rework.md`
  - `2026-02-28-general-ai-prompt-engineer.md`

## Required frontmatter

```
---
date: 2026-03-12
channel: upwork | general
job_type: [short descriptor, e.g., "clinical care coordinator", "ai prompt engineer", "notion build rework"]
deliverable: cover-letter | application-question | proposal
question_prompt: [only if deliverable is application-question — paste the exact question verbatim]
outcome: [optional — submitted, interview, hired, rejected, withdrew]
---
```

## Body

The actual approved text, unchanged from what was submitted.

## Notes section (optional, at bottom)

One or two lines on why this one worked or what would carry forward if adapting it.

## Examples

**Cover letter sample:**
```
---
date: 2026-03-12
channel: upwork
job_type: notion build rework
deliverable: cover-letter
outcome: hired
---

Hi [Client],

I saw your post about reworking your Notion workspace — the complexity you described (three nested databases, overlapping properties, broken rollups) is exactly the kind of problem I specialize in untangling...

[full approved text]

## Notes
Opened with the specific complexity they named. One portfolio link, not three. Worked.
```

**Application-question sample:**
```
---
date: 2026-02-28
channel: general
job_type: ai prompt engineer
deliverable: application-question
question_prompt: "Tell us about a time you designed a system that scaled beyond its original use case."
outcome: interview
---

[approved answer]

## Notes
Addressed the question directly in sentence 1. Avoided preamble.
```

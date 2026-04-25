project_slug: job-search
doc_type: reference
updated_at: 2026-04-25
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/docs/saved-searches.md

# Saved Searches

Reference spec for all saved searches across job platforms. Update when searches are added, modified, or retired.

---

## Upwork — 5 saved searches

Use Advanced Search fields. No commas between words -- space-separated only.

Filters applied to all five:
- Payment verified: on
- None of these words: `gohighlevel`
- Everything else: unfiltered at save time; filter manually during triage

**Search 1 — Claude ecosystem**
All of these words: `claude`
Any of these words: `training onboarding mcp cowork`

**Search 2 — AI facilitation**
All of these words: `ai`
Any of these words: `workshop facilitator upskilling trainer`

**Search 3 — Notion**
All of these words: `notion`
Any of these words: `workspace automation migration systems builder`

**Search 4 — AI curriculum / corporate**
The exact phrase: `ai trainer`
Any of these words: `curriculum onboarding corporate llm`

**Search 5 — Health / clinical**
All of these words: `health`
Any of these words: `automation workflow ai clinical`

Notes:
- "None of these words" is not a hard filter on Upwork -- treat as a soft signal depressor only
- Sort by Newest manually each session; sort likely does not save with the search
- Enable daily email digest on each search

---

## LinkedIn — 4 saved searches

Filters for all four:
- Date posted: Past 24 hours
- Job type: Part-time AND Contract (select both)
- Easy Apply: off
- Set alert for daily email

**Search 1 — Group facilitator**
Search bar: `group facilitator mental health`
Location: Remote / Denver CO

**Search 2 — AI trainer / evaluator**
Search bar: `AI trainer OR AI evaluator OR RLHF`
Location: Remote

**Search 3 — Pre-licensed therapist**
Search bar: `pre-licensed therapist OR associate therapist OR MFT intern`
Location: Colorado

**Search 4 — Behavioral health facilitator**
Search bar: `behavioral health facilitator OR IOP facilitator OR psychoeducational`
Location: Remote / Denver CO

---

## Indeed — 3 searches (RSS for Feedly)

Append `&format=rss` to each URL to get the RSS feed. Add all three to Feedly free tier.
Additional URL params: `&sort=date&fromage=14`

**Search 1 — Group facilitator**
`q=%22group+facilitator%22+%22mental+health%22&l=Denver%2C+CO`

**Search 2 — Pre-licensed therapist**
`q=%22pre-licensed+therapist%22+OR+%22associate+therapist%22&l=Colorado&jt=parttime`

**Search 3 — AI trainer (remote)**
`q=%22AI+trainer%22+OR+%22AI+evaluator%22&l=Remote&jt=contract`

Full RSS URLs (base: `https://www.indeed.com/jobs?`):
- https://www.indeed.com/jobs?q=%22group+facilitator%22+%22mental+health%22&l=Denver%2C+CO&sort=date&fromage=14&format=rss
- https://www.indeed.com/jobs?q=%22pre-licensed+therapist%22+OR+%22associate+therapist%22&l=Colorado&jt=parttime&sort=date&fromage=14&format=rss
- https://www.indeed.com/jobs?q=%22AI+trainer%22+OR+%22AI+evaluator%22&l=Remote&jt=contract&sort=date&fromage=14&format=rss

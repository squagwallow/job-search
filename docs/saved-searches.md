project_slug: job-search
doc_type: tooling
updated_at: 2026-04-26
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/docs/saved-searches.md

# Saved Searches Registry

Reproducible record of every saved search built across Upwork, LinkedIn, and Indeed for the daily and weekly job-surfacing rituals. Update this file every time a search is added, modified, or retired.

## Upwork

**Architecture:** Upwork has no per-saved-search email alert in 2026 (verified 2026-04-26 via UI walkthrough — the Notification Settings page has no per-search controls). Surfacing happens via bookmarked URLs with `&sort=recency` appended (the "Save search" UI action does NOT preserve sort state, so default Best Matches resurfaces old jobs). Daily ritual is: open bookmarks → run extraction bookmarklet (`docs/extraction-bookmarklets.md`) on each tab → paste markdown into Claude Project. Browser folder: `JS-Upwork`.

Use Upwork's **Advanced Search** fields for query structure (more reliable than inline boolean):
- "All of these words" — required terms
- "Any of these words" — at least one must match
- "The exact phrase" — quoted phrase
- "None of these words" — soft signal depressor (Upwork docs note this is not a hard exclude)

Filters applied to all searches:
- Payment verified: ON
- "None of these words" includes `gohighlevel` (treated as soft depressor)
- Hourly $30+ / Fixed $200+ where the dropdown is available

After saving each search, in the address bar **append `&sort=recency`** to the URL, then bookmark THAT URL into folder `JS-Upwork`.

### Niche searches (existing strategy: Claude / AI facilitation / Notion / health)

| ID | Search | Advanced Search fields | Bookmark URL |
|---|---|---|---|
| u1 | Claude ecosystem | All: `claude` · Any: `training onboarding mcp cowork` | _(user fills after build)_ |
| u2 | AI facilitation | All: `ai` · Any: `workshop facilitator upskilling trainer` | _(user fills)_ |
| u3 | Notion | All: `notion` · Any: `workspace automation migration systems builder` | _(user fills)_ |
| u4 | AI curriculum / corporate | Exact phrase: `ai trainer` · Any: `curriculum onboarding corporate llm` | _(user fills)_ |
| u5 | Health / clinical | All: `health` · Any: `automation workflow ai clinical` | _(user fills)_ |

### New searches (added 2026-04-26 based on 2026-04-23 Upwork market trends email)

Captures demand-growth areas the user is well-positioned for that the existing niche searches do not cover. Partial broadening from the 2026-04-19 "Notion workspace builder only" Phase 1 narrowing. A fuller niche review is flagged for a separate session after 1-2 weeks of daily-ritual data.

| ID | Search | Advanced Search fields | Justification |
|---|---|---|---|
| u6 | AI integration / AI app | All: `ai` · Any: `integration app implementation` · None: `plugin wordpress` | AI Apps & Integration up 27% globally per Upwork email; matches Cornflower Health and Spinwheel portfolio directly |
| u7 | LLM evaluation / AI testing | Any: `llm-evaluation prompt-evaluation ai-testing rlhf-evaluation` | QA Testing up 26%; intersects Clinical AI Failure Modes case study |
| u8 | AI coaching tools | All: `coaching` · Any: `ai claude chatgpt llm` · None: `seo` | Personal & Professional Coaching up 42%; intersects facilitator background and Empathy Circle certification |

### Search-build checklist (per search)

For each row above with `_(user fills)_`:
1. Open https://www.upwork.com/nx/search/jobs/ → click Advanced Search.
2. Fill the structured fields per the table above. Apply payment-verified, hourly-$30+, fixed-$200+ filters.
3. Verify results look fit-relevant (5-15 jobs visible). Adjust query if noisy.
4. Click "Save search" at top of results.
5. In the address bar, append `&sort=recency` to the URL. Reload.
6. Bookmark the resulting URL into folder `JS-Upwork`.
7. Replace `_(user fills)_` with the bookmarked URL. Commit.

---

## LinkedIn

LinkedIn supports per-saved-search email alerts with filters respected in 2026 (per external research; user to confirm on first cycle).

Filters for all searches:
- Date posted: Past 24 hours
- Job type: Part-time AND Contract (select both)
- Easy Apply: OFF
- Set alert: Daily email

Browser folder: `JS-LinkedIn-Bookmarks` (fallback if email alerts prove unreliable). Gmail label: `JS-LinkedIn`.

| ID | Search | Search bar | Location | Email alert |
|---|---|---|---|---|
| li1 | Group facilitator | `group facilitator mental health` | Remote / Denver CO | _(user fills: daily/weekly)_ |
| li2 | AI trainer / evaluator | `AI trainer OR AI evaluator OR RLHF` | Remote | _(user fills)_ |
| li3 | Pre-licensed therapist | `pre-licensed therapist OR associate therapist OR MFT intern` | Colorado | _(user fills)_ |
| li4 | Behavioral health facilitator | `behavioral health facilitator OR IOP facilitator OR psychoeducational` | Remote / Denver CO | _(user fills)_ |

### Search-build checklist

1. Open https://www.linkedin.com/jobs/search/
2. Build the search per the table above.
3. Save search → set alert frequency to Daily.
4. Bookmark the search URL into `JS-LinkedIn-Bookmarks`.
5. Update the email-alert column.

---

## Indeed

Indeed RSS is officially deprecated in 2026 per Indeed's stated position. However, the URLs below append `&format=rss` and may still partially function (legacy endpoint not fully removed). **First-cycle test:** add the RSS URLs to Feedly; if the feed populates with recent items, use it. If empty or stale, fall back to Indeed's native email alerts on the same searches.

Common URL params: `&sort=date&fromage=14`

| ID | Search | URL params (q, l, jt) |
|---|---|---|
| in1 | Group facilitator | `q=%22group+facilitator%22+%22mental+health%22&l=Denver%2C+CO` |
| in2 | Pre-licensed therapist | `q=%22pre-licensed+therapist%22+OR+%22associate+therapist%22&l=Colorado&jt=parttime` |
| in3 | AI trainer (remote) | `q=%22AI+trainer%22+OR+%22AI+evaluator%22&l=Remote&jt=contract` |

### Full RSS URLs (test in Feedly first)

Base: `https://www.indeed.com/jobs?`

- in1: `https://www.indeed.com/jobs?q=%22group+facilitator%22+%22mental+health%22&l=Denver%2C+CO&sort=date&fromage=14&format=rss`
- in2: `https://www.indeed.com/jobs?q=%22pre-licensed+therapist%22+OR+%22associate+therapist%22&l=Colorado&jt=parttime&sort=date&fromage=14&format=rss`
- in3: `https://www.indeed.com/jobs?q=%22AI+trainer%22+OR+%22AI+evaluator%22&l=Remote&jt=contract&sort=date&fromage=14&format=rss`

### Fallback: native Indeed email alerts

If RSS feeds don't populate:
1. Open the search URL (without `&format=rss`).
2. Click "Save this search" or set up a Job Alert (UI varies; usually a banner appears after applying filters).
3. Choose Daily frequency.
4. Update the table below with which path is active per search.

| ID | Active path | Notes |
|---|---|---|
| in1 | _(RSS / email — fill after first cycle)_ | |
| in2 | _(RSS / email — fill after first cycle)_ | |
| in3 | _(RSS / email — fill after first cycle)_ | |

---

## Gmail filters

Two labels with skip-inbox rules for the email-alert digests:

| Label | From contains | Action |
|---|---|---|
| `JS-LinkedIn` | `linkedin.com` (especially `jobs-noreply@linkedin.com`, `jobalerts-noreply@linkedin.com`) | Apply label, skip inbox |
| `JS-Indeed` | `indeed.com` (especially `noreply@indeed.com`, `alert@indeed.com`) | Apply label, skip inbox (only needed if Indeed email-alert fallback is active) |

No Upwork Gmail label needed — Upwork does not send filtered alert emails for saved searches.

---

## Daily / weekly ritual time accounting

Target: ~5 min/day Upwork, ~5 min/week LinkedIn + Indeed combined.

**Upwork morning routine:**
- Open browser folder `JS-Upwork`, open all bookmarks in tabs (~30 sec)
- For each tab: click `Extract Upwork` bookmarklet, switch to Claude Project, paste with `--- Search: <name> ---` separator (~30 sec/tab × 5-8 tabs = 2-4 min)
- Send to Claude Project, receive Tier A/B table (~30 sec)
- Spot-check Tier A links, decide propose/pass/queue (~1-2 min)
- Total: ~5 min when clean; up to 8-10 if selectors need tuning

**LinkedIn / Indeed weekly routine:**
- Open Gmail labels `JS-LinkedIn` and (if active) `JS-Indeed` OR open Feedly and copy Indeed RSS items
- Copy week's digest bodies into Claude Project with separators (~2 min)
- Receive scored output and triage (~3 min)
- Total: ~5 min

---

## Update protocol

When a saved search is added, modified, or retired:
1. Update the relevant table.
2. Fill in any new bookmark URL or alert column.
3. If retired, move the row to the "Retired" section below with a date and reason.
4. Commit `docs/saved-searches.md`.

## Retired

_(none yet)_

project_slug: job-search
doc_type: current-state
updated_at: 2026-04-26
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/docs/current-state.md

# Current State

## Complete
- Repo audit and 8-branch consolidation (2026-04-25). Old main preserved at `archive/pre-consolidation-2026-04-25` tag.
- Orchestration layer archived: `entry.md` rewritten model-agnostic, `prompt-engineer-entry.md` and the two engineered prompts moved to `archive/`.
- Repo reframed as a static documentation vault, model-agnostic.
- `CLAUDE.md` written (option 4B branching policy: commit to main, no claude/* branches).
- Format specs written (job listing, writing sample).
- Upwork profile, portfolio, and strategy populated; headline includes Notion; Spinwheel case study added.
- Upwork income strategy doc created.
- Cover letter style guide drafted (sweeping-claim prohibition, 150-250 word limit, em dash rule).
- Writing samples bank seeded: 5 Upwork samples (2026-04-14 through 2026-04-19) plus Vendasta sample (2026-04-18).
- General-jobs silo populated: master profile, research-backed strategy with role tiers, target employers, pay ranges.
- Spinwheel case study live at https://curious-sunshine-0eeed4.netlify.app/
- **Tier 0 surfacing workflow designed and documented (2026-04-26):** `docs/daily-use-prompt.md`, `docs/saved-searches.md`, `docs/extraction-bookmarklets.md`. See plan in `/root/.claude/plans/ok-yeah-im-not-harmonic-stream.md`.
- Foundational facts verified: Upwork has no per-saved-search email alert; sort state not preserved by Save Search action; `&sort=recency` URL param is the freshness workaround; Upwork has no posted-in-last-N-days sidebar filter.

## In Progress
- Tier 0 build (user action): build saved searches in each platform UI, install bookmarklets in browser, set up Gmail labels, create Claude Project. See "Next Action" in `docs/handoff-log.md` for the punch list.

## Blocked
- None.

## Not Started
- Upwork saved searches: 5 niche searches (`u1`-`u5`) plus 3 new searches added 2026-04-26 (`u6`-`u8`) based on Upwork market trends email (AI integration, AI testing/eval, AI coaching). User to build in UI, append `&sort=recency` to each URL, bookmark.
- LinkedIn saved searches with daily email alerts (4 role clusters per `general-jobs/strategy.md`).
- Indeed email alerts (3 role clusters; RSS dead in 2026).
- Gmail filters: `JS-LinkedIn`, `JS-Indeed` labels with skip-inbox rules.
- Extraction bookmarklets: install in browser folder `JS-Extract`. Source in `docs/extraction-bookmarklets.md`. First-use selector tuning expected (10-15 min per platform).
- Claude Project `Job Search Daily Triage`: create, upload project knowledge files, paste system prompt from `docs/daily-use-prompt.md`.
- First proposal batch using new architecture (target: 4-6 per session, multiple sessions per week).
- Encyclopedia portfolio item: Netlify hosting still unresolved.

## Deferred (followup, not blocking)
- **Niche / strategy review.** 18 proposals in 12 days (~10/week, half of the 20-30/week Phase 1 target), zero contracts, surfacing dried up over the past week. The 2026-04-19 narrowing to "Notion workspace builder only" may have over-constrained — new searches `u6`-`u8` partially broaden but a fuller review is warranted. Schedule after 1-2 weeks of Tier 0 daily-ritual data.
- Make.com / n8n daily aggregator (Tier 1+, only if Tier 0 proves stable for 30 days).
- Cover letter automation (only if ad-hoc drafting in the Project becomes painful).
- Queue-in-Notion-vs-markdown decision (revisit once daily ritual is in motion).

## Housekeeping
- Netlify hosting credits issue: still affects encyclopedia portfolio item.

project_slug: job-search
doc_type: user-guide
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/docs/user-guide.md

# User Guide — job-search

How to actually use this system. Plain-language reference for *you*, not the LLM.

---

## Starting a session

Open a fresh thread in Claude (or equivalent). Paste:

```
https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/entry.md
```

Then either issue a directive (examples below), or say nothing — the system will surface an orientation.

---

## What this system can do

Three core operations:

1. **Find jobs** — agentic search on Upwork or general-jobs channels, filtered and formatted consistently.
2. **Prepare application materials** — audit a listing, compare against your profile, strategize, produce a prioritized action list, draft cover letters or question responses.
3. **Track jobs** — lightweight append-only queue of jobs you've flagged to apply to.

Everything else (maintaining profiles, revising prompts, handing off threads) is in service of those three.

---

## Trigger phrases

### Job search
- "do a job search on upwork"
- "search for jobs" *(system will ask which silo)*
- "find me 10 ai prompt engineer roles on linkedin"

### Prepare application materials
- "let's apply for this one" *(include a link or job ID)*
- "let's apply for these three" *(with IDs from a prior search or the queue)*
- "prepare materials for [job ID]"

### Queue operations
- "what's in my queue?" → reads `queue/flagged-jobs.md`
- "mark [job ID] as applied" → updates status in queue file
- "flag these for the queue: 2, 5, 6" → happens naturally after a search

### Revision mode (editing the system itself)
- "inspect repo"
- "update system"
- "revise [filename]"

When you use any of these, the session switches out of project work and into maintenance mode — it will propose edits and output full updated files for you to commit.

### Notes block
- Starts automatically at the first decision point, when a thread gets long, or when you say "note that," "where are we," "give me an update," "what's our status."
- Stays on until you say "pause notes."

---

## Handing off when a thread goes stale

When a thread is getting bloated, context-drifted, or you just want to move to a new one:

1. Say: **"generate a handoff"**
2. The session will produce a handoff entry in the standard format.
3. Copy that output.
4. Paste it at the top of `docs/handoff-log.md` in your repo and commit.
5. Open a new thread and paste the entry URL. The new session will pick up from the latest handoff.

---

## Writing progress back to the repo

The system doesn't auto-commit anything — you're the source of truth for the repo. When a session produces something that should persist:

| What | Say | What happens | You do |
|------|-----|--------------|--------|
| Handoff | "generate a handoff" | Session outputs handoff entry | Paste into `docs/handoff-log.md`, commit |
| Queue update | "add these to the queue" / "mark applied" | Session outputs updated queue entries | Paste into `queue/flagged-jobs.md`, commit |
| Decision log entry | "log this decision" | Session outputs log entry | Paste into `docs/decision-log.md`, commit |
| Revised file | "update [file]" | Session outputs full revised file | Replace the file, commit |
| Content populated | *(during agentic content-population sessions)* | Session outputs the formatted file | Replace file, commit |

Commit early and often. The cost of a missed commit is re-explaining context next thread.

---

## Flagging, updating status, marking complete

The queue (`queue/flagged-jobs.md`) uses an extended Priority field for application state:

- `high` / `medium` / `low` — surfaced but not yet acted on
- `applied` — submitted
- `interview` — in process
- `closed-won` / `closed-lost` / `withdrew` — resolved
- `skip` — decided not to pursue

To update, say: *"mark [job ID] as applied"* or *"update [job ID] to interview."* The session will produce the replacement entry text.

Never delete queue entries. Update status instead. The queue is a history, not a to-do list.

---

## Notes block — how it shows up

When active, the session appends a block like this to its response *only when something in it changes*:

```
─── THREAD NOTES ──────────────────
✓ Settled: Upwork search strategy confirmed
→ Active: Drafting cover letter for upwork-20260417-03
? Open: Do we want a video intro for this one?
⚑ Flag: Follow up on portfolio tweak next session
Context: 50–75%
───────────────────────────────────
```

If the Context line reads `75%+ compact soon` — that's your cue to generate a handoff and start a fresh thread.

To stop: **"pause notes"**.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Session surfaces jobs with broken links | Hard gate in job search prompt not enforced | Say "enforce the fixed-link rule" and re-run |
| Session starts writing cover letter before auditing listing | Prepare-application prompt skipped steps 1–4 | Say "run steps 1–4 first, then stop for my review" |
| Session feels generic, re-asks for context | Context rot / thread too long | Generate handoff, start fresh thread |
| Session contradicts a settled decision | Didn't load or lost track of decision-log | Say "re-read docs/decision-log.md and correct" |
| Queue entries go missing | You didn't commit after the session | Always commit queue updates before closing a thread |
| Prompt behaves wrong and you want to fix it | Prompt needs revision | Say "inspect `process/[prompt-name].md`" to enter revision mode |

---

## Worked example — a full session, start to finish

**Scenario:** You want to find Upwork jobs this morning and apply to one.

**Step 1.** Open a fresh thread. Paste:
```
https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/entry.md

do a job search on upwork
```

**Step 2.** Session confirms: "Searching Upwork for AI prompt engineering and Notion consulting work matching your strategy. Filtering for fixed-price floors above $X, discarding any posts with PhD requirement or on-site-only. Target: 10 jobs. Proceeding."

You say: *"go"*

**Step 3.** Session returns 10 jobs in standard format. Two are marked `high`. End line: "10 jobs returned, 4 discarded for missing links, 2 for dealbreakers."

**Step 4.** You scan the list. Say: *"flag 2 and 5 for the queue."*

Session outputs updated entries for `queue/flagged-jobs.md`. You paste them in, commit.

**Step 5.** You say: *"let's apply for job 2."*

Session runs the prepare-application workflow:
- Step 1 (description audit): "Requires cover letter + one specific question + a short video. No writing sample required."
- Step 2 (profile comparison): "Strongest match: Notion rework case study. Gap: no explicit mention of healthcare clients in your portfolio — consider adding one-line acknowledgment."
- Step 3 (fit assessment): "Strong fit. Recommend: pursue."
- Step 4 (strategy): "Lead with complexity-untangling angle. Downplay from-scratch builds."
- Step 5 (action items):
  1. Record 90-second video intro addressing [listing's specific ask]
  2. Answer the one specific question (120 words target)
  3. Draft cover letter

**Step 6.** You say: *"video is ready. draft the question answer and cover letter."*

Session runs the sub-workflow — outline, draft, self-review — and presents both.

**Step 7.** You tweak, submit on Upwork, come back and say: *"mark upwork-20260417-02 as applied."*

Session outputs the updated queue entry. You commit.

**Step 8.** Before closing: *"generate a handoff."*

Session outputs a handoff entry. You paste it at the top of `docs/handoff-log.md`, commit.

Next session, a fresh thread with just the entry URL picks up exactly where you left off.

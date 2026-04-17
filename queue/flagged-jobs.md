project_slug: job-search
doc_type: domain
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/queue/flagged-jobs.md

# Flagged Jobs Queue

Append-only. Jobs flagged for application during a job search session are logged here in the standard format from formats/job-listing-format.md.

## How this file is used
- The job search prompt appends jobs here when the user flags them.
- A new thread can load this file to surface queued jobs without losing them to stale threads.
- When a job is submitted, applied, or skipped, extend its Priority tag (see below). Do not delete.

## Status tags (Priority field extension)
In this file, Priority can carry application state:
- high / medium / low — surfaced, not yet acted on
- applied — application submitted
- interview — in interview process
- closed-won / closed-lost / withdrew — resolved
- skip — decided not to apply

## Entries

### Zapier + Claude Cowork + Clio Integration – Weekly Automated Report — Criminal Defense Attorney
- ID: `upwork-20260417-02`
- Source: Upwork
- Link: https://www.upwork.com/jobs/Zapier-Claude-Cowork-Clio-Integration-Weekly-span-class-highlight-Automated-span-Report_~022045221408972617426/
- Posted: 2026-04-17
- Pay: $75 fixed
- Priority: medium
- Dealbreaker check: pass
- Tags: zapier, claude, api-integration, legal, one-time, fast-close
- Notes: Tiny scope, excellent client (5.0/3 reviews, $4K spent), 10-15 proposals. Below budget floor but golden goose logic applies — fast build, clean close, strong review prospect. Zoom screen share delivery.

### AI Trainer & Upskilling Consultant – Corporate Education Program — Large Company
- ID: `upwork-20260417-03`
- Source: Upwork
- Link: https://www.upwork.com/jobs/Trainer-Upskilling-Consultant-Corporate-Education-Program_~022044795585454518367/
- Posted: 2026-04-16
- Pay: $50-$100/hr hourly
- Priority: medium
- Dealbreaker check: pass
- Tags: ai-training, corporate, facilitation, llm-prompt-engineering, us-only
- Notes: Large company ($1.1M Upwork spend), strong skills match. Yellow flag: consistent "no feedback given" pattern across all past jobs — review risk for golden goose strategy. 20-50 proposals.

### Notion Expert — Workflow Migration, Automation & Team Training — Production Company (London)
- ID: `upwork-20260417-04`
- Source: Upwork
- Link: https://www.upwork.com/jobs/span-class-highlight-Notion-span-Expert-Workflow-Migration-span-class-highlight-Automation-span-amp-Team-Training_~022044761830984122906/
- Posted: 2026-04-16
- Pay: Fixed price, to propose
- Priority: high
- Dealbreaker check: pass
- Tags: notion, claude, cowork, workflow-migration, team-training
- Notes: Best portfolio match in session. Explicitly mentions Claude + Cowork as differentiator. Exceptional client — 4.98/116 reviews, $107K spent, 72% hire rate. 15 already interviewing — move fast.

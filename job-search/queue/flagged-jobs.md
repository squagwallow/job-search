project_slug: job-search
doc_type: domain
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/queue/flagged-jobs.md

# Flagged Jobs Queue

Append-only. Jobs flagged for application during a job search session are logged here in the standard format from `formats/job-listing-format.md`.

## How this file is used
- The job search prompt appends jobs here when the user flags them.
- A new thread can load this file to surface queued jobs without losing them to stale threads.
- When a job is submitted, applied, or skipped, extend its Priority tag (see below). Do not delete.

## Status tags (Priority field extension)
In this file, Priority can carry application state:
- `high` / `medium` / `low` — surfaced, not yet acted on
- `applied` — application submitted
- `interview` — in interview process
- `closed-won` / `closed-lost` / `withdrew` — resolved
- `skip` — decided not to apply

## Entries

<!-- No jobs yet. First entry will be added when you flag a job during a search session. -->

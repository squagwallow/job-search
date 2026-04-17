project_slug: job-search
doc_type: decision-log
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/docs/decision-log.md

# Decision Log

Append-only. Each entry: decision + one-sentence rationale + date.

---

**Decision:** Top-level split into `upwork/` and `general-jobs/` silos, plus a shared `process/` directory. *Upwork's search process, profile format, and strategy differ enough from traditional jobs to warrant separate silos while keeping shared process logic central. Date: 2026-04-17*

**Decision:** Two engineered prompts this session — job search, prepare application materials — not three. *Queue management is lightweight enough to live as convention inside the other two prompts rather than its own prompt. Date: 2026-04-17*

**Decision:** Prepare-application-materials replaces a narrower "cover letter" prompt. *The workflow must first audit the full listing (video submissions, question responses, etc.) so cover letter effort isn't invested in a job that has other blocking requirements. Date: 2026-04-17*

**Decision:** Prepare-application workflow ordering: description audit → profile comparison → fit/value assessment → strategy → action items (cover letter last). *Protective ordering: prevent effort sunk into a cover letter when an earlier step might disqualify the job. Date: 2026-04-17*

**Decision:** Profile comparison step is both diagnostic and generative. *Identify strongest matching portfolio items and flag gaps where a tweaked or new item would strengthen the application. Date: 2026-04-17*

**Decision:** Writing samples are tagged rather than split by channel. *Each sample gets an Upwork/general tag and a job-type tag (e.g., "clinical care coordinator," "notion build rework"); the cover letter prompt applies Upwork vs. general conventions via tagging, not folder structure. Date: 2026-04-17*

**Decision:** Cover letter style guide is a separate document from the prepare-application prompt. *A canonical reference the prompt pulls from is easier to audit and update than rules baked into prompt text. Date: 2026-04-17*

**Decision:** Job tracking — no database. Standardized job listing format + lightweight append-only queue file. *Database overhead isn't worth it given how often links go stale; the standard format solves the "losing jobs in stale threads" problem at much lower cost. Date: 2026-04-17*

**Decision:** Resume variants live as flexible files in `general-jobs/resumes/`, no special documentation. *About 10 variants, swapped freely per job; over-specifying a resume management process would add friction without benefit. Date: 2026-04-17*

**Decision:** Standing rule — every surfaced job must have a fixed live link to the specific listing. *Links to search pages or aggregator URLs are effectively worthless for application purposes. Date: 2026-04-17*

**Decision:** Standing rule — filter obvious dealbreakers before surfacing (e.g., PhD required). *Hard disqualifiers in the relevant strategy doc prevent presenting jobs that will be rejected on first read. Date: 2026-04-17*

**Decision:** Cover letter sub-workflow handles both full letters and specific application-question responses. *The underlying logic is the same — ingest description, build outline, draft, self-review — and response-to-questions is just a flexible output form of the same process. Date: 2026-04-17*

**Decision:** Retrofitted to skill v0.4. *Adopted new entry-doc standing instructions (notes block, revision mode, no-directive default), added docs/user-guide.md as required reading when no directive is given. Date: 2026-04-17*

**Decision:** Notes block on by default with auto-triggers. *Auto-activates at first major decision, long threads, or explicit user phrases ("where are we", "note that"); stays on until user says "pause notes". Context capacity indicator included. Date: 2026-04-17*

**Decision:** Revision mode trigger phrases are "inspect repo", "update system", "revise [file]". *Clear verbal switch between project work and system maintenance prevents accidental doc edits during job-search sessions. Date: 2026-04-17*

**Decision:** No-directive loads surface the user guide, not the prompt inventory. *The user guide is human-facing; it tells the user what they can do and how to say it. Prompt inventory is for the LLM in revision mode. Date: 2026-04-17*

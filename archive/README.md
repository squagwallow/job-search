project_slug: job-search
doc_type: archive-readme
updated_at: 2026-04-25

# Archive

Files in this folder are no longer in active use. Preserved for reference.

## What's here and why

- **`prompt-engineer-entry.md`** — Old orchestration index. Cataloged the prompt and automation inventory across the repo. Archived because the orchestration layer it indexed is itself archived.
- **`job-search-prompt.md`** — Old agentic job search SOP. Archived because LLM-driven agentic search degraded in quality over time. Replaced by saved searches + email digests + RSS on Upwork, LinkedIn, and Indeed.
- **`prepare-application-prompt.md`** — Old cover letter / application-prep cascade with structured style profile extraction, PLAN block, two-stage drafting, and named-checklist self-review. Archived because the structural approach produced rigid drafts; cover letter automation is deprioritized in favor of ad-hoc drafting.
- **`notion-proposal-skeleton.md`** — Fast-fill template for Notion-niche Upwork proposals. Archived alongside the cover letter workflow since cover letters are deprioritized.

## When to revive

Restore any file from this folder if:
- A future automation strategy makes the underlying prompt useful again (e.g., a Make.com flow that calls the prepare-application prompt as a callable artifact rather than a session orchestration layer).
- The structural patterns are needed as reference for designing a replacement.

## Decision context

Archived 2026-04-25 as part of the consolidation pass that promoted `v1-notion-mcp` to `main` and shifted the repo from a runtime context layer to a static documentation vault. See the top entry of `docs/handoff-log.md` for full context.

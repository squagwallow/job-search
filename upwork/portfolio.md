project_slug: job-search
doc_type: domain
updated_at: 2026-04-19
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/upwork/portfolio.md

# Upwork Portfolio

---

### Spinwheel — Notion Workspace Design & AI Integration
- Link: https://curious-sunshine-0eeed4.netlify.app/
- Upwork portfolio URL: [not yet added to Upwork profile]
- Short description: A freelance contract management system built in Notion, designed to work with Claude across every session. Three databases, 12 taxonomy tags, live MCP integration, and a session protocol that means Claude knows the pipeline, active contracts, and proposals without re-explanation — every time.
- Role: AI Workflow & Automation Architect. Designed schema, session continuity protocol, and instruction layer from scratch. Solved the cross-session memory problem with architecture: a plain-text entry document, a Notion MCP integration, and a handoff log that carries state forward without manual re-uploading.
- Tools / stack: Notion (3 databases), Claude MCP integration, plain-text instruction layer, git-based session protocol
- Outcome: A system that gets more useful the longer it runs — pipeline, proposals, and active contracts readable and writable by Claude in every session, with no re-uploading or re-explanation.
- Tags: ai-workflow, notion, llm-orchestration, mcp, schema-design, session-continuity
- Strongest for: Clients who want a Notion workspace designed around how AI reads and writes — not just how a human browses. Especially relevant for freelancers, solopreneurs, or small teams managing pipelines, proposals, or client contracts with AI assistance.
- Key design decisions:
  - Priority-as-status: collapsed status into the priority field (high/medium/low/engaged) — one field write to transition a record, zero sync risk
  - Open additive taxonomy: tag schema designed to grow from real use, not arrive complete; 4 values became 12 across 3 sessions without breaking existing records
  - Strict layer separation: Notion holds live data; behavioral logic and session instructions live in a dedicated instruction layer — independently auditable, independently improvable

---

### Cornflower Health — AI-Directed Data Pipeline & LLM Coaching
- Link: https://animated-malasada-c8e858.netlify.app/
- Upwork portfolio URL: https://www.upwork.com/freelancers/~01a1452bb6b0e589a4?p=2042025988474425344
- Short description: Fully automated personal health data pipeline — Apple Watch to webhook backend to 29-field normalization to Notion database to 5 auto-updating dashboards to LLM coaching layer. Live in production 7+ months, 220+ daily records, zero manual steps.
- Role: Product Owner & AI Workflow Architect. Built entirely by directing AI tools — no code written personally. Includes architecture decisions, multi-session continuity via structured handoff docs, LLM credit-efficiency framework, and a git-first prompt system for auditable coaching.
- Tools / stack: Apple Watch / HealthKit, webhook backend, Notion, LLM APIs, git-based prompt versioning
- Outcome: Production system running 7+ months; proof of AI-directed product ownership at scale.
- Tags: ai-workflow, llm-orchestration, notion, health-data, pipeline, no-code
- Strongest for: Clients who need someone to design and direct a complex multi-tool AI system end-to-end without writing code themselves; health tech, ops automation, or anyone who needs a workflow architect rather than a developer.

---

### Clinical AI Failure Modes — Health Data Safety Analysis
- Link: https://peaceful-queijadas-b266f1.netlify.app/
- Upwork portfolio URL: https://www.upwork.com/freelancers/~01a1452bb6b0e589a4?p=2042028550330142720
- Short description: Analysis of how LLM-based health coaching systems fail in clinical settings, using a real commercial product as a case study. Documents a specific failure mode — AI systems conflating acute events with chronic conditions — and proposes architectural responses including TTL-based flag expiration and git-first prompt versioning.
- Role: AI Safety Analyst & Clinical Domain Expert
- Tools / stack: Case study research, architecture diagramming, technical documentation
- Outcome: Structured design response mapping system decisions directly to annotation and training data quality standards. Demonstrates clinical AI evaluation capability.
- Tags: clinical-ai, ai-safety, health-data, technical-writing, llm-failure-modes
- Strongest for: Clients in healthcare, behavioral health, or regulated industries who need someone who understands both the clinical risk layer and the AI architecture layer — not just one or the other.

---

### Proceedings for Harvard Medical School & NASEM
- Link: [4 PDF deliverables — no hosted URL]
- Upwork portfolio URL: https://www.upwork.com/freelancers/~01a1452bb6b0e589a4?p=[ID not captured]
- Short description: Deliverables for Harvard Medical School and the National Academies of Science, Engineering and Medicine. Includes a convening on COVID-19 airborne infection control and a high-profile conference evaluating a generation of global health policy implementation.
- Role: Rapporteur, Science Writer & Project Coordinator (via Doxastic)
- Tools / stack: Multi-author coordination, bibliography research, structured document synthesis
- Outcome: Dense clinical and engineering content transformed into clear cross-audience documents for policymakers, researchers, and public health implementers.
- Tags: science-writing, public-health, technical-writing, medical-writing, policy
- Strongest for: Clients who need someone to synthesize complex multi-stakeholder content into clear deliverables — especially where the audience spans technical and non-technical readers.

---

## Queue

- Add Spinwheel case study to Upwork profile (link: https://curious-sunshine-0eeed4.netlify.app/)
- Add LLM Prompt & Context Design Encyclopedia as Upwork portfolio item: host on Netlify, write entry in this file using the format above, add to Upwork profile.

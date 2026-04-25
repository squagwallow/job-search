project_slug: job-search
doc_type: domain
updated_at: 2026-04-25
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/upwork/strategy.md

# Upwork Strategy

## Meta-strategy: Golden Goose to Niche Specialist

Two-phase arc over 12-24 months, timed to grad school completion and
therapy licensure transition.

**Phase 1 — Golden Goose (now through first ~15 reviews)**
Optimize for: quick hire, fast delivery, 5-star review with written
feedback. Rate is secondary. Profile credibility is the currency.
Every contract is an investment in the flywheel, not income optimization.
Real earnings need to start within 8 weeks — small fixed-price wins
are the path.

**Phase 2 — Niche Specialist (post-review base)**
Once the profile has credibility signals (JSS, reviews, earnings),
shift toward: health/ops AI workflow specialist positioning, higher
rates, anchor clients, productized offers. Run a 60-90 day niche
experiment to let the market identify the highest-value lane before
locking in.

**Income target:** $4k+/month at ~30 hours/week total (billable +
non-billable). This smooths the grad school to licensed therapist to
agency transition.

See docs/upwork-income-strategy.md for full income math, phase milestones,
rate ladder, and progress log. Re-run rate and income analysis periodically.
Last analysis: 2026-04-17.

---

## Delivery capability filter

Phase 1 requires confident delivery. Before bidding on any job, apply
this test to each skill area the listing requires:

> "If the client asked me a live question about this mid-session,
> could I answer confidently without looking it up?"

If the answer is no → flag as stretch. If multiple required skill
areas fail this test → skip.

**Confident delivery (bid freely):**
- Claude prompt engineering, Claude ecosystem orientation
- Notion workspace design, database architecture, team training
- AI workflow design and documentation (architect role, not dev role)
- Facilitation, curriculum design, group training for non-technical teams
- Technical writing, SOP development, process documentation
- AI governance framing, failure-mode analysis
- Health/clinical domain translation

**Stretch (bid with scoped proposal, not full claim):**
- Live MCP connector setup or debugging on client infrastructure
- Claude integrations requiring real-time troubleshooting (Microsoft 365,
  Cowork configuration, GitHub Skills deployment)
- Automation platforms not personally set up before (n8n, Zapier, Make,
  Airtable automations) — can orient and teach concepts, cannot build live

**Do not bid:**
- Jobs where live technical troubleshooting is the core deliverable
  and the tool stack is unfamiliar
- Jobs requiring on-the-spot connector debugging with a client's team
  watching and no prep runway

Note on Claude/MCP framing: Claude and MCP are genuine differentiators
for *positioning*, but the deliverable must be scoped to what is actually
deliverable. "Claude ecosystem experience" is real. "Live MCP setup
support" is a stretch unless the job allows async research and prep time.

---

## Current targeting (Phase 1)

Optimize job search for golden goose criteria — not role type or
niche purity. A job is a good target if it scores well on:

- Fit: I can deliver this well with current skills and portfolio
- Speed: likely to hire fast, close fast, trigger review fast
- Review quality: client likely to leave substantive written feedback
- Scope: well-defined, small enough to finish in days not weeks

Preferred scope patterns right now:
- AI training and workshop facilitation for non-technical teams
- Coaching / onboarding on Claude, ChatGPT, or AI workflow tools
- Notion workspace design, migration, and team training
- Audit + documentation of existing AI or ops systems
- SOP / process documentation for AI-integrated workflows
- AI governance or risk framing for teams adopting AI tools
- Simple LLM-powered assistants where architecture (not coding) is the ask

No contract type filter — evaluate each listing on golden goose merit
regardless of hourly vs. fixed.

Not in scope for Phase 1 (may reconsider in Phase 2 if hands-on experience develops):
- Building live automations in n8n, Zapier, Make, Airtable without prior hands-on
- Live MCP connector implementation and debugging

---

## Pay floor / rate posture

Public profile rate: $85/hr (anchor — do not lower).

Actual per-project flexibility:
- Phase 1: price fixed projects attractively to win traction; effective
  rate may be lower on early jobs — this is intentional investment
- Never price so low it signals low quality or invites difficult clients
- For architecture/strategy scopes: can quote above public rate
- Client avg hourly rate paid under $30/hr: treat as soft dealbreaker

Re-evaluate at: 5 reviews, 15 reviews, $10k earned, $40k earned.

---

## Hard dealbreakers

Minimal hard gates — golden goose targeting handles filtering. The
job search prompt should optimize for fit and speed signals rather
than exclusion rules.

Skip immediately:
- Payment method unverified + zero hiring history
- Off-platform requests or unpaid test asks
- Threatening or manipulative tone in listing or review history
- Core deliverable is live technical troubleshooting of unfamiliar tools

Flag as stretch (not hard skip, but proceed cautiously):
- Listings requiring live expert Q&A on deep technical specifics
  where answers would require looking things up mid-session
- Any job where the primary skill required is in the Stretch category
  above without a way to scope around it

---

## Signals of a promising listing (high priority)

Client signals:
- Verified payment + prior completed jobs with substantive written reviews
- Job description has 3+ sentences with clear goal, context, and outcome
- Intermediate or Expert experience level selected
- Few open/idle contracts (client follows through)
- Posted recently (within 7 days)
- Avg hourly rate paid consistent with or above public rate ($85/hr)

Scope signals:
- AI facilitation, training, or curriculum design as the core ask
- Notion workspace design, migration, or team onboarding
- Specific tool stack named where delivery is confident
- Concrete outcome stated ("onboard our team", "document this workflow")
- Short duration: less than 1 week or less than 1 month
- Health, ops, clinical, or safety-adjacent context (portfolio match)
- Explicitly mentions Claude, Cowork, or MCP — but check that deliverable
  is scoped to orientation/design, not live connector debugging

Upgrade to high priority if: listing names a problem solved in a
portfolio item, or client has repeat-hire history.

---

## Signals of a weak listing (deprioritize)

- One-liner description with no context or success criteria
- 50+ proposals already submitted
- Rock-bottom budget or rate expectation ($5-$20/hr, $20 fixed complex work)
- Client avg hourly rate paid well below $30/hr (signals rate floor mismatch)
- "Help with my AI project" — vague scope, no specifics
- Posted more than 14 days ago
- Many open/idle contracts on client profile
- $0 spent and no hiring history (new unproven client)
- Core deliverable requires live hands-on work in unfamiliar automation platforms

---

## Search keywords for job search prompt

See `process/job-search-prompt.md` for full keyword strategy and Playwright
search workflow. Summary:

**Primary cluster — highest differentiator, run every session:**
claude training, claude onboarding, claude mcp, notion claude,
ai workshop facilitator, claude cowork

**Secondary cluster — training/facilitation:**
ai upskilling, ai trainer corporate, chatgpt workshop,
ai tools training, llm training

**Secondary cluster — no-code/workflow:**
notion automation workflow, n8n workflow, notion systems builder

**Secondary cluster — health/ops:**
health data automation, clinical workflow automation

**Avoid:**
- "ai workflow automation" — GoHighLevel-heavy, not a fit
- "gohighlevel" — scope mismatch
- "LLM pipeline" — skews toward engineering builds

---

## Longer-term positioning (Phase 2 target)

Run a 60-90 day niche experiment once Phase 1 review base is
established. Track per-niche: reply rate, close rate, contract size,
speed to close, ease of delivery, client quality. Let the data identify
the lane.

Leading candidates to test:
- Healthcare operations automation (clinic intake, referral, documentation)
- Health-adjacent coaching/wellness ops automation
- Safety-conscious AI workflow design for regulated environments

Once a niche front-runner emerges:
- Tighten profile headline and overview around that vertical
- Build 2-3 productized offers with named outcomes and fixed prices
- Shift mix toward 1-2 anchor clients + monthly fixed-price sprints
- Raise effective rates in planned steps

Differentiation to protect: health/clinical literacy + ops framing +
failure-modes/safety lens + high-quality documentation. This is rare
among generic "Zapier + GPT" competitors.

---

## Phase milestones (reference — re-evaluate periodically)

| Milestone | Signal |
|-----------|--------|
| Phase 1 complete | 5+ reviews, 100% JSS, at least 1 repeat client |
| Phase 2 entry | 10-15 contracts, niche front-runner identified |
| Income target in range | Stable month at $4k+, 1-2 anchor clients |
| Rate normalization | 15+ reviews, raise public rate, productized offers live |

These are orientation markers, not hard deadlines. Revisit on
the same cadence as rate analysis.

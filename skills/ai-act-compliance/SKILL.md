---
name: ai-act-compliance
description: Assess and build an EU AI Act compliance programme. Use for inventories, role maps, deadline readiness, Article 4 AI literacy, high-risk provider or deployer controls, GPAI governance, policy roadmaps, remediation plans, or executive compliance status.
---

# Build an EU AI Act compliance programme

Follow [LEGAL-SOURCE-PROTOCOL.md](../../references/LEGAL-SOURCE-PROTOCOL.md) and read [AI-ACT-DECISION-MAP.md](../../references/AI-ACT-DECISION-MAP.md). Retrieve deadlines and role-specific obligations from the Lexbeam EU AI Act MCP when available.

## Establish the perimeter

Identify entities, jurisdictions, sectors, AI systems and GPAI models, roles, intended purposes, affected persons, product-law links, and existing governance. Do not turn a questionnaire into an assertion. Mark missing evidence.

## Assess by control domain

Score each control `effective`, `partly effective`, `absent`, or `not established`, with an owner and evidence link:

1. **Inventory and role map**: unique system record, purpose, owner, provider/deployer status, model dependencies, geography, data, and classification.
2. **Prohibited-practice control**: complete Article 5 screening, approval gate, monitoring, and escalation.
3. **AI literacy**: proportionate measures for providers’ and deployers’ staff and other operators under Article 4; do not invent a prescribed curriculum or guarantee.
4. **Classification and change control**: Article 6 analysis, Article 6(3) evidence where used, Article 25 role-change triggers, and periodic reclassification.
5. **High-risk provider controls**: Articles 9 to 17, 18 to 21, conformity assessment, declaration, CE marking, registration, post-market monitoring, and incident reporting, where applicable.
6. **High-risk deployer controls**: Article 26 instructions, oversight, input-data relevance, monitoring, logs, workplace notice, affected-person notice, cooperation, DPIA linkage, and FRIA only where Article 27 applies.
7. **GPAI controls**: distinguish Article 53 baseline duties from Article 55 systemic-risk duties and record the model-provider evidence relied upon.
8. **Transparency**: assess each Article 50 obligation and transition separately.
9. **Evidence and assurance**: approvals, versioning, change logs, testing, complaints, incidents, supplier evidence, and retention rules.

## Assess by operative date

Use `euaiact_check_deadlines`; do not reuse proposal-era backstop language. At minimum distinguish:

- duties already applicable by 2 February 2025 and 2 August 2025
- Regulation (EU) 2026/1744 changes in force from 27 July 2026
- Article 50 and Commission GPAI enforcement from 2 August 2026
- new Article 5 points from 2 December 2026
- legacy GPAI date of 2 August 2027
- Annex III high-risk date of 2 December 2027
- Annex I high-risk date of 2 August 2028

## Report

Produce:

- an executive status with scope and as-of date
- a role and classification inventory summary
- a deadline table showing obligation, actor, applicability, status, evidence, owner, and due date
- the five highest-priority gaps, with legal basis and practical consequence
- a 30/60/90-day remediation plan
- unresolved national or sector-law questions
- the required source note

Do not calculate an overall percentage unless the scoring method, denominator, and `not applicable` treatment are disclosed.

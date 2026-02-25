---
description: Assess your organization's EU AI Act compliance posture by deadline. Produces an executive summary, gap analysis, and prioritized action plan.
argument-hint: "[--lang de]"
---

# /ai-act-status -- EU AI Act Compliance Posture

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../CONNECTORS.md).

Assess where your organization stands with the EU AI Act. This command is a structured posture review by deadline tier with clear statuses, gap analysis, and a prioritized action plan.

**Important**: This command supports governance and compliance work but does not provide legal advice. Confirm interpretations and obligations with qualified counsel.

## Invocation

```
/ai-act-status
/ai-act-status --lang de
```

If `--lang de` is provided, ask questions and generate the report in German.

## Workflow

### Step 1: Organization Intake

Ask the user for baseline context. If they do not know, accept estimates.

1. **Organization profile**
   - Country and EU footprint
   - Size (employees, revenue) and whether SME
   - Sector (finance, healthcare, manufacturing, retail, public sector, etc.)
2. **AI systems in use**
   - How many AI systems are deployed today? (rough count)
   - Internal vs customer facing
   - Any systems used in HR, education, credit, insurance, healthcare, law enforcement, border control, justice, essential services
   - Any use of biometric identification, emotion recognition, or workplace monitoring
3. **GPAI and foundation model usage**
   - Use of third party LLM APIs
   - Use of open weights models
   - Any in house model training or fine tuning
4. **Current governance measures**
   - AI policy and acceptable use policy
   - AI inventory or register
   - Risk classification process
   - Vendor due diligence process
   - DPIA process for AI
   - Incident reporting and escalation
   - Human oversight and review processes
   - Training and AI literacy program
   - Technical documentation and logging

### Step 2: Identify urgent red flags (Prohibited practices)

Before scoring maturity, screen for prohibited practice indicators. Ask targeted questions:

- Any AI used for social scoring of individuals?
- Any AI that uses subliminal techniques or manipulative practices to materially distort behaviour and cause harm?
- Any AI exploiting vulnerabilities of children or persons with disabilities to cause harm?
- Any use of biometric categorisation or emotion recognition in workplace or education settings?
- Any use of real time remote biometric identification in public spaces by or on behalf of public authorities?

If any answers are Yes or Unclear, flag as **URGENT** and recommend immediate legal review and suspension pending assessment.

### Step 3: Assess compliance by deadline tier

For each tier, assess each area as:
- **COMPLIANT**
- **PARTIALLY COMPLIANT**
- **NON COMPLIANT**
- **NOT APPLICABLE**

Use the checklist in the `ai-act-compliance` skill.

#### Tier A: Feb 2025 (already passed)
- Prohibited practices check completed and documented
- AI literacy program in place (Art. 4) and role based
- Governance owner assigned and escalation path defined

#### Tier B: Aug 2025 (already passed)
- GPAI obligations addressed where applicable
- Procurement controls for foundation models and providers
- Transparency and documentation intake from providers
- Downstream integration risk controls

#### Tier C: Aug 2026 (upcoming)
High risk AI under Annex III obligations readiness:
- AI inventory complete with classification status
- Risk management process for high risk systems
- Data governance and quality management for training and validation data
- Technical documentation and logging
- Human oversight design and instructions for use
- Post market monitoring and incident reporting
- Conformity assessment planning and CE marking pathway (if provider)

#### Tier D: Aug 2027
High risk AI under Annex I (regulated products) readiness:
- Integration with product compliance (e.g., medical devices, machinery, vehicles)
- Coordination with notified bodies and sector regulators
- Quality management system alignment

### Step 4: Evidence and documentation check

Ask what evidence exists for each area, for example:
- AI policy, training records, inventory
- Vendor due diligence files
- DPIAs and risk assessments
- Model cards and evaluation reports
- Incident log and monitoring metrics

Record evidence gaps as action items.

### Step 5: Generate action plan

Generate a prioritized plan:
- **Urgent actions**: prohibited practice risks, high severity gaps
- **Quick wins**: low effort, high impact items
- **Major projects**: cross functional programs and tooling

For each action include:
- Owner role (legal, compliance, security, HR, product)
- Effort estimate: S, M, L (or weeks)
- Dependencies
- Target deadline tier

## Output Format

Provide the report as:

```
# EU AI Act Compliance Status Report

## Executive Summary
- Overall posture: [COMPLIANT/PARTIAL/NON COMPLIANT]
- Highest risk exposures:
- Prohibited practice indicators: [None / Present / Unclear]
- Next 30 days priorities:

## Scope and Assumptions
- Organization:
- Included systems:
- Assumptions:

## Deadline Tier Assessment

### Tier A - Feb 2025 (Prohibited practices and AI literacy)
- Prohibited practices screening: [status]
- AI literacy (Art. 4): [status]
- Governance ownership and escalation: [status]
Evidence:
Gaps:

### Tier B - Aug 2025 (GPAI)
- GPAI usage identification: [status]
- Provider documentation intake: [status]
- Downstream integration controls: [status]
Evidence:
Gaps:

### Tier C - Aug 2026 (High risk Annex III)
- Inventory and classification: [status]
- Risk management and monitoring: [status]
- Data governance: [status]
- Technical documentation and logging: [status]
- Human oversight: [status]
- Incident reporting: [status]
Evidence:
Gaps:

### Tier D - Aug 2027 (High risk Annex I regulated products)
- Product compliance integration: [status]
- Notified body readiness: [status]
- QMS alignment: [status]
Evidence:
Gaps:

## Detailed Gap Analysis
For each gap:
- Requirement:
- Current state:
- Target state:
- Risk if not addressed:
- Evidence needed:

## Prioritized Action Plan
### Urgent
1.

### Quick wins (low effort, high impact)
1.

### Major projects
1.

## Appendix
- Systems flagged for prohibited practice review:
- High risk candidates (Annex III and Annex I):
- References and evidence list:
```

## Notes

- If the organization has not built an AI inventory, recommend starting there. Most obligations become unmanageable without it.
- If any system may be high risk, recommend running `/classify-ai-risk` per system and linking results.
- If AI systems process personal data at scale, recommend running `/run-dpia` for priority systems.

---

**Important:** This assessment is an orientation tool, not legal advice. Classifications must be validated by qualified legal counsel before compliance decisions. Regulatory content last reviewed February 2026.

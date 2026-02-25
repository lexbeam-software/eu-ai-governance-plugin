---
description: Review an existing AI governance policy or draft one from scratch against EU AI Act expectations
argument-hint: "[policy file or text] [--draft] [--lang en|de]"
---

# /review-ai-policy - Review or Draft an AI Governance Policy

Review an existing AI governance policy or draft one from scratch. Every organization deploying AI in the EU needs a policy that sets governance expectations, roles, lifecycle controls, and risk management practices.

If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../CONNECTORS.md).

Important: This command supports governance and compliance workflows but does not provide legal advice. Ensure final policies are approved by legal, compliance, security, HR, and relevant business leadership.

## Invocation

```
/review-ai-policy [policy file or text] [--draft] [--lang en|de]
```

## Workflow

### Step 1 - Determine mode

Ask the user:
- Do you want to review an existing policy, or draft from scratch?

If the user provides a policy document or pasted text, run in review mode.

If the user says draft from scratch or uses `--draft`, run in drafting mode.

### Step 2 - Gather organizational context

Ask for the minimum context needed to tailor the policy.

1. Organization profile
   - Size (employees, geography)
   - Sector and regulated status (for example finance, health, critical infrastructure)
   - Works council presence (especially DACH)

2. AI footprint
   - Number of AI systems and typical use cases
   - In-house developed vs. vendor-provided vs. GPAI based
   - Data sensitivity profile (personal data, special categories, trade secrets)

3. Governance preferences
   - Risk appetite (conservative, balanced, growth)
   - Existing governance standards (ISO 27001, ISO 9001, SOC 2, ISO 42001 aspirations)
   - Approval expectations (who signs off what)

4. Constraints
   - Policy must fit on a certain number of pages?
   - Target audience (staff, engineering, leadership)

Proceed with assumptions if context is partial. List assumptions.

## Review mode

### Step 3A - Assess the policy against requirements and best practices

Assess the policy against:
- EU AI Act expectations for deployers and providers (as applicable)
- AI-specific risk management practices
- Sector-specific expectations (if sector is provided)
- Fit to the organization context and risk appetite

Use GREEN, YELLOW, RED to rate each section:
- GREEN - Adequate and implemented
- YELLOW - Partially adequate or missing detail
- RED - Missing, unclear, or inconsistent with obligations

### Step 4A - Provide a prioritized gap list

For each gap:
- Why it matters
- Suggested policy language or structure
- Owner to implement and timeline

### Step 5A - Produce a redlined improvement plan

Provide:
- Recommended edits, additions, and removals
- Suggested implementation steps (procedures, registers, training)

## Drafting mode

### Step 3B - Confirm policy scope and applicability

Clarify whether the policy covers:
- Internal development and deployment
- Procurement and use of third-party AI tools
- Employee use of generative AI
- Subsidiaries, contractors, and affiliates

### Step 4B - Generate a complete policy

Generate a comprehensive policy with the sections below, tailored to the context.

Include:
- Clear definitions (AI system, GPAI, high-risk, personal data)
- Roles and RACI-style responsibilities
- Required artifacts (inventory entry, risk assessment, DPIA, vendor assessment)
- Minimum control requirements by risk tier
- Training and compliance expectations

## Required policy sections

When reviewing or drafting, ensure these sections exist.

1. Purpose and scope
2. Governance structure
   - Roles: AI Officer, DPO, Ethics Board or equivalent
   - Decision rights and escalation paths
3. AI system lifecycle management
   - Procurement
   - Development
   - Deployment
   - Monitoring
   - Decommission
4. Risk classification process
   - Prohibited practices screening
   - High-risk classification logic
   - Limited risk and transparency cases
5. Human oversight requirements
   - Oversight roles, training, intervention, appeals
6. Transparency and explainability commitments
   - User notices and internal transparency
7. Data governance for AI
   - Training data
   - Inference data
   - Output data
   - Data minimization, retention, and access controls
8. Bias monitoring and fairness
   - Testing, metrics, escalation
9. Incident management and reporting
   - Classification, response, logging, regulator notifications as applicable
10. Third-party AI and vendor management
    - Due diligence, contractual controls, monitoring
11. Employee AI usage guidelines
    - Acceptable use
    - Generative AI policy
    - Handling confidential and personal data
12. Training and AI literacy
    - Role-based training and tracking
13. Review and update cadence
    - Policy review cycle and triggers

## Output format

### Review output structure

```
## AI Governance Policy Review

**Document**: [name]
**Mode**: Review
**Language**: [en/de]
**Context used**: [summary]

## Executive summary

## Section-by-section assessment

### 1. Purpose and scope - [GREEN/YELLOW/RED]
- Findings:
- Recommendations:

[repeat]

## Top gaps (prioritized)
1.
2.
3.

## Suggested policy text (ready to copy)

## Implementation plan
- Quick wins (30 days)
- Medium term (90 days)
- Longer term (6 to 12 months)
```

### Draft output structure

```
# AI Governance Policy

## 1. Purpose and scope
## 2. Definitions
## 3. Governance structure and roles
## 4. AI system lifecycle controls
## 5. Risk classification and approvals
## 6. Human oversight
## 7. Transparency and explainability
## 8. Data governance
## 9. Bias and fairness
## 10. Monitoring and KPIs
## 11. Incident management
## 12. Third-party and vendor management
## 13. Employee AI use
## 14. Training and AI literacy
## 15. Auditability and documentation
## 16. Exceptions process
## 17. Review cadence and version history
```

## Language support

### `--lang de`

When `--lang de` is set:
- Produce a German policy suitable for internal distribution in Germany.
- Use German role titles where appropriate and include a note on works council involvement where relevant.
- If the organization operates across the EU, keep key defined terms aligned with the EU AI Act terminology.

---

**Important:** This assessment is an orientation tool, not legal advice. Classifications must be validated by qualified legal counsel before compliance decisions. Regulatory content last reviewed February 2026.

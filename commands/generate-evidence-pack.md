---
description: Compile AI governance documentation into an auditor-ready evidence pack (EU AI Act, GDPR, ISO 42001)
argument-hint: "[--systems all|<name>|category:<category>] [--format document|folder|summary] [--lang en|de]"
---

# /generate-evidence-pack - AI Governance Evidence Pack

Compile governance documentation for auditors, regulators, internal audit, board reporting, or certification preparation. This is the "show your work" command.

If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../CONNECTORS.md).

Important: This command helps assemble and structure evidence. It does not provide legal advice. Regulatory expectations vary by sector and Member State. Validate final materials with qualified counsel and relevant assurance teams.

## Invocation

```
/generate-evidence-pack [--systems all|<name>|category:<category>] [--format document|folder|summary] [--lang en|de]
```

## Inputs to request from the user

Ask the user these questions before compiling the pack.

1. Purpose
   - Internal audit
   - Regulatory inspection
   - Board reporting
   - Certification preparation (for example ISO 42001)

2. Scope
   - Which AI systems to cover?
     - All systems
     - Specific system(s)
     - A category (for example HR, customer support, credit, marketing, safety, medical)

3. Audience and constraints
   - Who is the audience and what is the deadline?
   - Any confidentiality constraints or redaction requirements?
   - Preferred output format
     - Single document
     - Folder structure
     - Summary report

4. Language
   - Default: English
   - If `--lang de`: generate German output suitable for German regulatory inspections

Proceed with reasonable assumptions if the user answers partially. Clearly list assumptions.

## Evidence sources to gather from workspace

Search the workspace for relevant artifacts. Prefer organization-provided documents first, then templates.

Target sources include:
- AI system inventory or register
- Risk classifications (EU AI Act classification, prohibited, high-risk, limited risk)
- DPIAs and fundamental rights impact assessments (if maintained)
- Vendor and model provider assessments (contracts, DPAs, SCCs, security reports)
- Policies and procedures (AI governance policy, risk management procedure, incident response)
- AI literacy training records and plans
- Monitoring and testing evidence (metrics, logs, evaluation reports)
- Incident log and corrective action records (if maintained)
- Change log and version history for models, prompts, data, and controls

If specific files are missing, capture the gap rather than failing.

## Workflow

### Step 1 - Confirm purpose and scope

- Confirm purpose, scope, format, and language.
- Identify systems and owners.
- If the user requests "all systems", confirm whether to include experimental or internal prototypes.

### Step 2 - Locate and index evidence

Build an evidence index that records for each artifact:
- Document title
- System(s) covered
- Owner
- Date
- Version
- Location in workspace
- Confidentiality classification

### Step 3 - Build the evidence pack structure

Generate an evidence pack with the sections below.

If `--format folder` is selected, produce files per section and include a top-level index.

If `--format document` is selected, produce a single consolidated report with appendices.

If `--format summary` is selected, produce an executive-level summary plus a short evidence index.

### Step 4 - Write "gaps identified" and recommendations

For each missing or weak area, include:
- What is missing
- Why it matters (which obligation or governance objective)
- Risk if not addressed
- Recommendation with an owner and target date

### Step 5 - Final readiness check

- Ensure each system has at least: classification, oversight, transparency artifacts, risk controls, and incident pathway.
- Ensure evidence index is consistent and dated.

## Evidence pack content (required sections)

### 1. Executive summary of governance posture

Include:
- Purpose, scope, period covered
- Overall posture (maturity and coverage)
- Headline risks and key mitigations
- Open gaps and remediation plan summary
- Where to find underlying evidence (index)

### 2. AI system inventory with risk classifications

For each system, include:
- System name and identifier
- Business owner and technical owner
- Use case and user group
- AI Act classification and rationale
- Deployment status (pilot, production, retired)
- Material vendors and model providers

### 3. Compliance status per system per obligation

Provide a per-system obligations map and status.

At minimum, cover:
- AI Act documentation and recordkeeping (for example technical documentation and logs)
- Transparency and user information duties
- Human oversight arrangements
- Risk management and post-market monitoring
- Incident management and reporting pathways
- Vendor and supply chain controls

Use a simple status rubric:
- Implemented
- Partially implemented
- Planned
- Not implemented
- Not applicable

### 4. DPIA summaries

For each DPIA, include:
- Processing overview and purposes
- Data categories and data flows
- Risks to data subjects
- Measures and residual risk
- Sign-offs and dates

### 5. Vendor assessment summaries

For each key vendor or model provider, include:
- Service description and role split (provider, deployer, importer, distributor)
- Contractual controls and gaps
- GDPR and transfer safeguards (DPA, SCCs, TIA)
- Security and resilience evidence (SOC 2, ISO 27001, pen test summaries)

### 6. AI literacy training records and plans

Include:
- Training policy and cadence
- Role-based training plan (developers, deployers, customer-facing)
- Evidence of completion (dates, attendees, coverage)
- Plan to close training gaps

### 7. Incident log (if maintained)

Include:
- Incident register summary (counts, severity bands)
- Selected incident narratives (redacted if needed)
- Corrective and preventive actions
- Reporting workflow and escalation criteria

If no incident log exists, state that explicitly and recommend a minimum incident register.

### 8. Governance policy and procedures

Include:
- AI governance policy
- Risk management procedure
- Vendor management procedure
- Model and prompt change management
- Documentation and record retention policy

### 9. Human oversight arrangements

For each system:
- Oversight roles and training
- Intervention mechanisms
- Override, appeal, and fallback procedures
- Monitoring triggers and stop conditions

### 10. Change log and version history

Include:
- Model versions and release notes
- Prompt and configuration changes
- Data and feature changes
- Control changes and approvals

## Output templates

### Option A - Single document outline

```
# AI Governance Evidence Pack

## 0. Cover page
## 1. Executive summary
## 2. Scope and methodology
## 3. AI system inventory and classification
## 4. Compliance status by system and obligation
## 5. DPIA summaries
## 6. Vendor assessment summaries
## 7. AI literacy training
## 8. Incidents and corrective actions
## 9. Governance policies and procedures
## 10. Human oversight
## 11. Change log and version history
## 12. Gaps identified and recommendations

## Appendix A - Evidence index
## Appendix B - Key artifacts (links)
```

### Option B - Folder structure

```
Evidence-Pack/
  00-Index.md
  01-Executive-Summary.md
  02-AI-Inventory-and-Classification.md
  03-Compliance-Status.md
  04-DPIA-Summaries/
  05-Vendor-Assessments/
  06-AI-Literacy-Training.md
  07-Incident-Log.md
  08-Policies-and-Procedures/
  09-Human-Oversight.md
  10-Change-Log.md
  11-Gaps-and-Recommendations.md
  Appendices/
    Evidence-Index.csv
    Evidence-Index.md
```

### Option C - Summary report

```
# AI Governance Evidence Pack - Summary

## Executive summary
## Coverage overview (systems and period)
## Top gaps and remediation plan
## Evidence index (high level)
```

## Language support

### `--lang de`

When `--lang de` is set:
- Produce German section headings and German narrative suitable for German regulator or internal audit.
- Keep references to AI Act articles in the original numbering format.
- If a source document is in English, note "Quelle auf Englisch" and provide a German summary.

## Notes and guardrails

- Clearly separate facts (what documents show) from assumptions.
- Do not invent evidence. If something is missing, list it as a gap.
- Avoid copying sensitive personal data into the evidence pack. Prefer summaries and references to source locations.
- If the audience is a regulator, prioritize traceability, sign-offs, and versioning.

---

**Important:** This assessment is an orientation tool, not legal advice. Classifications must be validated by qualified legal counsel before compliance decisions. Regulatory content last reviewed February 2026.

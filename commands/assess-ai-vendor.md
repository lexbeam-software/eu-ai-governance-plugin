---
description: Review an AI vendor or provider relationship against EU AI Act deployer obligations, GDPR and DPA requirements, and enterprise governance standards
argument-hint: "<contract, DPA, terms, technical documentation, or pasted text>"
---

# /assess-ai-vendor - AI Vendor Assessment (EU AI Act Deployer)

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../CONNECTORS.md).

Review an AI vendor or provider contract and operating model against EU AI Act deployer obligations, GDPR and DPA requirements, and enterprise governance controls. The typical user is the deployer, meaning the organization using the AI system.

## Invocation

```
/assess-ai-vendor
```

## Workflow

### Step 1: Accept Vendor Documentation

Accept the vendor materials in any of these formats:
- File upload: contract, order form, DPA, terms of service, security addendum, acceptable use policy
- URL: vendor trust center, model card, technical documentation, SCCs, sub-processor list, incident reporting pages
- Pasted text: relevant clauses or excerpts

If no documentation is provided, prompt the user to supply at least:
- The main services agreement or terms
- The DPA (if personal data is involved)
- Any AI specific documentation (model card, system card, technical or compliance documentation)

### Step 2: Gather Context (Ask Before Assessing)

Ask targeted questions. If the user cannot answer all of them, proceed with assumptions and list what is unknown.

1. AI system or service name and vendor
2. Use case and users
   - What business process will it support?
   - Who will use it, and who will be affected?
   - Will outputs be used to make or support decisions about people?
3. Risk classification and scope
   - Do you believe this is high-risk under the EU AI Act (Annex III) or a safety component?
   - Is it a GPAI model, a wrapped application, or a managed service?
4. Data and integration
   - What data is sent for inference (personal data, special categories, confidential information)?
   - Will the vendor use your inputs or outputs for training or model improvement?
   - What integrations exist (SSO, logs, support tickets, analytics)?
5. Provider location and hosting
   - Where is the vendor established?
   - Where does the model run (inference region) and where are logs stored?
   - Any sub-processors outside the EEA?
6. Operational posture
   - Is the system monitored in production?
   - Who is responsible for human oversight and final decisions?
   - Is there an incident reporting path for serious incidents and malfunction?

### Step 3: Assess Against Three Dimensions

Perform the assessment across these dimensions and produce findings with GREEN, YELLOW, or RED flags.

#### A) EU AI Act - Deployer Obligations (Article 26)

Evaluate whether the deployer can meet obligations based on what the vendor provides:
- Conformity documentation access: instructions for use, conformity assessment outputs, EU declaration of conformity where applicable, technical documentation or sufficient summaries
- Transparency information: information needed to inform affected persons and users, including appropriate labeling and limitations
- Human oversight: whether oversight measures are defined by the provider and are operationally implementable by the deployer
- Input data governance: whether the system supports using input data that is relevant and sufficiently representative for the intended purpose
- Monitoring and logging: whether the vendor enables usage monitoring, logging, and post market monitoring support
- Serious incident reporting and corrective actions: whether there is a process, timelines, and information exchange obligations
- Fundamental rights impact assessment: whether the deployer has the information needed to perform it when required

#### B) GDPR and DPA Requirements for AI

Assess privacy and data protection readiness for both training and inference contexts:
- Lawful basis and purpose limitation: clarity on purposes and whether inputs or outputs are used for training or improvement
- Data subject rights: practical ability to handle access, deletion, objection, and rectification for logs, prompts, and outputs
- Sub-processor chain: transparent list, change notification, and objection rights
- Cross-border transfers: hosting locations, transfer mechanism, and Schrems II supplementary measures where needed
- Retention and deletion: retention periods for prompts, outputs, logs, and backups, plus deletion commitments

#### C) Enterprise Governance and Commercial Risk

Evaluate whether the vendor relationship is governable at enterprise scale:
- SLAs: availability, latency, performance, and support response times
- Quality and safety: accuracy expectations, evaluation methods, and limitations disclosures
- Model versioning and change notification: advance notice, release notes, deprecation policy, and ability to pin versions
- Audit and transparency: audit rights, third party reports (SOC 2, ISO 27001), security testing, and meaningful transparency into model behavior and limitations
- Liability and indemnities: allocation for regulatory fines, IP infringement, data protection breaches, and harm caused by outputs
- Insurance: cyber and professional liability coverage amounts and evidence
- Exit and portability: termination assistance, data export formats, deletion attestation, and migration support

### Step 4: Flag System (GREEN, YELLOW, RED)

Classify each issue using the same three tier pattern used in contract review workflows:

- GREEN - acceptable, low risk, or already covered
- YELLOW - negotiate, add controls, or clarify
- RED - escalate, block go live, or require executive sign off

### Step 5: Generate Redline Suggestions

For each YELLOW or RED item, provide contract language proposals:
- Current language - quote the relevant clause text
- Suggested redline - replacement text or an added clause
- Rationale - short explanation suitable for sharing with the vendor
- Fallback position - a commercially reasonable compromise if the vendor refuses

If the documentation is incomplete, write placeholder redlines that request the missing information and commitments.

### Step 6: Risk Summary With Top 3 Action Items

Conclude with:
- Overall risk rating and decision recommendation (proceed, proceed with conditions, do not proceed yet)
- Top 3 action items
- What evidence should be collected for audit readiness

## Output Format

Structure the output as:

```
## AI Vendor Assessment Summary

**Vendor**: [name]
**Service / AI system**: [name]
**Use case**: [short]
**Your role**: Deployer
**Risk classification (assumed or confirmed)**: [high-risk / limited-risk / minimal-risk / unknown]
**Deployment location**: [EEA / non-EEA / mixed]
**Data in scope**: [types of data]

## Key Findings (Top Issues)

1. [Issue] - [GREEN/YELLOW/RED] - [one line impact]
2. [Issue] - [GREEN/YELLOW/RED] - [one line impact]
3. [Issue] - [GREEN/YELLOW/RED] - [one line impact]

## EU AI Act - Deployer Obligations (Article 26)

### [Topic] - [GREEN/YELLOW/RED]
**What the vendor provides**: [evidence]
**Gap or risk**: [what is missing]
**Deployer obligation impact**: [why it matters]
**Redline suggestion**: [if YELLOW or RED]

## GDPR and DPA Assessment

### [Topic] - [GREEN/YELLOW/RED]
[Same structure]

## Enterprise Governance and Commercial Terms

### [Topic] - [GREEN/YELLOW/RED]
[Same structure]

## Proposed Redlines (Consolidated)

- [Clause title] - [redline text]

## Risk Summary and Next Steps

**Overall risk**: [Low / Medium / High]
**Recommendation**: [Proceed / Proceed with conditions / Do not proceed yet]

**Top 3 action items**:
1. ...
2. ...
3. ...

**Evidence to collect**:
- [list]
```

## Notes

- If the vendor contract is very long, offer to focus first on the most material items: data use for training, audit rights, incident reporting, liability, and change management.
- Always remind the user that this is not legal advice and should be reviewed by qualified counsel.

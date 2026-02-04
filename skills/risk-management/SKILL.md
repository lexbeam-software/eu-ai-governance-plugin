---
name: risk-management
description: AI-specific risk management taxonomy, assessment method, controls, monitoring KPIs, and incident response aligned to enterprise risk frameworks.
---

# Risk Management Skill

You help teams identify, assess, mitigate, monitor, and respond to AI-specific risks across the AI system lifecycle.

Important: You support risk management work but do not provide legal advice. Use this as a structured reference and adapt it to the organization risk appetite and sector obligations.

## 1. AI risk taxonomy

Use this taxonomy to structure risk identification and to populate a risk register.

Core AI risk categories:
- Bias and discrimination risk
  - Disparate impact, proxy variables, representation bias
- Hallucination and misinformation risk
  - Fabricated facts, unverifiable outputs, citation errors
- Privacy and data protection risk
  - Personal data exposure, re-identification, unlawful processing
- Security risk
  - Prompt injection, data exfiltration, model theft, supply chain compromise
- Safety risk
  - Physical or psychological harm, unsafe recommendations, misuse
- Accountability and governance risk
  - Unclear ownership, lack of approvals, missing audit trail
- Transparency and explainability risk
  - Inadequate user notices, inability to explain decisions, opacity of limitations
- Reliability and performance risk
  - Drift, degraded accuracy, brittleness, failure under edge cases
- Legal and regulatory risk
  - Misclassification under the AI Act, non-compliance with deployer duties, sector regulation
- Operational and business continuity risk
  - Vendor outages, dependency lock-in, lack of fallback

## 2. Risk assessment methodology for AI systems

### 2.1 Define the assessment unit

Assess at a useful granularity:
- System level (product or internal tool)
- Model level (foundation model, fine-tune, classifier)
- Feature level (a specific automated decision or recommendation)

### 2.2 Likelihood x impact matrix

Score each risk using likelihood and impact and document rationale.

Likelihood (1 to 5):
- 1 Remote
- 2 Unlikely
- 3 Possible
- 4 Likely
- 5 Almost certain

Impact (1 to 5) with AI specific criteria:
- 1 Negligible - minor user inconvenience, no sensitive data, no regulatory concern
- 2 Low - limited internal impact, reversible harm, minimal user exposure
- 3 Moderate - material user impact, potential complaints, measurable operational disruption
- 4 High - significant harm potential, sensitive data exposure, likely regulatory attention
- 5 Critical - severe harm, systemic discrimination, major breach, enforcement likely

Risk score = Likelihood x Impact

Risk bands (example):
- 1 to 4 - GREEN
- 5 to 9 - YELLOW
- 10 to 15 - ORANGE
- 16 to 25 - RED

### 2.3 Inherent vs residual risk

For each risk:
- Inherent risk: before controls
- Controls: preventive and detective measures
- Residual risk: after controls
- Acceptance: who accepts residual risk and under what conditions

### 2.4 AI Act linkage

When relevant, include:
- AI Act risk tier and obligation mapping
- Human oversight expectations
- Logging and traceability expectations
- Transparency duties

## 3. Standard control catalog for AI risks

Use this control catalog as a baseline. Select controls based on risk tier and context.

Governance and lifecycle controls:
- AI inventory entry with owner, purpose, and classification
- Risk assessment and DPIA triggers defined and followed
- Approval gates for procurement, launch, and major changes
- Document control, versioning, and evidence retention

Data and privacy controls:
- Data minimization and purpose limitation
- Dataset documentation (sources, licenses, quality checks)
- PII handling rules for prompts and outputs
- Access controls and secrets management
- Retention schedule and deletion workflows

Model and output quality controls:
- Pre-deployment evaluation plan and acceptance criteria
- Bias testing and subgroup analysis where appropriate
- Robustness testing and adversarial testing
- Guardrails: refusal rules, content filters, policy prompts
- Human in the loop review for sensitive decisions
- Explainability artifacts: model cards, limitations, confidence cues

Security controls:
- Threat modeling for LLM usage and AI pipelines
- Prompt injection defenses and output sanitization
- Isolation of tools and least privilege for agents
- Supply chain risk management for models and dependencies
- Incident detection for anomalous usage and exfiltration

Operational controls:
- Monitoring for drift, performance, and safety regressions
- Canary releases and rollback procedures
- Fallback modes and business continuity plans
- Vendor SLAs and exit plans

## 4. Monitoring and KPI framework for AI systems in production

Define KPIs by risk category and system purpose. Tie KPIs to alert thresholds and response actions.

Suggested KPI families:
- Quality and performance
  - Accuracy, precision, recall, calibration where applicable
  - Task success rate, user satisfaction, deflection rates
- Safety and misuse
  - Rate of policy violations, unsafe outputs, blocked attempts
  - Red team findings and closure rate
- Fairness
  - Disparity metrics by subgroup, equalized odds proxies, false positive disparity
- Reliability
  - Latency, timeouts, error rates, vendor outage minutes
- Security
  - Prompt injection attempts detected, tool abuse events, secrets exposure attempts
- Privacy
  - PII leakage rate, DSAR related incidents, retention policy exceptions
- Oversight
  - Human review rate, override rate, appeal rate, time to resolution

Monitoring operating model:
- Define owners for each KPI
- Define review cadence (daily, weekly, monthly)
- Define stop conditions and rollback criteria
- Maintain a monitoring report archive as evidence

## 5. Incident classification and response for AI-related incidents

### 5.1 Incident classes

Classify incidents to drive consistent response:
- Model behavior incident
  - Unsafe output, hallucination causing harm, policy violation
- Bias and fairness incident
  - Evidence of discriminatory outcomes
- Security incident
  - Prompt injection leading to unauthorized action, exfiltration, model theft
- Privacy incident
  - Personal data leakage, unlawful data use
- Compliance incident
  - Use outside approved scope, missing transparency notice, logging failure
- Vendor incident
  - Provider outage, breach, material change without notice

### 5.2 Severity tiers

Example severity tiers:
- SEV 1 - Critical harm, major breach, enforcement likely
- SEV 2 - Significant user harm potential or sensitive data exposure
- SEV 3 - Limited impact, contained, reversible
- SEV 4 - Near miss or low impact issue

### 5.3 Response playbook

For each incident:
- Detect and triage
- Contain and mitigate
- Preserve evidence (logs, prompts, outputs)
- Notify internal stakeholders (security, DPO, legal, business owner)
- Decide on external notifications where required
- Root cause analysis and corrective actions
- Post-incident review and control improvements

Maintain an incident register that links to:
- Timeline
- Impact assessment
- Communications
- Fixes and prevention

## 6. Connection to enterprise risk management frameworks

Position AI risk management as an extension of existing ERM.

ISO 31000 alignment:
- Establish context - AI scope, stakeholders, risk criteria
- Risk assessment - identify, analyze, evaluate
- Risk treatment - select controls, accept, avoid, transfer
- Communication and consultation - cross-functional governance
- Monitoring and review - KPIs, audits, management review

COSO alignment:
- Governance and culture - roles, accountability, ethics
- Strategy and objective setting - risk appetite for AI use
- Performance - risk identification, assessment, response
- Review and revision - incident learnings and drift monitoring
- Information, communication, reporting - evidence packs and board reporting

Practical integration tips:
- Use the same risk register format and scoring conventions where possible
- Add AI-specific categories, controls, and KPIs
- Ensure Board risk reporting includes AI systems and material incidents

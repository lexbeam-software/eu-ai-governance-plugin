---
name: dpia-ai
description: Run and review AI specific DPIAs. Use for GDPR Art. 35 DPIA triggers, AI risk assessment (bias, explainability, automation), and documenting mitigations and consultation steps. Supports AI Act aligned fundamental rights impact considerations.
---

# DPIA for AI Systems Skill

You help teams run Data Protection Impact Assessments (DPIAs) for AI systems. You cover GDPR Article 35 requirements and add AI specific sections that align with EU AI Act governance expectations.

**Important**: You support compliance work but do not provide legal advice. DPIAs must be reviewed and approved by the DPO or qualified counsel.

## 1. When is a DPIA mandatory?

### GDPR Article 35 mandatory triggers
A DPIA is required where processing is likely to result in a **high risk** to rights and freedoms of natural persons. Common triggers include:

- **Systematic and extensive evaluation** of personal aspects based on automated processing, including profiling, where decisions produce legal effects or similarly significantly affect individuals
- **Large scale processing** of special categories of data (GDPR Art. 9) or personal data relating to criminal convictions and offenses (GDPR Art. 10)
- **Systematic monitoring** of publicly accessible areas on a large scale

Additional DPIA indicators (from supervisory authority guidance) often include:
- New technology or novel use of existing technology
- Matching or combining datasets
- Processing of vulnerable persons (children, employees, patients)
- Inference of sensitive attributes
- Processing that prevents data subjects from exercising rights or accessing services

Practical approach:
- If two or more high risk criteria apply, a DPIA is usually expected.
- Check your national supervisory authority lists for processing operations that require a DPIA.

### AI Act aligned triggers to treat as DPIA escalation signals
The EU AI Act does not replace GDPR DPIAs, but high risk AI use and fundamental rights exposure should be treated as DPIA escalation signals. In particular, escalate DPIA rigor when:

- The AI system may be **high risk** under Annex III (common sectors include employment, education, essential private and public services, law enforcement, migration, and administration of justice)
- The system is used for **biometric identification or categorisation**, emotion recognition, or workplace monitoring
- The system could materially affect fundamental rights such as non discrimination, dignity, privacy, and freedom of expression
- A GPAI or foundation model is integrated and the deployer relies on provider transparency and downstream risk controls

## 2. DPIA template structure with AI specific sections

A DPIA for an AI system should include at least:

1. **Administrative information**: owner, scope, versioning, reviewers, DPO consultation record
2. **Systematic description of processing** (GDPR Art. 35(7)(a))
3. **Necessity and proportionality** (GDPR Art. 35(7)(b))
4. **Risk assessment** to rights and freedoms (GDPR Art. 35(7)(c))
5. **Measures and safeguards** (GDPR Art. 35(7)(d))
6. **Residual risk decision and approvals**

AI specific additions that should be separate sections:
- Training and fine tuning data assessment (sources, representativeness, bias checks)
- Transparency and explainability evaluation (what can be explained to whom, traceability)
- Automated decision making assessment (GDPR Art. 22) and safeguards
- Fundamental rights impact considerations (AI Act aligned)
- Feedback loops, drift, and emergent behaviour risks
- Security of AI pipeline (prompt injection, data leakage, poisoning)

## 3. Risk matrix (likelihood x severity) with AI specific risk categories

Use a simple matrix to keep DPIAs consistent and auditable.

### Scales
- Likelihood: Low, Medium, High
- Severity: Low, Medium, High

### Example matrix

| Severity \\ Likelihood | Low | Medium | High |
|---|---|---|---|
| Low | Low | Low to Medium | Medium |
| Medium | Low to Medium | Medium | High |
| High | Medium | High | Very High |

### AI specific risk categories (add to standard privacy risks)
- Bias and discrimination (protected characteristics, proxy discrimination)
- Automated decision making impacts (legal or similarly significant effects)
- Lack of explainability and contestability
- Unreliable outputs (hallucinations, unsafe recommendations)
- Sensitive attribute inference and profiling
- Data leakage (memorization, training data extraction)
- Security attacks (prompt injection, model inversion, poisoning)
- Manipulation and undue influence (dark patterns, targeted persuasion)
- Feedback loops and drift that increase harm over time
- Over reliance by operators (automation bias)

## 4. Common AI risks and standard mitigation measures

### Common risks
- Disparate impact in hiring, performance management, or credit like decisions
- Use of employee data without appropriate transparency or works council process
- Inference of health or other sensitive attributes from seemingly benign data
- Users treating probabilistic outputs as facts
- Lack of meaningful human review where outcomes significantly affect individuals
- Training or fine tuning on data with unclear legal basis or licensing

### Standard mitigations (map to identified risks)

Technical controls:
- Data minimization and strict retention limits for prompts, logs, and outputs
- Pseudonymization and encryption, least privilege access
- Differential privacy or privacy preserving methods where feasible
- Evaluation datasets for bias, performance, and safety
- Explainability tooling and decision trace logs
- Confidence thresholds and abstain mechanisms
- Content filtering, jailbreak and prompt injection defenses
- Red teaming and adversarial testing

Organizational controls:
- Clear accountability (RACI) and human oversight design
- Training and AI literacy for users and reviewers
- Escalation paths for complaints and incidents
- Periodic re assessment (model updates, drift monitoring)
- Vendor governance: contractual transparency, audit rights, incident notification

## 5. Supervisory authority guidance on AI DPIAs

Key guidance sources to reference during DPIA work:

- **EDPB Guidelines on DPIAs**: criteria for likely high risk processing and how to structure DPIAs
- **Article 29 Working Party guidance (historical, still referenced)**: risk criteria and examples
- **German DSK** guidance and processing activity lists: DPIA triggers and expectations for documentation
- National supervisory authority examples and blacklists of processing that require DPIAs

Practical note:
- Authorities typically expect DPIAs to show specific data flows, concrete safeguards, and a residual risk decision. Generic statements are a common audit finding.

## 6. Connection between DPIA and AI Act fundamental rights impact assessment

Many organizations combine or tightly link:
- GDPR DPIA (privacy and data protection focus)
- AI Act aligned fundamental rights assessment (broader rights and societal impacts)

Good practice:
- Use the DPIA risk register as the central log.
- Add a fundamental rights layer that maps each risk to the right impacted and the mitigation and monitoring plan.
- If the system may be high risk under the AI Act, link to classification results and high risk obligations (risk management, technical documentation, logging, human oversight, quality management).

## 7. Documentation requirements for regulatory inspection

Maintain DPIA artifacts so they are inspection ready:

- Final DPIA with version history and sign offs
- Evidence of DPO consultation and outcomes
- Data flow diagrams and records of processing activities (GDPR Art. 30)
- Processor contracts and Art. 28 clauses, sub processor list
- Security documentation: threat model, TOMs, pen test or red team summaries
- Model documentation: model card, dataset documentation, evaluation results
- Bias and performance test reports and monitoring metrics
- Records of changes: model updates, prompt changes, retraining events
- Incident log and complaint handling records
- If applicable, prior consultation package for supervisory authority (GDPR Art. 36)

Operating principle:
- Separate facts, assumptions, and decisions. Regulators look for traceability.

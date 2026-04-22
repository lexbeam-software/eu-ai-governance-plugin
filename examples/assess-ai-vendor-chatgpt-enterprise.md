# Example: /assess-ai-vendor, ChatGPT Enterprise Deployment

> This is a sample output showing what the `/assess-ai-vendor` command produces. The company, contract details, and specifics below are fictional.

---

## AI Vendor Assessment Summary

**Vendor**: OpenAI (OpenAI, L.L.C.)
**Service / AI system**: ChatGPT Enterprise
**Use case**: Internal knowledge assistant for legal, HR, and finance teams, document summarization, Q&A, drafting
**Your role**: Deployer
**Risk classification (assumed)**: Minimal-risk (general-purpose assistant); potentially limited-risk (chatbot transparency obligations)
**Deployment location**: EEA (Germany, Netherlands)
**Data in scope**: Internal documents (confidential), employee names and emails, occasional personal data in HR queries

---

## Key Findings (Top Issues)

| # | Issue | Flag | Impact |
|---|-------|------|--------|
| 1 | Training data opt-out not contractually guaranteed for all input types | RED | Risk that confidential business data and personal data are used for model improvement without explicit, verifiable opt-out |
| 2 | Sub-processor list changes on 30 days notice; no objection right | YELLOW | Deployer cannot effectively control cross-border data flows; Schrems II supplementary measures may be insufficient |
| 3 | No AI Act-specific documentation provided (model card, risk management, conformity) | YELLOW | Deployer cannot demonstrate compliance with downstream AI Act obligations if system is reclassified |

---

## EU AI Act, Deployer Obligations (Article 26)

### Transparency to users, YELLOW
**What the vendor provides**: ChatGPT interface displays "ChatGPT" branding; users are aware they interact with AI.
**Gap or risk**: No formal transparency notice template for employees. Deployer must ensure users understand AI limitations, that outputs may be inaccurate, and that the system should not be used for decisions with legal effect without human review.
**Deployer obligation impact**: Article 50 requires transparency when persons interact with an AI system. Article 26(11) requires informing affected persons about high-risk systems (if reclassified).
**Redline suggestion**: Add internal acceptable use policy with mandatory AI disclosure; require vendor to provide a standard transparency notice template.

### Human oversight, GREEN
**What the vendor provides**: Outputs are advisory only. No automated decisions. Users copy-paste or adapt outputs.
**Gap or risk**: Low, as long as organizational controls prevent employees from treating ChatGPT outputs as authoritative without review.
**Deployer obligation impact**: Adequate for minimal-risk classification. If any use case escalates to high-risk (e.g., HR using it for employment decisions), human oversight design must be formalized.

### Conformity and technical documentation, YELLOW
**What the vendor provides**: System card published on OpenAI website. SOC 2 Type II report available under NDA. No EU AI Act-specific conformity documentation.
**Gap or risk**: If any downstream use case triggers high-risk classification, the deployer will need provider documentation per Articles 11-13. OpenAI does not currently provide this in a structured format.
**Deployer obligation impact**: Article 26(1) requires deployers to use systems in accordance with instructions for use. Without structured documentation, this is difficult to demonstrate.
**Redline suggestion**: Add contractual clause: "Provider shall, upon reasonable request, provide documentation necessary for Deployer to meet its obligations under Regulation (EU) 2024/1689, including but not limited to technical documentation summaries and instructions for use."

### Incident reporting, YELLOW
**What the vendor provides**: OpenAI status page and security incident notification per DPA.
**Gap or risk**: No AI-specific incident reporting pathway. No commitment to notify deployers of model behavior incidents (hallucinations, safety filter failures, unexpected outputs) as distinct from security/privacy incidents.
**Deployer obligation impact**: Article 26(5) requires deployers to monitor and report malfunctions to the provider. A two-way incident pathway is needed.
**Redline suggestion**: Add clause: "Provider shall notify Deployer within 72 hours of becoming aware of any material safety incident, systematic malfunction, or significant capability change affecting the Service."

---

## GDPR and DPA Assessment

### Data use for training, RED
**What the vendor provides**: Enterprise agreement states "OpenAI does not train on your business data." API Terms confirm zero-retention for API. However, the ChatGPT Enterprise-specific terms reference "product improvement" with an opt-out mechanism.
**Gap or risk**: Ambiguity between "training" and "product improvement." If any processing of inputs occurs beyond immediate inference, this may constitute a new purpose under GDPR. The opt-out mechanism is a toggle in admin settings, not a contractual guarantee.
**Deployer obligation impact**: GDPR Article 5(1)(b) purpose limitation. If data is used beyond the agreed purpose, the deployer's lawful basis is undermined.
**Redline suggestion**: Replace toggle-based opt-out with contractual prohibition: "Provider shall not process Customer Data for any purpose other than providing the Service, including but not limited to model training, fine-tuning, evaluation, product improvement, or any form of machine learning. This prohibition applies to inputs, outputs, prompts, and usage metadata."
**Fallback position**: If vendor insists on product improvement, require: (a) explicit list of processing activities, (b) anonymization before any secondary use, (c) right to audit compliance, (d) data subject rights pathway for secondary processing.

### Sub-processors and transfers, YELLOW
**What the vendor provides**: Sub-processor list on OpenAI website. 30-day advance notice of changes. Inference in designated region (EU or US, configurable). DPA includes Standard Contractual Clauses (SCCs).
**Gap or risk**: No objection right for sub-processor changes, deployer is informed but cannot block. Some sub-processors are US-based. SCCs alone may not satisfy Schrems II without supplementary measures.
**Deployer obligation impact**: GDPR Articles 28, 44-49. Deployer must ensure adequate safeguards for all transfers.
**Redline suggestion**: Add objection right: "Customer may object to a new sub-processor within 30 days. If the objection is not resolved, Customer may terminate the affected Service without penalty." Add supplementary measures annex.

### Data subject rights, YELLOW
**What the vendor provides**: Ability to delete conversations via admin console. No structured process for access requests or rectification of data in model weights.
**Gap or risk**: If an employee submits personal data about a third party (e.g., an HR query about an employee), the third party may exercise DSAR rights. The deployer needs a process to handle this.
**Deployer obligation impact**: GDPR Articles 15-22. Deployer is the controller and must respond to DSARs regardless of vendor limitations.
**Redline suggestion**: Add clause: "Provider shall assist Deployer in responding to data subject requests, including providing search and deletion capabilities for specific data subjects within prompt and output logs, within 10 business days of request."

### Retention and deletion, GREEN
**What the vendor provides**: 30-day conversation retention in Enterprise, configurable. Admin can delete at any time. Attestation of deletion available on request.
**Gap or risk**: Adequate, subject to verifying backup retention periods and deletion from backups.

---

## Enterprise Governance and Commercial Terms

### Model versioning and change management, RED
**What the vendor provides**: OpenAI reserves the right to update models at any time. Deprecation notices for older model versions with varying notice periods.
**Gap or risk**: A model update could materially change output quality, safety behavior, or compliance posture without deployer consent. For regulated use cases (even indirectly regulated), this is a governance gap.
**Redline suggestion**: "Provider shall provide Deployer with at least 90 days advance written notice of any material model version change. Deployer shall have the right to pin the current model version for up to 6 months after a new version is released. Material changes include changes to safety filters, output behavior, capability scope, and training data composition."
**Fallback position**: 60 days notice + 3 months pin period; change log with each release.

### Audit rights, YELLOW
**What the vendor provides**: SOC 2 Type II report. Annual third-party security assessment. No direct audit right.
**Gap or risk**: GDPR Article 28(3)(h) requires audit rights. SOC 2 is helpful but not sufficient for AI-specific governance audits.
**Redline suggestion**: Add: "Provider shall permit Deployer (or its designated auditor) to conduct or commission an audit of Provider's processing activities, AI governance practices, and compliance with this Agreement, upon 30 days notice, no more than once per year, at Deployer's cost."

### Liability and indemnity, YELLOW
**What the vendor provides**: Standard commercial limitation of liability. No AI-specific indemnity.
**Gap or risk**: If ChatGPT produces output that causes regulatory action or harm (e.g., incorrect legal advice followed by an employee), liability allocation is unclear.
**Redline suggestion**: Add AI-specific indemnity clause: "Provider shall indemnify Deployer against third-party claims arising directly from material defects in the AI system, including systematic bias, safety filter failures, or significant deviations from documented behavior."

---

## Proposed Redlines (Consolidated)

| # | Clause | Priority | Redline |
|---|--------|----------|---------|
| 1 | Data use for training | P1 | Contractual prohibition on all secondary use of Customer Data for training, improvement, or evaluation |
| 2 | Model versioning | P1 | 90-day notice + version pinning for material model changes |
| 3 | AI Act documentation | P2 | Obligation to provide EU AI Act documentation upon request |
| 4 | Incident reporting | P2 | AI-specific incident notification within 72 hours |
| 5 | Sub-processor objection | P2 | Objection right with termination remedy |
| 6 | DSAR assistance | P2 | Structured data subject rights support within 10 business days |
| 7 | Audit rights | P3 | Annual AI governance audit right |
| 8 | AI-specific indemnity | P3 | Indemnity for systematic AI defects |

---

## Risk Summary and Next Steps

**Overall risk**: Medium
**Recommendation**: Proceed with conditions, negotiate P1 redlines before expanding deployment; accept P2/P3 as medium-term improvements.

**Top 3 action items**:
1. **Negotiate training data prohibition**, convert the admin toggle opt-out into a binding contractual commitment before processing any personal data through the platform
2. **Establish model change management**, require advance notice and version pinning; build internal testing process for model updates
3. **Draft internal acceptable use policy**, define permitted use cases, prohibited use cases (no employment decisions, no processing special category data), and mandatory human review requirements

**Evidence to collect for audit readiness**:
- Signed DPA with AI-specific amendments
- Screenshot/export of admin settings (training opt-out, retention, region)
- Sub-processor list with transfer impact assessment
- Internal acceptable use policy (approved by legal and works council)
- AI literacy training records for all users
- Incident log template and escalation matrix

---

## Disclaimer

This output supports compliance workflows and does not constitute legal advice. Validate conclusions with qualified counsel and confirm vendor terms against the actual executed agreements.

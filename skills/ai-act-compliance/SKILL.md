---
name: ai-act-compliance
description: EU AI Act organizational compliance reference. Use for deadline based checklists, AI literacy (Art. 4), AI inventory, high risk QMS requirements, and conformity assessment readiness.
---

# EU AI Act Compliance Skill

You help an organization build and assess compliance with the EU AI Act (Regulation (EU) 2024/1689). You focus on practical, evidence based governance that can withstand audit and regulatory inspection.

**Important**: You support compliance work but do not provide legal advice. Confirm obligations and interpretations with qualified counsel.

## 1. Complete compliance checklist organized by deadline

Use this as a posture checklist. Mark each item as COMPLIANT, PARTIALLY COMPLIANT, NON COMPLIANT, or NOT APPLICABLE and capture evidence.

### Tier A. Feb 2025 (already passed)

Prohibited practices screening and governance basics:
- [ ] Identify and document all AI use cases and screen for prohibited practices
- [ ] Implement a blocking and escalation process for suspected prohibited practices
- [ ] Establish governance ownership, steering group, and escalation path
- [ ] Implement AI literacy program (Art. 4) with role based training and refresh cadence
- [ ] Update policies: acceptable use, procurement, secure use of AI, and human oversight expectations

### Tier B. Aug 2025 (already passed)

GPAI and foundation model related controls where applicable:
- [ ] Identify all GPAI or foundation model usage (API, hosted, open weights, in house)
- [ ] Procurement controls: require provider transparency on capabilities, limitations, and intended use
- [ ] Contractual controls: incident notification, security measures, data use restrictions, sub processor transparency
- [ ] Integration controls: input and output safeguards, logging, evaluation, and monitoring
- [ ] Copyright and data sourcing assurance where relevant
- [ ] Internal guidance on prompt and data handling (no sensitive data unless approved)

### Tier C. Aug 2026 (upcoming)

High risk AI under Annex III readiness. Focus on deployer obligations, and provider obligations if you build or substantially modify systems.

Inventory and classification:
- [ ] AI inventory complete, updated, and owned
- [ ] Risk classification process documented (prohibited, high risk, limited risk, minimal risk)
- [ ] Each system mapped to role: provider, deployer, importer, distributor

Risk management and monitoring:
- [ ] Risk management process for AI, including fundamental rights considerations
- [ ] Post deployment monitoring plan, drift monitoring, and incident reporting
- [ ] Change management for model updates and prompts

Data governance:
- [ ] Data governance for training, validation, and testing datasets
- [ ] Data quality checks, representativeness assessment, bias testing and documentation

Technical documentation and logging:
- [ ] Technical documentation and system documentation available and versioned
- [ ] Logging and traceability sufficient for incident investigation and audit

Human oversight and instructions:
- [ ] Human oversight measures designed, documented, and tested
- [ ] Instructions for use and user training for operators

Quality management system (QMS) and provider readiness:
- [ ] If acting as provider, QMS aligned to AI Act requirements
- [ ] Conformity assessment approach defined and scheduled
- [ ] Supplier and component governance (data, models, tools)

### Tier D. Aug 2027

High risk AI under Annex I (regulated products) readiness:
- [ ] Integration with sector product compliance (medical device, machinery, vehicles, aviation)
- [ ] Coordination with notified bodies and conformity assessment bodies
- [ ] QMS integration with existing ISO and product quality systems
- [ ] Traceability from requirements to tests and post market monitoring

## 2. AI literacy requirements (Art. 4) with practical implementation guidance

AI literacy requires ensuring staff have the knowledge and skills to use AI systems responsibly. Implementation guidance:

- Define roles: general staff, power users, developers, reviewers, compliance, procurement
- Create role based training:
  - General awareness: what AI can and cannot do, data handling, policy do and do not
  - Operator training: oversight duties, contestability, documentation, escalation
  - Developer training: evaluation, bias testing, security threats, logging
  - Procurement training: vendor due diligence, contractual clauses, evidence requests
- Maintain evidence:
  - Training materials and versioning
  - Attendance logs and completion rates
  - Annual refresh plan
  - Knowledge checks for critical roles

## 3. AI inventory requirements (what to document for each AI system)

Maintain an AI inventory entry per system, at minimum:

- System name, owner, business unit
- Purpose and use cases, intended users
- Deployment context: internal, customer facing, workplace, public sector
- AI Act role: provider, deployer, importer, distributor
- Risk classification: prohibited, high risk Annex III, high risk Annex I, limited risk, minimal risk
- Model details: model type, provider, version, hosting location
- Data details:
  - Input data categories and whether personal data
  - Special categories or children data
  - Training or fine tuning datasets used
- Transparency and user notice obligations
- Human oversight measures and operator instructions
- Logging and monitoring plan
- Incident reporting owner and contact
- Linked evidence: DPIA, security review, vendor assessment, model card, evaluation results

## 4. Quality management system requirements for high risk AI

For provider side high risk systems, a QMS should cover:

- Governance and accountability, document control
- Requirements management and design controls
- Data governance procedures
- Development lifecycle controls, testing, and validation
- Risk management and residual risk acceptance
- Supplier management and component controls
- Change management and configuration management
- Logging, monitoring, and post market surveillance
- Incident and corrective action management
- Internal audit and management review

If the organization is primarily a deployer, adopt a lighter governance system that still ensures:
- documented procedures
- evidence retention
- oversight and incident management

## 5. Conformity assessment process overview

High risk systems require demonstrating conformity before placing on the market or putting into service.

Practical overview:
1. Determine whether the system is high risk and your role.
2. Establish QMS and technical documentation.
3. Perform risk management and testing, including bias and performance.
4. Prepare instructions for use, human oversight measures, and logging.
5. Choose conformity assessment route:
   - Internal control where eligible
   - Third party assessment via notified body where required, especially for regulated products
6. Register where required and prepare for market surveillance.
7. Maintain post market monitoring and update documentation.

## 6. National competent authorities in key EU member states

Competent authorities may vary by sector and national implementation. Use this as a practical starting point and verify current assignments.

- Germany:
  - BNetzA (Federal Network Agency) may act as a central AI Act authority in certain contexts
  - BaFin for financial services supervision interfaces
  - Data protection authorities for GDPR related oversight
- France:
  - CNIL for data protection interfaces
  - Other sector regulators for regulated products
- Netherlands:
  - AP for data protection interfaces
- Ireland:
  - DPC for data protection interfaces
- Spain:
  - AEPD for data protection interfaces
- Italy:
  - Garante per la protezione dei dati personali for data protection interfaces

Note:
- For AI Act specific enforcement, national designations can evolve. Always check the latest official national implementation information.

## 7. Practical compliance roadmap for a typical enterprise

A pragmatic phased roadmap with indicative effort.

### Phase 1. Stand up governance (2 to 6 weeks)
- Assign accountable owner and create cross functional working group
- Publish interim acceptable use and procurement guardrails
- Start AI inventory intake and classification triage
- Create escalation channel for prohibited practice concerns

### Phase 2. Build inventory and baseline controls (6 to 12 weeks)
- Complete AI inventory for priority business units
- Implement AI literacy training and evidence tracking
- Implement vendor due diligence playbook and intake checklist
- Define DPIA and risk assessment triggers for AI systems

### Phase 3. High risk readiness program (3 to 9 months)
- For high risk candidates, implement risk management, monitoring, logging, and oversight
- Build technical documentation and evidence packs
- Define QMS elements needed for provider role systems
- Perform gap remediation projects and validation testing

### Phase 4. Operationalize and audit (ongoing)
- Quarterly inventory refresh and risk re assessment
- Internal audits and management reviews
- Incident drills and post incident improvements
- Continuous improvement based on regulator guidance and enforcement practice

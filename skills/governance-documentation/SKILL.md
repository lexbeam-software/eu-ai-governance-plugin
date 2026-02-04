---
name: governance-documentation
description: Build and maintain auditor-ready governance documentation for EU AI Act compliance, inspections, and ISO 42001 alignment.
---

# Governance Documentation Skill

You help create, maintain, and evidence AI governance documentation that regulators, auditors, and internal oversight functions expect.

Important: You support compliance work but do not provide legal advice. Interpretations and inspection practices vary. Always verify current obligations and guidance.

## 1. EU AI Act documentation requirements by article

This section is organized around key documentation and recordkeeping expectations commonly mapped in governance programs. Use it to build an evidence map.

### Article 11 - Technical documentation

What to maintain (typical contents):
- System description and intended purpose
- System architecture and components, including model(s), data pipelines, and interfaces
- Design and development choices and assumptions
- Risk management outputs and residual risk rationale
- Data governance approach (data sources, preprocessing, quality controls)
- Testing and validation results, including performance and robustness evidence
- Cybersecurity and resilience measures
- Human oversight design
- Change management and versioning for model, prompts, and configurations

Evidence examples:
- Technical file or model card and system card
- Architecture diagrams
- Validation reports
- Secure development lifecycle records

### Article 12 - Recordkeeping and logs

What to maintain:
- Logging policy for AI systems
- Operational logs sufficient to enable traceability and investigation
- Access logs for sensitive components and datasets
- Incident related logs and investigation traces

Evidence examples:
- Logging standard and retention schedule
- Sample log extracts or log schema
- Monitoring dashboards and alerts

### Article 13 - Transparency and information to users

What to maintain:
- User facing notices and instructions as required by the system type and risk tier
- Description of system capabilities and limitations
- Human oversight availability and how to seek review
- Explanation of output interpretation and safe use

Evidence examples:
- User notice templates
- Product UI screenshots of notices
- Terms of use and help center articles

### Article 14 - Human oversight

What to maintain:
- Definition of human oversight measures per system
- Oversight roles, competencies, and training
- Intervention mechanisms, override, and stop conditions
- Escalation routes and appeals

Evidence examples:
- Oversight playbooks and runbooks
- Role descriptions and RACI
- Training records for operators and reviewers

### Article 17 - Quality management system

What to maintain:
- Documented governance processes across the lifecycle
- Control ownership and accountability
- Internal audits and management reviews
- Corrective and preventive actions
- Supplier and subcontractor controls

Evidence examples:
- QMS policies and procedures
- Internal audit plan and reports
- Management review minutes
- CAPA register

### Article 18 - Conformity assessment (high-risk)

What to maintain:
- Conformity assessment approach and results (as applicable)
- Mapping of essential requirements to controls and tests
- Evidence that post-assessment changes are controlled

Evidence examples:
- Conformity assessment report
- Essential requirements mapping table
- Change approvals and release notes

### Article 19 - EU declaration of conformity (high-risk)

What to maintain:
- Declaration of conformity and supporting evidence package
- Sign-off authority and document version control

Evidence examples:
- Signed declaration of conformity
- Referenced technical documentation index

### Article 26 - Deployer obligations (high-risk)

What to maintain:
- Assignment of responsibilities for deployer duties
- Operational controls ensuring use according to instructions
- Monitoring and oversight evidence in real-world use
- User information and transparency artifacts
- Incident reporting and corrective actions

Evidence examples:
- Deployer operating procedure
- Oversight and monitoring reports
- Training and competency records for users

## 2. What a regulatory inspection typically requests

Common inspection themes:
- Proof you know your AI systems: inventory with owners, purposes, and deployment status
- Proof you classified systems correctly: rationale, references, and decision records
- Proof you manage risks: risk assessments, controls, test results, residual risk acceptance
- Proof of traceability: logs, monitoring, change history, incident records
- Proof of human oversight: defined roles, training, intervention capability
- Proof of transparency: user notices, instructions, complaint and appeal pathways
- Proof of governance: policies, procedures, approvals, internal audits
- Proof of supplier management: vendor due diligence, contracts, and monitoring

A typical request list to be ready for:
- AI inventory register and risk classification results
- Technical documentation for selected systems
- Logging and monitoring policy plus example evidence
- DPIAs and fundamental rights assessments (if applicable)
- Incident and complaint register plus investigation notes
- Vendor assessment files, DPAs, SCCs, and security attestations
- Training evidence for staff involved in design, operation, and oversight
- Change management records for model and prompt updates

## 3. Document retention requirements

Retention needs depend on legal requirements, sector rules, and your own governance. Use these principles:
- Define retention by artifact type and risk tier
- Keep enough records to reconstruct decisions and system behavior during the retention period
- Align retention for AI logs with privacy and security requirements
- Keep superseded policy versions and approval records

Practical retention approach:
- Policies and procedures: keep all versions and approvals
- Inventory and risk classifications: keep current plus history
- DPIAs and assessments: keep for the life of the system plus an additional period consistent with privacy governance
- Logs and monitoring: define a retention schedule based on risk, detectability, and incident investigation needs
- Training records: keep for the duration of employment plus a defined period
- Vendor due diligence: keep for contract term plus a defined period

If unsure, align with your corporate retention schedule and consult counsel.

## 4. Best practices for living governance documentation

How to keep documentation audit-ready:
- Single source of truth: maintain an AI inventory register with unique system IDs
- Version control: track changes to models, prompts, datasets, and controls
- Evidence by design: create artifacts as part of the lifecycle, not after the fact
- Traceability: link each decision to an owner, date, rationale, and supporting evidence
- Risk tiering: apply heavier documentation for higher-risk systems
- Regular reviews: schedule periodic re-classification and control testing
- Minimal but sufficient: prefer concise summaries plus links to source evidence
- Redaction workflow: maintain sanitized versions for external sharing
- Cross-functional sign-offs: legal, DPO, security, product, and business owners

## 5. Template structures for key governance documents

Use these structures as starting points. Adapt to your organization.

### AI inventory register (template)

Fields:
- System ID
- System name
- Owner (business) and owner (technical)
- Intended purpose and users
- Deployment status
- AI Act classification and rationale
- Data categories and sensitivity
- Vendors and dependencies
- Oversight measures
- Monitoring and KPIs
- Links to artifacts (DPIA, vendor assessment, policies)
- Last review date and next review date

### Risk assessment log (template)

Fields:
- Risk ID
- System ID
- Risk category (bias, privacy, security, safety, etc.)
- Risk statement
- Likelihood and impact ratings
- Inherent risk score
- Controls and mitigations
- Residual risk score
- Owner
- Review cadence
- Evidence links

### Incident log (template)

Fields:
- Incident ID
- Date detected and date closed
- System ID
- Description
- Severity
- Impacted users and data (high-level)
- Root cause
- Immediate containment actions
- Corrective and preventive actions
- Notifications made (internal and external)
- Lessons learned

## 6. ISO 42001 alignment

If pursuing ISO 42001 (AI management system), map your documentation to:
- Context of the organization and scope of the AIMS
- Leadership, roles, and responsibilities
- Planning and risk treatment
- Support (competence, awareness, communication, documented information)
- Operation (lifecycle controls and supplier management)
- Performance evaluation (monitoring, internal audit, management review)
- Improvement (nonconformity, corrective action, continual improvement)

Practical alignment tips:
- Use a common document control process for both ISO 42001 and AI Act evidence
- Maintain an evidence map that links ISO clauses and AI Act obligations to artifacts
- Ensure internal audit and management review outputs are documented and actionable

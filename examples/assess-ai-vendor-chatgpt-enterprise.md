# Example: AI assistant vendor assessment

> Fictional demonstration only. “ChatGPT Enterprise” is used as a recognisable service category. The contract facts, evidence status, and findings below are invented and must not be attributed to OpenAI. Verify current vendor documents before any real assessment.

## Scope

| Field | Example fact |
|---|---|
| Service | Enterprise conversational AI assistant |
| Intended use | Drafting and summarisation by legal, HR, and finance teams |
| Prohibited use | No applicant, employee, credit, benefit, or insurance decisions |
| Customer role | Deployer of the downstream AI system on supplied facts |
| Data | Internal documents and incidental personal data |
| Documents supplied | Fictional order form, DPA, security summary, and product description dated 1 August 2026 |

## Recommendation

**HOLD pending evidence.** The general-assistant use does not establish an Annex III high-risk use on supplied facts, but the role and classification must be reassessed for each workflow. The contract file lacks enough evidence to approve confidential and personal-data use.

## Evidence matrix

| Topic | Status | Why it matters | Condition |
|---|---|---|---|
| Contractual restriction on training or product-improvement use | Missing | Purpose, confidentiality, and processor-instruction control | Bind processing to providing the contracted service and list permitted telemetry |
| Retention and deletion across active systems and backups | Conflicting | Storage limitation and exit | Resolve periods and require deletion confirmation |
| Subprocessor list, locations, and change route | Missing | Article 28 GDPR and transfer assessment | Provide current list, notice, objection and exit route |
| Model/version change notice | Missing | Classification, testing, and operating-control drift | Define material change, notice, regression evidence, and suspension right |
| Security assurance | Provided, scope unclear | Confidentiality and resilience | Confirm service, entities, period, and exceptions covered |
| AI incident and complaint route | Missing | Operational monitoring and escalation | Establish two-way notice, evidence preservation, triage, and regulator cooperation |
| GPAI/model-chain evidence | Not established | Downstream evidence and provider-role allocation | Identify models, providers, modifications, and current Article 53/55 evidence |

## Ranked redlines

### P1. Customer-data purpose restriction

**Type:** GDPR and contractual control.

Require the contract to define customer data broadly and prohibit training, fine-tuning, evaluation, or product improvement except for specifically listed processing authorised by the customer. Define necessary service telemetry separately.

### P1. Model and service change control

**Type:** Contractual and governance control.

Require notice of a material change, a usable change log, security and safety regression information, and a suspension or termination route when the change alters the approved risk posture.

### P1. Incident cooperation

**Type:** Contractual control supporting legal duties.

Require prompt notice of events affecting confidentiality, safety, fundamental rights, material performance, or service integrity. Do not insert a universal “72-hour AI Act” deadline; route each event under the applicable regime and actor duty.

### P2. Evidence and audit access

**Type:** GDPR, contract, and recommended assurance control.

Require current independent reports plus targeted information and audit rights where the reports do not demonstrate the relevant control.

## Operating conditions

1. Maintain an approved-use register and classify each workflow.
2. Block consequential employment, credit, benefit, insurance, and similar uses pending separate review.
3. Minimise personal and confidential data and configure retention before rollout.
4. Train users on limitations, review, confidentiality, and incident escalation under Article 4.
5. Reassess after any material model, terms, processing, or intended-purpose change.

## Source note

Source mode: fictional embedded example. Legal map reviewed 6 August 2026 against CELEX 02024R1689-20260727. No current statement about OpenAI’s contracts, controls, or compliance is made.

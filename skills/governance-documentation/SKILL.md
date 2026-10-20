---
name: governance-documentation
description: Create, review, or organise EU AI Act governance evidence. Use for Article 11 and Annex IV technical documentation, logs, quality management, conformity records, declarations, registration, deployer records, post-market monitoring, incident files, evidence indexes, or review packs.
---

# Build governance documentation

Create an evidence map before drafting prose. Identify the system, version, intended purpose, actors, classification, applicable articles, owner, retention rule, source, approval, and change history for every artifact.

Follow [LEGAL-SOURCE-PROTOCOL.md](../../references/LEGAL-SOURCE-PROTOCOL.md) and [AI-ACT-DECISION-MAP.md](../../references/AI-ACT-DECISION-MAP.md). Use `euaiact_annex_iv_checklist`, `euaiact_get_obligations`, and the versioned summary and official URL returned by `euaiact_get_article` when the Lexbeam EU AI Act MCP is available. Read the official full text for exact wording.

## Map evidence to the correct anchor

- **Article 11 and Annex IV**: provider technical documentation before market placement or putting into service; keep it current.
- **Article 12**: technical capability for automatic logging over the system lifetime.
- **Article 13**: information and instructions supplied to deployers.
- **Article 14**: designed human-oversight measures.
- **Article 17**: provider quality management system. Its harmonised standard is EN 18286:2026 (reference published in the Official Journal on 14 October 2026 by Commission Implementing Decision (EU) 2026/2274). Applying it is voluntary; per the Commission it gives a presumption of conformity with the Article 17 requirements it covers.
- **Article 18**: provider documentation keeping for 10 years after market placement or putting into service, subject to the article’s scope and sector rules.
- **Article 19**: provider retention of automatically generated logs under its control for an appropriate period of at least six months, unless other law provides otherwise.
- **Article 26(6)**: deployer retention of logs under its control on the same minimum-period logic.
- **Article 43**: conformity assessment. For Annex III point 1, internal control under Annex VI is open only where harmonised standards or common specifications were applied for the Chapter III, Section 2 requirements; otherwise Annex VII applies.
- **Article 47**: EU declaration of conformity.
- **Article 48**: CE marking.
- **Article 49**: registration, including Article 49(2) for an Article 6(3) non-high-risk determination.
- **Article 72**: provider post-market monitoring.
- **Article 73**: provider serious-incident reporting.

Never label Article 18 as conformity assessment or Article 19 as the EU declaration of conformity.

## Build an evidence index

For each requirement record:

| Field | Required content |
|---|---|
| Requirement | Exact article, paragraph, point, or Annex item |
| Actor | Provider, deployer, or other role |
| Applicability | Applies, does not apply with reason, or not established |
| Artifact | File, system record, log, decision, or external evidence |
| Version and date | Effective version, approval date, review date |
| Owner and approver | Accountable role and recorded approval |
| Integrity | Repository, checksum or immutable record where proportionate |
| Retention | Legal or organisational basis and disposal trigger |
| Standard | Harmonised standard applied in full or in part (reference and OJ act), other standard or specification, or none |
| Gap | Missing, stale, conflicting, inaccessible, or complete |

Do not call a folder “auditor-ready” merely because files exist. Test traceability from requirement to approved artifact and from artifact to source data.

## Record the standards applied

For every requirement, record which standard was applied and of what kind:

- **Harmonised standard with an Official Journal reference**: a presumption of conformity, only to the extent the standard covers the requirement. As of 20 October 2026 the only one is EN 18286:2026, for Article 17. Use the `euaiact://standards` resource when the Lexbeam EU AI Act MCP offers it; otherwise use section 7 of [AI-ACT-DECISION-MAP.md](../../references/AI-ACT-DECISION-MAP.md) and check the Official Journal for later references.
- **Other standard or specification** (ISO/IEC 42001, ISO 9001, ISO 13485, internal method): no presumption of conformity; record the solution adopted and why it meets the requirement.

No harmonised standard covers the Chapter III, Section 2 requirements yet. Annex IV point 7 therefore needs a detailed description of the solutions adopted for them, with the other standards applied, and the EU declaration of conformity (Annex V point 6) lists only the harmonised standards actually used.

## Assemble the pack

Include a cover note with scope, system versions, roles, classification, legal baseline, limitations, and outstanding gaps; an evidence index; the selected artifacts; a decision log; and a source note. Preserve originals. Redact personal, privileged, confidential, and trade-secret material according to the audience.

For ISO/IEC 42001, NIST AI RMF, or internal-control mappings, label them as assurance-framework mappings rather than EU AI Act duties. ISO/IEC 42001 is not a harmonised standard under the AI Act and gives no presumption of conformity; EN 18286 is designed to be layered on top of it. Never present an ISO/IEC 42001 certificate as AI Act conformity.

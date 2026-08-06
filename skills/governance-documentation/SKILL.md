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
- **Article 17**: provider quality management system.
- **Article 18**: provider documentation keeping for 10 years after market placement or putting into service, subject to the article’s scope and sector rules.
- **Article 19**: provider retention of automatically generated logs under its control for an appropriate period of at least six months, unless other law provides otherwise.
- **Article 26(6)**: deployer retention of logs under its control on the same minimum-period logic.
- **Article 43**: conformity assessment.
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
| Gap | Missing, stale, conflicting, inaccessible, or complete |

Do not call a folder “auditor-ready” merely because files exist. Test traceability from requirement to approved artifact and from artifact to source data.

## Assemble the pack

Include a cover note with scope, system versions, roles, classification, legal baseline, limitations, and outstanding gaps; an evidence index; the selected artifacts; a decision log; and a source note. Preserve originals. Redact personal, privileged, confidential, and trade-secret material according to the audience.

For ISO/IEC 42001, NIST AI RMF, or internal-control mappings, label them as assurance-framework mappings rather than EU AI Act duties.

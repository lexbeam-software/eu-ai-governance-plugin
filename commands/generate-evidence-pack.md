---
description: Compile traceable AI governance evidence into a scoped review pack without overstating completeness or compliance.
argument-hint: "[--systems all|<name>|category:<category>] [--format document|folder|summary] [--lang en|de]"
---

# /eu-ai-governance:generate-evidence-pack

Use the `governance-documentation` skill and [connected sources](../CONNECTORS.md). Ask permission before retrieving organisational material not already placed in scope.

## Workflow

1. Confirm audience, purpose, system scope and versions, cutoff date, actors, classification, jurisdiction, confidentiality, redaction, format, and storage location.
2. Build a requirement-to-evidence index before assembling files. When available, use `euaiact_get_obligations`, `euaiact_annex_iv_checklist`, and the versioned summary and official URL from `euaiact_get_article`. Read the complete official provision for exact wording.
3. Inventory source items with owner, version, approval, location, integrity marker, retention rule, and status.
4. Flag missing, stale, conflicting, inaccessible, draft, or unapproved evidence. Do not silently fill gaps with generated prose.
5. Preserve originals. Create redacted or audience-specific copies where authorised.
6. Validate links, dates, system versions, actor allocation, legal anchors, and the pack index.

## Output

Create:

- cover note with scope, cutoff, legal baseline, limitations, and open gaps
- evidence index linking each requirement to an artifact and owner
- selected artifacts or stable references to them
- decision and change log
- missing-evidence action list
- source note

Distinguish Article 11/Annex IV technical documentation, Article 12 logging capability, Article 18 documentation keeping, Article 19 provider logs, Article 26(6) deployer logs, Article 43 conformity assessment, Article 47 declaration, Article 48 CE marking, and Article 49 registration.

Use `review pack`, not `auditor-ready` or `regulator-ready`, unless an identified assurance owner has verified the stated acceptance criteria.

---
description: Run a GDPR Article 35 DPIA for an AI system and coordinate it with any separate EU AI Act FRIA.
argument-hint: "<system description | file | URL> [--lang en|de]"
---

# /eu-ai-governance:run-dpia

Use the `dpia-ai` skill. This workflow supports the controller; it does not provide legal advice or certify the processing.

## Workflow

1. Establish controller, processors, purpose, affected persons, geography, data, model and system flow, recipients, transfers, retention, automated effects, and existing controls. If decisive facts are missing, issue a provisional decision and identify them instead of inventing or withholding the available analysis.
2. Determine and document the Article 35 trigger. Label supervisory-authority and EDPB/WP29 criteria as guidance rather than statutory text.
3. Describe the processing and data flows at system-version level.
4. Assess necessity, proportionality, legal basis, data minimisation, accuracy, transparency, rights, Article 22 where relevant, alternatives, and processor controls.
5. Build a people-centred risk register with inherent risk, measures, owner, evidence, due date, test method, and residual risk.
6. If a DPO is designated, seek and record the DPO’s advice under Article 35(2). Do not require DPO approval as a universal GDPR rule.
7. If high residual risk remains without mitigating measures, route to Article 36 prior consultation before processing.
8. Assess Article 27 FRIA scope separately using the `ai-act-classification` skill and [legal source protocol](../references/LEGAL-SOURCE-PROTOCOL.md). Cross-reference overlap; do not treat one assessment as automatically replacing the other.

## Output

Produce a versioned DPIA with administrative details, trigger decision, processing and data-flow description, necessity and proportionality, risk register, measures, residual-risk decision, consultation record, controller decision record, review triggers, evidence index, and source note. Keep DPO advice separate from the controller decision.

With `--lang de`, use idiomatic German, exact GDPR and EU AI Act citations, and explicit controller/DPO role separation.

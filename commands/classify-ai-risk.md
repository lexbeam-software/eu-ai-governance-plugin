---
description: Classify an AI system under the current EU AI Act and produce a cited, role-specific obligations and evidence plan.
argument-hint: "<system description | file | URL> [--lang en|de]"
---

# /eu-ai-governance:classify-ai-risk

Classify the supplied system or GPAI model using the `ai-act-classification` skill. Follow [the legal source protocol](../references/LEGAL-SOURCE-PROTOCOL.md). See [connected sources](../CONNECTORS.md).

## Workflow

1. **Ingest evidence.** Read supplied descriptions and documents. Identify date, version, author, and whether each statement is fact, vendor claim, or assumption.
2. **Ask only decisive questions.** Establish intended purpose, affected persons, decision effect, roles, geography, data, profiling, biometrics, synthetic content, workplace use, Annex I product-law context, and exact Annex III use.
3. **Ground the analysis.** When available, call `euaiact_classify_system`; use `euaiact_get_article` for a versioned summary and official URL, then read the complete official provision; use `euaiact_assess_art6_3_exception` for a possible Annex III exception; call `euaiact_get_obligations` for provider and deployer roles only, map other actor duties from the official text, and call `euaiact_check_deadlines`.
4. **Apply every gate.** Scope and role; all Article 5 points; Article 6(1) including 1a to 1c; Article 6(2) and exact Annex III item; Article 6(3); Article 50; GPAI Articles 51 to 55; national and sector issues.
5. **Challenge the answer.** Identify the strongest alternative classification and the fact or legal boundary that resolves it. Read the complete provision before making a negative legal claim.

## Output

Return:

- executive classification, allowing parallel labels
- scope, facts, assumptions, and missing decisive evidence
- gate-by-gate table with exact citation and rationale
- Article 6(3) assessment where relevant
- obligations by actor and operative date
- evidence requests and no more than five next actions
- confidence and source note

Use `not established on supplied facts` when evidence is incomplete. Do not claim certification, guaranteed compliance, or regulator acceptance.

With `--lang de`, write idiomatic German with umlauts and preserve official EU-law terms and citations.

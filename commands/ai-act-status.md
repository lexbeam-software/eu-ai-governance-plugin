---
description: Assess EU AI Act readiness by actor, control domain, evidence, and operative deadline.
argument-hint: "[inventory or evidence sources] [--lang en|de]"
---

# /eu-ai-governance:ai-act-status

Assess organisational readiness using the `ai-act-compliance` skill. Follow [the legal source protocol](../references/LEGAL-SOURCE-PROTOCOL.md). See [connected sources](../CONNECTORS.md).

## Workflow

1. Confirm entities, jurisdictions, sector, assessment date, evidence sources, and whether the review covers providers, deployers, importers, distributors, product manufacturers, or GPAI providers.
2. Obtain or build an inventory. Do not infer completeness from a sample.
3. Use `euaiact_check_deadlines`, `euaiact_get_obligations`, and the versioned summary and official URL from `euaiact_get_article` when available. Read the complete official provision for exact wording.
4. Assess inventory and roles, Article 5 controls, Article 4 literacy, classification and change control, high-risk provider and deployer controls, GPAI governance, Article 50 transparency, incidents, and evidence assurance.
5. Mark every item `effective`, `partly effective`, `absent`, `not established`, or `not applicable with reason`. Attach evidence, owner, and due date.

## Output

Provide:

- executive status, scope, and as-of date
- inventory and role-map coverage
- deadline table with operative dates, not proposal-era triggers
- control-domain heatmap with evidence links
- top five gaps by urgency and consequence
- 30/60/90-day remediation plan
- unresolved national and sector questions
- source note

If reporting a score, explain weighting, denominator, missing-evidence treatment, and exclusions. Never convert unknowns into compliant results.

With `--lang de`, produce idiomatic German and retain exact legal citations.

---
description: Review or draft an AI governance policy with current EU AI Act roles, controls, evidence, and escalation paths.
argument-hint: "<policy file or text> [--draft] [--lang en|de]"
---

# /eu-ai-governance:review-ai-policy

Use the `ai-act-compliance` and `risk-management` skills. Follow [the legal source protocol](../references/LEGAL-SOURCE-PROTOCOL.md).

## Workflow

1. Confirm whether to review or draft, policy owner, entities, jurisdictions, sector, workforce, AI roles, existing governance, target audience, and approval route.
2. For a review, preserve wording and cite exact sections. Classify each finding as legal conflict, missing control, ambiguous ownership, unenforceable process, evidence gap, or editorial improvement.
3. Validate current AI Act dates and decisive obligations through the Lexbeam MCP when available.
4. Cover scope and definitions, roles, inventory, intake and classification, prohibited uses, procurement, development and change control, human oversight, data protection, security, transparency, AI literacy, monitoring, incidents, complaints, evidence, exceptions, enforcement, and review.
5. Separate binding EU AI Act requirements, GDPR or sector law, national-law issues, and organisational policy choices.

## Output

For review mode, return an executive verdict, strengths, ranked findings with section references, proposed edits, owner and priority, and source note.

For draft mode, produce a concise enforceable policy plus a role matrix, operating-procedure list, evidence list, approval block, effective date, review triggers, and source note. Do not insert invented organisation names, authorities, committees, or approval rights.

For DACH operations, treat Germany, Austria, and Switzerland separately. Flag fact-specific worker-information and co-determination analysis instead of declaring universal works-council approval.

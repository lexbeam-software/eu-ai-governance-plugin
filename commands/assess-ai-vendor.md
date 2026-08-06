---
description: Assess an AI vendor relationship and produce evidence-backed risks, conditions, and contractual redlines.
argument-hint: "<contract, DPA, terms, technical documents, URL, or pasted text> [--lang en|de]"
---

# /eu-ai-governance:assess-ai-vendor

Use the `ai-vendor-assessment` skill. Follow [the legal source protocol](../references/LEGAL-SOURCE-PROTOCOL.md). See [connected sources](../CONNECTORS.md).

## Workflow

1. Identify the exact service, version, contract entities, intended use, deployment, geography, data, model chain, and documents reviewed. For a sparse file, issue a provisional matrix and `hold pending evidence` recommendation rather than inventing terms or withholding useful triage.
2. Separate signed terms, incorporated policies, technical evidence, independent assurance, marketing claims, and missing material.
3. Determine all AI Act roles and check Article 25 role-change triggers. Classify the intended use before applying Article 26 or high-risk provider duties.
4. When available, use the Lexbeam MCP to validate classification, obligations, deadlines, and decisive provisions.
5. Review AI Act evidence, GPAI and downstream support, GDPR terms, transfers, security, monitoring, incidents, audit access, change control, exit, liability, and insurance.

## Output

Return:

- recommendation: `approve`, `approve with conditions`, `hold`, or `reject`
- scope, facts, assumptions, and document register
- role and classification analysis
- evidence matrix with `provided`, `missing`, `conflicting`, or `not applicable`
- ranked issues and redlines, each labelled legal duty, contractual control, or recommended practice
- pre-signing conditions and operating controls
- unresolved questions and source note

Quote contract language sparingly and include page or section references. Do not rely on static vendor profiles or uncited claims. Do not state that fines are automatically insurable or indemnifiable.

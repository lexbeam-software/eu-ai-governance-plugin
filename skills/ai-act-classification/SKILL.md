---
name: ai-act-classification
description: Classify AI systems and GPAI models under the current EU AI Act. Use for Article 5 prohibited-practice screening, Article 6 and Annex I/III high-risk analysis, Article 6(3) exceptions, Article 50 transparency duties, GPAI duties, role allocation, deadlines, or an evidence-backed classification memo.
---

# Classify under the EU AI Act

Support legal and compliance work; do not present the result as legal advice, certification, or a final regulator determination.

## Load the legal map

Read [AI-ACT-DECISION-MAP.md](../../references/AI-ACT-DECISION-MAP.md) and follow [LEGAL-SOURCE-PROTOCOL.md](../../references/LEGAL-SOURCE-PROTOCOL.md) before classifying. Use the Lexbeam EU AI Act MCP when available:

1. Call `euaiact_classify_system` with the known facts and structured signals.
2. If Annex III may apply, call `euaiact_assess_art6_3_exception`; never auto-apply the exception.
3. Call `euaiact_get_obligations` only for provider and deployer roles. Map duties for importers, distributors, authorised representatives, product manufacturers, and other actors from the complete official provisions.
4. Call `euaiact_check_deadlines` for operative dates.
5. Use `euaiact_get_article` to obtain the versioned summary and official URL, then read the complete official provision before stating a negative, exception, or prohibition. If the full text is inaccessible, label verification incomplete.

If MCP is unavailable, use the embedded decision map, disclose fallback mode, and mark current-law verification as required.

## Gather facts

Ask only for facts that can change the outcome:

- system or model function, intended purpose, users, affected persons, and decision effect
- provider, deployer, importer, distributor, product-manufacturer, and GPAI roles
- geography and whether outputs are used in the Union
- data categories, profiling, biometrics, emotion inference, synthetic content, and workplace use
- Annex I product-law context and third-party conformity assessment
- exact Annex III use case, human-review design, and whether the system materially influences decisions
- substantial modification, rebranding, fine-tuning, or changed intended purpose

Do not classify from a product name, sector label, or vendor marketing description alone.

## Apply the gates

Run the gates in order and preserve parallel duties:

1. Confirm scope and roles under Articles 2, 3, and 25.
2. Screen every current Article 5 point, including 5(1)(ba) and (bb), with its precise application date and conditions.
3. Test Article 6(1), including paragraphs 1a to 1c, then Article 6(2) and the exact Annex III item.
4. Assess Article 6(3) only if Annex III matched. Require the no-significant-risk threshold plus one statutory condition; profiling defeats the exception.
5. Test each Article 50 duty separately, even when the system is high-risk.
6. If a GPAI model is involved, separate model-provider duties under Articles 51 to 55 from downstream system duties.
7. Map duties by actor and date. Include Article 4 AI literacy for providers and deployers.

## Produce the result

Return:

1. **Executive classification**: prohibited, high-risk Annex I, high-risk Annex III, Article 50 duty, GPAI, or no identified higher-tier trigger on supplied facts. Allow multiple labels.
2. **Facts and assumptions**: separate supplied facts, assumptions, and missing decisive facts.
3. **Gate table**: conclusion, exact citation, actor, rationale, confidence, and missing evidence.
4. **Article 6(3) analysis, where Annex III is reached**: threshold, four conditions, profiling override, Article 6(4) documentation, and Article 49(2) registration. Otherwise state `not reached`.
5. **Obligations and deadlines**: split provider, deployer, and other roles.
6. **Evidence request**: list documents needed to validate the result.
7. **Next actions**: no more than five, ordered by legal and operational urgency.
8. **Source note**: MCP/version or embedded fallback, legal baseline, and as-of date.

Use `not established on supplied facts` instead of `not applicable` when facts are incomplete.

## DACH handling

Treat DACH as three jurisdictions, not one rule set. For Germany, flag potential works-council information and co-determination issues fact-specifically, including AI Act Article 26(7) for high-risk workplace systems and relevant BetrVG questions. Do not say works-council approval is universally mandatory across DACH. Route Austrian, Swiss, financial-sector, health-sector, and public-sector issues to the applicable national or sector analysis.

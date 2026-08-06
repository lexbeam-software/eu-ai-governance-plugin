---
name: dpia-ai
description: Run or review a GDPR data protection impact assessment for an AI system. Use for Article 35 trigger screening, necessity and proportionality, profiling and automated decisions, bias and explainability risks, mitigations, DPO consultation, Article 36 prior consultation, or DPIA and EU AI Act FRIA coordination.
---

# Run an AI DPIA

Support the controller’s assessment; do not claim approval or legal advice. The controller remains accountable. If a DPO is designated, seek and document the DPO’s advice under GDPR Article 35(2); the GDPR does not make DPO approval a universal legal condition.

Follow [LEGAL-SOURCE-PROTOCOL.md](../../references/LEGAL-SOURCE-PROTOCOL.md) for legal conclusions and source notes.

## Determine whether a DPIA is required

Apply GDPR Article 35 to the specific processing. Consider:

- systematic and extensive evaluation based on automated processing, including profiling, where decisions have legal or similarly significant effects
- large-scale special-category or criminal-offence data
- systematic monitoring of publicly accessible areas on a large scale
- relevant supervisory-authority lists and EDPB/WP29 guidance

Label the familiar “two or more criteria” approach as guidance, not statutory text. Record the trigger analysis even when the conclusion is that no DPIA is required.

When decisive facts are missing, issue a provisional trigger decision and list the facts needed to finalise it. Do not pause without giving the user the safe analysis available from supplied facts.

## Describe the processing

Document controller, processors, joint controllers, purpose, users, affected persons, data sources and categories, model and system flow, recipients, transfers, storage, retention, automated effects, human intervention, and lifecycle changes. Use a data-flow diagram when it clarifies the processing.

## Assess necessity and proportionality

Test purpose specification, legal basis, data minimisation, accuracy, retention, transparency, rights handling, Article 22 where relevant, alternatives, human intervention, and processor controls. Do not use an AI Act classification as a GDPR lawful basis.

## Assess risks to people

Describe concrete harms, affected groups, likelihood, severity, uncertainty, and controls. Include discrimination, proxy effects, erroneous decisions, opacity, manipulation, security, data leakage, function creep, exclusion, chilling effects, feedback loops, and contestability where relevant.

Distinguish inherent risk, control effectiveness, and residual risk. Link every mitigation to an owner, evidence, due date, and verification method.

## Decide and escalate

- Record the DPO advice and the controller’s response where a DPO is designated.
- Consult data subjects or representatives where appropriate under Article 35(9), subject to the stated exceptions.
- If high residual risk remains in the absence of measures, route to prior consultation under Article 36 before processing.
- Set review triggers for purpose, data, model, provider, population, performance, incident, complaint, or legal change.

## Coordinate with the EU AI Act

Read [AI-ACT-DECISION-MAP.md](../../references/AI-ACT-DECISION-MAP.md) and validate relevant articles through the Lexbeam EU AI Act MCP. Use provider information under Article 13 for the DPIA where Article 26(9) applies. Assess Article 27 FRIA scope separately. Cross-reference overlapping DPIA sections under Article 27(4); do not say a DPIA automatically replaces a FRIA.

## Output

Produce administrative details, trigger decision, system and data-flow description, necessity and proportionality assessment, risk register, measures, residual-risk decision, consultation record, controller decision and governance record, review triggers, evidence list, and source note. Keep DPO advice separate from the controller decision.

---
name: risk-management
description: Build or review an AI risk-management system, risk register, controls, monitoring plan, incident taxonomy, or remediation workflow. Use for EU AI Act Article 9 and Article 72 alignment, enterprise-risk integration, model and system monitoring, or serious-incident escalation.
---

# Manage AI risk

Separate three layers: legal requirements, organisational risk appetite, and operating controls. Do not present an internal score as a legal classification.

## Scope the system

Record intended purpose, foreseeable misuse, actors, affected persons, lifecycle stage, model and data dependencies, environment, change history, and legal classification. Follow [LEGAL-SOURCE-PROTOCOL.md](../../references/LEGAL-SOURCE-PROTOCOL.md) for legal conclusions.

## Identify risk

Assess concrete harms and failure modes across:

- health, safety, and fundamental rights
- discrimination, accessibility, and representation
- privacy, confidentiality, and data governance
- accuracy, robustness, cybersecurity, and resilience
- transparency, explainability, contestability, and human oversight
- manipulation, misuse, prohibited practices, and synthetic content
- supplier, model-chain, concentration, and change risk
- legal, operational, financial, reputational, and environmental effects

Identify affected groups, exposure paths, existing controls, and uncertainty. Do not treat a generic taxonomy as evidence that a risk exists.

## Evaluate and treat

Use the organisation’s approved likelihood and severity scales. Record inherent risk, control design, control operation, residual risk, owner, treatment, due date, evidence, and acceptance authority. Define measurable thresholds and stop-use criteria where feasible.

For high-risk providers, map the iterative lifecycle process to Article 9 and connect testing, technical documentation, instructions, post-market monitoring, and corrective action. Do not imply Article 9 applies to every deployer or minimal-risk system.

## Monitor

Define metric, population, threshold, frequency, owner, data source, response, and limitations. Include performance, drift, subgroup effects, override rates, complaints, incidents, uptime, security events, input changes, model changes, and human-oversight effectiveness where relevant.

## Handle incidents

Keep the internal incident taxonomy separate from the EU AI Act definition of a `serious incident` and from GDPR personal-data breaches or cybersecurity-reporting events.

When an event occurs:

1. Protect people and preserve evidence; suspend or constrain use when required by the risk.
2. Record system version, time, context, outputs, decisions, impact, and immediate controls.
3. Route high-risk deployer notifications under Article 26(5), provider obligations under Article 73, and other regimes separately.
4. Retrieve the current provision through the Lexbeam EU AI Act MCP before stating a recipient or deadline.
5. Investigate root cause, corrective action, effectiveness, reclassification, documentation updates, and lessons.

Do not invent a universal EU AI Act reporting deadline. Apply the event and actor-specific statutory route.

## Output

Produce scope, risk register, control plan, monitoring plan, incident and escalation matrix, residual-risk decision, review triggers, open evidence gaps, and source note.

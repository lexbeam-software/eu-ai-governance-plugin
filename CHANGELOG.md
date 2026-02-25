# Changelog

All notable changes to the EU AI Governance Plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] — 2026-02-04

### Added
- `/classify-ai-risk` command — EU AI Act risk classification with 8-step gated workflow, Article citations, and 30/60/90-day action plans
- `/assess-ai-vendor` command — Three-dimensional vendor assessment (AI Act deployer obligations, GDPR/DPA, enterprise governance) with GREEN/YELLOW/RED flagging and contract redline suggestions
- `/run-dpia` command — AI-tailored DPIA combining GDPR Art. 35 with AI Act-aligned checks (training data, explainability, Art. 22 automated decisions, fundamental rights, feedback loops)
- `/ai-act-status` command — Organizational compliance posture assessment by enforcement deadline tier (Feb 2025, Aug 2025, Aug 2026, Aug 2027)
- `/generate-evidence-pack` command — Auditor-ready governance documentation compiler with 10-section structure and three output formats
- `/review-ai-policy` command — AI governance policy review and drafting with section-by-section GREEN/YELLOW/RED assessment
- AI Act Classification skill — Complete Article 5 prohibited practices reference, Annex III high-risk categories, GPAI obligations (Arts. 51–56), responsibility matrix
- AI Act Compliance skill — Deadline-based compliance checklists (Tiers A–D), AI literacy guidance (Art. 4), competent authorities by Member State
- AI Vendor Assessment skill — Deployer obligations checklist, provider evidence requirements, cross-border provider risk profiles, redline patterns
- DPIA for AI skill — GDPR Art. 35 triggers, risk matrix methodology, AI-specific risk taxonomy, fundamental rights framework
- Governance Documentation skill — Article-by-article documentation requirements, evidence indexing, retention policy, ISO 42001 alignment
- Risk Management skill — AI risk taxonomy, assessment methodology, KPI monitoring, incident classification, ISO 31000/COSO alignment
- German language support (`--lang de`) across all commands
- DACH-specific guidance: Works council (BetrVG), BaFin, BSI considerations
- MCP server integrations: Slack, Atlassian, Microsoft 365, Box
- Worked examples: HR resume screening classification, ChatGPT Enterprise vendor assessment, customer churn prediction DPIA
- Interactive demo showcase page

### Regulatory coverage
- EU AI Act (Regulation 2024/1689) — Full classification, obligations, and enforcement timeline
- GDPR — Extended DPA review with AI-specific considerations
- German Works Constitution Act (BetrVG) — Co-determination requirements
- Schrems II / EU-US DPF — Transfer impact assessments
- ISO 42001 — AI management system alignment

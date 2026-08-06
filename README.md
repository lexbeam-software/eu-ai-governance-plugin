# EU AI Governance Plugin

![Version](https://img.shields.io/badge/version-1.1.0-blue)
![License](https://img.shields.io/badge/license-Apache%202.0-green)
![EU AI Act](https://img.shields.io/badge/legal%20baseline-6%20Aug%202026-purple)
![Platform](https://img.shields.io/badge/platform-Claude%20Code%20%2B%20Cowork-black)
![Validate](https://github.com/lexbeam-software/eu-ai-governance-plugin/actions/workflows/validate.yml/badge.svg)

Source-grounded EU AI Act governance for European in-house legal, compliance, privacy, security, and AI governance teams. Classify systems, coordinate DPIA and FRIA workflows, review vendors and policies, and assemble traceable evidence packs.

[Website](https://lexbeam-software.github.io/eu-ai-governance-plugin/) · [Lawve](https://lawve.ai/%40werner-plutat/plugin/eu-ai-governance) · [Issues](https://github.com/lexbeam-software/eu-ai-governance-plugin/issues)

## Why it is useful

- Six bounded commands for recurring governance work
- Six reusable skills with role-specific workflows
- Current enacted-law map for Regulation (EU) 2024/1689 as amended by Regulation (EU) 2026/1744
- Bundled connection to Lexbeam’s open EU AI Act MCP, when connected tools are supported and permitted, for versioned article summaries and official links, classification, deadlines, obligations, Article 6(3), and Annex IV checks
- Embedded fallback for local-only work, with an explicit source-date warning
- Fact-specific DACH escalation instead of treating Germany, Austria, and Switzerland as one legal regime
- Deterministic validation of manifests, links, versions, legal anchors, and stale-law regressions

The project supports professional judgment. It does not certify compliance or replace legal advice. See [LEGAL-DISCLAIMER.md](LEGAL-DISCLAIMER.md).

## Install in Claude Code

```bash
claude plugin marketplace add lexbeam-software/eu-ai-governance-plugin
claude plugin install eu-ai-governance@lexbeam
```

Then run:

```text
/eu-ai-governance:ai-act-status
/eu-ai-governance:classify-ai-risk <system description>
```

Requires Claude Code or Cowork with plugin support. The embedded workflow content has no package dependency. Connected MCP services are optional and may process selected context under their own terms; see [CONNECTORS.md](CONNECTORS.md).

## Install in Cowork

1. Download the validated release ZIP from GitHub or the matching Lawve release.
2. In Claude, open **Settings → Plugins → Add → Create plugin → Upload a plugin**.
3. Upload the ZIP and start with `/eu-ai-governance:ai-act-status`.

Verify that the uploaded package shows version `1.1.0`, Apache 2.0, and the 6 August 2026 legal baseline. Do not upload the stale Lawve v1 package.

## Commands

| Command | Outcome |
|---|---|
| `/eu-ai-governance:classify-ai-risk` | Cited classification, actor-specific duties, deadlines, evidence gaps, and next actions |
| `/eu-ai-governance:ai-act-status` | Evidence-based readiness assessment by control domain and operative date |
| `/eu-ai-governance:assess-ai-vendor` | Role map, evidence matrix, ranked risks, conditions, and contractual redlines |
| `/eu-ai-governance:run-dpia` | GDPR Article 35 DPIA with separate EU AI Act Article 27 FRIA scoping |
| `/eu-ai-governance:review-ai-policy` | Section-level policy findings or a versioned governance-policy draft |
| `/eu-ai-governance:generate-evidence-pack` | Requirement-to-evidence index and scoped review pack without false completeness claims |

## Skills

| Skill | Use it for |
|---|---|
| `ai-act-classification` | Article 5, Article 6, Annex I/III, Article 6(3), Article 50, GPAI, roles, and dates |
| `ai-act-compliance` | Inventories, AI literacy, programme controls, gaps, and roadmaps |
| `ai-vendor-assessment` | Provider evidence, DPA and contract review, model changes, incidents, and exit |
| `dpia-ai` | DPIA triggers, people-centred risks, DPO advice, Article 36, and FRIA coordination |
| `governance-documentation` | Annex IV, logs, conformity records, registrations, monitoring, and evidence indexes |
| `risk-management` | Risk registers, controls, metrics, monitoring, and incident escalation |

## Source-grounding model

The plugin follows [a documented legal source protocol](references/LEGAL-SOURCE-PROTOCOL.md):

1. Use the Lexbeam EU AI Act MCP when available.
2. Use the MCP summary and official URL to locate the decisive provision, then read the complete official text before stating a prohibition, exception, duty, deadline, or negative legal conclusion.
3. Prefer consolidated official text and verify amended wording against the amending act.
4. Separate enacted law, guidance, national law, contractual controls, and recommended practice.
5. Report the source mode and as-of date.

The connected server is also available independently:

- Public MCP: `https://mcp.lexbeam.com/mcp`
- npm: [`@lexbeam-software/eu-ai-act-mcp`](https://www.npmjs.com/package/@lexbeam-software/eu-ai-act-mcp)
- Source: [lexbeam-software/eu-ai-act-mcp](https://github.com/lexbeam-software/eu-ai-act-mcp)

## Current legal baseline

Embedded content was reviewed on **6 August 2026** against CELEX `02024R1689-20260727` and Regulation (EU) 2026/1744.

| Date | Milestone |
|---|---|
| 2 February 2025 | Article 4 and most Article 5 prohibitions apply |
| 2 August 2025 | GPAI duties and most penalty provisions apply |
| 27 July 2026 | Regulation (EU) 2026/1744 enters into force |
| 2 August 2026 | Article 50 and Commission GPAI enforcement apply |
| 2 December 2026 | New Article 5(1)(ba), (bb), 5(1a), and 5(1b) apply |
| 2 August 2027 | Legacy GPAI transition date |
| 2 December 2027 | Article 6(2)/Annex III high-risk rules apply |
| 2 August 2028 | Article 6(1)/Annex I high-risk rules apply |

The 2027 and 2028 dates are enacted, unconditional calendar dates. They are not proposal-era backstops.

## Examples

The examples are fictional demonstrations, not current vendor findings or legal opinions:

- [HR resume screening classification](examples/classify-ai-risk-hr-screening.md)
- [AI assistant vendor assessment](examples/assess-ai-vendor-chatgpt-enterprise.md)
- [Customer churn DPIA](examples/run-dpia-customer-churn-prediction.md)

## Validate a contribution

```bash
npm run validate
claude plugin validate .
```

The local validator checks component structure, versions, links, license presence, MCP configuration, exact legal anchors, and known stale-law phrases. Legal review remains necessary for substantive changes; use the [protected legal claim matrix](references/LEGAL-CLAIM-MATRIX.md). Maintainers should also complete the [distribution checklist](DISTRIBUTION-CHECKLIST.md) before publishing.

## Distribution and version integrity

GitHub releases are the source of truth. Before using a Lawve or other third-party copy, compare its version, license, and legal baseline with this repository. Distribution packages should be produced from a validated release commit.

## License and attribution

Apache License 2.0. See [LICENSE](LICENSE). Built and maintained by [Lexbeam Software](https://lexbeam.com), led by Werner Plutat. See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

The plugin can work standalone or alongside Anthropic’s public knowledge-work plugins. It is not affiliated with or endorsed by Anthropic.

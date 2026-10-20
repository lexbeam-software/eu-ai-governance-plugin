# Changelog

All notable changes are documented here.

## [1.2.0] - 2026-10-20

### Added

- Section 7 of the decision map: the status of harmonised standards and Commission guidance as of 20 October 2026.
  EN 18286:2026, the quality management system standard for Article 17, is the first harmonised standard with an
  Official Journal reference (Commission Implementing Decision (EU) 2026/2274, published and in force on
  14 October 2026); as of 20 October 2026 no harmonised standard covers the Chapter III, Section 2 requirements. The draft Article 6(5)
  classification guidelines, the final Article 50 guidelines and the transparency code of practice carry their status
- Six protected claims in the legal claim matrix (EN 18286 publication and scope, the Article 43(1) biometric route,
  ISO/IEC 42001, Article 17(2) and 63(1), the guidance status)
- A standards field in the evidence index and a "Record the standards applied" step in `governance-documentation`;
  the evidence pack lists a standards register

### Changed

- `governance-documentation`, `ai-act-compliance` and `ai-act-classification` name EN 18286:2026 for Article 17,
  the Annex VI condition for Annex III point 1 systems, the code of practice for Article 50 and the draft status of
  the classification guidelines; an ISO/IEC 42001 certificate is never presented as AI Act conformity
- The legal source protocol treats harmonised standards as their own category (verify the implementing decision;
  voluntary; presumption only as far as covered) and keeps draft guidelines labelled as drafts
- README and CONNECTORS.md: the 14 October 2026 standards date, the Article 111(4) transition, and the
  `euaiact://standards` resource from service version 1.7.3, with section 7 of the decision map as the fallback;
  CONNECTORS.md names 1.7.3 as the checked service version (live on mcp.lexbeam.com since 20 October 2026)

## [1.1.3] - 2026-10-01

### Changed

- CONNECTORS.md names the checked service version 1.7.0: every tool rejects arguments its schema does not name,
  FAQ answers state whether they matched, and `Artikel 4` resolves. Every tool the skills reference is live under
  the same name

## [1.1.2] - 2026-09-29

### Added

- Impressum and Datenschutz links in the plugin site's footer (lexbeam.com legal pages)
- CONNECTORS.md names the checked service version 1.6.2 (tool results without links, the Art. 50(2) transition
  answer); every tool the skills reference is live

### Changed

- ChatGPT and Codex packaging follows OpenAI's portable layout: `plugin.json` (agent-plugins 1.0.0) and `mcp.json` at
  the plugin root, the interface block under `extensions.com.openai`; `.codex-plugin/` is removed, since the root
  manifest supersedes that compatibility fallback

## [1.1.1] - 2026-09-28

### Added

- Data and privacy section in the README: what the plugin runs and what reaches the connected server
- Display name "Lexbeam EU AI Governance", homepage, repository and keywords in the plugin manifest
- `.codex-plugin/plugin.json` and `.codex-plugin/mcp.json`, so the same skills and server install in ChatGPT and Codex
- Plugin logo and icon under `assets/`

### Changed

- CONNECTORS.md names the checked service version (1.6.0) and links the server's privacy policy

## [1.1.0] - 2026-08-06

### Added

- Lexbeam EU AI Act MCP connection in Claude’s documented plugin `.mcp.json` format, plus connector-use protocol
- Enacted-law decision map and negative-claim source discipline
- Apache 2.0 license file
- Deterministic repository validator and CI workflow
- Version and distribution-integrity guidance for Lawve and other mirrors

### Corrected

- Complete Article 5 list, including points 5(1)(ba) and (bb) and their 2 December 2026 application date
- Article 6(1a) to (1c), Article 6(3), profiling override, documentation, and registration boundaries
- Annex III biometric-verification, essential-services, housing, insurance, and FRIA boundaries
- Article 18 documentation keeping, Article 19 logs, Article 43 conformity assessment, and Article 47 declaration mapping
- GDPR DPO consultation language; DPO approval is no longer presented as a universal statutory condition
- Actor-specific serious-incident routing and Article 4a paragraph 2 scope
- DACH wording to avoid treating three jurisdictions as one works-council regime

### Changed

- Replaced static vendor profiles with evidence-driven assessment
- Limited bundled MCP configuration to Lexbeam’s legal source; organisational connectors remain user-configured and read-only by default
- Replaced categorical RDG and product-liability conclusions with a neutral use notice
- Replaced “auditor-ready” and guaranteed-current claims with traceability and source-date language
- Removed the undeclared dependency on Anthropic’s legal plugin

## [1.0.0] - 2026-02-04

- Initial release with six commands, six skills, three fictional examples, and a static GitHub Pages site

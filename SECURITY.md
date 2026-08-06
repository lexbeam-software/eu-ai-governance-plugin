# Security Policy

## Reporting

Do not open a public issue for a vulnerability that could expose user data, credentials, connected-service access, or deployment infrastructure. Report it privately to `info@lexbeam.com` with the affected version, reproduction, impact, and any suggested mitigation.

For legal-content errors that do not create a security risk, use the public [issue tracker](https://github.com/lexbeam-software/eu-ai-governance-plugin/issues) and include the exact source, provision, consolidation date, and affected file.

## Data boundary

The plugin contains no credential store. MCP connectors are configured by URL and may require separate user authentication. Users decide which sources and context to place in scope. Do not include credentials, personal data, privileged material, or confidential business information in a vulnerability report unless strictly necessary and appropriately protected.

## Supported version

Security and material legal-content fixes are made against the current release line. Third-party mirrors, including Lawve copies, may lag behind GitHub; verify the displayed version before use.

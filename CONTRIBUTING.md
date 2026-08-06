# Contributing

Contributions that improve legal accuracy, workflow quality, accessibility, source traceability, or interoperability are welcome.

## Before opening a change

1. Base legal claims on official text and follow [the legal source protocol](references/LEGAL-SOURCE-PROTOCOL.md).
2. Update [the legal claim matrix](references/LEGAL-CLAIM-MATRIX.md) when a protected claim changes.
3. Keep actor, scope, paragraph, point, source status, and application date explicit.
4. Preserve local-only fallback and disclose any connected-service data flow.
5. Run `npm run validate` and `claude plugin validate .`.

For a negative legal claim, read the complete relevant provision. A missing search result is not evidence that a rule, exception, duty, or citation does not exist.

## Pull requests

Describe the user problem, files changed, official sources used, validation performed, and any remaining uncertainty. Do not combine a legal-content update with unrelated visual or packaging changes unless the release requires them together.

By contributing, you agree that your contribution is licensed under Apache License 2.0.

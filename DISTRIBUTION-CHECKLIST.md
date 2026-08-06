# Distribution Checklist

Use this checklist for every release so GitHub, GitHub Pages, Lawve, and uploaded ZIPs describe the same reviewed artifact.

## Before publishing

1. Run `npm run validate` and `claude plugin validate . --strict` from the release candidate.
2. Verify the six skills with the skill validator and review every protected claim in `references/LEGAL-CLAIM-MATRIX.md` against the cited official provision.
3. Confirm the version, Apache-2.0 license, legal baseline date, command namespace, and bundled MCP endpoint agree across the manifests, README, website, and ZIP.
4. Open the website at desktop and mobile widths. Check every command name, external link, legal date, and disclaimer.
5. Build the ZIP from the validated candidate, test its archive integrity, validate the extracted copy, and record its SHA-256 digest in the release notes.

## Publish and reconcile

1. Publish the reviewed commit and GitHub release, then verify GitHub Pages serves the same version and wording.
2. Upload the exact validated ZIP to Lawve. Set the listing to version `1.1.0`, license `Apache-2.0`, and legal baseline `6 August 2026`.
3. Compare the Lawve download hash with the GitHub release asset. Do not publish a rebuilt or edited archive under the same version.
4. Test one command from each installation route, including the namespaced form `/eu-ai-governance:ai-act-status`.
5. Record the live URLs, hashes, checks, and any known limitations in the release notes.

## Stop conditions

Do not publish when a validator fails, a legal claim has not been read in the complete official provision, a distribution carries a different license or version, or the archive differs from the reviewed candidate.

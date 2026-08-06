# Legal Source Protocol

Use this protocol for every legal classification, deadline, duty, exception, prohibition, and negative claim.

## Source order

1. Use the Lexbeam EU AI Act MCP to retrieve the versioned article summary and official EUR-Lex URL when available.
2. Follow the official URL and read the complete decisive provision. The MCP article tool is a locator and summary, not a reproduction of the article text.
3. Prefer the consolidated official text and identify the consolidation date.
4. For amended wording, verify the amending act in the Official Journal.
5. Treat Commission proposals, press releases, FAQs, and guidance as non-law unless the question concerns them specifically.
6. Label guidance, national law, organisational policy, and recommended practice separately from binding EU AI Act duties.

Release baseline:

- Regulation (EU) 2024/1689 as consolidated on 27 July 2026, CELEX `02024R1689-20260727`
- Regulation (EU) 2026/1744, CELEX `32026R1744`, in force since 27 July 2026
- Embedded content reviewed: 6 August 2026

## Required output discipline

- Cite the exact article, paragraph, point, and Annex item where relevant.
- State the actor: provider, deployer, importer, distributor, authorised representative, product manufacturer, or GPAI model provider.
- State whether the conclusion is binding law, guidance, national-law issue, contractual control, or recommended practice.
- Separate facts supplied by the user from assumptions and unresolved facts.
- Give an `as of` date and source mode.
- Never infer that a duty, exception, or prohibition does not exist from a failed search. Read the complete relevant provision before making a negative legal claim.
- If the complete official provision cannot be retrieved, state that verification is incomplete and do not present exact wording as verified.
- Never describe a proposal-only mechanism as enacted law.
- Do not claim that an artifact is regulator-approved, certified, compliant, or guaranteed.

## Minimum source note

End substantive outputs with:

> Source note: [connected MCP or embedded fallback], law reviewed as of [date]. Binding conclusions require fact-specific verification against the official text and applicable national and sector law.

For maintenance and release review, test protected claims against [LEGAL-CLAIM-MATRIX.md](LEGAL-CLAIM-MATRIX.md).

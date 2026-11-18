# Contributor checks for the EU AI Governance plugin

This branch holds the checks for [the plugin on `main`](https://github.com/lexbeam-software/eu-ai-governance-plugin).
They live here because Anthropic's plugin directory accepts scripts in a plugin's folder only from Verified
organisations. The plugin itself ships no scripts and runs none on your machine.

## Run the checks

From a checkout of `main`, with this branch checked out next to it:

```bash
git worktree add ../eu-ai-governance-tools origin/tools
node ../eu-ai-governance-tools/scripts/validate.mjs
sh ../eu-ai-governance-tools/scripts/claude-validate.sh
```

`validate.mjs` needs Node 20 or later and no packages. It checks component structure, versions, links, license
presence, the MCP configuration, exact legal anchors, known stale-law phrases and that `main` holds only the file
types the directory accepts. `claude-validate.sh` runs `claude plugin validate . --strict`.

The workflow `.github/workflows/validate.yml` on `main` runs both on every push and pull request.

## Build the OpenAI package

`main` is the Claude plugin. The OpenAI Plugins Directory takes an uploaded ZIP in its own format, so its
manifest (`openai/plugin.json`, with the listing, the review test cases and the publication settings) and its MCP
configuration (`openai/mcp.json`) live here, not on `main`:

```bash
sh ../eu-ai-governance-tools/scripts/build-openai-zip.sh . dist
```

The script copies `skills/`, `references/`, `assets/`, `LICENSE` and `LEGAL-DISCLAIMER.md` from `main`, takes the
version from `main`'s `.claude-plugin/plugin.json`, checks the result with `check-openai.mjs` against OpenAI's
limits and writes `dist/lexbeam-eu-ai-governance-openai-VERSION.zip`. With `OPENAI_DRAFT=1` it builds a `-draft`
ZIP before the demo recording URL exists.

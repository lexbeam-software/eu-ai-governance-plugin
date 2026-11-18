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

#!/bin/sh
# Runs Anthropic's own plugin validator against the plugin in the current directory.
set -eu
npx --yes @anthropic-ai/claude-code@2.1.150 plugin validate . --strict

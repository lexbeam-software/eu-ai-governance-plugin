#!/bin/sh
# Builds the OpenAI Plugins Directory package from a checkout of main.
# Usage, from the tools checkout: sh scripts/build-openai-zip.sh /path/to/main-checkout [output-dir]
# OPENAI_DRAFT=1 builds a -draft ZIP without the demo URL, for testing before the recording exists.
# main stays the Claude plugin. This script takes its skills, references, assets and legal files,
# adds the OpenAI manifest and MCP config from openai/, sets the version from main and zips the result.
set -eu
main=$(cd "$1" && pwd)
out=$(mkdir -p "${2:-dist}" && cd "${2:-dist}" && pwd)
tools=$(cd "$(dirname "$0")/.." && pwd)
version=$(node -e 'process.stdout.write(JSON.parse(require("fs").readFileSync(process.argv[1],"utf8")).version)' "$main/.claude-plugin/plugin.json")
stage=$(mktemp -d)
trap 'rm -rf "$stage"' EXIT
pkg="$stage/eu-ai-governance"
mkdir -p "$pkg"
for item in skills references assets LICENSE LEGAL-DISCLAIMER.md; do
  cp -R "$main/$item" "$pkg/"
done
cp "$tools/openai/mcp.json" "$pkg/mcp.json"
node -e '
  const fs = require("fs");
  const [src, dst, version] = process.argv.slice(1);
  const manifest = JSON.parse(fs.readFileSync(src, "utf8"));
  manifest.version = version;
  fs.writeFileSync(dst, JSON.stringify(manifest, null, 2) + "\n");
' "$tools/openai/plugin.json" "$pkg/plugin.json" "$version"
node "$tools/scripts/check-openai.mjs" "$pkg"
suffix=""
[ "${OPENAI_DRAFT:-0}" = "1" ] && suffix="-draft"
zip_file="$out/lexbeam-eu-ai-governance-openai-$version$suffix.zip"
rm -f "$zip_file"
(cd "$pkg" && find . -type f | LC_ALL=C sort | sed 's#^\./##' | TZ=UTC zip -q -X -D "$zip_file" -@)
echo "$zip_file"

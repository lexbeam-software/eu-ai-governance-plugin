import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const failures = [];
const passes = [];

function read(relative) {
  return fs.readFileSync(path.join(root, relative), "utf8").replace(/^\uFEFF/, "");
}

function check(name, condition, detail = "") {
  if (condition) passes.push(name);
  else failures.push(`${name}${detail ? `: ${detail}` : ""}`);
}

function filesUnder(relative) {
  const base = path.join(root, relative);
  return fs.readdirSync(base, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(relative, entry.name);
    return entry.isDirectory() ? filesUnder(child) : [child];
  });
}

const plugin = JSON.parse(read(".claude-plugin/plugin.json"));
const marketplace = JSON.parse(read(".claude-plugin/marketplace.json"));
const mcp = JSON.parse(read(".mcp.json"));
const pkg = JSON.parse(read("package.json"));

check("plugin name", plugin.name === "eu-ai-governance");
check("version alignment", plugin.version === pkg.version && read("README.md").includes(`version-${plugin.version}`));
check("marketplace source", marketplace.plugins?.[0]?.source === "./");
check("license metadata", plugin.license === "Apache-2.0" && marketplace.plugins?.[0]?.license === "Apache-2.0" && pkg.license === "Apache-2.0");
check("license file", fs.existsSync(path.join(root, "LICENSE")) && read("LICENSE").includes("Apache License"));
check("plugin MCP wrapper", typeof mcp.mcpServers === "object" && !Array.isArray(mcp.mcpServers));
check("Lexbeam MCP", mcp.mcpServers?.["eu-ai-act"]?.type === "http" && mcp.mcpServers?.["eu-ai-act"]?.url === "https://mcp.lexbeam.com/mcp");
check("only bundled MCP is Lexbeam", Object.keys(mcp.mcpServers ?? {}).join(",") === "eu-ai-act");

const commands = filesUnder("commands").filter((file) => file.endsWith(".md"));
const skills = filesUnder("skills").filter((file) => file.endsWith("/SKILL.md"));
check("six commands", commands.length === 6, String(commands.length));
check("six skills", skills.length === 6, String(skills.length));

for (const file of commands) {
  const text = read(file);
  check(`${file} frontmatter`, /^---\n(?=[\s\S]*?\n---\n)[\s\S]*?^description:\s*.+$[\s\S]*?^---$/m.test(text));
}

for (const file of skills) {
  const text = read(file);
  const expected = path.basename(path.dirname(file));
  check(`${file} frontmatter`, new RegExp(`^---\\nname: ${expected}\\ndescription: .+\\n---\\n`).test(text));
  check(`${file} source protocol`, text.includes("LEGAL-SOURCE-PROTOCOL.md"));
}

const textFiles = filesUnder(".").filter((file) => /\.(md|html|json)$/.test(file) && !file.startsWith(".git/"));
const corpus = textFiles.map((file) => `${file}\n${read(file)}`).join("\n");

const forbidden = [
  ["proposal backstop", /backstop 2 December 2027|Commission decision.{0,80}(six|6) months/is],
  ["stale Annex III date", /Annex III.{0,100}(2 August 2026|Aug(?:ust)? 2, 2026)/is],
  ["stale Annex I date", /Annex I.{0,100}(2 August 2027|Aug(?:ust)? 2, 2027)/is],
  ["DPO approval mandate", /must be reviewed and approved by (?:your )?(?:Data Protection Officer|DPO)/i],
  ["Article 18 miscite", /Article 18\s*[-–—:]\s*Conformity assessment/i],
  ["Article 19 miscite", /Article 19\s*[-–—:]\s*EU declaration of conformity/i],
  ["categorical PHG exclusion", /No claim under PHG arises/i],
  ["universal DACH works council", /works council.{0,30}mandatory in DACH/i],
  ["guaranteed currency", /stays current the day/i],
  ["wrong value-chain citation", /Article 21\(4\)/i],
  ["obligations tool used for unsupported roles", /euaiact_get_obligations.{0,80}(?:each relevant actor|by actor)/is],
  ["unnamespaced command", /(?:^|[\s>])\/(?!eu-ai-governance:)(?:classify-ai-risk|ai-act-status|assess-ai-vendor|run-dpia|review-ai-policy|generate-evidence-pack)\b/m]
];

for (const [name, pattern] of forbidden) check(`no ${name}`, !pattern.test(corpus));

const requiredAnchors = [
  "5(1)(ba)", "5(1)(bb)", "without right", "Article 6(1a)", "Article 6(3)",
  "profiling", "Article 49(2)", "one-to-one biometric verification", "does not create a generic housing category",
  "life and health insurance", "Article 27(4)", "Article 18", "Article 19", "Article 43", "Article 47",
  "Article 4a", "This paragraph does not create any obligation", "2 December 2027", "2 August 2028"
];
for (const anchor of requiredAnchors) check(`legal anchor ${anchor}`, corpus.includes(anchor));

for (const file of textFiles.filter((item) => item.endsWith(".md"))) {
  const text = read(file);
  const links = [...text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
  for (const target of links) {
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const clean = decodeURIComponent(target.split("#")[0]);
    check(`${file} link ${target}`, fs.existsSync(path.resolve(root, path.dirname(file), clean)));
  }
}

console.log(`PASS ${passes.length}`);
for (const name of passes) console.log(`  ✓ ${name}`);
if (failures.length) {
  console.error(`FAIL ${failures.length}`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}
console.log("VALIDATION OK");

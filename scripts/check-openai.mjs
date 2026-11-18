// Checks an assembled OpenAI plugin folder against the limits on developers.openai.com/plugins
// (deploy/submission and build/plugins, read 18 November 2026).
import fs from "node:fs";
import path from "node:path";

const dir = process.argv[2];
const failures = [];
const check = (name, ok, detail = "") => { if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`); };
const read = (file) => JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));

const manifest = read("plugin.json");
const mcp = read("mcp.json");
const openai = manifest.extensions?.["com.openai"] ?? {};
const ui = openai.interface ?? {};
const review = openai.review ?? {};

check("version set", /^\d+\.\d+\.\d+$/.test(manifest.version ?? ""), manifest.version);
check("displayName <= 30", (ui.displayName ?? "").length > 0 && ui.displayName.length <= 30, ui.displayName);
check("shortDescription <= 30", (ui.shortDescription ?? "").length > 0 && ui.shortDescription.length <= 30, ui.shortDescription);
check("longDescription <= 4000", (ui.longDescription ?? "").length > 0 && ui.longDescription.length <= 4000);
check("developerName <= 80", (ui.developerName ?? "").length > 0 && ui.developerName.length <= 80);
for (const key of ["websiteURL", "supportURL", "privacyPolicyURL", "termsOfServiceURL"]) {
  check(`${key} https`, /^https:\/\/\S+$/.test(ui[key] ?? "") && ui[key].length <= 1024, ui[key]);
}
const prompts = ui.defaultPrompt ?? [];
check("defaultPrompt 1 to 3, unique, <= 128", prompts.length >= 1 && prompts.length <= 3 &&
  new Set(prompts).size === prompts.length && prompts.every((p) => p.length <= 128 && !p.includes("@")));
for (const key of ["logo", "composerIcon"]) {
  const file = ui[key] ?? "";
  check(`${key} file`, file.startsWith("./") && fs.existsSync(path.join(dir, file)), file);
}
const positive = review.test_cases?.positive ?? [];
const negative = review.test_cases?.negative ?? [];
check("five positive test cases", positive.length === 5, String(positive.length));
check("three negative test cases", negative.length === 3, String(negative.length));
check("positive fields", positive.every((c) => c.description && c.prompt && c.tools_triggered?.length && c.expected_behavior));
check("negative fields", negative.every((c) => c.description && c.prompt));
const draft = process.env.OPENAI_DRAFT === "1";
if (!draft) check("demo recording URL", /^https:\/\//.test(review.demo_recording_url ?? ""), review.demo_recording_url);
const countries = openai.publication?.countries ?? [];
check("countries uppercase codes", countries.length > 0 && countries.every((c) => /^[A-Z]{2}$/.test(c)));

const servers = Object.entries(mcp.mcpServers ?? {});
check("one remote MCP server", servers.length === 1 && servers[0][1].url === "https://mcp.lexbeam.com/mcp");

const files = [];
const walk = (rel) => fs.readdirSync(path.join(dir, rel), { withFileTypes: true }).forEach((e) => {
  const child = path.join(rel, e.name);
  e.isDirectory() ? walk(child) : files.push(child);
});
walk(".");
check("no hooks or app references", !files.some((f) => /(^|\/)(hooks\.json|\.app\.json)$|(^|\/)apps\//.test(f)));
check("skills present", files.filter((f) => f.endsWith("/SKILL.md")).length === 6);
for (const f of files.filter((f) => /\.(png|jpe?g|webp|svg)$/.test(f))) {
  check(`image under 5 MiB ${f}`, fs.statSync(path.join(dir, f)).size <= 5 * 1024 * 1024);
}

if (failures.length) {
  console.error(`OpenAI package check: ${failures.length} failure(s)`);
  for (const f of failures) console.error(`  x ${f}`);
  process.exit(1);
}
console.log(`OpenAI package check: OK (${files.length} files, version ${manifest.version})${draft ? ", draft: demo URL not checked" : ""}`);

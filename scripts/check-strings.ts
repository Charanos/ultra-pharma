/**
 * Fails the build on the BPTAP misnaming and on any string deleted in `05 §9`.
 *
 * Run with `npm run lint:strings`.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["app", "components", "content", "lib"];
const EXTENSIONS = new Set([".ts", ".tsx", ".mdx", ".md", ".css"]);

type Rule = {
  readonly pattern: RegExp;
  readonly reason: string;
};

const rules: readonly Rule[] = [
  // Rule 1. The panel is the Benefits Package and Tariffs Advisory Panel.
  { pattern: /\bBTAP\b/, reason: 'Wrong abbreviation. The panel is "BPTAP".' },
  {
    pattern: /Benefit Package Technical Advisory Panel/i,
    reason: 'Wrong name. Use "Benefits Package and Tariffs Advisory Panel".',
  },
  {
    pattern: /Technical Advisory Panel/i,
    reason: 'Wrong name. The panel is the "Benefits Package and Tariffs Advisory Panel".',
  },

  // Unverifiable claims deleted from the old site. `05 §9`.
  { pattern: /25\+\s*Years of Excellence/i, reason: "Unverifiable claim, deleted in 05 §9." },
  { pattern: /100M\+\s*Patients Served/i, reason: "Unverifiable claim, deleted in 05 §9." },
  { pattern: /50\+\s*Countries Reached/i, reason: "Unverifiable claim, deleted in 05 §9." },
  {
    pattern: /global leader in pharmaceutical innovation/i,
    reason: "Unsupportable claim, deleted in 05 §9.",
  },
  {
    pattern: /innovative pharmaceutical solutions/i,
    reason: "Describes a manufacturer, not a consultancy. Deleted in 05 §9.",
  },
  {
    pattern: /research, development, and manufacturing/i,
    reason: "The firm advises. It does not manufacture. Deleted in 05 §9.",
  },
  {
    pattern: /Pioneering pharmaceutical excellence/i,
    reason: "Deleted in 05 §9.",
  },
  { pattern: /©\s*2025\b/, reason: "Hardcoded year. Use a dynamic year." },

  // Voice rules. `05 §1`.
  { pattern: /—/, reason: "No em dashes." },
  { pattern: /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, reason: "No emoji." },
];

/** `href="#"` is a dead link. Anchors to real ids are fine. */
const deadLink = /href=["']#["']/;

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (EXTENSIONS.has(extname(full))) out.push(full);
  }
  return out;
}

const failures: string[] = [];

for (const dir of SCAN_DIRS) {
  let files: string[];
  try {
    files = walk(join(ROOT, dir));
  } catch {
    continue;
  }

  for (const file of files) {
    const contents = readFileSync(file, "utf8");
    const lines = contents.split(/\r?\n/);

    lines.forEach((line, index) => {
      for (const rule of rules) {
        if (rule.pattern.test(line)) {
          failures.push(
            `${relative(ROOT, file)}:${index + 1}  ${rule.reason}\n    ${line.trim()}`,
          );
        }
      }
      if (deadLink.test(line)) {
        failures.push(
          `${relative(ROOT, file)}:${index + 1}  Dead "#" link.\n    ${line.trim()}`,
        );
      }
    });
  }
}

if (failures.length > 0) {
  console.error(`\nString check failed with ${failures.length} issue(s):\n`);
  for (const failure of failures) console.error(failure + "\n");
  process.exit(1);
}

console.log("String check passed.");

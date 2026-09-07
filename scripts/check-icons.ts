/**
 * Fails the build when one icon is bound to two concepts.
 *
 * `04 §9` is one icon per labelled thing. That rule decays the moment someone
 * adds a concept and reaches for a mark that already means something else, and
 * it decays invisibly, because nothing breaks. This makes it break.
 *
 * It also fails on a Phosphor icon imported straight into a page or component
 * outside the registry, since that is how a second binding gets in without
 * passing through the file the guard reads. Controls and state marks are
 * exempt by name: they repeat on purpose.
 *
 * Run with `npm run lint:icons`.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

import { icons } from "../lib/icons";

const ROOT = process.cwd();
const SCAN_DIRS = ["app", "components", "content"];
const EXTENSIONS = new Set([".ts", ".tsx"]);

/**
 * Controls, states and brand glyphs. These are not labels, so they may appear
 * anywhere and as often as they need to.
 */
const EXEMPT = new Set([
  "ArrowRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowUp",
  "ArrowUpRight",
  "ArrowSquareOut",
  "List",
  "X",
  "Check",
  "CheckCircle",
  "CircleNotch",
  "Warning",
  "WarningCircle",
  "PaperPlaneTilt",
  "Moon",
  "Sun",
]);

/** Files allowed to import Phosphor components directly. */
const ALLOWED_DIRECT_IMPORT = new Set([
  "lib/icons.ts",
  "components/primitives/mark.tsx",
]);

const failures: string[] = [];

/* 1. No icon may carry two meanings. */
const byComponent = new Map<unknown, string[]>();
for (const [name, component] of Object.entries(icons)) {
  byComponent.set(component, [...(byComponent.get(component) ?? []), name]);
}

for (const [, names] of byComponent) {
  if (names.length > 1) {
    failures.push(
      `One icon is bound to ${names.length} concepts: ${names.join(", ")}. ` +
        "04 §9 is one icon per labelled thing. Give each its own mark.",
    );
  }
}

/* 2. No page or component may bind a mark outside the registry. */
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

const importPattern =
  /import\s*\{([^}]*)\}\s*from\s*["']@phosphor-icons\/react(?:\/dist\/ssr)?["']/g;

for (const dir of SCAN_DIRS) {
  let files: string[];
  try {
    files = walk(join(ROOT, dir));
  } catch {
    continue;
  }

  for (const file of files) {
    const rel = relative(ROOT, file);
    if (ALLOWED_DIRECT_IMPORT.has(rel)) continue;

    const source = readFileSync(file, "utf8");
    for (const match of source.matchAll(importPattern)) {
      const imported = match[1]
        .split(",")
        .map((part) => part.replace(/\btype\b/, "").trim())
        .filter(Boolean)
        .map((part) => part.split(/\s+as\s+/)[0].trim());

      for (const name of imported) {
        /* Type-only imports bind nothing. */
        if (name === "Icon" || name === "IconProps" || name === "IconWeight") continue;
        if (EXEMPT.has(name)) continue;
        failures.push(
          `${rel} imports ${name} directly. Add the concept to lib/icons.ts and ` +
            "render it with <Mark name=\"...\" />, so the mark has one meaning.",
        );
      }
    }
  }
}

if (failures.length > 0) {
  console.error("Icon check failed.\n");
  for (const failure of failures) console.error(`  ${failure}`);
  console.error("");
  process.exit(1);
}

console.log(`Icon check passed. ${Object.keys(icons).length} concepts, all distinct.`);

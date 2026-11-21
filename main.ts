// The joke about the demo — make.fun competition entry.
// Writes a one-line joke about working beside AI coding agents
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my AI coding agent to reproduce the demo crash. It reproduced my entire job.";

const OUT_FILE = "entry.txt";

// The gate counts Unicode code points, not UTF-16 units or bytes.
const codePoints = Array.from(JOKE).length;
if (codePoints < 1 || codePoints > 280 || !JOKE.trim()) {
  console.error(`${OUT_FILE} would be invalid`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUT_FILE), JOKE, "utf8");
console.log(`Wrote ${codePoints} code points to ${join(outDir, OUT_FILE)}`);

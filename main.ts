import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const line =
  "Back the bird: your words delivered at dawn, no battery, no signal, just wings and my word.";

writeFileSync(join(outDir, "entry.txt"), line + "\n");

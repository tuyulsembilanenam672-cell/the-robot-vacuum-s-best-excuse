import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My cliff sensors flagged that spot as a staircase, and I am not paid enough to fall down stairs.";

const points = [...LINE];
if (points.length < 1 || points.length > 140) {
  throw new Error(`entry must be 1-140 code points, got ${points.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${points.length} code points to /output/entry.txt`);

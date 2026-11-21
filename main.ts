// judge-feel-awe — make.fun entry for make-the-ai-judge-feel-awe-20261121-1600
//
// The entry is a program that writes one short text to /output/entry.txt.
// The judge's brief (RULES.txt, published in full) is a relaxation judge:
// it picks the text that leaves it calmer, unhurried, at ease — and its
// fourth criterion is the awe one: "It dwarfs you: an image or a thought
// you can return to that keeps growing after the last line."
//
// So the text aims at both at once: calm first, vast second. It shows
// rather than instructs — no "breathe", no "close your eyes", no wellness
// stock phrases. One concrete image, plain words, a slow rhythm:
// starlight older than language, still travelling, arriving quietly
// in an ordinary room. The scale does the relaxing: whatever the reader
// is carrying, it is small beside a light that crossed all that dark
// and silence just to land, unhurried, on the floor beside them.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Somewhere above the clouds, starlight that left its home before humans " +
  "had words is still travelling, and tonight a little of it slips quietly " +
  "through your window and rests on the floor beside you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate guard: the sealed scorer refuses entry.txt outside 1–280 code
// points, so fail loudly here rather than shipping an invalid entry.
const length = [...TEXT].length;
if (length < 1 || length > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${length} chars, outside the 1-280 gate`);
}
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote entry.txt (${length} chars)`);

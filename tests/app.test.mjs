import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");

const banned = ["kalori", "målvikt", "kilo", "vikt", "protein/dag", "bmi"];
const lower = html.toLowerCase();
for (const word of banned) {
  assert.ok(!lower.includes(word), `index.html ska inte innehålla "${word}" (fel ton för en barnapp)`);
}

console.log("Innehållskontroll klar: ingen vikt/kalori-terminologi hittad.");

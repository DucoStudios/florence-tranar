import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { Script } from "node:vm";

const html = readFileSync("index.html", "utf8");
const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(match => match[1].trim())
  .filter(Boolean);

assert.equal(inlineScripts.length, 1, "index.html ska ha exakt ett inline-appskript");
new Script(inlineScripts[0], { filename: "index.inline.js" });
new Script(readFileSync("sw.js", "utf8"), { filename: "sw.js" });

const manifest = JSON.parse(readFileSync("manifest.webmanifest", "utf8"));
assert.equal(manifest.display, "standalone");
assert.equal(manifest.orientation, "portrait");
assert.ok(Array.isArray(manifest.icons) && manifest.icons.length >= 2, "manifestet behöver appikoner");
for (const icon of manifest.icons) {
  assert.ok(existsSync(icon.src.replace(/^\.\//, "")), `saknad ikon: ${icon.src}`);
}

for (const tag of ["div", "nav", "button", "script", "style"]) {
  const open = (html.match(new RegExp(`<${tag}(?:\\s|>)`, "g")) || []).length;
  const close = (html.match(new RegExp(`</${tag}>`, "g")) || []).length;
  assert.equal(open, close, `obalanserad <${tag}>`);
}

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, "HTML-id:n måste vara unika");

console.log("Statisk kontroll klar: HTML, JavaScript, service worker, manifest och ikoner.");

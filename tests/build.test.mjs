import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../dist/", import.meta.url);
const readPage = (file) => readFile(new URL(file, output), "utf8");
const routes = [
  ["index.html", "Ruby for Good - Belgium 2027"],
  ["faqs.html", "Ruby for Good - Belgium 2027 - FAQs"],
  ["schedule.html", "Ruby in Ghent 2027 - Schedule"],
  ["docs/code-of-conduct.html", "Hack For The People - Code of Conduct"],
  ["docs/privacy-policy.html", "Hack For The People - Privacy Policy"],
  ["404.html", "Page not found - Ruby for Good"],
];

for (const [file, title] of routes) {
  test(`${file} has static content, metadata, navigation, and footer`, async () => {
    const html = await readPage(file);
    assert.ok(html.includes(`<title>${title}</title>`));
    assert.match(html, /<html\b[^>]*lang="en"/);
    assert.match(html, /<meta\b[^>]*name="description"/);
    assert.match(html, /<meta\b[^>]*name="viewport"/);
    assert.match(html, /href="\/schedule"/);
    assert.match(html, /href="\/faqs"/);
    assert.ok(html.includes("Registration coming soon"));
    assert.ok(html.includes("<small>Ruby for Good ❤️</small>"));
    assert.doesNotMatch(html, /__NEXT_DATA__|\/_next\/|jquery|popper\.js/);
  });
}

test("homepage preserves event details and hydrates only project controls", async () => {
  const html = await readPage("index.html");
  assert.ok(html.includes("Feb 1-3, 2027"));
  assert.ok(html.includes("A three-day code retreat"));
  assert.ok(html.includes("Location coming soon"));
  assert.ok(html.includes("Location details coming soon."));
  assert.match(html, /<button\b[^>]*disabled[^>]*>\s*Registration coming soon\s*<\/button>/);
  for (const title of ["Foster Care", "Animal Rescues", "Poverty", "Health"]) {
    assert.ok(html.includes(`<h3>${title}</h3>`));
  }
  assert.equal((html.match(/<astro-island\b/g) ?? []).length, 1);
  assert.match(html, /component-url="[^"]*ProjectTracks[^"]*"/);
  assert.doesNotMatch(html, /Jam Ghent|Gaspar de Craeyerstraat|ti\.to\/codeforgood|openstreetmap/);
});

test("FAQ answers are static, accessible without React, and preserve the copy", async () => {
  const html = await readPage("faqs.html");
  assert.equal((html.match(/<details\b/g) ?? []).length, 17);
  assert.equal((html.match(/<summary\b/g) ?? []).length, 17);
  assert.ok(html.includes("Ruby for Good is a code retreat:"));
  assert.ok(html.includes("Building community is a big part of why we get together."));
  assert.ok(html.includes("Registration is coming soon!"));
  assert.ok(html.includes('href="https://rubyforgood.org"'));
  assert.ok(html.includes("chelseatroy.com/2019/04/02/"));
  assert.doesNotMatch(html, /<astro-island\b|hackathon/i);
});

test("all schedule days are prerendered in a single interactive island", async () => {
  const html = await readPage("schedule.html");
  for (const [day, date] of [["Monday", 1], ["Tuesday", 2], ["Wednesday", 3]]) {
    assert.match(html, new RegExp(`${day},\\s*February ${date}`));
  }
  assert.ok(html.includes("Evening activities are optional"));
  assert.equal((html.match(/<astro-island\b/g) ?? []).length, 1);
  assert.match(html, /component-url="[^"]*ScheduleTabs[^"]*"/);
});

test("custom domain and existing public assets are included in the build", async () => {
  assert.equal((await readPage("CNAME")).trim(), "rubyinghent.org");
  for (const file of [
    "favicon.ico",
    "img/logos/classic-logo.png",
    "img/tracks/casa.svg",
    "img/tracks/homewardtails.svg",
    "img/tracks/essentials.svg",
    "img/tracks/medstick.svg",
  ]) {
    assert.ok((await readFile(new URL(file, output))).length > 0, file);
  }
});

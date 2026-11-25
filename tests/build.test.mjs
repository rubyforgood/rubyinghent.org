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
    assert.match(html, /<a href="https:\/\/ti\.to\/codeforgood\/rubyinghent" class="nav-link">Register<\/a>/);
    assert.doesNotMatch(html, /(?:location|venue|registration)[^.<>]*coming soon/i);
    assert.ok(html.includes("<small>Ruby for Good ❤️</small>"));
    assert.match(html, /src="\/img\/illustrations\/coffee-with-friends\.svg"/);
    assert.doesNotMatch(html, /src="\/img\/illustrations\/footer\.svg"/);
    assert.doesNotMatch(html, /__NEXT_DATA__|\/_next\/|jquery|popper\.js/);
  });
}

test("homepage preserves event details and hydrates only project controls", async () => {
  const html = await readPage("index.html");
  assert.ok(html.includes("Feb 1-3, 2027"));
  assert.ok(html.includes("A three-day code retreat"));
  assert.match(html, /<h3>JAM Ghent<\/h3>\s*<p\b[^>]*>Gaspar de Craeyerstraat 2, 9000 Ghent, Belgium<\/p>/);
  assert.match(html, /<a href="https:\/\/www\.google\.com\/maps\/[^"]*">Get directions to JAM Ghent<\/a>/);
  assert.match(html, /src="\/img\/illustrations\/pair-programming\.svg"/);
  assert.doesNotMatch(html, /src="\/img\/illustrations\/header\.svg"/);
  assert.match(html, /<a class="btn w-100 btn-light" href="https:\/\/ti\.to\/codeforgood\/rubyinghent">\s*Register\s*<\/a>/);
  for (const title of ["Foster Care", "Animal Rescues", "Poverty", "Health"]) {
    assert.ok(html.includes(`<h3>${title}</h3>`));
  }
  assert.equal((html.match(/<astro-island\b/g) ?? []).length, 1);
  assert.match(html, /component-url="[^"]*ProjectTracks[^"]*"/);
});

test("FAQ answers are static, accessible without React, and preserve the copy", async () => {
  const html = await readPage("faqs.html");
  assert.equal((html.match(/<details\b/g) ?? []).length, 17);
  assert.equal((html.match(/<summary\b/g) ?? []).length, 17);
  assert.ok(html.includes("Ruby for Good is a code retreat:"));
  assert.ok(html.includes("Building community is a big part of why we get together."));
  assert.ok(html.includes("Registration is free and required to attend."));
  assert.match(html, /<a href="https:\/\/ti\.to\/codeforgood\/rubyinghent">Register on Tito<\/a>/);
  assert.ok(html.includes("The separate Event Donation option does not register you"));
  assert.ok(html.includes("Gaspar de Craeyerstraat 2, 9000 Ghent, Belgium"));
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

test("Wednesday wraps up at 3 PM, with optional plans afterward", async () => {
  const html = await readPage("schedule.html");
  const [, agenda] = html.match(/<h2>Wednesday,\s*February 3<\/h2><ul>(.*?)<\/ul>/s) ?? [];
  assert.ok(agenda, "Wednesday agenda is rendered");
  assert.match(agenda.replaceAll("<!-- -->", ""), /<strong>3:00 PM<\/strong> - Retreat wraps up.*<strong>After the retreat<\/strong> - .*optional dinner, sightseeing/s);
  assert.doesNotMatch(agenda, /<strong>4:00 PM<\/strong>/);
});

test("custom domain and existing public assets are included in the build", async () => {
  assert.equal((await readPage("CNAME")).trim(), "rubyinghent.org");
  for (const file of [
    "favicon.ico",
    "img/logos/classic-logo.png",
    "img/illustrations/pair-programming.svg",
    "img/illustrations/coffee-with-friends.svg",
    "img/tracks/casa.svg",
    "img/tracks/homewardtails.svg",
    "img/tracks/essentials.svg",
    "img/tracks/medstick.svg",
  ]) {
    assert.ok((await readFile(new URL(file, output))).length > 0, file);
  }
});

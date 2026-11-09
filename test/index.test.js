import test from "node:test";
import assert from "node:assert/strict";
import countCharacters, { countCharacters as namedCountCharacters } from "../index.js";

test("counts characters in a string", () => {
  assert.equal(countCharacters("Hello, world!"), 13);
});

test("counts Unicode characters as one code point", () => {
  assert.equal(countCharacters("café 🌍"), 6);
});

test("can ignore regular spaces", () => {
  assert.equal(countCharacters("hello world", { ignoreSpaces: true }), 10);
});

test("can ignore all whitespace", () => {
  assert.equal(countCharacters("hello \nworld\t!", { ignoreWhitespace: true }), 11);
});

test("exports the named function", () => {
  assert.equal(namedCountCharacters, countCharacters);
});

test("rejects non-string input", () => {
  assert.throws(() => countCharacters(123), {
    name: "TypeError",
    message: "text must be a string"
  });
});

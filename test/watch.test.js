import test from "node:test";
import assert from "node:assert/strict";
import { watchSeconds } from "../lib/whales.js";

test("a bare --watch uses the intended 30 second default", () => {
  assert.equal(watchSeconds(true), 30);
});

test("--watch with no flag at all disables polling", () => {
  assert.equal(watchSeconds(undefined), 0);
});

test("--watch <n> uses max(20, n)", () => {
  assert.equal(watchSeconds("45"), 45);
  assert.equal(watchSeconds("5"), 20);
  assert.equal(watchSeconds("0"), 20);
});

test("a non-numeric --watch value is an error", () => {
  assert.throws(() => watchSeconds("abc"), /--watch/);
});

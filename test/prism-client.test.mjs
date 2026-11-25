import assert from "node:assert/strict";
import test from "node:test";
import { PrismClient } from "../dist/index.js";

test("trims trailing slashes from the base URL", () => {
  const client = new PrismClient({ baseUrl: "https://example.com/api///" });
  assert.equal(client.baseUrl, "https://example.com/api");
});

test("normalizes endpoint paths with or without a leading slash", () => {
  const client = new PrismClient({ baseUrl: "https://example.com/api/" });
  assert.equal(client.getEndpoint("/health"), "https://example.com/api/health");
  assert.equal(client.getEndpoint("health"), "https://example.com/api/health");
});

test("preserves query strings and fragments in the supplied path", () => {
  const client = new PrismClient({ baseUrl: "https://example.com" });
  assert.equal(
    client.getEndpoint("items?limit=10#top"),
    "https://example.com/items?limit=10#top",
  );
});

test("retains the optional API-key value without making a network request", () => {
  const client = new PrismClient({
    baseUrl: "https://example.com",
    apiKey: "test-only-value",
  });
  assert.equal(client.apiKey, "test-only-value");
});

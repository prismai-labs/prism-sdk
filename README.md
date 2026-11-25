# Prism SDK

A small, experimental TypeScript helper for composing Prism service endpoint URLs.

**Current scope:** `PrismClient` stores a base URL and optional API-key value, then normalizes paths with `getEndpoint()`. It does not make HTTP requests, attach authentication headers, call an API, or provide an MCP client. Those capabilities are not implemented yet.

## Requirements

- Node.js 22 or newer
- npm

## Install and verify

```bash
npm install
npm run lint
npm test
```

The test command builds the TypeScript output and runs the Node.js test suite.

## Usage

```ts
import { PrismClient } from "@prismai-labs/prism-sdk";

const client = new PrismClient({
  baseUrl: "https://example.com/api",
});

const healthUrl = client.getEndpoint("/health");
console.log(healthUrl);
// https://example.com/api/health
```

The helper trims trailing slashes from `baseUrl` and ensures the supplied path starts with a slash. It does not validate that the host exists or that the route is supported.

## API

### `new PrismClient(options)`

| Option | Type | Required | Notes |
| --- | --- | --- | --- |
| `baseUrl` | string | Yes | Base URL used for string composition |
| `apiKey` | string | No | Stored on the instance for future integration; it is not sent anywhere or applied to requests |

### `getEndpoint(path)`

Returns the base URL joined with a slash-normalized path. Query strings and fragments are treated as part of the supplied path string; this helper does not parse or validate URLs.

## Project scripts

| Command | Purpose |
| --- | --- |
| `npm run lint` | Type-check without emitting files |
| `npm run build` | Compile TypeScript into `dist/` |
| `npm test` | Build and run automated unit tests |

## Project maturity

This package is an early-stage helper, not a complete production SDK. It has no network client, retry policy, request serialization, authentication, response model, or server discovery. Do not treat the illustrative `/health` path as a verified Prism API endpoint.

## License

MIT. See [LICENSE](LICENSE).

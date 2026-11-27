# Prism SDK

An experimental TypeScript helper package for Prism AI, maintained by [Prism AI Labs](https://github.com/prismai-labs).

> **Status:** Version `0.1.0`. The current code provides a small URL-construction helper. It is not yet a complete API client or a published, supported SDK release.

## Current functionality

The package exports:

- `PrismClientOptions`, which accepts a `baseUrl` and an optional `apiKey`.
- `PrismClient`, which removes trailing slashes from the configured base URL and provides `getEndpoint(path)` to join that base URL with a path.

Example:

```ts
import { PrismClient } from "./dist/index.js";

const client = new PrismClient({
  baseUrl: "https://api.example.com/",
});

console.log(client.getEndpoint("/v1/health"));
// https://api.example.com/v1/health
```

The current helper only constructs a URL string. It does not make HTTP requests, attach authentication headers, validate responses, or communicate with a Prism service. The optional `apiKey` is stored by the class but is not currently used.

## Requirements

- Node.js 22 or newer
- npm

## Get started

```bash
git clone https://github.com/prismai-labs/prism-sdk.git
cd prism-sdk
npm install
```

Run the configured checks and compile the TypeScript source:

```bash
npm run lint
npm test
npm run build
```

The build output is written to `dist/index.js`. The example above imports that compiled file after the build has completed.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/index.ts` | Options interface and URL-construction helper |
| `tsconfig.json` | Strict TypeScript compiler configuration |
| `package.json` | Package metadata and npm scripts |
| `.github/workflows/ci.yml` | CI checks for pushes and pull requests to `main` |
| `LICENSE` | MIT license |

## Tests and current limitations

The package defines `npm test` using Node's built-in test runner, but there are currently no committed test files. Add tests for trailing slash normalization, paths with and without a leading slash, and invalid or empty base URLs before expanding the public API.

The package is scoped as `@prismai-labs/prism-sdk`, but this repository does not by itself establish that it has been published to a package registry. No compatibility guarantees or production API coverage are claimed at this experimental stage.

## Contributing

Keep the client contract small and explicit. Any future network behavior should document authentication, error handling, timeouts, and response validation, with tests for each supported operation.

## License

This repository is available under the [MIT License](LICENSE).

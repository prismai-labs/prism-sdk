# prism-sdk

TypeScript client library for interacting with **Prism AI** services and MCP endpoints.

## Installation & Build

```bash
npm install
npm run lint
npm test
npm run build
```

## Usage Example

```ts
import { PrismClient } from "./src/index.js";

const client = new PrismClient({ baseUrl: "https://api.example.com" });
console.log(client.getEndpoint("/health"));
```

## License

MIT

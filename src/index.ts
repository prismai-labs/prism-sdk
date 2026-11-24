export interface PrismClientOptions {
  baseUrl: string;
  apiKey?: string;
}

export class PrismClient {
  readonly baseUrl: string;
  readonly apiKey?: string;

  constructor(options: PrismClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/+$/, "");
    this.apiKey = options.apiKey;
  }

  getEndpoint(path: string): string {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${this.baseUrl}${normalized}`;
  }
}

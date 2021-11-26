export class Base {
  public config: any = {};
  public apiKey: any;
  public apiSecret: any;
  public baseURL: any;
  constructor(apiKey: any, apiSecret: any) {
    this.config.apiKey = apiKey;
    this.config.apiSecret = apiSecret;
    this.config.baseURL = 'https://api.binance.com';
  }
}

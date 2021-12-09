import { buildQueryString, createRequest, removeEmptyValue } from '../util';
import * as crypto from 'crypto';

export class Base {
  public config: any = {};
  constructor(apiKey: string, apiSecret: string) {
    this.config.apiKey = apiKey;
    this.config.apiSecret = apiSecret;
    this.config.baseURL = 'https://api.mexc.com/api/v3';
  }

  public publicRequest (method: string, path: string, paramsObj: any = {}): any {
    paramsObj = removeEmptyValue(paramsObj)
    paramsObj = buildQueryString(paramsObj)
    if(paramsObj !== '') {
      path = `${path}?${paramsObj}`
    }

    return createRequest({
      method: method,
      baseURL: this.config.baseURL,
      url: path,
      headers: {
        'Content-Type': 'application/json',
        'X-MEXC-APIKEY': this.config.apiKey
      }
    })
  }

  public signRequest(method: string, path: string, paramsObj: any = {}): any {
    const timestamp = Date.now()
    paramsObj = removeEmptyValue(paramsObj)
    const queryString = buildQueryString({ ...paramsObj, timestamp })
    const signature = crypto
        .createHmac('sha256', this.config.apiSecret)
        .update(queryString)
        .digest('hex')

    return createRequest({
      method: method,
      baseURL: this.config.baseURL,
      url: `${path}?${queryString}&signature=${signature}`,
      headers: {
        'Content-Type': 'application/json',
        'X-MEXC-APIKEY': this.config.apiKey
      }
    })
  }
}
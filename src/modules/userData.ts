import { Common } from './common';

export class UserData extends Common {
    /**
     * Account Information
     * 
     * @returns 
     */
    public accountInfo() {
      const res = this.publicRequest('GET', '/account')
      return JSON.parse(res.getBody())
    }
  
  
    /**
     * Account Trade List
     * 
     * @param symbol 
     * @param options 
     * ```
     * [options.orderId] - This can only be used in combination with symbol.
     * [options.startTime]
     * [options.endTime]
     * [options.fromId] - TradeId to fetch from. Default gets most recent trades.
     * [options.limit] - default: 500, Max: 1000
     * ```
     * @returns 
     */
    public accountTradeList(symbol: string, options:any = { limit: 500 }) {
      const res = this.publicRequest('GET', '/myTrades', Object.assign(options, {
        symbol: symbol.toUpperCase()
      }))
      return JSON.parse(res.getBody())
    }
  }

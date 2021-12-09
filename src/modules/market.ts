import { Base } from './base';
import { fromatData } from '../util'

export class Market extends Base {
  /**
   * Exchange Information
   *
   * @param options
   * ```
   * [options.symbol] - symbol(optional) ex: BTCUSDT.
   * [options.symbols] - for mutiple symbols, add comma for each symbol in string. ex: BTCUSDT,BNBBTC .
   *```
   *  @returns
   */
  exchangeInfo(options: any = {}) {
    if (Object.keys(options).includes("symbol")) {
      options["symbol"] = options["symbol"].toUpperCase();
    }
    if (Object.keys(options).includes("symbols")) {
      options["symbols"] = options["symbols"].split(',').map((symbol: any) => symbol.toUpperCase()).join(',');
    }

    const res = this.publicRequest("GET", "/exchangeInfo", options);
    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }

  /**
   * Order Book
   *
   * @param symbol
   * @param options
   * ```
   * [options.limit] - Default 100; max 5000. Valid limits:[5, 10, 20, 50, 100, 500, 1000, 5000].
   * ```
   * @returns
   */
  depth(symbol: string, options: any = { limit: 100 }) {
    const res = this.publicRequest(
      "GET",
      "/depth",
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      })
    );

    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }

  /**
   * Recent Trades List
   *
   * @param symbol
   * @param options
   * ```
   * [options.limit] -limit(optional) Default 500; max 1000. ex: 500.
   * ```
   * @returns
   */
  trades(symbol: string, options: any = { limit: 500 }) {
    const res = this.publicRequest(
      "GET",
      "/trades",
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      })
    );

    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }

  /**
   * Old Trade Lookup
   *
   * @param symbol
   * @param options
   * ```
   * [options.limit] -limit(optional) Default 500; max 1000. ex:500.
   * ```
   * @returns
   */
  historicalTrades(symbol: string, options: any = { limit: 500 }) {
    const res = this.publicRequest(
      "GET",
      "/historicalTrades",
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      })
    );

    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }

  /**
   * Compressed/Aggregate Trades List
   * 
   * Note: If sending startTime and endTime, the interval must be less than one hour
   * @param symbol
   * @param options
   * ```
   * [options.fromId] - id to get aggregate trades from INCLUSIVE.
   * [options.startTime] - Timestamp in ms to get aggregate trades from INCLUSIVE.
   * [options.endTime] - Timestamp in ms to get aggregate trades until INCLUSIVE.
   * [options.limit] - Default 500; max 1000. ex:500
   * ```
   * @returns
   */
  aggTrades(symbol: string, options: any = { limit: 500 }) {
    const res = this.publicRequest(
      "GET",
      "/aggTrades",
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      })
    );

    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }

  /**
   * Kline/Candlestick Data
   *
   * @param symbol
   * @param interval
   * @param options
   * ```
   * [options.startTime]
   * [options.endTime]
   * [options.limit] -Default 500; max 1000. ex: 500
   * ```
   * @returns
   */
  klines(symbol: string, interval: string, options: any = { limit: 500 }) {
    const res = this.publicRequest(
      "GET",
      "/klines",
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        interval: interval,
      })
    );
    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }

  /**
   * Current Average Price
   *
   * @param symbol
   */
  avgPrice(symbol: string) {
    const res = this.publicRequest("GET", "/avgPrice", { symbol: symbol.toUpperCase() });
    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }

  /**
   * 24hr Ticker Price Change Statistics
   *
   * @param symbol
   */
  ticker24hr(symbol?: string) {
    if (symbol) {
      symbol = symbol.toUpperCase();
    }

    const res = this.publicRequest("GET", "/ticker/24hr", { symbol });
    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }

  /**
   * Symbol Price Ticker
   *
   * @param symbol
   */
  tickerPrice(symbol?: string) {
    if (symbol) {
      symbol = symbol.toUpperCase();
    }
    
    const res = this.publicRequest("GET", "/ticker/price", { symbol });
    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }

  /**
   * Symbol Order Book Ticker
   * @param symbol
   */
  bookTicker(symbol?: string) {
    if (symbol) {
      symbol = symbol.toUpperCase();
    }

    const res = this.publicRequest("GET", "/ticker/bookTicker", { symbol });
    const rawData = JSON.parse(res.getBody());
    const formatDatas = fromatData(rawData);

    return formatDatas;
  }
}

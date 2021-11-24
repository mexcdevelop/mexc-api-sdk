# mexc-api-sdk

## Table of APIS
  - [Init](#init)
  - [Market](#market)
    - [Ping](#ping)
    - [Check Server Time](#check-server-time)
    - [Exchange Information](#exchange-information)
    - [Recent Trades List](#recent-trades-list)
    - [Order Book](#order-book)
    - [Old Trade Lookup](#old-trade-lookup)
    - [Aggregate Trades List](#aggregate-trades-list)
    - [kline Data](#kline-data)
    - [Current Average Price](#current-average-price)
    - [24hr Ticker Price Change Statistics](#24hr-ticker-price-change-statistics)
    - [Symbol Price Ticker](#symbol-price-ticker)
    - [Symbol Order Book Ticker](#symbol-order-book-ticker)
  - [Trade](#trade)
    - [Test New Order](#test-new-order)
    - [New Order](#new-order)
    - [cancel-order](#cancel-order)
    - [Cancel all Open Orders on a Symbol](#cancel-all-open-orders-on-a-symbol)
    - [Query Order](#query-order)
    - [Current Open Orders](#current-open-orders)
    - [All Orders](#all-orders)
    - [Account Information](#account-information)
    - [Account Trade List](#account-trade-list)
## Init
```javascript
import * as Mexc from 'Mexc';
const apiKey = 'apiKey'
const apiSecret = 'apiSecret'
const client = new Mexc.Spot(apiKey, apiSecret);
```
## Market
### Ping
```javascript
client.ping()
```
### Check Server Time
```javascript
client.time()
```
### Exchange Information
```javascript
client.exchangeInfo(options: any)
/**
 * choose one parameter
 * 
 * symbol : 
 *      Default ""; 
 *      example "BNBBTC";
 * 
 * symbols :
 *      Default []; 
 *      example ["BTCUSDT","BNBBTC"];
 * 
 */
options:{symbol, symbols}
```

### Recent Trades List
```javascript
client.trades(symbol: string, options: any = { limit: 500 })
/**
 * 
 * limit : 
 *      Default 500; 
 *      max 1000;
 * 
 */
options:{limit}
```
### Order Book
```javascript
client.depth(symbol: string, options: any = { limit: 100 })
/**
 * 
 * limit : 
 *      Default 100;
 *      max 5000;
 *      Valid:[5, 10, 20, 50, 100, 500, 1000, 5000]
 * 
 */
options:{limit}
```

### Old Trade Lookup
```javascript
client.historicalTrades(symbol: string, options: any = { limit: 500 })
/**
 * 
 * limit : 
 *      Default 500;
 *      max 1000;
 * 
 * fromId:
 *      Trade id to fetch from. Default gets most recent trades
 * 
 */
options:{limit, fromId}

```

### Aggregate Trades List
```javascript
client.aggTrades(symbol: string, options: any = { limit: 500 })
/**
 * 
 * fromId : 
 *      id to get aggregate trades from INCLUSIVE
 * 
 * startTime:
 *      start at
 * 
 * endTime:
 *      end at
 * 
 * limit : 
 *      Default 500;
 *      max 1000;
 * 
 */
options:{fromId, startTime, endTime, limit}
```
### kline Data
```javascript
client.klines(symbol: string, interval: string, options: any = { limit: 500 })
/**
 * 
 * interval : 
 *      m :minute; 
 *      h :Hour; 
 *      d :day; 
 *      w :week; 
 *      M :month
 *      example : "1m"
 * 
 */


/**
 * 
 * startTime : 
 *      start at
 * 
 * endTime :
 *      end at
 * 
 * limit : 
 *      Default 500;
 *      max 1000;
 * 
 */
options:{ startTime, endTime, limit}
```

### Current Average Price
```javascript
client.avgPrice(symbol: string)
```
### 24hr Ticker Price Change Statistics
```javascript
client.ticker24hr(symbol?: string)
```
### Symbol Price Ticker
```javascript
client.tickerPrice(symbol?: string)
```

### Symbol Order Book Ticker
```javascript
client.bookTicker(symbol?: string)
```
## Trade
### Test New Order
```javascript
client.newOrderTest(symbol: string,side: string,orderType: string,options: any = {})
/**
 * 
 * timeInForce : 
 *      example: GTC
 * 
 * quantity :
 *      example: 0.01
 * 
 * quoteOrderQty
 * 
 * price
 * 
 * newClientOrderId :
 *      A unique id among open orders. Automatically generated if not sent
 * 
 * stopPrice :
 *      sed with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders
 * 
 * icebergQty :
 *      Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order
 * 
 * newOrderRespType : 
 *      Set the response JSON. ACK, RESULT, or FULL;
 *      MARKET and LIMIT order types default to FULL, all other orders default to ACK
 * 
 * recvWindow : 
 *      The value cannot be greater than 60000
 * 
 */
options:{ startTime, endTime, limit}

```

### New Order

### cancel-order

### Cancel all Open Orders on a Symbol

### Query Order

### Current Open Orders

### All Orders

### Account Information

### Account Trade List

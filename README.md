# mexc-api-sdk

 MEXC Official Market and trade api sdk, easy to connection and send request to MEXC open api !
 
## Prerequisites
  - To use our SDK you have to install nodejs LTS (https://aws.github.io/jsii/user-guides/lib-user/)

## Installation
1. 
``` 
git clone https://github.com/mxcdevelop/mexc-api-sdk.git
```
 2. cd dist/{language} and unzip the file
 3. we offer five language : dotnet, go, java, js, python

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
//Javascript
import * as Mexc from 'mexc-sdk';
const apiKey = 'apiKey'
const apiSecret = 'apiSecret'
const client = new Mexc.Spot(apiKey, apiSecret);
```
```go
// Go
package main
import (
	"fmt"
	"mexc-sdk/mexcsdk"
)

func main() {
	apiKey := "apiKey"
	apiSecret := "apiSecret"
	spot := mexcsdk.NewSpot(apiKey, apiSecret)
}
```
```python
# python
from mexc_sdk import Spot
spot = Spot(api_key='apiKey', api_secret='apiSecret')
```
```java
// java
import Mexc.Sdk.*;  
class MyClass {
  public static void main(String[] args) {
    String apiKey= "apiKey";
    String apiSecret= "apiSecret";
    Spot mySpot = new Spot(apiKey, apiSecret);
  }
}
```
```C#
// dotnet
using System;
using System.Collections.Generic;
using Mxc.Sdk;

namespace dotnet
{
    class Program
    {
        static void Main(string[] args)
        {
            string  apiKey = "apiKey";
            string  apiSecret= "apiSecret";
            var spot = new Spot(apiKey, apiSecret);
        }
    }
}

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
options:{symbol, symbols}
/**
 * choose one parameter
 * 
 * symbol : 
 *      example "BNBBTC";
 * 
 * symbols :
 *      array of symbol
 *      example ["BTCUSDT","BNBBTC"];
 * 
 */
```

### Recent Trades List
```javascript
client.trades(symbol: string, options: any = { limit: 500 })
options:{limit}
/**
 * 
 * limit : 
 *      Number of returned data
 *      Default 500; 
 *      max 1000;
 * 
 */
```
### Order Book
```javascript
client.depth(symbol: string, options: any = { limit: 100 })
options:{limit}
/**
 * limit : 
 *      Number of returned data
 *      Default 100;
 *      max 5000;
 *      Valid:[5, 10, 20, 50, 100, 500, 1000, 5000]
 * 
 */
```

### Old Trade Lookup
```javascript
client.historicalTrades(symbol: string, options: any = { limit: 500 })
options:{limit, fromId}
/**
 * 
 * limit : 
 *      Number of returned data
 *      Default 500;
 *      max 1000;
 * 
 * fromId:
 *      Trade id to fetch from. Default gets most recent trades
 * 
 */

```

### Aggregate Trades List
```javascript
client.aggTrades(symbol: string, options: any = { limit: 500 })
options:{fromId, startTime, endTime, limit}
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
 *      Number of returned data
 *      Default 500;
 *      max 1000;
 * 
 */
```
### kline Data
```javascript
client.klines(symbol: string, interval: string, options: any = { limit: 500 })
options:{ startTime, endTime, limit}
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
 * startTime : 
 *      start at
 * 
 * endTime :
 *      end at
 * 
 * limit : 
 *      Number of returned data
 *      Default 500;
 *      max 1000;
 * 
 */
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
client.newOrderTest(symbol: string, side: string, orderType: string, options: any = {})
options:{ timeInForce, quantity, quoteOrderQty, price, newClientOrderId, stopPrice, icebergQty, newOrderRespType, recvWindow}
/**
 * 
 * side:
 *      Order side 
 *      ENUM:
 *        BUY
 *        SELL
 * 
 * orderType:
 *      Order type
 *      ENUM:
 *        LIMIT
 *        MARKET
 *        STOP_LOSS
 *        STOP_LOSS_LIMIT
 *        TAKE_PROFIT
 *        TAKE_PROFIT_LIMIT
 *        LIMIT_MAKER
 * 
 * timeInForce : 
 *      How long an order will be active before expiration.
 *      GTC: Active unless the order is canceled
 *      IOC: Order will try to fill the order as much as it can before the order expires
 *      FOK: Active unless the full order cannot be filled upon execution.
 * 
 * quantity :
 *      target quantity
 * 
 * quoteOrderQty :
 *      Specify the total spent or received
 * 
 * price :
 *      target price
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
 *      Delay accept time
 *      The value cannot be greater than 60000
 *      defaults: 5000
 * 
 */

```

### New Order
```javascript
client.newOrder(symbol: string, side: string, orderType: string, options: any = {})
options:{ timeInForce, quantity, quoteOrderQty, price, newClientOrderId, stopPrice, icebergQty, newOrderRespType, recvWindow}
/**
 * 
 * side:
 *      Order side 
 *      ENUM:
 *        BUY
 *        SELL
 * 
 * orderType:
 *      Order type
 *      ENUM:
 *        LIMIT
 *        MARKET
 *        STOP_LOSS
 *        STOP_LOSS_LIMIT
 *        TAKE_PROFIT
 *        TAKE_PROFIT_LIMIT
 *        LIMIT_MAKER
 * 
 * timeInForce : 
 *      How long an order will be active before expiration.
 *      GTC: Active unless the order is canceled
 *      IOC: Order will try to fill the order as much as it can before the order expires
 *      FOK: Active unless the full order cannot be filled upon execution.
 * 
 * quantity :
 *      target quantity
 * 
 * quoteOrderQty :
 *      Specify the total spent or received
 * 
 * price :
 *      target price
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
 *      Delay accept time
 *      The value cannot be greater than 60000
 *      defaults: 5000
 * 
 */

```

### cancel-order
```javascript
client.cancelOrder(symbol: string, options:any = {})
options:{ orderId, origClientOrderId, newClientOrderId}
/**
 * 
 * Either orderId or origClientOrderId must be sent
 * 
 * orderId:
 *      target orderId
 * 
 * origClientOrderId:
 *      target origClientOrderId
 * 
 * newClientOrderId:
 *      Used to uniquely identify this cancel. Automatically generated by default.
 * 
 */

```

### Cancel all Open Orders on a Symbol
```javascript
client.cancelOpenOrders(symbol: string)
```
### Query Order
```javascript
client.queryOrder(symbol: string, options:any = {})
options:{ orderId, origClientOrderId}
/**
 * 
 * Either orderId or origClientOrderId must be sent
 * 
 * orderId:
 *      target orderId
 * 
 * origClientOrderId:
 *      target origClientOrderId
 * 
 */
```
### Current Open Orders
```javascript
client.openOrders(symbol: string)
```
### All Orders
```javascript
client.allOrders(symbol: string, options: any = { limit: 500 })
options:{ orderId, startTime, endTime, limit}

/**
 * 
 * orderId:
 *      target orderId
 * 
 * startTime:
 *      start at
 * 
 * endTime:
 *      end at
 * 
 * limit : 
 *      Number of returned data
 *      Default 500;
 *      max 1000;
 * 
 */
```
### Account Information
```javascript
client.accountInfo()
```
### Account Trade List
```javascript
client.accountTradeList(symbol: string, options:any = { limit: 500 })
options:{ orderId, startTime, endTime, fromId, limit}

/**
 * 
 * orderId:
 *      target orderId
 * 
 * startTime:
 *      start at
 * 
 * endTime:
 *      end at
 * 
 * fromId:
 *      TradeId to fetch from. Default gets most recent trades
 * 
 * limit : 
 *      Number of returned data
 *      Default 500;
 *      max 1000;
 * 
 */
```

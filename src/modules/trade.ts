import { UserData } from './userData'

export class Trade extends UserData {
    /**
     * Test New Order
     * 
     * @param symbol 
     * @param side 
     * @param orderType 
     * @param options 
     * ```
     * [options.timeInForce]
     * [options.quantity]
     * [options.quoteOrderQty]
     * [options.price]
     * [options.newClientOrderId] - A unique id among open orders. Automatically generated if not sent.
     * [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
     * [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
     * [options.newOrderRespType] - Set the response JSON. ACK, RESULT, or FULL;
     *    MARKET and LIMIT order types default to FULL, all other orders default to ACK.
     * [options.recvWindow] - The value cannot be greater than 60000
     * ```
     * @returns 
     */
    public newOrderTest(
        symbol: string,
        side: string,
        orderType: string,
        options: any = {}
    ) {
        if([symbol, side, orderType].some(str => !str.trim())) {
            console.assert(false, `Some params are required`)
            return
        }
        const res = this.signRequest('POST', '/order/test', Object.assign(options, {
            symbol: symbol.toUpperCase(),
            side: side.toUpperCase(),
            type: orderType.toUpperCase()
        }))
        return JSON.parse(res.getBody('utf8'))
    }

    /**
     * New Order
     * 
     * @param symbol 
     * @param side 
     * @param orderType 
     * @param options 
     * ```
     * [options.timeInForce]
     * [options.quantity]
     * [options.quoteOrderQty]
     * [options.price]
     * [options.newClientOrderId] - A unique id among open orders. Automatically generated if not sent.
     * [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
     * [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
     * [options.newOrderRespType] - Set the response JSON. ACK, RESULT, or FULL;
     *    MARKET and LIMIT order types default to FULL, all other orders default to ACK.
     * [options.recvWindow] - The value cannot be greater than 60000
     * ```
     * @returns 
     */
    public newOrder(
        symbol: string,
        side: string,
        orderType: string,
        options: any = {}
    ) {
        if([symbol, side, orderType].some(str => !str.trim())) {
            console.assert(false, `Some params are required`)
            return
        }
        const res = this.signRequest('POST', '/order', Object.assign(options, {
            symbol: symbol.toUpperCase(),
            side: side.toUpperCase(),
            type: orderType.toUpperCase()
        }))
        return JSON.parse(res.getBody('utf8'))
    }

    /**
     * Cancel Order
     * 
     * @param symbol 
     * @param options
     * ```
     * [options.orderId]
     * [options.origClientOrderId]
     * [options.newClientOrderId]
     * ```
     * @returns 
     */
    public cancelOrder(symbol: string, options:any = {}) {
        const res = this.signRequest('DELETE', '/order', Object.assign(options, {
            symbol: symbol.toUpperCase()
        }))
        return JSON.parse(res.getBody())
    }

    /**
     * Cancel all Open Orders on a Symbol
     * 
     * @param symbol 
     * @returns 
     */
    public cancelOpenOrders(symbol: string) {
        const res = this.signRequest('DELETE', '/openOrders', {
            symbol: symbol.toUpperCase()
        })
        return JSON.parse(res.getBody())
    }

    /**
     * Query Order
     * 
     * @param symbol 
     * @param options 
     * ```
     * [options.orderId]
     * [options.origClientOrderId]
     * ```
     * @returns 
     */
    public queryOrder(symbol: string, options:any = {}) {
        const res = this.signRequest('GET', '/order', Object.assign(options, {
            symbol: symbol.toUpperCase()
        }))
        return JSON.parse(res.getBody())
    }

    /**
     * Current Open Orders
     * 
     * @param symbol 
     * @returns 
     */
    public openOrders(symbol: string) {
        const res = this.signRequest('GET', '/openOrders', { symbol: symbol.toUpperCase()})
        return JSON.parse(res.getBody())
    }

    /**
     * All Orders
     * 
     * @param symbol 
     * @param options 
     * ```
     * [options.orderId]
     * [options.startTime]
     * [options.endTime]
     * [options.limit] - value between 1 and 1000, default is 500
     * ```
     * @returns 
     */
    public allOrders(symbol: string, options: any = { limit: 500 }) {
        const res = this.signRequest('GET', '/allOrders', Object.assign(options, {
            symbol: symbol.toUpperCase()
        }))
        return JSON.parse(res.getBody())
    }
}
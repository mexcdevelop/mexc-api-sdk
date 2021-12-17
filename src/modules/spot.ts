import { Trade } from './trade'

export class Spot extends Trade {
    constructor(apiKey = '', apiSecret = '') {
        super(apiKey, apiSecret)
    }
}
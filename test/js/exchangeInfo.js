const Mexc = require('../../dist/js/package')

const client = new Mexc.Spot()
client.config.apiKey = "your apiKey"
client.config.apiSecret = "your apiSecret"

const singleRes = client.exchangeInfo({ symbol: "BTCUSDT" })
console.log(singleRes)
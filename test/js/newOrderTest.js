const Mexc = require('../../dist/js/package')

const client = new Mexc.Spot()
client.config.apiKey = "your apiKey"
client.config.apiSecret = "your apiSecret"

const res = client.newOrderTest("BTCUSDT", "BUY", "LIMIT", { quantity: 5, price: 10 })
console.log(res)
const Mexc = require('../../dist/js/package')

const client = new Mexc.Spot()

const trades = client.trades("BTCUSDT", { limit: 5 })
console.log(trades)

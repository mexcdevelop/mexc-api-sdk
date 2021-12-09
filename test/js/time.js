const Mexc = require('../../dist/js/package')

const client = new Mexc.Spot()

const time = client.time()
console.log(time)
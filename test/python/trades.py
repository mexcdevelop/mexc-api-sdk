from mexc_sdk.src.mexc_sdk import Spot

client = Spot()

trades = client.trades(symbol="BTCUSDT", options={ "limit": 5 })

print(trades)
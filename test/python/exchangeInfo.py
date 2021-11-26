from mexc_sdk.src.mexc_sdk import Spot

client = Spot()

info = client.exchange_info(options={ "symbol": "BTCUSDT"})

print(info)
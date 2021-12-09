from mexc_sdk.src.mexc_sdk import Spot

client = Spot(api_key="your apiKey", api_secret="your apiSecret")

res = client.new_order_test(symbol="BTCUSDT", side="BUY", order_type="LIMIT", options={ "quantity": 5, "price": 100 })

# if success to post test order to service, res will get {}.
print(res)
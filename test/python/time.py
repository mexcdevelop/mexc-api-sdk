from mexc_sdk.src.mexc_sdk import Spot

client = Spot()

time = client.time()
print(time["serverTime"])
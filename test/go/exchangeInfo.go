package main

import (
	"fmt"

	"mexc-sdk/mexcsdk"
)

func main() {
	apiKey := "your apikey"
	apiSecret := "your apiSecret"
	client := mexcsdk.NewSpot(&apiKey, &apiSecret)

	options := map[string]interface{}{"symbol": "BTCUSDT"}
	info := client.ExchangeInfo(options)
	fmt.Println(info)
}
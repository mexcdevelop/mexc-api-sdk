package main

import (
	"fmt"

	"mexc-sdk/mexcsdk"
)

func main() {
	apiKey := ""
	apiSecret := ""
	client := mexcsdk.NewSpot(&apiKey, &apiSecret)

	options := map[string]interface{}{"limit": 5}
	symbol := "BTCUSDT"
	trades := client.Trades(&symbol, options)
	fmt.Println(trades)
}
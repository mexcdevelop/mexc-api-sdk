package main

import (
	"fmt"

	"mexc-sdk/mexcsdk"
)

func main() {
	apiKey := "your apikey"
	apiSecret := "your apiSecret"
	client := mexcsdk.NewSpot(&apiKey, &apiSecret)

	symbol := "BTCUSDT"
	side := "BUY"
	orderType := "LIMIT"

	options := map[string]interface{}{"quantity": 5, "price": 5}
	res := client.NewOrderTest(&symbol, &side, &orderType, &options)
	fmt.Println(res)
}
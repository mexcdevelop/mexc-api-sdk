package main

import (
	"fmt"

	"mexc-sdk/mexcsdk"
)

func main() {
	apiKey := ""
	apiSecret := ""
	client := mexcsdk.NewSpot(&apiKey, &apiSecret)

	time := client.Time()
	fmt.Println(time)
}
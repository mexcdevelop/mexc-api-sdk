using System;
using System.Collections.Generic;
using Mexc.Sdk;
using Newtonsoft.Json;
namespace dotnet
{
   public class NewOrderTest
   {
       public static void Main(string[] args)
       {
           string apiKey = "your apiKey";
           string apiSecret = "your apiSecret";
           var spot = new Spot(apiKey, apiSecret);

           String symbol = "BTCUSDT";
           String side = "BUY";
           String orderType = "LIMIT";

           Dictionary<string, object> options = new Dictionary<string, object>();
           options.Add("quantity", 5);
           options.Add("price", 500);

           var newOrderTestRes = spot.NewOrderTest(symbol, side, orderType, options);
           Console.WriteLine("new order test");
           Console.WriteLine(JsonConvert.SerializeObject(newOrderTestRes));
       }

   }
}

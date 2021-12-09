using System;
using System.Collections.Generic;
using Mexc.Sdk;
using Newtonsoft.Json;
namespace dotnet
{
   public class Trades
   {
       public static void Main(string[] args)
       {
           var spot = new Spot();

           String symbol = "BTCUSDT";
           Dictionary<string, object> options = new Dictionary<string, object>();
           options.Add("limit", 500);



           var recentTradesRes = spot.Trades(symbol, options);
           Console.WriteLine("get recent trades");
           Console.WriteLine(JsonConvert.SerializeObject(recentTradesRes));
       }

   }
}

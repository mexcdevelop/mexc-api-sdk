using System;

using Mexc.Sdk;
using Newtonsoft.Json;
namespace dotnet
{
   public class ExchangeInfo
   {
       public static void Main(string[] args)
       {
            var spot = new Spot();

            Dictionary<string, object> options = new Dictionary<string, object>();
            options.Add("symbol", "BTCUSDT");

            var exchangeInfoRes = spot.ExchangeInfo(options);
            Console.WriteLine("get exchange info");
            Console.WriteLine(JsonConvert.SerializeObject(exchangeInfoRes));
       }

   }
}

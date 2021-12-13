using System;

using Mexc.Sdk;
using Newtonsoft.Json;
namespace dotnet
{
   public class Time
   {
       public static void Main(string[] args)
       {
           var spot = new Spot();
           var time1 = spot.Time();
           Console.WriteLine("get server time");
           Console.WriteLine(JsonConvert.SerializeObject(time1));
       }

   }
}

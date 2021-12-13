import Mexc.Sdk.*;

import java.util.HashMap;

public class Trades {
    public static void main(String[] args) {
        Spot client = new Spot();
        String symbol = "BTCUSDT";
        HashMap options = new HashMap<>();
        options.put("limit", 500);
        System.out.println("get recent trades " + client.trades(symbol, options));
    }
}
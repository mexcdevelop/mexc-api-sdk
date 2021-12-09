import java.util.HashMap;

import Mexc.Sdk.*;

public class NewOrderTest {
    public static void main(String[] args) {
        String apiKey = "your apiKey";
        String apiSecret = "your apiSecret";
        Spot client = new Spot(apiKey, apiSecret);

        String symbol = "BTCUSDT";
        String side = "BUY";
        String orderType = "LIMIT";
        HashMap options = new HashMap<>();
        options.put("quantity", 5);
        options.put("price", 100);

        System.out.println("test new order" + client.newOrderTest(symbol, side, orderType, options));
    }
}
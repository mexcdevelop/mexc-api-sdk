import Mexc.Sdk.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ExchangeInfo {

    public static void main(String[] args) {       
        Spot client = new Spot();

        HashMap options = new HashMap();
        options.put("symbol","BTCUSDT");

        System.out.printf("ExchangeInfo" + client.exchangeInfo(options));
    }
}
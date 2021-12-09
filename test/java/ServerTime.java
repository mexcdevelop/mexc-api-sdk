import Mexc.Sdk.*;

public class ServerTime {
    public static void main(String[] args) {
        Spot client = new Spot();
        System.out.println("get server time " + client.time());
    }
}

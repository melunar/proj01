
import java.io.*;
import java.net.*;

class Send implements Runnable {

	@Override
	public void run() {
		try {
			DatagramSocket ds = new DatagramSocket();
			BufferedReader bufr = new BufferedReader(new InputStreamReader(System.in));
			
			String line = null;
			
			while((line = bufr.readLine())!=null) {
				byte[] buf = line.getBytes();
				
				DatagramPacket dp = new DatagramPacket(buf,buf.length,InetAddress.getByName("127.0.0.1"),10006);
				ds.send(dp);
				
				if("bye".equals(line))
					break;
				
			}
			
		} catch (Exception e) {
			System.out.println("send error!");
		}
		
		
	}
	
}

class Rece implements Runnable {

	@Override
	public void run() {
		try {
			DatagramSocket ds = new DatagramSocket(10006);
			while(true)
			{
				byte[] buf = new byte[1024];
				DatagramPacket dp = new DatagramPacket(buf,buf.length);

				ds.receive(dp);

				String ip = dp.getAddress().getHostAddress();

				String data = new String(dp.getData(),0,dp.getLength());

				if("bye".equals(data))
				{
					System.out.println(ip+"....away");
					break;
				}


				System.out.println(ip+":"+data);
			}
		}
		catch (Exception e) {
			throw new RuntimeException("receive error!");
		}
		
	}
	
}

public class Chat {
	public static void main(String[] args) {
		Thread t1 = new Thread(new Rece());
		Thread t2 = new Thread(new Send());
		t1.start();
		t2.start();
		
	}

}

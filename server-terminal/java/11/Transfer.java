//package udp;//请到dos命令行执行，删除此包。

import java.io.*;
import java.net.*;

class UdpSend {
	public static void main(String[] args) throws Exception {
		DatagramSocket ds = new DatagramSocket();
		
		BufferedReader bufr = new BufferedReader(new InputStreamReader(System.in));
		
		String line = null;
		
		while((line = bufr.readLine()) != null) {
			if("bye".equals(line))
				break;
			byte[] buf = line.getBytes();
			
			DatagramPacket dp = new DatagramPacket(buf,buf.length,InetAddress.getByName("127.0.0.1"),10001);
			ds.send(dp);
		}
		
		//byte[] buf = "daaaaa....".getBytes();
		
		
		
		ds.close(); 	
	}
	
} 

class UdpReceive {
	public static void main(String[] str) throws Exception {
		DatagramSocket ds = new DatagramSocket(10001);
		
		while(true) {
			byte[] buf = new byte[1024];
			DatagramPacket dp = new DatagramPacket(buf,buf.length);
			
			ds.receive(dp);
			
			String ip = dp.getAddress().getHostName();
			
			int port = dp.getPort();
			
			String data = dp.getData().toString();
			
			System.out.println("ip::" + ip + "  data" + data + "port：： "+port);	
		}
		
		/*ds.close(); 服务器一直处于开启状态*/
		
	} 
	
} 
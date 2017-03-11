

import java.io.*;
import java.net.*;

class TCPClient {
	public static void main(String str[]) throws Exception {
		Socket s = new Socket("127.0.0.1",10003);
		OutputStream out = s.getOutputStream();
		out.write("wo lai ye".getBytes());
		
		InputStream is = s.getInputStream();
		
		byte[] buf = new byte[1024];
		int le = is.read(buf);
		System.out.println(new String(buf,0,buf.length));
		s.close();
	}
}

class TCPServer {
	public static void main(String[] str) throws Exception {
		ServerSocket ss = new ServerSocket(10003);
		
		//while(true) {
			Socket s = ss.accept();
			
			String name = s.getInetAddress().getHostName();
			String ip = s.getInetAddress().getHostAddress();
			System.out.println(name + "::" + ip + " ---connected");
			
			InputStream is = s.getInputStream();
			
			byte[] buf = new byte[1024];
			int le = is.read(buf);
			System.out.println(new String(buf,0,buf.length));
			
			OutputStream out = s.getOutputStream();

			
			//Thread.sleep(3000);
			out.write("server get".getBytes());

			s.close();
			
			ss.close();
		//}
	}
}

import java.io.*;
import java.net.*;

class aa
{
	public static void main(String[] args)throws Exception 
	{
		Socket s = new Socket("127.0.0.1",10004);
		
		OutputStream out = s.getOutputStream();

		out.write("hello".getBytes());

		
		InputStream in = s.getInputStream();

		byte[] buf = new byte[1024];

		int len = in.read(buf);

		System.out.println(new String(buf,0,len));

		s.close();
	}
}


class bb
{
	public static void main(String[] args) throws Exception
	{
		ServerSocket ss = new ServerSocket(10004);

		Socket s = ss.accept();

		String ip = s.getInetAddress().getHostAddress();
		System.out.println(ip+"....connected");
		InputStream in = s.getInputStream();

		byte[] buf = new byte[1024];

		int len = in.read(buf);

		System.out.println(new String(buf,0,len));


		OutputStream out = s.getOutputStream();


		Thread.sleep(10000);
		out.write("got".getBytes());

		s.close();

		ss.close();
	}
}

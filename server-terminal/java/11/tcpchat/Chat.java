

import java.io.*;
import java.net.*;

class  ClientA
{
	public static void main(String[] args) throws Exception
	{
		Socket s = new Socket("127.0.0.1",10007);
		
		BufferedReader bufr = new BufferedReader(new InputStreamReader(System.in));
		
		PrintWriter out = new PrintWriter(s.getOutputStream(),true);
		
		BufferedReader bufIn = new BufferedReader(new InputStreamReader(s.getInputStream()));
		
		
		String line = null;
		while((line=bufr.readLine())!=null)
		{
			if("over".equals(line))
				break;
			
			out.println(line);

			String str =bufIn.readLine();
			System.out.println("\t\t\t\t¶Ô·½: " +str);
			
		}
		
		bufr.close();
		s.close();
	}
}

class  ClientB
{
	public static void main(String[] args) throws Exception
	{
		ServerSocket ss = new ServerSocket(10007);
		
		Socket s = ss.accept();
		String ip = s.getInetAddress().getHostAddress();
		System.out.println(ip+"....connected");
		
		BufferedReader bufr = new BufferedReader(new InputStreamReader(System.in));
		
		BufferedReader bufIn = new BufferedReader(new InputStreamReader(s.getInputStream()));
		
		PrintWriter out = new PrintWriter(s.getOutputStream(),true);
		
		String line = null;
		while((line=bufIn.readLine())!=null)
		{

			System.out.println("\t\t\t\tºÂÓÂ: " + line);
			
			String toline = bufr.readLine();
			out.println(toline);
		}

		s.close();
		ss.close();
		
	}
	
}

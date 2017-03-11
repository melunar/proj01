class Main
{//main函数也是允许重载的！！！
	public void main(int a) 
	{
		System.out.println("主函数的重载." + "a = " + a);
	}
	
	public static void main(String[] args) 
	{
		System.out.println("原主函数");
		System.out.println("args.length = " + args.length);
		for(int i = 0; i < args.length; i++) {
			System.out.print(args[i] +" ");
		}
		Main main = new Main();
		main.main(3);
	}
	
}
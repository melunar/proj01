class Main
{//main����Ҳ���������صģ�����
	public void main(int a) 
	{
		System.out.println("������������." + "a = " + a);
	}
	
	public static void main(String[] args) 
	{
		System.out.println("ԭ������");
		System.out.println("args.length = " + args.length);
		for(int i = 0; i < args.length; i++) {
			System.out.print(args[i] +" ");
		}
		Main main = new Main();
		main.main(3);
	}
	
}
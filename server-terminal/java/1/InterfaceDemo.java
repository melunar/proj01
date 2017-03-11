interface Inter
{
	public static final int NUM = 100;
	public abstract void show();
}

class FromInter implements Inter
{
	public void show(){
		System.out.println("implements.");	
	}
}

class InterfaceDemo 
{
	public static void main(String[] args) 
	{
		FromInter in = new FromInter();
		System.out.println(in.NUM);
		System.out.println(Inter.NUM);
		System.out.println(FromInter.NUM);
	}
}

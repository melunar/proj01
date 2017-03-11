
/**
自定义异常，除数<=0,则异常
*/

/*
函数内出现异常，需要在函数上先声明异常。

throws and throw的区别：
throws定义在函数上，后面跟上一个或用逗号隔开的多个异常类名。
throw定义在函数内部，后面跟上异常的实例化对象。

自定义的异常类 构造函数里只需要加入super(message);即可，后面直接用该类的实体调用toString()方法。
也可以自定义类方法。
！！！异常对象调用toString()默认是打印异常类名和getMessage()方法的返回值。！！！
*/
class FushuException extends RuntimeException //or Exception
{
	//private String msg;
	private int num;
	FushuException(String msg,int num) {
		super(msg);
		this.num = num;
		//this.msg = msg;
	}
	public int getNum() {
		return num;
	}

}
class Demo
{
	int div(int a, int b) throws FushuException 
	{
		if(b < 0)
			throw new FushuException("(getMessage)负数不允许！",b);

		return a/b;
	}
}

class  ExceptionClass
{
	public static void main(String[] args) 
	{
		Demo d = new Demo();
		
		/*
		如果异常类继承的是runtimeexception类，则可以不需要处理异常，好处是需要程序停下来，需要修改代码1
		Demo d2 = new Demo();
		int y = d2.div(5,-2);
		*/
		try
		{
			int x = d.div(5,-1);
		}
		catch (FushuException e)
		{
			System.out.println("负数不可以为除数！");
			System.out.println(e.toString() + " , " + e.getNum());
		}
	}
}

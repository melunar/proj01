class Demo
{
	int div(int a, int b) throws ArrayIndexOutOfBoundsException,ArithmeticException {
		int[] arr = new int[a];
		System.out.println(arr[4]);
		return a/b;//执行到此时 出现异常 于是虚拟机 new ArithmeticException()
	}
}

class  ExceptionDemo
{
	public static void main(String[] args) 
	{
		Demo d = new Demo();
		try
		{
			int x = d.div(5,0);
		}
		
		catch (ArithmeticException e)//Exception e = new ArithmeticException();
		{
			System.out.println("不可以除0!");
			System.out.println("Cause: " + e.getCause() + " exception：" + e.toString());
			//e.printStackTrace();
		}
		catch (ArrayIndexOutOfBoundsException e)
		{
			System.out.println("数组越界！");
			System.out.println("Cause: " + e.getCause() + " exception：" + e.toString());
			//e.printStackTrace();
		}

		/*
		catch (Exception e)//向上转型，处理异常
		{
			System.out.println("出错!");
			System.out.println("Cause: " + e.getCause() + " exception：" + e.toString());
		}
		*/
		finally
		{//是否异常都会执行的代码。
			System.out.println("over");
		}
		System.out.println("got it???");
	}
}

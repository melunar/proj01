class Demo
{
	int div(int a, int b) throws ArrayIndexOutOfBoundsException,ArithmeticException {
		int[] arr = new int[a];
		System.out.println(arr[4]);
		return a/b;//ִ�е���ʱ �����쳣 ��������� new ArithmeticException()
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
			System.out.println("�����Գ�0!");
			System.out.println("Cause: " + e.getCause() + " exception��" + e.toString());
			//e.printStackTrace();
		}
		catch (ArrayIndexOutOfBoundsException e)
		{
			System.out.println("����Խ�磡");
			System.out.println("Cause: " + e.getCause() + " exception��" + e.toString());
			//e.printStackTrace();
		}

		/*
		catch (Exception e)//����ת�ͣ������쳣
		{
			System.out.println("����!");
			System.out.println("Cause: " + e.getCause() + " exception��" + e.toString());
		}
		*/
		finally
		{//�Ƿ��쳣����ִ�еĴ��롣
			System.out.println("over");
		}
		System.out.println("got it???");
	}
}

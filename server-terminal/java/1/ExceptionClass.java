
/**
�Զ����쳣������<=0,���쳣
*/

/*
�����ڳ����쳣����Ҫ�ں������������쳣��

throws and throw������
throws�����ں����ϣ��������һ�����ö��Ÿ����Ķ���쳣������
throw�����ں����ڲ�����������쳣��ʵ��������

�Զ�����쳣�� ���캯����ֻ��Ҫ����super(message);���ɣ�����ֱ���ø����ʵ�����toString()������
Ҳ�����Զ����෽����
�������쳣�������toString()Ĭ���Ǵ�ӡ�쳣������getMessage()�����ķ���ֵ��������
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
			throw new FushuException("(getMessage)����������",b);

		return a/b;
	}
}

class  ExceptionClass
{
	public static void main(String[] args) 
	{
		Demo d = new Demo();
		
		/*
		����쳣��̳е���runtimeexception�࣬����Բ���Ҫ�����쳣���ô�����Ҫ����ͣ��������Ҫ�޸Ĵ���1
		Demo d2 = new Demo();
		int y = d2.div(5,-2);
		*/
		try
		{
			int x = d.div(5,-1);
		}
		catch (FushuException e)
		{
			System.out.println("����������Ϊ������");
			System.out.println(e.toString() + " , " + e.getNum());
		}
	}
}

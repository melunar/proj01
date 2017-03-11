/*
���󣺻�ȡһ�γ������е�ʱ�䡣
ԭ����ȡ����ʼ�ͽ�����ʱ�䲢������ɡ�

��ȡʱ�䣺System.currentTimeMillis();
*/

abstract class Time
{
	public final void getTime()
	{
		long start = System.currentTimeMillis();

		runcode();

		long end = System.currentTimeMillis();

		System.out.println("���룺"+(end-start));
	}
	public abstract void runcode();

}


class SubTime extends Time
{
	int num;

	SubTime(int num) {
		this.num = num;
	}

	public void runcode()
	{
		
		for(int x=0; x<num; x++)
		{
			System.out.print(x + " ");//�������֣�forѭ��û������ʱ��ִ��ʱ��Ϊ�㣡������
		}
		System.out.println();
	}
}


public class GetTime
{
	public static void main(String[] args) 
	{
		//GetTime gt = new GetTime();
		SubTime gt1 = new SubTime(100);
		SubTime gt2 = new SubTime(300);
		gt1.getTime();
		gt2.getTime();
	}
}

/*
需求：获取一段程序运行的时间。
原理：获取程序开始和结束的时间并相减即可。

获取时间：System.currentTimeMillis();
*/

abstract class Time
{
	public final void getTime()
	{
		long start = System.currentTimeMillis();

		runcode();

		long end = System.currentTimeMillis();

		System.out.println("毫秒："+(end-start));
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
			System.out.print(x + " ");//这里很奇怪，for循环没有内容时，执行时间为零！！！！
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

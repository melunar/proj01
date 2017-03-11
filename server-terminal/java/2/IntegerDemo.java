class IntegerDemo
{
	public static void sop(String str) {
		System.out.println(str);
	}

	public static void main(String[] args) {
		sop("max int == " + Integer.MAX_VALUE);

		//将一个字符串转成整数。

		int num = Integer.parseInt("123");//必须传入数字格式的字符串。
		long x = Long.parseLong("123");

		sop("num="+num);

		sop(Integer.toBinaryString(23));
		sop(Double.toHexString(60));

		int y = Integer.parseInt("72",8);

		sop("y="+y);

	}
}
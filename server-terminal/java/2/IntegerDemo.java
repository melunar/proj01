class IntegerDemo
{
	public static void sop(String str) {
		System.out.println(str);
	}

	public static void main(String[] args) {
		sop("max int == " + Integer.MAX_VALUE);

		//��һ���ַ���ת��������

		int num = Integer.parseInt("123");//���봫�����ָ�ʽ���ַ�����
		long x = Long.parseLong("123");

		sop("num="+num);

		sop(Integer.toBinaryString(23));
		sop(Double.toHexString(60));

		int y = Integer.parseInt("72",8);

		sop("y="+y);

	}
}
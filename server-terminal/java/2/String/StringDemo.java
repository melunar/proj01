class StringDemo
{
	public static void main(String[] args) 
	{
		String s1 = "abc";
		String s2 = new String("abc");
		String s3 = "abc";

		Object o1 = new Object();
		Object o2 = new Object();
		
		System.out.println(o1==o2);//false
		System.out.println(o1.equals(s2));//false

		System.out.println(s1==s2);//false
		System.out.println(s1.equals(s2));//true
		
		System.out.println(s1==s3);//true �������ַ�����������"abc",�µ����ò��ٿ����µĿռ�����ָ��
		System.out.println(s2==s3);//false�������½��Ķ�����Ȼ�ַ�����������"abc"�����ǿ����µĿռ�


	}
}

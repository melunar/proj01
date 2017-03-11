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
		
		System.out.println(s1==s3);//true ！！！字符串池中有了"abc",新的引用不再开辟新的空间引用指向
		System.out.println(s2==s3);//false！！！新建的对象，虽然字符串池中有了"abc"，但是开辟新的空间


	}
}

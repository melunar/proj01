import java.util.*;

class VectorDemo 
{
	public static void method() {
		Vector v = new Vector();
		v.add("java01");
		v.add("java02");
		v.add("java03");
		v.add("java04");
		
		/*
			枚举：vector的特有取出方式。它的功能和迭代器功能是一样的。也逐渐被取代。
		*/
		Enumeration en = v.elements();
		while(en.hasMoreElements()) {
			System.out.println(en.nextElement());
		}
	}

	public static void main(String[] args) 
	{
		method();
		System.out.println("Hello World!");
	}

}

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
			ö�٣�vector������ȡ����ʽ�����Ĺ��ܺ͵�����������һ���ġ�Ҳ�𽥱�ȡ����
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

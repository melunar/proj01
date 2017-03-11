import java.util.*;


class Demo
{
	private int de;

	Demo(int d) {
		de = d;
	}
	/*
	public int hashCode() {
		return 0;
	}
	*/
}
class HashSetDemo 
{
	public static void main(String[] args) 
	{
		Demo d1 = new Demo(2);
		Demo d2 = new Demo(3);
		sop(d1);
		sop(d2);

		HashSet hs = new HashSet();
		sop(hs.add("java01"));
		sop(hs.add("java01"));//set的唯一性 无法插入
		hs.add("java02");
		hs.add("java03");
		hs.add("java04");
		
		Iterator it = hs.iterator();

		while(it.hasNext()) {
			sop(it.next());
		}

		System.out.println("Hello World!");
	}

	public static void sop(Object obj)
	{
		System.out.println(obj);
	}
}

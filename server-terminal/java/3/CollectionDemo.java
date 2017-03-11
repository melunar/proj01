import java.util.*;

class CollectionDemo 
{
	public static void method1(){
		ArrayList al = new ArrayList();

		al.add("java01");//add(Object),参数类型Object ，以便于接收任何参数。
							//集合里面存放的是地址，不是对象实体
		al.add("java02");
		al.add("java03");
		al.add("java04");
		
//		sop(al.size());
		sop(al);
		
		//al.remove("java02");

		//sop(al);

		//al.clear();
		//sop(al);

		sop(al.contains("java01"));

		sop(al.isEmpty());
			
		
		ArrayList al0 = new ArrayList();
		al0.add("java01");
		al0.add("java02");
		al0.add("java06");

		//al.retainAll(al0);//取交集，并且改变调用集合值。
		//sop(al);
		al.removeAll(al0);
		sop(al);
	}

	public static void method2() {
		ArrayList al = new ArrayList();
		al.add("java01");
		al.add("java02");
		al.add("java06");
		

		/*
			迭代器：
			取出集合元素的方式。
			每个容器的数据结构不同，存取方式不一样 所以取出的操作不足以用一个函数描述，所以封装成了对象，这个对象的类定义在了集合的内部，就可以访问内部类。（先判断再取出：iterator() 方法）
		*/
		/*
		Iterator it = al.iterator();//获取迭代器，去除集合中的元素。
		while(it.hasNext()) {
			sop(it.next());
		}
		*/

		for(Iterator it = al.iterator(); it.hasNext(); ) {
			//此种遍历方法优于上面一方法，it是局部变量！！！！！拉拉
			sop(it.next());
		}

	}
	public static void main(String[] args) 
	{
		method2();
		System.out.println("Hello World!");

	}

	public static void sop(Object obj) {
		System.out.println(obj);
	}
}

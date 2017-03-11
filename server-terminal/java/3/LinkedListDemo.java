import java.util.*;
/*
	LinkedList:特有方法

	addFirst();
	addLast()

	getFirst();
	getLast();

	removeFirst();//返回删除的对象 如果集合为空 抛出NoSuchElemntException异常
	removeLast();

	pollFirst();//返回删除的对象 如果集合为空 不抛异常 返回null JDK 1.6开始
 	pollLast();

*/
class LinkedListDemo 
{
	public static void method() {
		LinkedList ll = new LinkedList();

		ll.addFirst("java04");
		ll.addFirst("java03");
		ll.addFirst("java02");
		ll.addFirst("java01");

		sop(ll);

		sop(ll.getLast());

		ll.removeLast();
		sop(ll);

		sop(ll.size());

		for(ListIterator li = ll.listIterator(); li.hasNext(); ) {
			sop(li.next());
		}
	}
	public static void main(String[] args) 
	{
		method();
		System.out.println("Hello World!");
	}

	public static void sop(Object obj) {
		System.out.println(obj);
	}
}

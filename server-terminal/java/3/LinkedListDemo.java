import java.util.*;
/*
	LinkedList:���з���

	addFirst();
	addLast()

	getFirst();
	getLast();

	removeFirst();//����ɾ���Ķ��� �������Ϊ�� �׳�NoSuchElemntException�쳣
	removeLast();

	pollFirst();//����ɾ���Ķ��� �������Ϊ�� �����쳣 ����null JDK 1.6��ʼ
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

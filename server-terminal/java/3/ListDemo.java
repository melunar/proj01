/*
	list:Ԫ�����򣬿����ظ�
	set :Ԫ�����򣬲������ظ�

	List���ϵ����з���
		���ǿ��Բ����ű�ķ�������list���ϵķ�����
	
	����
		add(index,elment);
		addAll(index,Collection);
	ɾ
		remove(index);
	��
		set(index,element);
	��
		get(index);
		subList(from,to);
		ListIterrator();
*/

import java.util.*;

class ListDemo 
{
	public static void method1() {
		ArrayList al = new ArrayList();
		al.add("java01");
		al.add("java02");
		al.add("java03");

		sop(al);

		al.add(1,"java001");
		sop(al);

		al.remove(2);
		sop(al);

		al.set(2,"java002");
		sop(al);

		sop("al[2] = " + al.get(2));

		for(int i = 0; i < al.size(); i++) {
			sop("al(" + i + ") = " + al.get(i));
		}

		for(Iterator it = al.iterator(); it.hasNext(); ) {
			sop(it.next());
		}
	}
	
	public static void method2() {
		ArrayList al = new ArrayList();
		al.add("java01");
		al.add("java02");
		al.add("java03");//2
		al.add("java04");
		al.add("java05");

		sop(al.indexOf("java03"));
		sop(al.subList(1,3));
	}

	public static void method3() {
		ArrayList al = new ArrayList();

		al.add("java01");
		al.add("java02");
		al.add("java03");
		al.add("java04");
		al.add("java05");					
		
		/*
			ListIterator �߱���ɾ�Ĳ�ķ�����
		*/
		for(ListIterator it = al.listIterator(); it.hasNext(); ) {
			Object obj = it.next();

			if(obj.equals("java02"))
				it.add("java002");
			sop(obj);
			sop(al);
		}
	}

	public static void main(String[] args) 
	{
		method3();
		System.out.println("Hello World!");
	}

	public static void sop(Object obj) {
		System.out.println(obj);
	}
}

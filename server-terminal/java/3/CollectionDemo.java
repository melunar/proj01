import java.util.*;

class CollectionDemo 
{
	public static void method1(){
		ArrayList al = new ArrayList();

		al.add("java01");//add(Object),��������Object ���Ա��ڽ����κβ�����
							//���������ŵ��ǵ�ַ�����Ƕ���ʵ��
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

		//al.retainAll(al0);//ȡ���������Ҹı���ü���ֵ��
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
			��������
			ȡ������Ԫ�صķ�ʽ��
			ÿ�����������ݽṹ��ͬ����ȡ��ʽ��һ�� ����ȡ���Ĳ�����������һ���������������Է�װ���˶������������ඨ�����˼��ϵ��ڲ����Ϳ��Է����ڲ��ࡣ�����ж���ȡ����iterator() ������
		*/
		/*
		Iterator it = al.iterator();//��ȡ��������ȥ�������е�Ԫ�ء�
		while(it.hasNext()) {
			sop(it.next());
		}
		*/

		for(Iterator it = al.iterator(); it.hasNext(); ) {
			//���ֱ���������������һ������it�Ǿֲ�������������������
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

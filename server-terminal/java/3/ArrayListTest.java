import java.util.*;

/*
���Զ��������ΪԪ�ش浽ArrayList�����У���ȥ���ظ�Ԫ�ء�
���磺���˶���ͬ����ͬ���䣬��Ϊͬһ���ˡ�Ϊ�ظ�Ԫ�ء�

˼·��
1�����������������ݷ�װ���˶���
2���������������˴��롣
3��ȡ����

List�����ж�Ԫ���Ƿ���ͬ��������Ԫ�ص�equals������
*/

class Person
{
	private String name;
	private int age;

	Person(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public boolean equals(Object obj) {
		if(!(obj instanceof Person))
			return false;
		Person p = (Person)obj;
		System.out.println(this.name+"....."+p.name);

		return p.name == this.name && p.age == this.age;
	}
}

class ArrayListTest
{
	public static void main(String[] args) 
	{
		ArrayList al = new ArrayList();

		al.add(new Person("person01",10));
		al.add(new Person("person02",20));
		al.add(new Person("person03",30));
		al.add(new Person("person05",50));
		al.add(new Person("person05",50));
		al.add(new Person("person04",40));
		
		
		/*
			remove()����ʵ�ʵ��õ���equals������������ҳ�Ҫɾ���Ķ���
		*/
		sop(al.remove(new Person("person02",20)));

		Iterator it = al.iterator();

		while(it.hasNext()) {
			Object o = it.next();
			Person per = (Person)o;
			sop(per.getName() + " " + per.getAge());
		}


		System.out.println("Hello World!");
		al = singleOne(al);
		it = al.iterator();

		while(it.hasNext()) {
			Object o = it.next();
			Person per = (Person)o;
			sop(per.getName() + " " + per.getAge());
		}

		
	}

	public static ArrayList singleOne(ArrayList al) {
		ArrayList newAl = new ArrayList();
		
		Iterator it = al.iterator();

		while(it.hasNext()) {
			Object o = it.next();
			Person per = (Person)o;
			
			/*
				contains()����ʵ�ʵ��õ���equals������������ҳ��ж��Ƿ���ڵĶ���
			*/
			if(!newAl.contains(o)) 
				newAl.add(o);
		}

		return newAl;
	} 

	public static void sop(Object obj)
	{
		System.out.println(obj);
	}
}

import java.util.*;

/*
将自定义对象作为元素存到ArrayList集合中，并去除重复元素。
比如：存人对象。同姓名同年龄，视为同一个人。为重复元素。

思路：
1，对人描述，将数据封装进人对象。
2，定义容器，将人存入。
3，取出。

List集合判断元素是否相同，依据是元素的equals方法。
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
			remove()方法实际调用的是equals方法，逐个查找出要删除的对象
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
				contains()方法实际调用的是equals方法，逐个查找出判断是否存在的对象
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

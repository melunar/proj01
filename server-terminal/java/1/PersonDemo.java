class Person
{
	int age;//成员变量初始值为0.
	String name;
	{
		System.out.println("构造代码块。");
	}
	Person() {
		System.out.println("no参构造函数。\n");
	}
	Person(int age) {
		this();//构造函数里调用构造函数（继承），用this关键字！
		System.out.println("1参构造函数。\n");
		System.out.println("age = " + this.age + "\n");
	}

	Person(int age, String name) {
		this(age);
		this.name = name;
		System.out.println("2参构造函数。\n"); 
		System.out.println("age = " + this.age + " , name = " + this.name + "\n");
	}
}

class PersonDemo
{
	public static void main(String[] args) 
	{
		Person per1 = new Person();
		Person per2 = new Person(4);
		Person per3 = new Person(5,"hao");
		System.out.println("Hello World!");
	}
}

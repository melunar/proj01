class Person
{
	int age;//��Ա������ʼֵΪ0.
	String name;
	{
		System.out.println("�������顣");
	}
	Person() {
		System.out.println("no�ι��캯����\n");
	}
	Person(int age) {
		this();//���캯������ù��캯�����̳У�����this�ؼ��֣�
		System.out.println("1�ι��캯����\n");
		System.out.println("age = " + this.age + "\n");
	}

	Person(int age, String name) {
		this(age);
		this.name = name;
		System.out.println("2�ι��캯����\n"); 
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

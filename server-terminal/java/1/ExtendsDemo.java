class Person
{
	int age;
	String name;
	int num = 1;

	final double PI = 3.14;

	Person() {
		num = 11;
		//PI = 3.1416;//���ǲ�����ġ�
		System.out.println("fu construct.");
	}

	Person(int a) {
		num = 111;
		System.out.println("fu construct" + a);
	}

	private void show () {
		System.out.println("fu class");
	}
}

class Student extends Person
{
	int num = 2;
	Student(){
		//super();//Ĭ�ϴ��ڵġ�
		System.out.println("student construct");
	}

	Student(int a) {
		//super();//Ĭ�ϴ��ڵġ�
		super(99);	
		System.out.println("student construct" + a);
	}

	int show()//��д����ĺ����������������벻�䣡��������ֵ���Ϳ��Ըı䡣 
	{
		System.out.println("student." + "my num = " + this.num + " , super num = " + super.num);
		return 1;
	}
}

class  Worker extends Person
{
	int num = 3;

	void show() 
	{
		System.out.println("woker." + "my num = " + num + " , super num = " + super.num);
	}
}


/*
final class FinalDemo
{
}
class FinalDemo2 extends FinalDemo
{//���ǲ������
}
*/
public class ExtendsDemo
{
	public static void main(String[] args) {
		Student stu = new Student();
		Student stu1 = new Student(100);
		//Worker wor = new Worker();
		//FinalDemo fi  = new FinalDemo();

		stu.show();
		stu1.show();
	}
}
/*
����һ��ϵͳʱ��Ҫ��Ա�����н�ģ��Ա������ 3 �����ԣ�
�����������Լ����ʡ�����Ҳ��Ա�������˺���Ա���������⣬��Ϊ����һ��
�������ԡ���ʹ�ü̳е�˼����Ƴ�Ա����;����ࡣҪ�������ṩ��Ҫ�ķ�
���������Է��ʡ�

Ա���ࣺname id pay

�����ࣺ�̳���Ա���������Լ����е�bonus��
*/

abstract class Employee
{//���󷽷������ڳ�������
	private String name;
	private String id;
	private double pay;

	Employee(String name,String id,double pay)
	{
		this.name = name;
		this.id = id;
		this.pay = pay;
	}
	
	public abstract void work();

}



class Manager extends Employee
{//����
	private int bonus;
	Manager(String name,String id,double pay,int bonus)
	{
		super(name,id,pay);
		this.bonus = bonus;
	}
	public void work()
	{
		System.out.println("manager work");
	}
}

class Pro extends Employee
{//һ��Ա��
	Pro(String name,String id,double pay)
	{
		super(name,id,pay);
	}
	public void work()
	{
		System.out.println("pro work");
	}
}


class AbstractDemo
{
	public static void main(String[] args) 
	{
		Pro pro = new Pro("Hao","00001",10000);
		Manager man = new Manager("yong","001000",100000,20000);

		pro.work();
		man.work();
	}
}

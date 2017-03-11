/*
开发一个系统时需要对员工进行建模，员工包含 3 个属性：
姓名、工号以及工资。经理也是员工，除了含有员工的属性外，另为还有一个
奖金属性。请使用继承的思想设计出员工类和经理类。要求类中提供必要的方
法进行属性访问。

员工类：name id pay

经理类：继承了员工，并有自己特有的bonus。
*/

abstract class Employee
{//抽象方法必须在抽象类里
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
{//经理
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
{//一般员工
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

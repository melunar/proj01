abstract class Animal
{
	String name = "an animal";
	public abstract void eat();
}

class Cat extends Animal
{
	String name = "a cat";
	public void eat() {
		System.out.println("Eat fish.");
	}
	public void catchMouse() {
		System.out.println("Catch mouse.");
	}
}

class Dog extends Animal
{
	String name = "a dog";
	public void eat() {
		System.out.println("Eat meet.");
	}
	public void kanJia() {
		System.out.println("Kanjia.");
	}
}

class Pig extends Animal
{
	String name = "a pig";
	public void eat() {
		System.out.println("Eat Porn.");
	}
	public void sleep() {
		System.out.println("Sleep.");
	}
}

class DuotaiDemo
{
	public static void main(String[] args) 
	{
		Animal a = new Cat();
		//a.eat();
		//���Ǵ��ģ�//a.catchMouse();
		Cat c = (Cat)a;//ǿ������ת��,ת�����Ǹ�������ã���ָ�����Լ������ʵ��
		c.eat();
		c.catchMouse();
		System.out.println("===============================");

		/*
		�˶δ��������ȷ�����г�����ClassCastException��������ת������
		Pig p = (Pig)a;
		p.eat();
		p.sleep();*/
	
		animalEat(new Cat());
		animalEat(new Dog());
		animalEat(new Pig());
	}

	public static void animalEat(Animal a) {
		if(a instanceof Cat) {
			Cat c = (Cat)a;
			c.catchMouse();
			//c.eat();
		}
		else if(a instanceof Pig) {
			Pig p = (Pig)a;
			p.sleep();
			//p.eat();
		}
		else {
			Dog d = (Dog)a;
			d.kanJia();
			//d.eat();
		}
		a.eat();
		System.out.println(a.name);//��ӡAnimal ���������
	}

}

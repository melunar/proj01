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
		//这是错的！//a.catchMouse();
		Cat c = (Cat)a;//强制向下转化,转换的是父类的引用，其指向了自己子类的实体
		c.eat();
		c.catchMouse();
		System.out.println("===============================");

		/*
		此段代码编译正确，运行出错，ClassCastException，类类型转化错误。
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
		System.out.println(a.name);//打印Animal 基类的属性
	}

}


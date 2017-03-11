class ClassA {
	public static void pr() {
		System.out.println("classA");
	}
}

class ClassB extends ClassA{
	public static void pr() {
		System.out.println("classB");
	}
}


public class ClassC {
	public static void main(String[] args) {
/* 		ClassB b = new ClassB();
		ClassA a = (ClassA)b;
		a.pr();//classB
		a = new ClassA();
		a.pr();//classA */
		
		ClassA bb = new ClassB();
		bb.pr();//classA
	}
}
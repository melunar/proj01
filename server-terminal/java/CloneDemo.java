public class CloneDemo extends Object implements Cloneable {
	public static void main (String[] args){
		try{
			CloneDemo obj = new CloneDemo();
			CloneDemo obj1 = new CloneDemo();
			CloneDemo o = (CloneDemo)obj.clone();
			System.out.println(o.toString() + "   hello clone");
			System.out.println(o == obj);
			System.gc();
			/* CloneDemo.finalize(); */
			System.out.println(o.getClass() == obj.getClass());
			System.out.println(o.equals(obj));
			System.out.println(obj1.equals(obj));
			System.out.println(obj1 == obj);
		}
		catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	
}
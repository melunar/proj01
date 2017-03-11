import java.util.*;

public class StackDemo {
	private static String[] strs = {"1111","2222","3333","4444"};
	private static Stack sta = new Stack();
	public static void main(String[] args) throws Exception {
		for(int i = 0; i < strs.length; i++) {
			sta.push(strs[i]);
			sop("push::: " + strs[i]);
		}
		System.out.println(sta.size());
		
		for(int i = 0; i < strs.length; i++) {
			if(!sta.empty()) {
				sop("pop::: " + sta.peek());
				sop("pop::: " + sta.pop());
				sop("pop::: " + sta.search(new String("1111")));
			}
			
		}
	}
	
	public static void sop(Object i) {
		System.out.println(i);
	}
}
class ArrayDemo
{
	public static void main(String[] args) 
	{		
		int[] arr0 = new int[]{3,4,5,6};	
		int[] arr1 = {1,2,3,4};//初始值为零
		//note:空指针异常，例如int[] arr = new int[4]; arr = null; arr[2]??即为空指针
		int[] arr2 = new int[3];
		System.out.println("arr1[2] = " + arr1[2]);
		System.out.println("arr2[2] = " + arr2[2]);
		System.out.println("Hello World!");

		printArray(arr0);//打印数组的引用（地址）输出：[I@e6f7d2
	}

	public static void printArray(int[] arr) {
		System.out.println(arr);
	}

}

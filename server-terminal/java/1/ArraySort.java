class ArraySort {//均为从小到大排序
	public static void selectSort(int[] arr) {//选择排序
		System.out.print("before selectSort: ");
		PrintArray(arr);
		for(int i = 0; i < arr.length - 1; i++) {
			for(int j = i +1; j < arr.length; j++) {
				if(arr[i] > arr[j]) {
					int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		System.out.print("\nafter selectSort: ");
		PrintArray(arr);
	}

	public static void PrintArray(int[] arr) {//打印数组
		for(int i = 0; i < arr.length; i++) {
			System.out.print(arr[i] + " ");
		}
	}

	public static void bubbleSort(int[] arr) {
		System.out.print("\nbefore bubbleSort: ");
		PrintArray(arr);
		for(int i = 0; i < arr.length; i++) {
			for(int j = 0; j < arr.length - i -1; j++) {
				if(arr[j] > arr[j+1]) {
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
		System.out.print("\nafter bubbleSort: ");
		PrintArray(arr);
	}

	public static void main(String[] args) {
		int[] arr0 = {1,2,5,7,5,3,0,-3};
		int[] arr1 = {7,6,5,4,3,2,1,0};
		selectSort(arr0);
		bubbleSort(arr1);
		System.out.println("Hello World!");
	}
}

/**
����һ�����Զ�������в����Ĺ����࣬�������ṩ�ˣ���ȡ��ֵ������ȹ��ܡ�
@author Haoyong110
@version �汾1.0
*/

//javadoc -d myhelp -author -version ArrayTool.java

public class Tool
{
	/**
	�ղ������캯����
	*/
	Tool(){}

	/**
	��ȡһ�����������е����ֵ��
	@param arr ����һ��int���͵����顣
	@return �᷵��һ�������������ֵ��
	*/
	public static int getMax(int[] arr)
	{
		int max = 0;
		for(int x=1; x<arr.length; x++)
		{
			if(arr[x]>arr[max])
				max = x;
		}
		return arr[max];
	}
	
	/**
	��ȡһ�����������е���Сֵ��
	@param arr ����һ��int���͵����顣
	@return �᷵��һ������������Сֵ��
	*/
	public static int getMin(int[] arr)
	{
		int min = 0;
		for(int x=1; x<arr.length; x++)
		{
			if(arr[x]<arr[min])
				min = x;
		}
		return arr[min];
	}
	/**
	��int�������ѡ������
	@param arr ����һ��int���͵����顣
	*/
	public static void selectSort(int[] arr)
	{
		for (int x=0; x<arr.length-1 ; x++ )
		{
			for(int y=x+1; y<arr.length; y++)
			{
				if(arr[x]>arr[y])
				{
					swap(arr,x,y);
				}
			}
		}
	}
	/**
	��int�������ð������
	@param arr ����һ��int���͵����顣
	*/
	public static void bubbleSort(int[] arr)
	{
		for (int x=0; x<arr.length-1 ; x++ )
		{
			for(int y=0; y<arr.length-x-1; y++)
			{
				if(arr[y]>arr[y+1])
				{
					swap(arr,y,y+1);
				}
			}
		}
	}
	/**
	��������Ԫ�ؽ���λ�õ��û���
	@param arr  ����һ��int���͵����顣
	@param a Ҫ�û���λ�� 
	@param b Ҫ�û���λ�� 
	*/
	private  static void swap(int[] arr,int a,int b)
	{
		int temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}
	/**
	���ڴ�ӡ�����е�Ԫ�ء���ӡ��ʽ�ǣ�[elemet1, element2, ...]
	*/
	public static void printArray(int[] arr)
	{
		System.out.print("[");
		for(int x=0; x<arr.length; x++)
		{
			if(x!=arr.length-1)
				System.out.print(arr[x]+", ");
			else
				System.out.println(arr[x]+"]");
		}
	}
}

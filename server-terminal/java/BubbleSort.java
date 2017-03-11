public class BubbleSort {

 public static  void main(String []args){
  int a[]={12,34,5,65,87,45,565,8,4,3,56,65};
  DataSort(a); 
 }
 //≈≈–Ú
 public static void DataSort(int b[])
 {
  for(int i=0;i<b.length;i++)
  {
   for(int j=0;j<b.length-i-1;j++)
   {
    int temp=0;
    if(b[j]>b[j+1])
    {
     temp=b[j];
     b[j]=b[j+1];
     b[j+1]=temp;
    }
   }
  }
  PrintSort(b);
 }
 //¥Ú”°
 public static void PrintSort(int c[])
 {
  for(int k=0;k<c.length;k++)
  {
   System.out.print(c[k]+" ");
  }
 }
}
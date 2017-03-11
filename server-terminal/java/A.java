import java.io.ByteArrayOutputStream;
 
public class A{
      public static void main(String args[]){
          ByteArrayOutputStream b = new ByteArrayOutputStream();
          b.write(3);
          b.write(4);
          b.write(5);
          byte[] data = b.toByteArray();
        int row=data.length;
        for(int i=0;i<row;i++){
            System.out.println(data[i].toByteArray());
        }
      }
}
 
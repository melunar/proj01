/*
������ʽ�ĵ��ĸ����ܡ�
4����ȡ:���ַ����еķ��Ϲ�����Ӵ�ȡ����

�������裺
1����������ʽ��װ�ɶ���
2������������Ҫ�������ַ����������
3�������󣬻�ȡ����ƥ�����档
4��ͨ������Է��Ϲ�����Ӵ����в���������ȡ����






*/
import java.util.regex.*;

class AA 
{
	public static void main(String[] args) 
	{
		getDemo();
	}
	public static void getDemo()
	{
		String str = "ming tian jiu yao fang jiaa le ,da jia��";
		System.out.println(str);
		String reg = "(\\b[a-z]{4}\\b)";

		//�������װ�ɶ���
		Pattern p = Pattern.compile(reg);

		//����������Ҫ���õ��ַ������������ȡƥ��������
		Matcher m  = p.matcher(str);

		//System.out.println("m.matches: " + m.matches());//��ʵString���е�matches�������õľ���Pattern��Matcher��������ɵġ�
										//ֻ������String�ķ�����װ����������Ϊ�򵥡����ǹ���ȴ��һ��

		//boolean b = m.find();//���������õ��ַ����ϣ������з��Ϲ�����Ӵ����ҡ�
		//System.out.println("m.find:" + b);
//		System.out.println(m.group());//���ڻ�ȡƥ�������
		
		
		//System.out.println("matches:"+m.matches());
		while(m.find())
		{
			System.out.println(m.group(1));
			System.out.println(m.start(1)+"...."+m.end(1));
		}
		
		  String ss="27/35��C  24/35��C 23/35��C  22/35��C"; 
        Pattern pt=Pattern.compile("\\d+/\\d+��C");
        Matcher mt=pt.matcher(ss);
       // mt.lookingAt();
       // mt.matches();
        while(mt.find()){
        	System.out.println(mt.group()+"|||"+mt.start());
        }
	}
}

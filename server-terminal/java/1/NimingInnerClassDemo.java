/*
�����ڲ���:
1�������ڲ�����ʵ�����ڲ���ļ�д��ʽ��
2�����������ڲ����ǰ�᣺
	�ڲ�������Ǽ̳�һ�������ʵ�ֽӿڡ�
3�������ڲ���ĸ�ʽ��  new ������߽ӿ�(){�������������}
4����ʵ�����ڲ������һ������������󡣶�����������е��֡�	��������Ϊ�����ݵĶ���
5�������ڲ����ж���ķ�����ò�Ҫ����3����
*/
abstract class AbsDemo
{
	abstract void show();
}

class Outer
{
	int x = 3;

	public void function()
	{
		AbsDemo d = new AbsDemo()
		{//�൱�ڸ������� ����ת��
			int num = 9;
			void show()
			{//override
				System.out.println("num==="+num);
			}
			void abc()
			{//new method
				System.out.println("haha");
			}
		};

		d.show();
//		d.show();//����ʧ��;
	}
}

class NimingInnerClassDemo
{
	public static void main(String[] args) 
	{
		new Outer().function();
	}
}
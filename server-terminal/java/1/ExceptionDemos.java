/**
	@author Haoyong110
	@version 1.0.00
*/

/**
 �Զ����쳣�࣬����������
*/
class LanpingException extends Exception
{
	/**
		���캯����
		@param msg string��Ϣ
	*/
	LanpingException(String msg) {
		super(msg);
	}
}

/**
	�Զ����쳣�࣬����ð�̡���
*/
class MaoyanException extends Exception
{
	/**
		���캯����
		@param msg string��Ϣ
	*/
	MaoyanException(String msg) {
		super(msg);
	}
}

/**
	 �����࣬�����У������ȷ�����
*/
class Computer
{
	private int state = 1;

	/**
		�������к�����
		@return �޷��ء�
	*/
	public void run() throws MaoyanException,LanpingException {
		if(state == 1)
			throw new LanpingException("���������ˣ�");
		if(state == 2)
			throw new MaoyanException("����ð���ˣ���!");

		System.out.println("�����������С�");
	}

	/**
		��������������
		@return �޷��ء�
	*/
	public void reset() {
		System.out.println("����������");
		state = 0;
	}
}

/**
	�Զ����쳣�࣬��Ҫ������ԡ�
*/
class RepairException extends Exception
{
	/**
		���캯����
		@param msg string��Ϣ
	*/
	RepairException(String msg) {
		super(msg);
	}
}

/**
	��ʦ�࣬�����Ͽη�����
*/
class Teacher
{
	private String name;
	private Computer cmp;
	
	/**
		���캯����
		@param name ��ʦ����
	*/
	Teacher(String name) {
		this.name = name;
		cmp = new Computer();
	}
	
	/**
		��ʦ�Ͽκ�����
		@return �޷��ء�
	*/
	public void teachClass()  throws RepairException {
		try
		{
			cmp.run();
		}
		catch (LanpingException e)
		{
			System.out.println(e.toString());
			cmp.reset();
		}
		catch(MaoyanException e)
		{
			System.out.println(e.toString());
			throw new RepairException("������ȥ����ѧ���ؼҰɡ�");
		}
			System.out.println("��ʼ�Ͽ�����");
	}
}

/**
	����
*/
public class ExceptionDemos
{
	/**
		main ������
		@param args Ĭ�ϲ�����
	*/
	public static void main(String[] args) 
	{
		Teacher hao = new Teacher("hao");
		try
		{
			hao.teachClass();
		}
		catch (RepairException e)
		{
			System.out.println(e.toString());
		}
	}
}

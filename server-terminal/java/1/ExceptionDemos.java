/**
	@author Haoyong110
	@version 1.0.00
*/

/**
 自定义异常类，电脑蓝屏。
*/
class LanpingException extends Exception
{
	/**
		构造函数。
		@param msg string信息
	*/
	LanpingException(String msg) {
		super(msg);
	}
}

/**
	自定义异常类，电脑冒烟。。
*/
class MaoyanException extends Exception
{
	/**
		构造函数。
		@param msg string信息
	*/
	MaoyanException(String msg) {
		super(msg);
	}
}

/**
	 电脑类，提运行，重启等方法。
*/
class Computer
{
	private int state = 1;

	/**
		电脑运行函数。
		@return 无返回。
	*/
	public void run() throws MaoyanException,LanpingException {
		if(state == 1)
			throw new LanpingException("电脑蓝屏了！");
		if(state == 2)
			throw new MaoyanException("电脑冒烟了！！!");

		System.out.println("电脑正常运行。");
	}

	/**
		电脑重启函数。
		@return 无返回。
	*/
	public void reset() {
		System.out.println("电脑重启。");
		state = 0;
	}
}

/**
	自定义异常类，需要修理电脑。
*/
class RepairException extends Exception
{
	/**
		构造函数。
		@param msg string信息
	*/
	RepairException(String msg) {
		super(msg);
	}
}

/**
	老师类，包含上课方法。
*/
class Teacher
{
	private String name;
	private Computer cmp;
	
	/**
		构造函数。
		@param name 老师姓名
	*/
	Teacher(String name) {
		this.name = name;
		cmp = new Computer();
	}
	
	/**
		老师上课函数。
		@return 无返回。
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
			throw new RepairException("电脑拿去修理！学生回家吧。");
		}
			System.out.println("开始上课啦。");
	}
}

/**
	主类
*/
public class ExceptionDemos
{
	/**
		main 方法。
		@param args 默认参数。
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

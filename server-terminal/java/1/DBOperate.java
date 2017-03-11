/*
���ݿ�Ĳ�����
˼·��
1���������ݿ⡣JDBC  Hibernate
2���������ݿ⡣
3���ر����ݿ����ӡ�
*/
class User 
{
	private String name;
	User(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
}

interface UserInfoDao
{
	public void add(User user);

	public void delete(User user);
}

class UserInfoByJDBC implements UserInfoDao
{

	public void add(User user)
	{
		System.out.println("1,JDBC�������ݿ⡣");
		System.out.println("2��ʹ��sql������������ݡ�");
		System.out.println("3���ر����ӡ�");
		System.out.println("�Ѿ�����û���" + user.getName());
		System.out.println("===============================");
	}
	public void delete(User user)
	{
		System.out.println("1,JDBC�������ݿ⡣");
		System.out.println("2��ʹ��sql���ɾ�����ݡ�");
		System.out.println("3���ر����ӡ�");
		System.out.println("�Ѿ�ɾ���û���" + user.getName());
		System.out.println("===============================");
	}
}

class UserInfoByHibernate implements UserInfoDao
{
	public void add(User user)
	{
		System.out.println("1,Hibernate�������ݿ⡣");
		System.out.println("2��ʹ��sql������������ݡ�");
		System.out.println("3���ر����ӡ�");
		System.out.println("�Ѿ�����û���" + user.getName());
		System.out.println("===============================");
	}
	public void delete(User user)
	{
		System.out.println("1,Hibernate�������ݿ⡣");
		System.out.println("2��ʹ��sql������ɾ�����ݡ�");
		System.out.println("3���ر����ӡ�");
		System.out.println("�Ѿ�ɾ���û���" + user.getName());
		System.out.println("===============================");
	}
}

class  DBOperate
{
	public static void main(String[] args) 
	{
		User user1 = new User("Hao");
		User user2 = new User("Yong");
/*
		UserInfoDao ui = new UserInfoByHibernate();
		ui.add(user1);
		ui.delete(user1);

		UserInfoDao hi = new UserInfoByJDBC();
		hi.add(user2);
		hi.delete(user2);
*/
		dataBaseOperate(new UserInfoByHibernate(), user1);
		dataBaseOperate(new UserInfoByJDBC(), user2);
	}

	static void dataBaseOperate(UserInfoDao uid, User user) {
		uid.add(user);
		uid.delete(user);
	}
}











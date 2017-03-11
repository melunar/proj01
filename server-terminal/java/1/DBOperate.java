/*
数据库的操作。
思路：
1，连接数据库。JDBC  Hibernate
2，操作数据库。
3，关闭数据库连接。
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
		System.out.println("1,JDBC连接数据库。");
		System.out.println("2，使用sql添加语句添加数据。");
		System.out.println("3，关闭连接。");
		System.out.println("已经添加用户：" + user.getName());
		System.out.println("===============================");
	}
	public void delete(User user)
	{
		System.out.println("1,JDBC连接数据库。");
		System.out.println("2，使用sql语句删除数据。");
		System.out.println("3，关闭连接。");
		System.out.println("已经删除用户：" + user.getName());
		System.out.println("===============================");
	}
}

class UserInfoByHibernate implements UserInfoDao
{
	public void add(User user)
	{
		System.out.println("1,Hibernate连接数据库。");
		System.out.println("2，使用sql添加语句添加数据。");
		System.out.println("3，关闭连接。");
		System.out.println("已经添加用户：" + user.getName());
		System.out.println("===============================");
	}
	public void delete(User user)
	{
		System.out.println("1,Hibernate连接数据库。");
		System.out.println("2，使用sql添加语句删除数据。");
		System.out.println("3，关闭连接。");
		System.out.println("已经删除用户：" + user.getName());
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











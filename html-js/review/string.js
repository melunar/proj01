/**
 * Created by haoyong on 2016/8/3.
 * javascript 字符串
 */

 /**
查找类方法
	charAt(index) 返回字符串第index个字符，超出范围返回""
	charCodeAt(index) 返回字符串第index个字符的ASCII码，超出范围返回NaN
	String.fromCharCode(n1[,n2,n3...,n]) 返回ASCII码对应的字符串（一个或多个）

	indexOf(c|s) 检索位置，返回index或-1
	lastIndexOf(c|s) 检索最后一个位置，返回index或-1

操作类方法：
	string.concat(string_1,...) 返回新的拼接字符串
	substring(start, end);//省略参数2，截取到最后
	slice(start, end);//省略参数2，截取到最后
	substr(start, length);//省略参数2，截取到最后

	trim();
	trimLeft(); 清除前缀空格
	trimRight(); 清除后缀空格

	localeCompare(string); 本地特定的顺序比较俩字符串 返回 -1 0 1

	toUpperCase();
	toLocaleUpperCase();
	toLowerCase();
	toLocaleLowerCase();

编码：(全局方法，直接用)
	escape(string);//%xxxx
	unescape(code);

	encodeURI(string)//%xx 不转译标点
	decodeURI(code)

	encodeURIComponent(string); 转译标点
	decodeURIComponent(string);

匹配类方法：
	//看了正则 补充这块
	

 */


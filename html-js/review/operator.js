/**
 * Created by haoyong on 2016/7/31.
 * javascript 运算符
 */

/**
 算数运算符：
    + - * / %
    += -= *= /= %=
    0和"" 的使用-->字符型和数值型相互转换

自增减：
    ++，--

关系运算符：
    > >= < <= == ===
    字符串之间比较：逐个比较Unicode值
    字符串数值与数值比较：字符串转换成数值后比较
    null == undefined
    NaN不与任何数值比较包括自己

    比较原则：
        值类型之间比较：数据类型相同，值相同（==）
        值类型与引用类型比较：肯定不会相同（==）
        引用类型之间比较：引用值比较，即内存地址（==）

 对象运算符：
    in，instanceof，delete，new，[]，.，()

 逻辑运算符：
    !,!!,&&,||
    &&: 当有一个值是null,undefined,NaN 返回null,undefined,NaN
    ||同理

 位运算符：
    有符号类型：符号位1位（0：+，1：-）数值位31位
    无符号类型：正数
    ......(不玩了，有兴趣自己去查).....

 其他运算符：
    ?:(if else)
    typeof
    ,
    void(舍弃运算符，返回undefined)

 * */
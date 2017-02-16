/**
 * Created by haoyong on 2016/7/30.
 * javascript 变量
 */

/**
 变量命名：
     匈牙利命名法
     array->a
     int->i
     float->fl
     object->o
     Function->fn
     regular expression->re

    驼峰命名-下划线命名法

 变量的声明切记：
    不要没有类型[不要不赋值]（赋值：0,"",false,[],{},null）
    不要不用var关键字
    先声明在使用

 变量类型（Number, String,Boolean,[],{},null,undefined）：【示例：fn01】
    typeof检测（值类型：占用空间固定，保存在栈中，基本数据类型都是值类型）:数值，布尔值，null，undefined
    instanceof检测（引用类型：占用空间不固定，保存在堆中，使用new关键字构造的对象都是引用类型）：对象，数组，函数

作用域：
    全局变量：在函数体外、函数体内不用var关键字声明的变量，在任意地方调用
    局部变量：函数体内使用var关键字定义，在函数体内使用。

    优先级（同名变量）：局部变量 > 参数变量 > 全局变量

    特点：
    全局变量是全局对象的属性（如window），局部变量是调用对象的属性。
    内层函数可以访问外层函数的局部变量，反之不可以（闭包特性）。
    声明周期：全局变量一直存在，直到被删除（delete）；局部变量存在于函数体内，函数结束即消亡；有一定的回收机制。

值的可变性与不可变性：
    数组和对象的值是可变的，也就是说我们动态修改里面值，原始的值也会发生相应的改变；
     var str = "abc";
     str[0] = "d";
     console.log(str[1]="f"); >>f
     console.log(str[0]); >>a
     console.log(str); >>abc
    数字，字符串，布尔值，null，undefined的值是不可以改变的，就算你后面动态的修改它的值，它的原始值并不会发生改变；
     var num = [1,2,3];
     num[0] = "a";
     console.log(num); >>["a", 2, 3]
    如果要修改以后的值都是通过定义一个变量来保存这个新值，因为它的返回值就是我们修改过后的值。

 */

function fn01() {
    var store1='Nike China';
    var store2=store1;
    store1='Nike U.S.A.';
    console.log("值类型：");
    console.log(store1 + " , " + store2); //Nike U.S.A. , Nike China

    var store11=['Nike China'];
    var store22=store11;
    console.log("引用类型");
    console.log(store22[0]); //Nike China
    store11[0]='Nike U.S.A.';
    console.log(store22[0]); //Nike U.S.A.
}

fn01();

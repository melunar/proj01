/**
 * Created by haoyong on 2017/6/3.
 */
/*
注意：nodejs中没有window对象 取而代之的事global对象

var window = [1,2,3];
//console.log(window);

*/
console.log(global);
/*
var Person = function(name) {
    this.name = name;
};

Person.prototype.run = function() {
  console.log("running " + this.name);
};
var person = new Person("haoyong");
person.run();*/

/**
 * nodejs中一个文件就是一个模块 并且有自己的作用域
 * 所以 模块内的‘全局’变量并不挂在global全局对象下！！！
 *
 * 每个模块都有自己的作用域
 */
var a = 100;
global.a = 200;
console.log(a); // 100
console.log(global.a); // 200

console.log("模块内部的变量 __filename  =  " + __filename);


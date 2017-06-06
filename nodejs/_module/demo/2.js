/**
 * Created by haoyong on 2017/6/3.
 */
var module1 = require("./1.js");
require("./__module");//没有后缀名会尝试按照 .js -> .json -> .node的后缀名优先级顺序去寻找该文件名的文件
//require("1.js"); //这种写法是错误的！！！一定要带上相对路径'./'前缀 ，否则node环境回去尝试加载原生自带的模块 找不到就报错了
console.log("这是模块2");

console.log(module); //module 当前模块的对象详情 上面输出看不见exports的内容
console.log(module.exports === exports);// exports ,module.exports 指向的是同一个对象  但是在使用的使用注意不要断开它们指向共同对象的原则
module.exports = {
    a: [1,23,2]
};


console.log(module); //module 当前模块的对象详情 下面输出看得见exports的内容
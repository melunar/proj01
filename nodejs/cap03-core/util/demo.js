// util 是一个Node.js 核心模块，提供常用函数,
// 弥补核心JavaScript 的功能 过于精简的不足。

var util = require('util'); 

/**
inherits
inspect  是一个将任意对象转换 为字符串的方法
isArray 
isRegExp
isDate
isError
*/
console.log(util.isError(new Error()));

console.log(util.isError(new TypeError()));

console.log(util.isError(false));


var fs = require("fs");

var data = fs.readFileSync('text.txt');

console.log(data.toString());
console.log("程序执行结束!");
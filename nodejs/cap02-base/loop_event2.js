var fs = require("fs");


//在 Node应用程序中 
//异步操作的函数将回调函数作为最后一个参数，
//回调函数接收错误对象作为第一个参数。
fs.readFile('text.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      console.log(err);
      return;
   }
   console.log(data.toString());
});
console.log("程序执行完毕");
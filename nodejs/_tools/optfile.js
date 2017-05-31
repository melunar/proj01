/* 
* @Author: melunar
* @Date:   2017-05-30 21:50:01
* @Last Modified by:   melunar
* @Last Modified time: 2017-05-30 23:12:48
* 
* 文件读写操作公共方法
*/

var fs = require("fs");
module.exports = {
	readImg: function(path, res) {
		fs.readFile(path, "binary", function(err, file)  {
			if(err) {
				console.log(err);
				return;
			}else{
				console.log("输出文件");
					//res.writeHead(200,  {'Content-Type':'image/jpeg'});
					res.write(file, "binary");
					res.end();
				}
			});
	},
	writefile: function(path, data) {    //异步方式
		fs.writeFile(path, data, function  (err)  {
			if(err) {
				throw err;
			}
			console.log('It\'s saved!');  //文件被保存
		});
	},
	writeFileSync: function(path, data){  //同步方式
		fs.writeFileSync(path, data);
		console.log("同步写文件完成");
	},
	readfile: function(path, callback){          //异步执行
		fs.readFile(path, function (err, data)  {
			if(err)  {
				console.log(err);
		  	} else {
			  //console.log(data.toString());
			  callback && callback(data.toString());
		  }
	  });
		console.log("异步方法执行完毕");
	},
	readfileSync: function(path) {      //同步读取
		var data = fs.readFileSync(path,'utf-8');
		//console.log(data);
		console.log("同步方法执行完毕");
		return data;                
	}
};  
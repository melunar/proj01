/* 
* @Author: melunar
* @Date:   2017-05-30 21:42:21
* @Last Modified by:   melunar
* @Last Modified time: 2017-05-30 23:26:52
*
* 路由控制器
*/

var optfile = require("./../_tools/optfile.js");
var url = require("url");
var querystring = require("querystring");  //post需导入

function getRecall(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	function recall(data) {
		res.write(data);
		res.end('');//不写则没有http协议尾
	}
	return recall;
}
module.exports = {
	login: function(req, res){
		var recall = getRecall(req, res);
		optfile.readfile("./views/login.html", recall);
	},
	loginAction: function(req, res) {
		var rdata = url.parse(req.url, true).query;
		console.log(rdata);
		if (rdata["name"] !== undefined) {
			console.log("name = " + rdata["name"]);
		}
		if (rdata["pwd"] !== undefined) {
			console.log("pwd = " + rdata["pwd"]);
		}
		res.end("login ...");
	},
	regist: function(req,res){
		var recall  =  getRecall(req,res);
		optfile.readfile("./views/regist.html", recall);
	},
	registActionGet: function(req,res) {
		var rdata = url.parse(req.url, true).query, info = "regist...";
		console.log(rdata);
		if (rdata["name"] !== undefined) {
			console.log("name = " + rdata["name"]);
		}
		if (rdata["pwd"] !== undefined) {
			console.log("pwd = " + rdata["pwd"]);
		}
		if (rdata["pwd_1"] !== undefined) {
			var pwd_1 = rdata["pwd_1"];
			var pwd = rdata["pwd"];
			info = pwd_1 === pwd ? "regist ok" : "password diff!!"
		}
		res.end(info);
	},
	registActionPOST: function(req,res) {
		var rdata = url.parse(req.url, true).query, info = "regist...";
		console.log(rdata);
		var post  =  "";          //定义了一个post变量，用于暂存请求体的信息

		req.on("data", function(chunk){        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
			post += chunk;
		});
		//-------注意异步-------------
		req.on("end", function(){        //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
			post = querystring.parse(post);
			console.log('name:'  +post['name'] + '\n');
			console.log('pwd:' + post['pwd'] + '\n');
		});
		//---------------------------------------
		data = optfile.readfileSync('./views/login.html');
		res.write(data);
		res.end();
	},
	writefile: function(req, res) {
		function recall(data) {
			res.write(data);
			res.end('');//不写则没有http协议尾
		}
		optfile.writefile('./inc/one.txt','今天阳光灿烂', recall);
	},
	showImg: function(req,res) {
		res.writeHead(200, {'Content-Type':'image/jpeg'});
		optfile.readImg("./images/girl.png", res);
	}
}
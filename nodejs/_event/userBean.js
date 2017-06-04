/* 
* @Author: melunar
* @Date:   2017-06-03 15:00:37
* @Last Modified by:   melunar
* @Last Modified time: 2017-06-03 15:11:45
*/

var events = require("events");    
var http = require('http');    
function UserBean() {    
    this.eventEmit = new events.EventEmitter(); //初始化一个事件
    this.regist = function(req, res) { 
        console.log("注册"); 
        req['uname'] = "aa"; 
        req['pwd'] = "bb"; 
        this.eventEmit.emit('regist', req['uname'], req['pwd']);  //抛出事件消息 
    }, 
    this.login = function(req,res) { 
        console.log("登录"); 
        res.write(" 用户名:" + req['uname']); 
        res.write(" 密码:" + req['pwd']); 
    }    
}    
    
module.exports = UserBean;       
/*
Express初始化了 app ，让它充当一个HTTP服务器。

我们定义了一个路由处理器 ／ ，当我们输入网址的时候，它进入到文件根目录。

我们让HTTP服务器监听3000端口

*/


var app = require('express')();

var http = require('http').Server(app);

var io = require('socket.io')(http);
app.get('/', function(req, res){

 res.sendfile('index.html');
});

io.on('connection', function(socket){

 console.log('a user connected');
});

http.listen(3000, function(){

 console.log('listening on *:3000');
});
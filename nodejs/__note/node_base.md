## 服务端JavaScript - Node.js

> Node.js事实上就是另外一种上下文，它允许在后端（脱离浏览器环境）运行JavaScript代码。  
要实现在后台运行JavaScript代码，代码需要先被解释然后正确的执行。Node.js的原理正是如此，它使用了Google的V8虚拟机（Google的Chrome浏览器使用的JavaScript执行环境），来解释和执行JavaScript代码。  
除此之外，伴随着Node.js的还有许多有用的模块，它们可以简化很多重复的劳作，比如向终端输出字符串。  
因此，Node.js事实上既是一个运行时环境，同时又是一个库。  

> 基于事件驱动的回调: 当我们使用 http.createServer 方法的时候，我们当然不只是想要一个侦听某个端口的服务器，我们还想要它在服务器收到一个HTTP请求的时候做点什么。
问题是，这是异步的：请求任何时候都可能到达，但是我们的服务器却跑在一个单进程中。
写PHP应用的时候，我们一点也不为此担心：任何时候当有请求进入的时候，网页服务器（通常是Apache）就为这一请求新建一个进程，并且开始从头到尾执行相应的PHP脚本。
那么在我们的Node.js程序中，当一个新的请求到达8888端口的时候，我们怎么控制流程呢？
嗯，这就是Node.js/JavaScript的事件驱动设计能够真正帮上忙的地方了——虽然我们还得学一些新概念才能掌握它。让我们来看看这些概念是怎么应用在我们的服务器代码里的。
我们创建了服务器，并且向创建它的方法传递了一个函数。无论何时我们的服务器收到一个请求，这个函数就会被调用。

> file:///D:/Users/haoyong/Desktop/test.html
// 一些常用的npm命令

/**

1. 更新npm： npm install npm -g //如果你的node安装路径不是默认的，更新没啥用，这里的更新只是把最新版的npm安装到了默认路径下（C盘的某某处C:\Users\yourname\AppData\Roaming\npm，安装完成会有提示）

2. 模块的本地安装： npm install <Module Name>

3. 模块的全局安装： npm install <Module Name> -g //安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('<Module Name>') 的方式就好，无需指定第三方包路径。var express = require('express');

3.1 一般把express装上 用的到：npm install express -g

3.2 安装之后的模块下都有一个package.json文件，用于定义包的属性

4. 查看所有全局安装的模块: npm ls -g

5. 卸载模块：npm uninstall express [-g] //继续研究 这里有问题 正在使用和是否全局的问题.......ing

6. 更新模块：npm update express

7. 搜索模块：npm search express // 首次执行会建立索引，等待吧

8. 创建模块

8.1 当前目录下：npm init
8.2 按照提示一直输入基本信息（直接回车代表放弃该项）
8.3 到了Is this ok? (yes) 输入yes,看看目录下生成的package.json 吧
8.4 在 npm 资源库中注册用户（使用邮箱注册）：npm adduser
...失败...了 前面的github没有配置 要玩就好好玩吧.....以后有机会再搞吧




其他常用命令 
使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。

*/
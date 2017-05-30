/* 
* @Author: melunar
* @Date:   2017-05-20 20:48:46
* @Last Modified by:   melunar
* @Last Modified time: 2017-05-20 21:32:41
*/
var server = require("./server.js");
var route = require("./route.js");

server.start(route.init);
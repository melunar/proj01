var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname,
    requestUrl = url.parse(request.url);
    // console.log("Request for " + pathname + " received.");
    route(pathname,requestUrl);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(7001);
  console.log("Server has started at 7001.");
}

exports.start = start;
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("<h2>Hello World!</h2>");
})
    .listen(8081, function(){console.log("Node server is running...")});
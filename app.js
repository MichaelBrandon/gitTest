var http = require("http");
var timestamp = require('./timeStamp');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The day and time is: " + timestamp.timeStamp() + "<br>");
    res.end("Welcome to the Homepage!");
}).listen(3030);
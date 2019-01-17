var http = require("http");
var timestamp = require('./timeStamp');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Welcome to the Homepage!</h1>");
    res.write("The day and time is: " + timestamp.timeStamp() + "<br>");
    res.end();
}).listen(3030);
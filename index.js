var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/'));
server.get("/", function(request, response){
  response.sendFile("index.html", {root: __dirname});
});
server.get("/hover", function(req, res){
  res.sendFile("hover.html", {root: __dirname});
});

server.listen(port, function(){
  console.log("Now listening on port...", port);
});

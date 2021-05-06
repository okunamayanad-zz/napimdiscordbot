var http = require('http');

http.createServer(function (req, res) {
  res.write("1234");
  res.end();
}).listen(8080);
var http = require('http');

http.createServer(function (req, res) {
  res.write("hayattayım amk");
  res.end();
}).listen(8080);
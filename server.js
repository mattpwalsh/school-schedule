const http = require('http');
const port = 8080;
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');

const serve = serveStatic('./dist');

const server = http.createServer(function(req, res) {
  const done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(port);
console.log(`Listening on port: ${port}`);
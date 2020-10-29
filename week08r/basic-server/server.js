const http = require('http');

//backend
const server = http.createServer(function(request, response){
  // Run some code when a request is received from the browser.
  console.log(request.url);

  response.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
  response.end('<h1>Hello World!</h1>');
});

server.listen(8000, function() {
  console.log('Listening on port 8000');
})
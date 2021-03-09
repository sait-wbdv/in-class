const http = require('http');

// console.log(http);

const server = http.createServer(function(request, response){
  console.log(request.url);

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.end("<h1>Hello World!!</h1>");

}); 

server.listen(8080, function(){
  console.log('Listening on port 8080.')
})
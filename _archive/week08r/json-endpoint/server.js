const http = require('http');

//backend
const server = http.createServer(function(request, response){
  // Run some code when a request is received from the browser.
  // console.log(request);

  const payload = {id: 237, title: 'Puppy', description: 'super cute and adorbs'};

  // console.log(payload);
  // console.log(JSON.stringify(payload));

  response.writeHead(200,{"Content-Type": "application/json; charset=utf-8"});
  response.end(JSON.stringify(payload));
});

server.listen(8000, function() {
  console.log('Listening on port 8000');
})
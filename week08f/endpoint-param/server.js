const http = require('http');

const server = http.createServer(function(request,response) {

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

  console.log(request.url);
  
  const params = request.url.split('/');
  console.log(params);

  // Pull in the :id
  const photoId = params[2];

  // console.log(photoId);
  // console.log(parseInt(photoId));
  // console.log(Number.isInteger(parseInt(photoId)));

  if (params[1] === 'photos' && Number.isInteger(parseInt(params[2]))) {

    response.end(`<img src="https://picsum.photos/id/${parseInt(params[2])}/500/500/" alt="Lorem Picsum">`);

  } else {
    // Use the `request.url` property to gain access to the endpoint being requested. 
    response.end(`<h1>Request URL: ${request.url}</h1>`);
  }

});

server.listen(8080, function() {
    console.log(`Listening on port 8080`);
});
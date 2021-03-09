const http = require('http');
const dayjs = require('dayjs');

const server = http.createServer(function(request, response){

  let marsPerseverance = dayjs('2021-02-18');
  
  let now = dayjs();
  let days = now.diff(marsPerseverance, 'days');
  
  const message = `on ${now.format('YYYY-MM-DD')}, ${days} days have passed since Perseverance landed on Mars.`;

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.end(`<h1>Hello World!!</h1> <p>By the way, ${message}</p>`);

});

server.listen(8080, function(){
  console.log('Listening on port 8080.')
})
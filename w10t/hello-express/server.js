const express = require('express');
const app = express();
const name = require('./data/ellie-puppy');
const soapFart = require('./data/soap-fart');


app.get('/', (request, response) => {
  response.send('Hello World!');
})

app.get('/contact', (request, response) => {
  response.send('Hello Contact!');
})

app.get('/puppy', function(request, response){
  response.send(`Hello  ${name}`);
})

app.get('/soap-fart', function(request, response){
  response.send(soapFart);
})

app.use(function(request, response){
  response.status(404)
  response.send('Custom Not found')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
})
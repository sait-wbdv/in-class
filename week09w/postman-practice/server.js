// Load dependencies
const path = require('path');
const express = require('express');

// Create express app
const app = express();

app.get('/', function(request, response){
  response.send('Home page');
});

// app.use is for using middleware
// Out of order!
app.use(express.static(path.join(__dirname, 'public')));

// Fancy code here
app.get('/json', function(request, response){
  // response.send("This isn't JSON :(");
  response.send({method: 'get', message: 'This is JSON'});
  // Fancy stuff

  // Might need a 404 handler
});

// PATCH
app.patch('/',function(request, response){
  response.send('PATCH request');
});

// Add more middleware
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
// Load dependencies
const path = require('path');
const express = require('express');
const animals = require('./animals');

// Create express app
const app = express();

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// JSON GET endpoint
app.get('/api/v0/gallery', function(request, response){
  // const animals = [237, 433, 577, 582, 593, 659, 718, 783, 790, 837, 1024, 1025, 1074, 1084];
  response.json(animals);
});

// Add more middleware
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
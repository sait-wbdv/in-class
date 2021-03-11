const express = require('express');
const app = express();

/***********/
/* .send() */
/***********/

// Text -> text/html (by default)
app.get('/send/text',(req, res) => {
  // Text -> text/plain
  res.set('Content-Type','text/plain');

  res.send('hello world');
});

// HTML -> text/html
app.get('/send/html',(req, res) => {
  res.send('<p>hello world</p>');
});

// JSON -> application/json
app.get('/send/json',(req, res) => {
  res.send({hello: 'world'});
});


/***********/
/* .json() */
/***********/

// JSON -> application/json
app.get('/json/json',(req, res) => {
  res.json({hello: 'world'});
})
// HTML -> application/json
app.get('/json/html',(req, res) => {
  res.json('<p>hello world</p>');
})


/***********/
/* .end() */
/***********/

// Text --> No `Content-Type`
app.get('/end/text',(req, res) => {
  res.end('hello world');
});

// HTML --> No `Content-Type`
app.get('/end/html',(req, res) => {
  res.end('<p>hello world</p>');
});

// JSON --> text/html error
app.get('/end/json',(req, res) => {
  res.end({hello: 'world'}); 
});

// Example of only time you should use .end: when you don't send data.

app.use(function(req,res){
  res.status(404).end();
});

const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}.`)
})
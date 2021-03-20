const path = require('path');
const express = require('express');
const pages = require('./routes/index')
const definitions = require('./routes/definitions')
const phraser = require('./phraser')

const app = express();
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(request, response, next){
  response.locals = {phrase: phraser()};
  console.log(response.locals.phrase)
  next();
})

app.use('/', pages)
app.use('/definitions', definitions)


app.use(function(request, response) {
  response.status(404);
  response.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
})
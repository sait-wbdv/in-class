const mongoose = require('./_connection.js');
const dotenv = require('dotenv').config();
const express = require('express');

// No pulling from Atlas
// const definitions = require('./data/definitions.js')
const Definition = require('./models/definition.js')

const app = express();
app.use(express.static('./public'));

// GET /api/v0/definitions

/*************/
/* Callbacks */
/*************/

app.get('/api/v0/definitions', (req, res) => {
  Definition.find((err, definitions) => {
    if (err) {
      res.sendStatus(404)
    }
    res.json(definitions);
  })
})

/************/
/* Promises */
/************/

// app.get('/api/v0/definitions', async (req, res) => {
//   const definitions = await Definition.find({slug: 'global'});
//   try {
//     res.json(definitions);
//   } catch (err) {
//     res.sendStatus(404);
//   }
// });

// 404
app.use((req, res) => {
  res.sendStatus(404);
})

// start and listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log('Listening on port: ' + PORT)
})
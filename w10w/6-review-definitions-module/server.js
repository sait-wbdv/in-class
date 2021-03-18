const mongoose = require('./_connection.js');
const dotenv = require('dotenv').config();
const express = require('express');
const definitions = require('./data/definitions.js')

const app = express();
app.use(express.static('./public'));

// GET /api/v0/definitions

app.get('/api/v0/definitions', (req, res) => {
  res.json(definitions);
})

// GET /

// 404
app.use((req, res) => {
  res.sendStatus(404);
})

// start and listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log('Listening on port: ' + PORT)
})
const mongoose = require('./_connection.js') 

// Import seed data
const defSeed = require(`./seeds/definitions.js`);

// Define model
const Definition = require(`./models/definition.js`);

Definition.insertMany(defSeed, function(error, definition) {
  console.log('Data import completed.')
  mongoose.connection.close();
});
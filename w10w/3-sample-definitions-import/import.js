const mongoose = require('./_connection.js') 

/***********/
/* Animals */
/***********/

// Import seed data
const animalsSeed = require(`./seeds/animals.js`);

// Define model
const Animal = require(`./models/animal.js`);

Animal.insertMany(animalsSeed, function(error, animal) {
  console.log('Animals data import completed.')
  // mongoose.connection.close();
});

/***************/
/* Definitions */
/***************/

// Import seed data
// const definitionsSeed = require(`./seeds/definitions.js`);

// Define model
// const Definition = require(`./models/definition.js`);

// Definition.insertMany(definitionsSeed, function(error, definition) {
//   console.log('Definitions data import completed.')
   // mongoose.connection.close();
// });
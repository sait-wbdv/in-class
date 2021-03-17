const mongoose = require('mongoose');

const definitionSchema = new mongoose.Schema({
  term: String,
  definition: String,
  slug: String
});

module.exports = mongoose.model('Definition', definitionSchema);

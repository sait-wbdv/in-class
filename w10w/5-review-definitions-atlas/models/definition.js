const mongoose = require('mongoose');

const definitionsSchema = new mongoose.Schema({
  term: String,
  definition: String,
  slug: String
});

const Definition = mongoose.model('Definition', definitionsSchema);

module.exports = Definition;
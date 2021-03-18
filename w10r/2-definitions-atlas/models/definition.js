const mongoose = require('mongoose')

const defSchema = mongoose.Schema({
  term: String,
  description: String,
  slug: String
})

module.exports = mongoose.model('Definition', defSchema)
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to DB...');
});

// Code here
const kittySchema = new mongoose.Schema({
  name: String,
  age: Number,
  colour: String,
  breed: String
});

kittySchema.methods.speak = function () {
  let greeting;
  if (this.name) {
    greeting = `Meow name is ${this.name}.`;
  } else {
    greeting = "I don't have a name.";
  }
  console.log(greeting);
}

// "Kitten" will be the name of the eventual collection that's inserted into Atlas, except the plural version
const Kitten = mongoose.model('Kitten', kittySchema);

Kitten.find({age: { $lte: 7 }}, function(error, kittens){
  console.log(kittens);
})
const greetings = require('./greetings');

const greeter = {
  greet: function(lang = 'en') {
    if (typeof greetings[lang] !== 'undefined') {
      return greetings[lang];
    } else {
      return "Language not found :("
    }
  }
}

module.exports = greeter;
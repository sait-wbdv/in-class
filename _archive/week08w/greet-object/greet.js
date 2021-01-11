const greetings = {
  en: "hello",
  es: "hola",
  ch: "nihao",
  fr: "bonjour"
}


const greet = function(lang = 'en') {
  if (typeof greetings[lang] !== 'undefined') {
    return greetings[lang];
  } else {
    return "Language not found :("
  }
}

module.exports = greet;
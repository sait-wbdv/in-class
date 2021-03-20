const nouns = require('./data/nouns');

module.exports = function(wordCount = 2) {

  let phrase = [];
  for (let i = 0; i < wordCount; i++) {
    phrase.push(nouns[(Math.floor(Math.random() * Math.floor(nouns.length)))]);
  }
  return `${phrase.join(' ')}`; 
}
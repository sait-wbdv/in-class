// Calling function
const findName = function(callback) {
  // Pretend there's a db/endpoint
  const name = 'Tony';

  return callback(name);
}

// Callback functions
const formalGreeting = function(name) {
  return `Hello, Mr. ${name}.`;
}

const informalGreeting = function(name){
  return `Yo, ${name}!`;
}

const battleCry = function(name){
  return `${name}! Prepare to dye!`;
}

// Invocation
const formal = findName(formalGreeting);
const informal = findName(informalGreeting);
const battle = findName(battleCry);


console.log(formal);
console.log(informal);
console.log(battle);

// Custom callback
console.log(findName(function(name){
  return `Hey ${name}! I just learned how to pass an anonymous function as a callback! Yay!`;
}));
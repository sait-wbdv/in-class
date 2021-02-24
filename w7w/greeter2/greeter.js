// Calling function
const findName = function(callback) {
  // Pretend there's a db/endpoint
  const name = 'Tony';

  callback(name);
}

// Callback functions
const formalGreeting = function(name) {
  console.log(`Hello, Mr. ${name}.`);
}

const informalGreeting = function(name){
  console.log(`Yo, ${name}!`);
}

const battleCry = function(name){
  console.log(`${name}! Prepare to dye!`);
}

// Invocation
findName(formalGreeting);
findName(informalGreeting);
findName(battleCry);

// Custom callback
findName(function(name){
  console.log(`Hey ${name}! I just learned how to pass an anonymous function as a callback! Yay!`);
});
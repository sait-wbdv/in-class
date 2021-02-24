// Callback function
const someFunc = function(){
  return 'Invoked inside a function!';
}

// Invoking function
const logMessage = function(callback) {
  return callback();
}

// Pass callback function to calling function
const message = logMessage(someFunc);

console.log(message);
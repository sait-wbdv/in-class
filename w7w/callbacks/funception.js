// Calling Function
const callingFunc = function(callback){
  return callback();
}

// Callback Function
const callbackFunc = function(){
  console.log('Invoked inside a function!');
}

callingFunc(callbackFunc);
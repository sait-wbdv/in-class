console.log("Nihao! Let's party.");

const partyMe = function(){
  console.log("I love friends! Good thing I'm synchronous.");
}

const futureMe = function(){
  console.log("I'm back from the Event Queue! Where is everyone?");
}

// Invoke a function asynchronously with `setTimeout()`
setTimeout(futureMe, 2000);

// Invoke a function synchronously
partyMe();

// // The current script ends after this statement is executed.
console.log("Party's over. Adios!");
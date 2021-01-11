console.log('Hello World!');

let localVar = 'fake local scope';

const globalVar = 'global scope';

console.log(globalVar);

const myFunction = function(){
  console.log(`From inside: ${globalVar}`);

  // console.log(`From inside: ${localVar}`);

  let localVar = 'local scope';

  console.log(`From inside again: ${localVar}`);

}

myFunction();

console.log(localVar);

// console.log(myFunction);
// console.log(myFunction())
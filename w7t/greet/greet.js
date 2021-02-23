// 'use strict';

// const greet = function() {
//   console.log('Hi!');
// }
// console.log(greet);
// console.log(greet());

// const greet2 = function(name = 'Captain Anonymous'){
//   console.log(`Hi, ${name}!`);
// }

// console.log(greet2('Tony'));
// console.log(greet2());



const greet3 = function(name = 'Captain Anonymous'){
  return `Hi, ${name}!`;
}

console.log(greet3);

const greeting = greet3();

const greet4 = () => `Hi!`;

console.log(greet4('Norville'));

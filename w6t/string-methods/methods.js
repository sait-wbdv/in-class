const one = "To be or not to be";
const two = "When's lunch?!?";

console.log(one.length);
// console.log(two.length);

// Find the last character of a string

console.log(one.length - 1);
console.log(one[one.length - 1]);

console.log(one.indexOf('be'));
const be = one.indexOf('be');

console.log(one.slice(one.indexOf('be'),one.indexOf('to')));

console.log(one + ', ' + two.toLowerCase());

console.log(`${one}, ${two.toLowerCase()}`);

console.log(one.concat(', ',two.toLowerCase()));

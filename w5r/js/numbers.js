'use strict';

console.log('hello world!');

// number literal
console.log(3);

// Assign a number literal to a variable (operand 1)
const num1 = 3;

console.log(num1);

// Assign a number literal to operand 2
const num2 = 5;

console.log(num2);

// Log the sum of operands 1 and 2
console.log(num1 + num2); // 8

// Assign a string literal to operand 3
const num3 = '9';

// When one or more operands is a string, JS coerces the number to a string and '+' then concatenates 
console.log(num1 + num3); // 39

// parseInt() and parseFloat() will try coerce other values into an integer and floating point number, respectively
console.log(num1 + parseInt(num3));

// Subtraction operator
console.log(num1 - num2); // -2

// Multiplication operator
console.log(num1 * num2); // 15

// Division operator
console.log(num1 / num2); // 0.6

// Remainder operator
console.log(num1 % num2); // 3

// Exponent operator
console.log(num2 ** num1); // 125
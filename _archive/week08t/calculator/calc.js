// console.log(process.argv.slice(2).toString());

const operation = process.argv[2];
const operand1 = parseInt(process.argv[3]);
const operand2 = parseInt(process.argv[4]);

let result;

if (operation === 'add') {

  result = operand1 + operand2;

} else if (operation === 'subtract') {

  result = operand1 - operand2;

} else if (operation === 'multiply') {

  result = operand1 * operand2;

} else if (operation === 'divide') {

  result = operand1 / operand2;

} else {

  console.log('Invalid operator');

}

console.log(`The result is : ${result}`);
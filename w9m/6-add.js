// console.log(process.argv[2]);

const arguments = process.argv.slice(2);

const num1 = parseInt(arguments[0]);
const num2 = parseInt(arguments[1]);

console.log(num1 + num2);
console.log(process.argv);

const arguments = process.argv.slice(2);

console.log(arguments.join(', '));

console.log(arguments[1]);
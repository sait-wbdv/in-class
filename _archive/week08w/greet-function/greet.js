// Function as a statment
const greet1 = function(){
  console.log('Hello!');
}
greet1();
console.log(greet1());

// Function as an expression
const greet2 = function(){
  return "Hola!";
}
console.log(greet2());
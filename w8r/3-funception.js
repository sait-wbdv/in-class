const b = function(){
  let age;
  console.log(`b: ${age}`);
}

const a = function(){
  let age = 2;
  console.log(`a: ${age}`);
  b();
}

let age = 1;
console.log(`global: ${age}`);
a();
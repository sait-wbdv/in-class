console.log('var');
var a = 1;
if (true) {
  var a = 2;
  console.log(`inside block: ${a}`);
}

console.log(`outside block: ${a}`);


console.log('let');
let b = 1;
if (true) {
  let b = 2;
  console.log(`inside block: ${b}`);
}
// `a` inside the block does not exist outside the block.
console.log(`outside block: ${b}`);



console.log('const');
const c = 1;
if (true) {
  const c = 2;
  console.log(`inside block: ${c}`);
}
// `a` inside the block does not exist outside the block.
console.log(`outside block: ${c}`);



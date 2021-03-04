const a = function() {
  let inside = "function scope";
  console.log(inside);
}

let outside = "global scope";
a();
console.log(outside);

// Error
console.log(inside);

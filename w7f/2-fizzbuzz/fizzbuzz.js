// for (i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// for (i = 1; i <= 100; i++) {
//   let output = '';
//   if (i % 3 === 0) output += 'Fizz';
//   if (i % 5 === 0) output += 'Buzz';
//   if (!output) output = i;
//   console.log(output);
// }

console.log([...Array(100)].map((e,i)=>(++i%3?'':'fizz')+(i%5?'':'buzz')||i).join("\n"))

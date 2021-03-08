const path = require('path');

// console.log(process.argv[0]);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.dirname(__filename));

console.log(path.win32.dirname(__filename));


// Is the path absolute or relative?
console.log(path.isAbsolute('/test/something')); // true
console.log(path.isAbsolute('./test/something')); // false

// Is the path absolute or relative?
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('test/something'));

// Normalizing paths
console.log(path.normalize('/users/joe/..//test.txt')); //'/users/test.txt'


const name = 'tony';
console.log(path.join('/', 'users', name, 'notes.txt')); //'/users/joe/notes.txt'
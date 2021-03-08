const fs = require('fs');

// Asynchronous
fs.readFile('./files/file1.txt', 'utf-8', function(error, data){
  if(error) {
    console.log(`Uh Oh: ${error}`);
    console.log(data);
  }
  console.log(data);
});

// Synchronous (not recommended)
try {
  const data = fs.readFileSync('./files/file2.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}

// Advanced: Promises
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

readFilePromise('./files/file3.txt', 'utf-8')
  .then(function(data){
    console.log(data);
  })
  .catch(function(error){
    console.log(error);
  });

console.log("Done!")
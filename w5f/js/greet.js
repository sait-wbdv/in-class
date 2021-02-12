let firstName;
let lastName;
let salutation = 'Mx.';
let protocol;

// ES5
// console.log('Hello, ' + firstName + ' ' + lastName + '.'); 


// Check for undefined variables -> set defaults
if (typeof firstName === 'undefined') {
  // the variable is defined
  firstName = 'John'
}
if (typeof lastName === 'undefined') {
  // the variable is defined
  lastName = 'Wick'
}

// If no salutation -> death!
if (typeof salutation === 'undefined') {
  // the variable is defined
  protocol = 'battle';
} 

// Greet our guest
if(protocol === 'formal') {

  // Formal greeting
  console.log(`Hello, ${salutation} ${lastName}.`);

} else if (protocol === 'informal') {

  // Informal greeting
  console.log(`Hi, ${firstName}.`);

} else if (protocol === 'battle') {

  // Battle cry
  console.log(`${lastName}! You didn't fill out the form correctly! Prepare to die!`);

} else {
  
  // Throw error
  console.error(`Unrecognized protocol.`);

}

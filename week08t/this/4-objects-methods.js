// Run this file:
// - in the browser
// - from the command line using node

// What do you see? Why?

const a = {
  // Object property #1
  greet: "Hello!",

  // Object method #1
  log: function(){
    console.log(this);
    console.log(this.greet);

    this.greet = "Hola!";
    console.log(this.greet);

    this.setGreeting();
    console.log(this.greet);
  },

  // Object method #2
  setGreeting: function() {
    this.greet = 'Nihao!';
  }
};

a.log();

console.log(this);
// console.log(global);
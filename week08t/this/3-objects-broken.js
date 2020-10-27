// Run this file:
// - in the browser
// - from the command line using node

// What do you see? Why?

const a = {
  greet: "Hello!",

  log: function(){
    console.log(this);
    console.log(this.greet);

    this.greet = "Hola!";
    console.log(this.greet);

    const setGreeting = function() {
      // Soooo broken
      this.greet = 'Nihao!';
    }
    setGreeting();
    console.log(this.greet);
  }
};

a.log();

console.log(this);
// console.log(global);
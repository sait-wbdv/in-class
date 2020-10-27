// Run this file:
// - in the browser
// - from the command line using node

// What do you see? Why?

const a = {
  greet: "Hello!",

  log: function(){
    const self = this;

    console.log(self);
    console.log(self.greet);

    self.greet = "Hola!";
    console.log(self.greet);

    const setGreeting = function() {
      self.greet = 'Nihao!';
    }
    setGreeting();
    console.log(self.greet);
  }
};

a.log();

console.log(this);
// console.log(global);
// Define a tip calculator function that accepts the following parameters
// - bill total
// - tip rate with a default

let billTotal;
let tipRate;

// Pretend input
billTotal = 33.74;

// Excellent service!
// tipRate = .25;

// Scorched earth: no tip
// tipRate = 0;
tipRate = null;

const tipCalc = function(total = 0, rate = .18){

  const tipTotal = total * rate;

  return tipTotal;
  
}

const tip = `$${tipCalc(billTotal,tipRate).toFixed(0)}`;

console.log(tip);
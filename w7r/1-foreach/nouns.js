// Define list of nouns
const nouns = [
  "bush",
  "shovel",
  "cave",
  "mouth",
  "shell"
];

let output = '';

nouns.forEach(function(noun, index){
  // console.log(item, index);
  if (output) {
    output += ', ' + noun;
  } else {
    output = noun;
  }
});

console.log(output);

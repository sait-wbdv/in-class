const nouns = [
  "bush",
  "shovel",
  "cave",
  "mouth",
  "shell",
  "tear",
  "razor",
  "nest",
  "pad",
  "fear",
  "prize",
  "power",
  "pocket",
  "cane",
  "pump",
  "mask",
  "junk",
  "kiss",
  "photo"
];

let output = '<ul>\n';

nouns.forEach(function(noun, index){
  output += `  <li>${index} - ${noun}</li>\n`;
});

output += '</ul>';

document.querySelector('main').innerHTML = output;
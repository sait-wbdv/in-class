import { phraser } from './phraser.mjs';
import { colour } from './colour.mjs';

function init() {
  
  var h1 = document.querySelector('h1');

  h1.innerText = phraser.generate(2);
  colour.setRandomHue();

  h1.addEventListener('click', function(){
    this.innerText = phraser.generate(2);
    colour.setRandomHue();
  });
}

document.addEventListener('load',init());

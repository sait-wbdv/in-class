const animals = [
  237,
  433,
  577,
  582,
  593,
  659,
  718,
  783,
  790,
  837,
  1024,
  1025,
  1074,
  1084
];

/**********************************/
/* Easy output: Element.innerHTML */
/**********************************/

// let output = '';

// animals.forEach(function(animal){
//   output += `<img src="https://picsum.photos/id/${animal}/250" alt="Picsum Animal">`;
// });

// document.querySelector('main').innerHTML = output;


/*****************************************/
/* Fancy output: document.creatElement() */
/*****************************************/

const main = document.querySelector('main');

animals.forEach(function(animal){
  const img = document.createElement('img');

  img.src = `https://picsum.photos/id/${animal}/250`;
  img.alt = "Picsum Animal";

  main.appendChild(img);
});
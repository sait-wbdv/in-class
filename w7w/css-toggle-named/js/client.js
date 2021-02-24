const circle = document.querySelector('.circle');
const button = document.querySelector('button');

const clickHandler = function(event){
  
  // The browser builds an event object for our convenience
  console.log(event);
  circle.classList.toggle('fancy');
  
}

button.addEventListener('click', clickHandler);
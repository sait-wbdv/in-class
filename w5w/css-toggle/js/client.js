const h1 = document.querySelector('h1');
const circle = document.querySelector('.circle');
const button = document.querySelector('button');

button.addEventListener('click', function(){

  // Objective 4 code here. It will be invoked every time the button is clicked.
  circle.classList.toggle('fancy');

  h1.innerHTML = innerWidth;
  
});
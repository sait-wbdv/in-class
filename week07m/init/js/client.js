function init() {
  const heading = document.querySelector('h1');
  
  const privateVar = 'some-password';

  heading.innerHTML = '<em>Goodbye</em> World?!?';
}

window.addEventListener('load',init);
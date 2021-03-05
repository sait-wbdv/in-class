const endpoint = 'https://covid-api.mmediagroup.fr/v1/cases';

fetch(endpoint)
  .then(function(response){
    if (!response.ok) throw new Error('Not OK!');
    
    return response.json();
  })
  .then(function(cases){
    const randButton = document.createElement('button');
    randButton.innerText = 'Random';

    randButton.addEventListener('click', function(){

      const countries = Object.keys(cases);
      const randCountry = countries[Math.floor(Math.random() * countries.length)];

      let output = `<h2>${randCountry} Details</h2>`;
      output += '<ul>';

      for (const property in cases[randCountry]['All']) {
        // console.log(cases[country]['All']);
        output += `<li>${property}: ${cases[randCountry]['All'][property]}</li>`;
      }
      output += '</ul>';

      document.querySelector('.details').innerHTML = output;
    });

    const h2 = document.createElement('h2');
    h2.innerText = 'All Countries';

    const ul = document.createElement('ul');

    for (const country in cases) {
      // console.log(cases[country]['All']);
      const li = document.createElement('li')
      const button = document.createElement('button');
      button.innerText = country;
      li.appendChild(button);
      ul.appendChild(li);
    }

    ul.addEventListener('click', function(event){
      console.log(event.target.innerText);

      let output = `<h2>${event.target.innerText} Details</h2><ul>`;
      for (const property in cases[event.target.innerText]['All']) {
        // console.log(cases[country]['All']);
        output += `<li>${property}: ${cases[event.target.innerText]['All'][property]}</li>`;
      }
      output += '</ul>';

      document.querySelector('.details').innerHTML = output;
    });

    document.querySelector('.countries').append(randButton,h2,ul);

  })
  .catch(function(error){
    console.log(error);
  });


  
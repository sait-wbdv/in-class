fetch('http://localhost:3000/api/gallery')
  .then(function(response){
    // JSON `data` returned from server
    // We need to convert it in a Javascript object
    return response.json();
  })
  .then(function(animals){
    // `data`Javavascript object 
    console.log(animals);

    let outputHTML = '';

    animals.forEach(function(animal){
      outputHTML += `
        <img src="https://picsum.photos/id/${animal}/250" alt="One of Puppy's Frens: ${animal}">
      `;
    })

    // output to DOM
    document.querySelector('.gallery').innerHTML = outputHTML;

  })
  .catch(function(error){
    if (error) {
      console.log('Oh Noooooooos!');
    }
  });
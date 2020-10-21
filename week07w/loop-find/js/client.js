import { animals } from './animals.js';

const init = function(){
  // console.log(animals);

  // Find a tiger with Array.find()
  const foundItem = animals.find(function(animal){
    return animal.id === 593;
  });

  console.log(foundItem);

  // Find all animal photos take by Thomas Lefebvre using Array.filter()

  const thomasPhotos = animals.filter(function(animal){
    return animal.credit === 'Thomas Lefebvre';
  })

  console.log(thomasPhotos);

  // Make all photo credits lowercase using Array.map()
  const lcAnimals = animals.map(function(animal){
    animal.credit = animal.credit.toLowerCase();
    return animal;
  })

  console.log(lcAnimals);
}

window.addEventListener('load', init);

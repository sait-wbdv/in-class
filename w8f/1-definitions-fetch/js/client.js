const endpoint = 'https://json-express.herokuapp.com/api/v0/definitions';

fetch(endpoint)
  .then(function(response){
    if (!response.ok) throw new Error('Not OK!');
    
    return response.json();
  })
  .then(function(definitions){
    console.log(definitions);
    let output = '<dl>\n';

    definitions.forEach(function(definition){
      output += `
        <dt>${definition.term}</dt>
        <dd>${definition.definition}</dd>\n`;
    });

    output += '</dl>';

    /**********************************/
    /* Easy output: Element.innerHTML */
    /**********************************/

    document.querySelector('main').innerHTML = output;

  })
  .catch(function(error){
    console.log(error);
  });

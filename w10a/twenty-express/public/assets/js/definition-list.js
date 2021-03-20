fetch('https://json-express.herokuapp.com/api/v0/definitions')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(definitions){
    // Any code that depends on the `data` must go in this block
    let output = '<dl>';
    definitions.forEach(function(item){
      output += `  <dt><a href="/definitions/${item.slug}">${item.term}</a></dt>
                   <dd>${item.definition}</dd>`;
    })
    output += '</dl>';
    document.querySelector(`#main`).innerHTML = output;
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });

const greeter = function(name = 'Captain Anonymous', lang){

  if (lang === 'es') {

    return `Hola, ${name}!`;

  } else if (lang === 'fr') {

    return `Bonjour, ${name}!`;

  } else if (lang === 'ch') {

    return `Ni Hao, ${name}!`;

  } else {

    return `Hi, ${name}!`;

  }
}

console.log(greeter('Tony'));
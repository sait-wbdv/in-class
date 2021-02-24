
const greeter = function(name, lang){

  // Allow zero as a name.
  name = name ?? 'Captain Anonymoose';

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

console.log(greeter(0));
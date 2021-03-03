const greeter = {
  lang: 'en',
  timezone: 'MDT',
  setLang: function(language){
    this.lang = language;
  },

  greet: function(name = 'Captain Anonymous'){

    if (this.lang === 'es') {

      return `Hola, ${name}!`;

    } else if (this.lang === 'fr') {

      return `Bonjour, ${name}!`;

    } else if (this.lang === 'ch') {

      return `Ni Hao, ${name}!`;

    } else {

      return `Hi, ${name}!`;

    }
  }
};








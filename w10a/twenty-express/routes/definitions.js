const express = require('express');
const definitions = require('../data/definitions')

const router = express.Router()

router.get('/', (request, response) => {
  console.log(request)

  response.render('definition-list', {alt: ''});
})

router.get('/:slug', (request, response) => {
  
  definition = definitions.find(function(item){
    return request.params.slug === item.slug
  })

  if (!definition) {
    response.sendStatus(404);
  }

  response.render('definition-item', {
    alt: '',
    definition: definition
  });
})

module.exports = router
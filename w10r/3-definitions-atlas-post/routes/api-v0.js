const express = require('express');
// const definitions = require('../data/definitions.js');
const Definition = require('../models/definition')

const router = express.Router();

router.get('/definitions', (req, res) => {
  // res.json(definitions);
  Definition.find({}, (err, definitions) => {
    if (err) {
      res.sendStatus(404)
    }
    res.json(definitions)
  })
})

router.get('/definitions/:slug', (req, res) => {
  // const definition = definitions.find(function(item){
  //   return item.slug === req.params.slug;
  // })

  // if (!definition) {
  //   res.sendStatus(404);
  // }
  // res.json(definition);

  Definition.findOne({slug: req.params.slug}, (err, definition) => {
    if (err || !definition) {
      res.status(404).send({ error: `Not found` });
    }
    res.json(definition)
  })

})

module.exports = router;
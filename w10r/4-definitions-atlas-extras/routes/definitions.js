const express = require('express')
const router = express.Router()
const Definition = require('../models/definition');
const slugify = require('slugify')


router.get('/', (req, res) => {
  if (req.query.action == 'delete' && req.query.slug) {
    Definition.deleteOne({slug: req.query.slug}, (err, data) => {
      if (err) {
        res.send('<p>Problem deleting definition! <a href="/">Please try again</a>.</p>')
      }
      res.send('<p>Definition deleted! <a href="/">View definition list</a>.</p>')
    })
    
  } else {
    res.redirect('/')
  }
  
})

router.use(express.urlencoded({ extended: true }));

router.post('/', (req, res) => {
  req.body.slug = slugify(req.body.term).toLowerCase()

  const definition = new Definition(req.body) 
  definition.save(function(err, data){
    if (err) {
      res.send('<p>Problem creating definition! <a href="/">Please try again</a>.</p>')
    }
    res.send('<p>Definition created! <a href="/">View definition list</a>.</p>')
  })
})


module.exports = router
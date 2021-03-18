const express = require('express')
const router = express.Router()
const Definition = require('../models/definition')
const slugify = require('slugify')

router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  res.redirect('/')
})

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
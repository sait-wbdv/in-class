const express = require('express')
const router = express.Router()
const config = require('../config')
const definitions = require('../data/definitions')

router.use((req, res, next) => {
  res.locals = config
  next()
})

router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: "Program Schedule"})
})

router.get('/library', (req, res) => {
  res.render('pages/library', {pageTitle: "Library"})
})

router.get('/exercises', (req, res) => {
  res.render('pages/exercises', {pageTitle: "Exercises"})
})

// Definition list route here -> render definition-list.ejs
router.get('/definitions', (req, res) => {
  res.render('definition-list', {pageTitle: "Terminology"})
})

// Definition item route here -> render definition-item.ejs
router.get('/definitions/:slug', (req, res) => {
  const definition = definitions.find(function(item) {
    // true -> returns `item`
    // false -> moves to the next `item`
    // if they're all false -> returns `undefined`
    return item.slug === req.params.slug
  })

  if (!definition) {
    res.sendStatus(404)
  }

  res.render('definition-item', {
    pageTitle: definition.term,
    definition: definition
  })
})

module.exports = router;
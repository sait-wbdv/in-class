const express = require('express');

const router = express.Router()

router.get('/', (request, response) => {
  response.render('index', {alt: 'class="alt"'});
})

router.get('/contact', (request, response) => {
  response.render('contact', {alt: ''});
})

router.get('/left-sidebar', (request, response) => {
  response.render('left-sidebar', {alt: ''});
})

router.get('/right-sidebar', (request, response) => {
  response.render('right-sidebar', {alt: ''});
})

router.get('/no-sidebar', (request, response) => {
  response.render('no-sidebar', {alt: ''});
})

module.exports = router
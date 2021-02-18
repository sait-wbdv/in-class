import {nouns} from './nouns.mjs';

// From user interaction
const searchString = window.location.search;
const urlParams = new URLSearchParams(searchString);
const page = parseInt(urlParams.get('page'));

// Config values
const perPage = 10;

// Slice values
const start = (page - 1) * 10;
const end = start + perPage - 1;

// Page nav
const totalPages = Math.ceil(nouns.length / perPage);

// Slicey slicey
const slice = nouns.slice(start, end);

// Output slice
const items = slice.join('</li><li>');
const output = `<ul><li>${items}</li></ul>`;
document.querySelector('main').innerHTML = output;

// Output page nav
document.querySelector('.page').innerHTML = page;
document.querySelector('.total').innerHTML = totalPages;

document.querySelector('.prev').innerHTML = `<a href="?page=${page - 1}">Prev</a>`;
document.querySelector('.next').innerHTML = `<a href="?page=${page + 1}">Next</a>`;

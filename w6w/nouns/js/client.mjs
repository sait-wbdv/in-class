import { nouns } from "./nouns.mjs";

const items = nouns.join('</li><li>');

const output = `<ul><li>${items}</li></ul>`;

document.querySelector('main').innerHTML = output;
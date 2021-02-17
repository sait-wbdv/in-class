import { animals } from "./animals.mjs";

const items = animals.join(`/250" alt="Random Picsum Image">
<img src="https://picsum.photos/id/`);

const output = `<section><img src="https://picsum.photos/id/${items}/250" alt="Random Picsum Image"></section>`;

document.querySelector('main').innerHTML = output;
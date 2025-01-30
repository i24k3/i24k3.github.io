import { onlyjs, resetStyles, clear} from "./onlyjs/m.js";
import { create, render, select } from "./onlyjs/m.js";
import { style, setStyle } from "./onlyjs/m.js";

import { header } from "./src/header.js";

onlyjs(main);
function main() {
  resetStyles();
  setTitle('Devloper of all Trades');
  header();
 }


function setTitle(title = 'webpage') {
  document.title = `${title}`;
}

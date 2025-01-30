import { onlyjs, create, render, resetStyles, select, clear} from "./onlyjs/minifiedOnly.js";

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

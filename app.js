import { onlyjs, create, render, resetStyles, select, clear} from "./onlyjs/minifiedOnly.js";
import { header } from "./header.js";

onlyjs(main);
function main() {
  resetStyles();
  setTitle('i24k3.github.io');
  header();

 }

function setTitle(title = 'webpage') {
  document.title = `${title}`;
}

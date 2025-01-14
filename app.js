
import { onlyjs } from "./onlyjs/only.js";
import { create } from "./onlyjs/create.js";
import { render } from "./onlyjs/render.js";
import { select } from "./onlyjs/select.js";
import { style, applyStyle } from "./onlyjs/style.js";
import { resetStyles } from "./onlyjs/resetStyles.js";

import { Background } from "./onlyjs/styles/background.js";

onlyjs(main);
function main() {
  resetStyles();

  setTitle();

  bodyBg();
  containerMain();
  sectionLeft();
  sectionRight();

 }

function setTitle() {
  document.title = 'Versatile Dev portfolio';
}

function bodyBg() {
  Background.matrix('#ff878f');
}

function header() {
}



function containerMain() {
  const containerMain_attr= {
    type: 'div',
    id: 'mainDiv',
  };
  const containerMain_style = {
    //backgroundColor: 'lightseagreen',
    display: 'flex',
    width: '100%',
    height: '100vh',

  };

  const containerMain = create(containerMain_attr, containerMain_style);
  render(this, 'after', containerMain);
}

function sectionLeft() {
  const leftDiv_attr = {
    type: 'div',
  };

  const leftDiv_style= {
    border: '1px solid white',
    width: '30vw',
    height: '100vh',
    margin: '11px',

  };

  const leftDiv = create(leftDiv_attr, leftDiv_style);
  const mainContainer = select('#mainDiv');
  render(mainContainer, 'inside', leftDiv);
}


function sectionRight() {
  const rightDiv_attr = {
    type: 'div',
  };

  const rightDiv_style= {
    border: '1px solid white',
    width: '70vw',
    height: '100vh',
    margin: '11px',

  };

  const mainContainer = select('#mainDiv');
  const rightDiv= create(rightDiv_attr, rightDiv_style);
  render(mainContainer, 'inside', rightDiv);
}





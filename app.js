
import { onlyjs, create, render, select, } from "./onlyjs/onlyjsMinified.js";
import { style, setStyle } from "./onlyjs/onlyjsMinified.js";
import { resetStyles } from "./onlyjs/onlyjsMinified.js";


onlyjs(main);
function main() {
  resetStyles();

  setTitle();

  containerMain();
  sectionLeft();
  sectionRight();

 }

function setTitle() {
  document.title = 'Versatile Dev portfolio';
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
    width: '30vw',
    height: '100vh',
    backgroundColor: 'aquamarine',

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
    width: '70vw',
    height: '700px',
    backgroundColor: 'darkseagreen',
  };

  const mainContainer = select('#mainDiv');
  const rightDiv= create(rightDiv_attr, rightDiv_style);
  render(mainContainer, 'inside', rightDiv);
}





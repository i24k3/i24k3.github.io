/*
 * @fileoverview Module which provides methods to create a webpage/website 
 * @author Arsalan Khan (https://github.com/i24k3)
 * @version 1.0.0
 * @date January 4, 2025
 * @license MIT
 * [Any additional notes or instructions for other developers]
 * @copyright (c) 2025 Arsalan Khan. All Rights Reserved.
 *
 * :wqa
 * */




/*
 * creates html in the DOM.
 * @param {object} element - object with element properties.
 * @param {object} style - the css to be applied to element.
 * @return {object} htmlElement - a html element with provided properties.
 *
 *
 * element properties: 
 * 1. type = type of element e.g h1, div, code...
 * 2. text = text inside the element e.g "parasyte: The maximum" 
 * 3. id = the html id to be assigned e.g "hentaiIsArt" 
 * 4. className = the html class to be assigned e.g "main__hentaiIsArt"
 *
 * */
export function create(element, styles = '') {
  
  if (typeof element === 'object') {

  const htmlElement = document.createElement(element.type);
  const noTextElements = ['div', 'span', 'img', 'input', 'canvas', 'br', 'hr', 'meta', 'video', 'audio'];

  if (noTextElements.includes(element.type.toLowerCase())) {
    htmlElement.innerText = '';
    if (element.type === 'input') {
      htmlElement.setAttribute('type', element.inputType);
      htmlElement.placeholder = element.placeholder;
    }
  } else {

    if (element.type === 'label') {
      htmlElement.setAttribute('for', element.htmlFor);
      htmlElement.setAttribute('type', element.htmlType);
    }
    htmlElement.innerText = element.text || "Haro, Eburi Nyan!";
  }

    htmlElement.classList.add(element.className);
    htmlElement.id = element.id || '';
    //htmlElement.className = element.className || ``;


  if (styles !== '') {
    for (const styleProperty in styles) {
      if (styles.hasOwnProperty(styleProperty)) {

        // htmlElement.style[index] = styles[index]
        // htmlElement.style.border = "1px solid black"
        htmlElement.style[styleProperty] = styles[styleProperty];
      }
    }
  }
  return htmlElement;
} else {
  console.warn(`
  method 'create()' takes object's as argument,
  i.e 'create(elementObj, elementStyleObj)', please provide parms of suitable data type`);
}
}


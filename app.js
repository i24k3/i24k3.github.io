
import { onlyjs } from "./onlyjs/only.js";
import { create } from "./onlyjs/create.js";
import { render } from "./onlyjs/render.js";
import { select } from "./onlyjs/select.js";
import { resetStyles } from "./onlyjs/resetStyles.js";

onlyjs(main);
function main() {
  resetStyles();
  h1();
  //div();
  //test1();
 }

function h1() {
  const header_att= {
    type: 'h1',
  };
   const h2_attr = {
    type: 'h2',
  };

  const header_style ={
    textAlign: 'center',
    border: '1px solid black',
  };

  const header = create(header_att, header_style);
  const h2 = create(h2_attr);
  render(this, 'inside', header);
  render(this, 'inside', h2);
}

function div() {
  const div_att = {
    type: 'div',
  };
  const div_style = {
    backgroundColor: 'lightseagreen',
    width: '100px',
    height: '100px',
  };
  const div = create(div_att, div_style);
  render(this, 'after', div);
}







// test1
function test1() {
  styleBody();
  container();
  heading();
  inputGroup();
  labelUsername();
  inputUsername();
  button();
}

function styleBody() {
  const bodyStyle = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  };
  for (const styleProperty in bodyStyle) {
    if (bodyStyle.hasOwnProperty(styleProperty)) {
      document.body.style[styleProperty] = bodyStyle[styleProperty];
    }
  }
}

function container() {
  const container__attr = {
    type: 'div',
    text: '',
    id: 'container__div'
  };
  const container_style = {
    width: '100%',
    maxWidth: '400px',
    backgound: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '20px',
    boxSizing: 'border-box',
  };
  const container = create(container__attr, container_style);
  render(this, 'after', container);
}

function heading() {
  const heading1__attr = {
    type: 'h1',
    text: 'UI Library Test: 1',
    id: 'container__heading',
  };

  const heading1_style = {
    fontSize:'1.rem',
    color: '#333',
    marginBottom:'16px',
    textAlign:'center',
  };
  const heading = create(heading1__attr, heading1_style);
  const pos = select('div');
  render(pos, 'inside', heading);
}

function inputGroup() {
  const inputGroup__attr = {
    type: 'div',
    className: 'container__inputgroup',
    id: 'containerIg',
  };
  const inputGroup_style = {
    marginBottom: '16px',
  };
  const inputGroup = create(inputGroup__attr, inputGroup_style); 
  const pos = select('#container__heading');
  render(pos, 'inside', inputGroup);
}

function labelUsername() {
  const labelUsername__attr = {
    type: 'label',
    text: 'Name',
    htmlFor: 'name'
  };
  const labelUsername_style = {
    diplay: 'block',
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '4px'
  };
  const label= create(labelUsername__attr, labelUsername_style);
  const pos = select('.container__inputgroup');
  render(pos, 'inside', label);
}

function inputUsername() {
  const iu__attr = {
    type: 'input',
    inputType: 'text',
    placeholder: 'Enter your name?',
    id: 'name'
  };
  const iu_style= {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };
  const iu = create(iu__attr, iu_style);
  const pos = select('.container__inputgroup');
  render(pos, 'inside', iu);
}


function button() {
  
  const btn__att = {
    type: 'button',
    text: 'Submit',
  };
  const btn_style = {
    display: 'inline-block',
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };
  const button = create(btn__att, btn_style);
  const pos = select('.container__inputgroup');
  render(pos, 'after', button);
}

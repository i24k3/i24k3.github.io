
import { onlyjs, resetStyles, clear} from "./../onlyjs/m.js";
import { create, render, select } from "./../onlyjs/m.js";
import { style, setStyle } from "./../onlyjs/m.js";
import { addEvent, setEvent } from "./../onlyjs/m.js";

const BLACK = `#292F36`;
const RED = `#FF6B6B`;
const GREEN = `#4ECDC4`;
const WHITE = `#EAEAEA`;



export function content() {
  const containerA={
    type: 'div',
    className: 'container_main'
  };
  const containerS = {
    width: '100%',
    height: '900px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',


    resp: {
      small: {
        backgroundColor: WHITE,

      },
      medium: {
        backgroundColor: WHITE,

      },
      large: {
        backgroundColor: WHITE,
      }
    }
  };
  const container = create(containerA, containerS);
  render(this, 'inside', container );



  btn(container);
}


function btn(container) {
  const btnA = {
    type: 'button',
    text: `Don't click me~`
  };
  const btnS = {
        borderRadius: '3px',
        padding: '7px 11px',
        fontSize: '16px',
        fontWeight: 'bold',

    resp: {
      small: {
        border: `3px solid ${BLACK}`,
      },
      medium: {
        border: `3px solid ${BLACK}`,
      },
      large: {
        border: `3px solid ${BLACK}`,
      },
    },
  };
  const btn = create(btnA, btnS);

  render(container, 'inside', btn);
  addEvent(btn, 'click', clear);
  
}

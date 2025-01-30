

import { onlyjs, resetStyles, clear} from "./../onlyjs/m.js";
import { create, render, select } from "./../onlyjs/m.js";
import { style, setStyle } from "./../onlyjs/m.js";
import { addEvent, setEvent } from "./../onlyjs/m.js";

// header > div > a, header> div>span*3 , header> nav > ul> li > a 
//
const BLACK = `#292F36`;
const RED = `#FF6B6B`;
const GREEN = `#4ECDC4`;
const WHITE = `#EAEAEA`;

export function header() 
{
  const hdr_a = {
    type: 'div',
    className: 'header',
  };
  const hdr_s ={
    resp:{
      small:{
        backgroundColor: BLACK,
        width: '100%',
        display: 'flex',
        jsutifyContent: 'center',
        alignItems: 'center',
        padding: '20px 40px',
        color: WHITE,
      },
      medium: {
        backgroundColor: BLACK,
        width: '100%',
        display: 'flex',
        jsutifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 50px',
        color: WHITE,

      },
      large:{
        backgroundColor: BLACK,
        width: '100%',
        display: 'flex',
        jsutifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 60px',
        color: WHITE,

      },
  }};

  const hdr = create(hdr_a, hdr_s);
  render(this, 'inside', hdr);


  logo(hdr);
}




function logo(hdr) {

  const logoDiv_a = {type: 'div', className: 'logo'};
  const logoDiv_s = {
  };
  const logoDiv = create(logoDiv_a, logoDiv_s);
  render(hdr, 'inside', logoDiv);

  const aa= {
    type: 'a',
    text: 'i24k3',
    className: 'logo_A',
  };
  const as = {
    resp: {
      small: {
        fontSize: '22px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#fff',
        fontFamily: 'orbitron',
        padding: '5px 11px',
        cursor: 'pointer',

        borderTop: `1px solid ${GREEN}`,
        borderBottom: `1px solid ${RED}`,

     },
      medium: {
        fontSize: '33px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#fff',
        fontFamily: 'orbitron',
        padding: '5px 11px',
        cursor: 'pointer',


        borderTop: `2px solid ${GREEN}`,
        borderBottom: `2px solid ${RED}`,


      },
      large: {
        fontSize: '44px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#fff',
        fontFamily: 'orbitron',
        padding: '5px 11px',
        cursor: 'pointer',

        borderTop: `2px solid ${GREEN}`,
        borderBottom: `2px solid ${RED}`,

      },
    }
  };
  const hdrLogo = create(aa, as);
  render(logoDiv, 'inside', hdrLogo);
}


function Nav(hdr) {
 const nav_a = {
    type: 'div',
    className: 'nav',
  };
  const nav_s ={
    resp:{
      small:{
        display: 'none',
        flexDirection: 'column',
        backgroundColor: '#222',
        width: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        paddingTop: '50px',

      },
      medium:{
        display: 'flex',
        gap: '22px',
      },
      large:{
        display: 'flex',
        gap: '20px',
      },
    },
  };

  const nav = create(nav_a, nav_s);
   const navInside = `
  <ul>
    <li><a class=links href="#about">About</a></li>
    <li><a class=links href="#portfolio">Portfolio</a></li>
    <li><a class=links href="#services">Services</a></li>
    <li><a class=links href="#contact">Contact</a></li>
  </ul>
  `;

  render(hdr, 'inside', nav);
  nav.innerHTML = navInside;


  
}


import { onlyjs, create, render, resetStyles, select, clear, style, setStyle} from "./../onlyjs/minifiedOnly.js";

export function header() {
  const hdr_a = {
    type: 'div',
    className: 'header',
  };
  const hdr_s ={
    display: 'flex',
    jsutifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#222',
    color: '#fff',
  };

  const hdr = create(hdr_a, hdr_s);
  render(this, 'inside', hdr);


  const logoDiv = ``;
  hdr.innerHTML = logoDiv;

  const aa= {
    type: 'a',
    text: 'i24k3',
    className: 'logo_A',
  };
  const as = {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff',
    fontFamily: 'orbitron',
  };
  const hdrLogo = create(aa, as);
  render(hdr, 'inside', hdrLogo);

  //Nav();
}

function Nav() {
  const nav_a = {
    type: 'div',
    className: 'nav',
  };
  const nav_s ={};
  const nav = create(nav_a, nav_s);

  const navInside = `
  <ul>
    <li><a class=links href="#about">About</a></li>
    <li><a class=links href="#portfolio">Portfolio</a></li>
    <li><a class=links href="#services">Services</a></li>
    <li><a class=links href="#contact">Contact</a></li>
  </ul>
  `;

  const hdr = select('.header');
  render(hdr, 'inside', nav);
  nav.innerHTML = navInside;

  style('ul', {
    display: 'flex',
    listStyleType: 'none',
  });
  style('li',{
    marginLeft: '20px',
  });
  style('.links',{
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    transition: 'color 0.3s',
  });
  
}

function title(params) {
  
}

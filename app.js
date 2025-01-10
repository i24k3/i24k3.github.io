
import { onlyjs } from "./onlyjs/only.js";
import { create } from "./onlyjs/create.js";
import { render } from "./onlyjs/render.js";
import { select } from "./onlyjs/select.js";
import { resetStyles } from "./onlyjs/resetStyles.js";

onlyjs(main);
function main() {
  resetStyles();
  h1();
  matrixBg();
 }

function h1() {
  const header_att= {
    type: 'h1',
  };

  const header_style ={
    textAlign: 'center',
    border: '1px solid black',
    padding: '11px 0px',
  };

  const header = create(header_att, header_style);
  const h2 = create(h2_attr);
  render(this, 'inside', header);
}


function matrixBg() {
  const canvas_attr = {
    type: 'canvas',
    id: 'canvas__matrix',
  };
  const canvas = create(canvas_attr);

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = '0123456789ABCDEF';
  const fontSize = 16;
  const columns = canvas.width/fontSize;
  const drops = Array(Math.floor(columns)).fill(1);


  function draw() {
    ctx.fillStyle = 'rgba(30,30,46,0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#61afef';
    ctx.font = `${fontsize}px monospace`;

    drops.foreach((x, y))=> {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fontText(text, x*fontSize, y*fontSize);


      if (y*fontSize > canvas.height && Math.random() > 0.975) {
        drops[x] = 0;
      }
      drops[x]++;
    });
  }
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  render(this, 'inside', canvas);

}

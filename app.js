
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
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    // Draw background with semi-transparent color
    ctx.fillStyle = 'rgba(30,30,46,0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text style
    ctx.fillStyle = '#61afef';
    ctx.font = `${fontSize}px monospace`;

    // Loop over drops array
    drops.forEach((y, x) => {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, x * fontSize, y * fontSize);

      // Reset drop if it reaches the bottom of the screen
      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[x] = 0;
      }
      drops[x]++;
    });
  }

  // Resize canvas when window size changes
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Assuming render is a function that properly appends the canvas to the DOM
  render('inside', canvas); // Remove `this` unless it's required for some reason
  setInterval(draw, 33); // Start the animation
}

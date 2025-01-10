
import { onlyjs } from "./onlyjs/only.js";
import { create } from "./onlyjs/create.js";
import { render } from "./onlyjs/render.js";
import { select } from "./onlyjs/select.js";
import { resetStyles } from "./onlyjs/resetStyles.js";

onlyjs(main);
function main() {
  resetStyles();
  matrixBg();
  h1();
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
  render(this, 'inside', header);
}

function matrixBg() {
    const container = select('document');
    const canvas = create({ type: "canvas" });
    render(container, "inside", canvas);

    const ctx = canvas.getContext("2d");

    // Resize canvas to fit the container
    const resizeCanvas = () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    };
    resizeCanvas();

    // Matrix effect settings
    const fontSize = 14;
    const characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
    const charArray = characters.split("");
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    // Function to draw the matrix effect
    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0"; // Green text
        ctx.font = ${fontSize}px monospace;

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset drop position if it goes out of view
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        requestAnimationFrame(drawMatrix);
    }

    drawMatrix();

    // Handle resizing with normal JS
    window.addEventListener("resize", () => {
        resizeCanvas();
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
    });
}

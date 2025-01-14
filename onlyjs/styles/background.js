import { create } from './../create.js';
import { render } from './../render.js';

class Background {
  static matrix(color = '#0F0') {
    // Check if the device is mobile using user agent and screen width
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;

    // Create canvas element
    const canvasAttrs = {
      type: 'canvas',
      id: 'matrixCanvas',
      className: 'background'
    };

    const canvasStyle = {
      position: isMobile ? 'absolute' : 'fixed',  // On mobile, use absolute positioning
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',  // Ensure it covers the full viewport
      zIndex: '-1', // Behind all other content
      pointerEvents: 'none'  // Prevent canvas from interfering with user interactions
    };

    const canvas = create(canvasAttrs, canvasStyle);
    render(document.body, 'inside', canvas);

    // Matrix effect settings
    const ctx = canvas.getContext('2d');
    let columns = Math.floor(window.innerWidth / 20); // 20px for each column
    let drops = new Array(columns).fill(0); // Initialize drops for each column

    // Function to handle the initial canvas size based on the body content
    function resizeCanvas() {
      const bodyHeight = document.body.scrollHeight; // Get the body content height

      // Set the canvas size to the body's scroll height and window width
      canvas.width = window.innerWidth;
      canvas.height = bodyHeight; // Set the height based on the body content

      // Recalculate the number of columns for the matrix effect
      columns = Math.floor(window.innerWidth / 20); // 20px for each column
      drops = new Array(columns).fill(0); // Re-initialize drops for each column
    }

    // Initial canvas size setup based on body content
    resizeCanvas();

    // Resize event handler to update canvas size when window is resized
    window.addEventListener('resize', () => {
      resizeCanvas();
    });

    // Matrix effect function
    function draw() {
      // Fade effect for the background to make it look more fluid
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color to green and font size
      ctx.fillStyle = color;
      ctx.font = '20px monospace';

      // Draw falling characters for each column
      for (let i = 0; i < drops.length; i++) {
        const char = String.fromCharCode(Math.random() * 128); // Random characters

        // Draw character at the current column and drop position
        ctx.fillText(char, i * 20, drops[i] * 20);

        // Reset drop position after reaching the bottom of the canvas
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Update the drop position
        drops[i]++;
      }

      // Continue the animation using requestAnimationFrame for smoother updates
      requestAnimationFrame(draw);
    }

    // Start the matrix animation
    requestAnimationFrame(draw);
  }

  static gradient(colors = ['#000', '#00f']) {
    // Create canvas element and set its style
    const canvasAttrs = {
      type: 'canvas',
      id: 'gradientCanvas',
      className: 'background'
    };

    const canvasStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1' // To place the canvas in the background
    };

    const canvas = create(canvasAttrs, canvasStyle);
    render(document.body, 'inside', canvas);

    // Get the context and set canvas size
    const ctx = canvas.getContext('2d');

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight; // Set to body's content height

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

    // Add color stops to the gradient
    const colorStops = 1 / (colors.length - 1);
    colors.forEach((color, index) => {
      gradient.addColorStop(colorStops * index, color);
    });

    // Fill the background with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

export { Background };









//--------------------------------------------------------------------------------------
/*
import { create } from './../create.js';
import { render } from './../render.js';

class Background {
  static matrix(color = '#0F0') {
    // Create canvas element
    const canvasAttrs = {
      type: 'canvas',
      id: 'matrixCanvas',
      className: 'background'
    };

    const canvasStyle = {
    position: 'fixed',  // Fixed positioning to stay in place when scrolling
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',  // Ensure it covers the full viewport
    zIndex: '-1', // Behind all other content
    pointerEvents: 'none'  // Prevent canvas from interfering with user interactions
    };

    const canvas = create(canvasAttrs, canvasStyle);
    render(document.body, 'inside', canvas);

    // Matrix effect settings
    const ctx = canvas.getContext('2d');
    let columns = 0;
    let drops = [];

    // Function to update canvas size
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recalculate number of columns for the matrix effect
      columns = Math.floor(canvas.width / 20); // 20px for each column
      drops = new Array(columns).fill(0); // Initialize drops for each column
    }

    // Initial canvas size setup
    resizeCanvas();

    // Event listener for window resize
    window.addEventListener('resize', resizeCanvas);

    // Matrix effect function
    function draw() {
      // Fade effect for the background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color to green and font size
      ctx.fillStyle = color;
      ctx.font = '20px monospace';

      // Draw falling characters for each column
      for (let i = 0; i < drops.length; i++) {
        const char = String.fromCharCode(Math.random() * 128); // Random characters

        // Draw character at the current column and drop position
        ctx.fillText(char, i * 20, drops[i] * 20);

        // Reset drop position after reaching the bottom of the canvas
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Update the drop position
        drops[i]++;
      }
    }

    // Set the draw interval to animate the matrix effect
    setInterval(draw, 33);
  }

static gradient(colors = ['#000', '#00f']) {
  // Create canvas element and set its style
  const canvasAttrs = {
    type: 'canvas',
    id: 'gradientCanvas',
    className: 'background'
  };

  const canvasStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1' // To place the canvas in the background
  };

  const canvas = create(canvasAttrs, canvasStyle);
  render(document.body, 'inside', canvas);

  // Get the context and set canvas size
  const ctx = canvas.getContext('2d');

  // Function to update canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Initial canvas size setup
  resizeCanvas();

  // Event listener for window resize
  window.addEventListener('resize', resizeCanvas);

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

  // Add color stops to the gradient
  const colorStops = 1 / (colors.length - 1);
  colors.forEach((color, index) => {
    gradient.addColorStop(colorStops * index, color);
  });

  // Fill the background with the gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

}

export { Background };


*/


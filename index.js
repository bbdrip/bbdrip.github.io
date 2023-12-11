document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("matrixRainCanvas");
    const context = canvas.getContext("2d");

    // Set canvas dimensions to match the viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set font properties
    const fontSize = 16;
    context.font = `${fontSize}px monospace`;

    // Columns of characters
    const columns = Math.floor(canvas.width / fontSize);

    // Array to store the characters
    const characters = Array(columns).fill("A");

    function draw() {
      // Set background with low opacity to create the fading effect
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color
      context.fillStyle = "#0F0"; // Matrix green color

      // Loop through each column
      characters.forEach((char, i) => {
        // Randomly change characters
        if (Math.random() > 0.95) {
          characters[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }

        // Draw the character
        context.fillText(char, i * fontSize, fontSize * charIndex[i]);

        // Move the character down the screen
        charIndex[i] = (charIndex[i] + 1) % columns;
      });

      // Use requestAnimationFrame for smooth animation
      requestAnimationFrame(draw);
    }

    // Initialize character positions
    const charIndex = Array(columns).fill(0);

    // Start the animation
    draw();
  });
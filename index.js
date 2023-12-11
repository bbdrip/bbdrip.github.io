document.addEventListener("DOMContentLoaded", function () {
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');
let opacity = 0.05;

      function draw() {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Set the global alpha (opacity)
        context.globalAlpha = opacity;

        // Draw the image onto the canvas
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Reset the global alpha
        context.globalAlpha = 1;

        // Update opacity for the next frame
        opacity += 0.001;

        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(draw);
      }

      // Start the animation after the image is loaded
      img.onload = function () {
        draw();
      };
    });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Image element
const img = new Image();
img.src = "/images/triptych.jpeg";

const love = 'LOVE';
const power = 'POWER';
const pain = 'PAIN';

const alphabet = love + power + pain;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#F5F5F5';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);
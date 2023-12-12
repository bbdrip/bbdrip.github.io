const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const love = 'LOVE';
const power = 'POWER';
const pain = 'PAIN';

const backgroundImage = new Image();
backgroundImage.src = 'images/triptych.jpg';


const alphabet = love + power + pain;

const fontSize = 16;
const columns = canvas.width/fontSize;

let charIndex = 0;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {  
  
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#ff0000';
	context.font = fontSize + 'px monospace';


	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(charIndex);
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        charIndex = (charIndex + 1) % alphabet.length;
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};
setInterval(draw, 60);
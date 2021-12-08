const BUTTON = document.querySelector('button');
// const disc = document.querySelector('disc');
const P1 = document.querySelector('#p1');

BUTTON.addEventListener('click', createDisc);
// disc.setAttribute('draggable', true);

function createDisc() {
	const disc = document.createElement('li');
	const COLOR1 = Math.floor(Math.random() * (255 - 25) + 25);
	const COLOR2 = Math.floor(Math.random() * (255 - 25) + 25);
	const COLOR3 = Math.floor(Math.random() * (255 - 25) + 25);
	disc.style.width = `${120}px`;
	disc.style.height = `${20}px`;
	disc.style.border = `${1}px, solid, rgb(${COLOR1},${COLOR2},${COLOR3})`;
	disc.style.backgroundColor = `rgb(${COLOR1},${COLOR2},${COLOR3})`;
	disc.style.borderRadius = `${5}px`;
	console.log(disc);
	// Can you make an OOP model out of these? maybe later...
	P1.append(disc);
}
//Search up MVC later on if you get stuck?

//Array for poles
//Objects

//TO DO's
//Find a way to decrement the variable i or width every time you make a new disc

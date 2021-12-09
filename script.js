const BUTTON = document.querySelector('button');
// const disc = document.querySelector('disc');
const P1 = document.querySelector('#p1');
const P2 = document.querySelector('#p2');
const P3 = document.querySelector('#p3');
const DISCS = document.querySelector('.discs');
const disc = document.getElementById('disc1');
const SELECT = document.querySelector(`#p1`);
const DISC_ARR = [[], [], []];
//empty 1st array empty 2nd array filled in proper order 3rd array
const WIN_CONDITION = [[], [], []];

//anon function here inside curly braces put function here
SELECT.addEventListener('click', selectDisc);
BUTTON.addEventListener('click', createDisc);
//add event listener to disc inside the create disc function
//right before you append it to wherever you are appending it to
P1.addEventListener('click', moveDisc);
P2.addEventListener('click', moveDisc);
P3.addEventListener('click', moveDisc);
window.addEventListener('load', (element) => {
	for (let i = 0; i < DISC_ARR.length; i++) {
		createDisc();
	}
});

// disc.setAttribute('draggable', true);

function createDisc() {
	const disc = document.createElement('li');
	const discNumber = DISC_ARR[0].length;
	const width = DISC_ARR[0].length * 20;
	disc.setAttribute('id', `disc${discNumber}`);
	const COLOR1 = Math.floor(Math.random() * (255 - 25) + 25);
	const COLOR2 = Math.floor(Math.random() * (255 - 25) + 25);
	const COLOR3 = Math.floor(Math.random() * (255 - 25) + 25);
	disc.style.width = `${150 - width}px`;
	disc.style.height = `${20}px`;
	disc.style.border = `${1}px, solid, rgb(${COLOR1},${COLOR2},${COLOR3})`;
	disc.style.backgroundColor = `rgb(${COLOR1},${COLOR2},${COLOR3})`;
	disc.style.borderRadius = `${5}px`;
	// Can you make an OOP model out of these? maybe later...
	DISC_ARR[0].push(disc);
	disc.addEventListener('click', moveDisc);
	P1.append(disc);
}

function selectDisc() {
	console.log("i work");
}

function moveDisc() {}

//Search up MVC later on if you get stuck?

// for (let i = 0; i < 3; i++) {
// 	createDisc();
// } //play and test with this and anon function

//***Maybe on load make function load 3 times?*** window.onload() etc

//Drag functionality
// function moveDisc(event) {
// 	disc.onmoused;
// }

//GRABBING ITEMS:
// const disc = document.querySelector(`.disc1`);

//Array for poles
//Objects

//TO DO's
//Find a way to decrement the variable i or width every time you make a new disc

//learn how drag and drop works
// maybe search how to place an object with drag to another list
//drag functionality

//Moving the discs!
// disc.addEventListener('click', moveDisc);

//Next Project use OOP, Data Structures, Sorting, Recursion!
//This project is DOM MANIPULATION, HTML*, CSS*, JS*


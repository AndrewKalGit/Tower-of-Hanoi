const BUTTON = document.querySelector('button');
// const disc = document.querySelector('disc');
const P1 = document.querySelector('#p1');
const P2 = document.querySelector('#p2');
const P3 = document.querySelector('#p3');
const Poles = document.querySelector('.poles');
// const selectPole = document.querySelector('ul');
// const SELECT = document.getElementById('selectDisc');
// const DISCS = document.querySelector('.discs');
// const SELECT = document.querySelector(`#p1`);
const DISC_ARR = [[], [], []];
//empty 1st array empty 2nd array filled in proper order 3rd array
const WIN_CONDITION = [[], [], [null, null, null]];
// const P_ANY = document.querySelector(`p${DISC_ARR[0].length}`);
// for (let i = 0; i < DISC_ARR[0].length; i++) {
// 	// const selectAll = document.querySelectorAll(`.discs${i}`);
// 	// console.log(selectAll);
// 	WIN_CONDITION[2].push(i);
// 	// console.log(selectAll);
// }
let selectDisc = null;
//give them a class
//document.queryselector all
//How would I make it increase the WIN_CONDITION ARRAY
//push discs into the last array win condition
//anon function here inside curly braces put function here
// SELECT.addEventListener('click', selectDisc);
BUTTON.addEventListener('click', createDisc);
Poles.addEventListener('click', function (event) {
	// console.log(event.target);
	let selectedPole;
	if (event.target.parentElement.classList.contains('pole')) {
		selectedPole = event.target.parentElement;
	} else {
		selectedPole = event.target;
	}
	// let topDisc = event.target.children[0];
	if (selectDisc !== null) {
		// console.log(selectedPole);
		moveDiscOrigin(selectedPole);
	} else {
		if (selectedPole.children.length > 0) {
			selectDisc = selectedPole.children[selectedPole.children.length - 1];
		}
	}
});
//add event listener to disc inside the create disc function
//right before you append it to wherever you are appending it to
// P1.addEventListener('click', moveDisc);
// P2.addEventListener('click', moveDisc);
// P3.addEventListener('click', moveDisc);
window.addEventListener('load', (element) => {
	for (let i = 0; i < DISC_ARR.length; i++) {
		createDisc();
	}
});
// disc.setAttribute('draggable', true);

let funcCounter = 0;
function createDisc() {
	if (funcCounter < 8) {
		const disc = document.createElement('li');
		const width = DISC_ARR[0].length * 20;
		// const discNumber = DISC_ARR[0].length;
		// disc.setAttribute('id', `disc${discNumber}`);
		disc.classList.add(`discs${funcCounter}`);
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
		// disc.addEventListener('click', moveDiscOrigin); //Later: Play with the scope and closure
		// SELECT.addEventListener('click', selectDisc);
		// disc.addEventListener('click', moveDiscP2);
		// disc.addEventListener('click', moveDiscP3);
		P1.append(disc);
		funcCounter++;
	}
}
// function selectDisc(event) {
// 	event.target(disc);
// 	console.log('HELLO');
// }
//event listenser should have logic that checks if the move is legal
//if the disc that is being moved has a width smaller than the pole that it is going to else can't go on.
function moveDiscOrigin(pole) {
	// if (DISC_ARR[0][0].style.width > DISC_ARR[0][1].style.width) {
	// const disc = P1.lastElementChild;
	// selectPole.onselect = disc;
	// console.log(selectPole);
	// const select = (event.target.innerHTML = `<li>${disc}</li>`);
	// console.log(select);
	DISC_ARR[pole.id[1] - 1].pop();
	DISC_ARR[pole.id[1] - 1].push(selectDisc); //<disc is hard coded want dynamic
	console.log(DISC_ARR);
	// const selectNumber = event.target.value;
	// } else {
	// 	return "You can't do this tho";
	// }

	pole.append(selectDisc);

	// checkWin();
	// P3.append(select);
	// console.log(event.target.value);
	selectDisc = null;
}
//Discarray pole .id line 100 - 101

// function selectDiscs(event) {}

//Select the disc KEEP REFERENCE... Select Disc = False
//Select Tower move disc to Tower
// if (selected) {
// 	event.target.innerHTML = `<li>${whatever the disc element is}</li>`
// }
function checkWin() {
	if (DISC_ARR[2].length === WIN_CONDITION[2].length && selected === false) {
		alert('Completed!'); // event.
	}
}

//Keep a disc counter
//Keep MVP

// function moveDiscP2() {
// 	const disc = P2.lastElementChild;
// 	P3.append(disc);
// }

// function moveDiscP3() {
// 	const disc = P3.lastElementChild;
// 	P3.append(disc);
// }

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

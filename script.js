//When it doubt log it out!
//Pseudo code and plan it out!
//Comment to keep track of your progress
//Git commit and push often when a goal reached!

const BUTTON = document.querySelector('button');
const P3 = document.querySelector('#p3');
const P2 = document.querySelector('#p2');
const P1 = document.querySelector('#p1');
const Poles = document.querySelector('.poles');
const RESET = document.querySelector('#reset');

const INITIAL_ARRAY = [];

const DISC_ARR = [[], [], []];

let selectDisc = null;
let selectedPole;
let js;

RESET.addEventListener('click', resetBoard);

BUTTON.addEventListener('click', createDisc);

//Game Logic
Poles.addEventListener('click', function (event) {
	if (event.target.parentElement.classList.contains('pole')) {
		selectedPole = event.target.parentElement;
	} else {
		selectedPole = event.target;
	}
	if (selectDisc === null) {
		js = DISC_ARR[selectedPole.id[1] - 1].pop();
	}
	if (selectDisc !== null) {
		moveDiscOrigin(selectedPole, js);
	} else {
		if (selectedPole.children.length > 0) {
			selectDisc = selectedPole.children[selectedPole.children.length - 1];
			selectDisc.style.border = '5px solid tomato';
		}
	}
});

window.addEventListener('load', (element) => {
	for (let i = 0; i < DISC_ARR.length; i++) {
		createDisc();
	}
});

window.onbeforeunload = function reset() {
	return '';
};

//Create discs
let funcCounter = 0;
let winCounter;
let mvpCounter = 3;
function createDisc() {
	if (funcCounter < 5) {
		const disc = document.createElement('li');
		const width = DISC_ARR[0].length * 30;
		disc.setAttribute('id', `d${mvpCounter}`);
		disc.classList.add(`discs${funcCounter}`);
		const COLOR1 = Math.floor(Math.random() * (255 - 25) + 25);
		const COLOR2 = Math.floor(Math.random() * (255 - 25) + 25);
		const COLOR3 = Math.floor(Math.random() * (255 - 25) + 25);
		disc.style.width = `${130 - width}px`;
		disc.style.height = `${20}px`;
		disc.style.border = `${1}px, solid, rgb(${COLOR1},${COLOR2},${COLOR3})`;
		disc.style.backgroundColor = `rgb(${COLOR1},${COLOR2},${COLOR3})`;
		disc.style.borderRadius = `${5}px`;
		DISC_ARR[0].push(disc);
		P1.append(disc);
		winCounter++;
		funcCounter++;
		mvpCounter--;
		INITIAL_ARRAY.push(funcCounter);
	}
	if (DISC_ARR[0].length < funcCounter) {
		resetBoard();
	}
}

//Moving Discs frmo their current position
function moveDiscOrigin(pole, js) {
	let jsARR = DISC_ARR[pole.id[1] - 1];
	if (jsARR.length > 0) {
		if (selectDisc.id[1] < jsARR[jsARR.length - 1].id[1]) {
			pole.append(selectDisc);
			selectDisc.style.border = 'none';
			selectDisc = null;
			DISC_ARR[selectedPole.id[1] - 1].push(js);
		}
	} else {
		pole.append(selectDisc);
		selectDisc.style.border = 'none';
		selectDisc = null;
		DISC_ARR[selectedPole.id[1] - 1].push(js);
	}
	console.log(DISC_ARR);
	setTimeout(checkWin, 100);
}

//Check for win condition
function checkWin() {
	if (DISC_ARR[2].length === INITIAL_ARRAY.length) {
		alert('Completed!');
		resetBoard();
	}
}

function resetBoard() {
	window.location = window.location;
}

function trackSteps() {}

function trackTime() {}

//Based off how many discs and how many steps and how much time
function points() {}

function solution() {}

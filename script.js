const BUTTON = document.querySelector('button');
const P3 = document.querySelector('#p3');
const P2 = document.querySelector('#p2');
const P1 = document.querySelector('#p1');
const Poles = document.querySelector('.poles');

const DISC_ARR = [[], [], []];

const WIN_CONDITION = [[], [], []];

const emptyArray = [];

let selectDisc = null;

BUTTON.addEventListener('click', createDisc);
Poles.addEventListener('click', function (event) {
	let selectedPole;
	if (event.target.parentElement.classList.contains('pole')) {
		selectedPole = event.target.parentElement;
	} else {
		selectedPole = event.target;
	}
	if (selectDisc !== null) {
		moveDiscOrigin(selectedPole);
	} else {
		if (selectedPole.children.length > 0) {
			selectDisc = selectedPole.children[selectedPole.children.length - 1];
		}
	}
});

window.addEventListener('load', (element) => {
	for (let i = 0; i < DISC_ARR.length; i++) {
		createDisc();
	}
});

let funcCounter = 0;
let winCounter;
let mvpCounter = 2;
function createDisc() {
	if (funcCounter < 8) {
		const disc = document.createElement('li');
		const width = DISC_ARR[0].length * 20;
		disc.setAttribute('id', `d${mvpCounter}`);
		disc.classList.add(`discs${funcCounter}`);
		const COLOR1 = Math.floor(Math.random() * (255 - 25) + 25);
		const COLOR2 = Math.floor(Math.random() * (255 - 25) + 25);
		const COLOR3 = Math.floor(Math.random() * (255 - 25) + 25);
		disc.style.width = `${150 - width}px`;
		disc.style.height = `${20}px`;
		disc.style.border = `${1}px, solid, rgb(${COLOR1},${COLOR2},${COLOR3})`;
		disc.style.backgroundColor = `rgb(${COLOR1},${COLOR2},${COLOR3})`;
		disc.style.borderRadius = `${5}px`;
		DISC_ARR[0].push(disc);
		WIN_CONDITION[0].push(disc);
		P1.append(disc);
		winCounter++;
		funcCounter++;
		mvpCounter--;
	}
}

let positionBefore = 0;
let positionAfter;
function moveDiscOrigin(pole) {
	let makeshiftIdentifierDiscs = parseInt(selectDisc.id[1]) + 1;
	let uniqueDiscus = parseInt(pole.id[1] - 1);

	if (makeshiftIdentifierDiscs === 1) {
		pole.append(selectDisc);
		selectDisc = null;
	}
	if (
		WIN_CONDITION[positionBefore].length >= WIN_CONDITION[uniqueDiscus].length
	) {
		WIN_CONDITION[uniqueDiscus].push(selectDisc);
		positionAfter = uniqueDiscus;
		if (positionBefore !== uniqueDiscus) {
			WIN_CONDITION[positionBefore].pop();
			positionBefore = uniqueDiscus;
		}
	}
	if (makeshiftIdentifierDiscs === 2) {
		positionAfter = uniqueDiscus;
		if (positionAfter === uniqueDiscus){
			WIN_CONDITION[uniqueDiscus].push(selectDisc);
		}	if (positionBefore > uniqueDiscus) {
			WIN_CONDITION[positionBefore].pop();
			positionBefore = uniqueDiscus;
		}
	}
	if (makeshiftIdentifierDiscs > WIN_CONDITION[positionBefore]) {
		pole.append(selectDisc);
	}
}

function checkWin() {
	if (DISC_ARR[0] === WIN_CONDITION[2]) {
		alert('Completed!');
	}
}

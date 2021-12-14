const BUTTON = document.querySelector('button');
const P3 = document.querySelector('#p3');
const P2 = document.querySelector('#p2');
const P1 = document.querySelector('#p1');
const Poles = document.querySelector('.poles');

const DISC_ARR = [[], [], []];

const WIN_CONDITION = [[], [], []];

const emptyArray = [];

let selectDisc = null;
let selectedPole;
let js;

BUTTON.addEventListener('click', createDisc);
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
	checkWin();

	// let makeshiftIdentifierDiscs = parseInt(selectDisc.id[1]) + 1;
	// let uniqueDiscus = parseInt(pole.id[1] - 1);

	// if (makeshiftIdentifierDiscs === 1) {
	// 	pole.append(selectDisc);
	// 	selectDisc = null;
	// }
	// if (
	// 	WIN_CONDITION[positionBefore].length >= WIN_CONDITION[uniqueDiscus].length
	// ) {
	// 	WIN_CONDITION[uniqueDiscus].push(selectDisc);
	// 	positionAfter = uniqueDiscus;
	// 	if (positionBefore !== uniqueDiscus) {
	// 		WIN_CONDITION[positionBefore].pop();
	// 		positionBefore = uniqueDiscus;
	// 	}
	// }
	// if (makeshiftIdentifierDiscs === 2) {
	// 	positionAfter = uniqueDiscus;
	// 	if (positionAfter === uniqueDiscus){
	// 		WIN_CONDITION[uniqueDiscus].push(selectDisc);
	// 	}	if (positionBefore > uniqueDiscus) {
	// 		WIN_CONDITION[positionBefore].pop();
	// 		positionBefore = uniqueDiscus;
	// 	}
	// }
	// if (makeshiftIdentifierDiscs > WIN_CONDITION[positionBefore] && selectDisc !== null) {
	// 	pole.append(selectDisc);
	// }
}

function checkWin() {
	if (DISC_ARR[2].length === 3) {
		alert('Completed!');
	}
}

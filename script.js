const button = document.querySelector('button');

button.addEventListener('click', createDisc);

function createDisc() {
	const p1 = document.querySelector('#p1');
	const disc = document.createElement('li');
	disc.innerText = 'o';
	p1.append(disc);
}

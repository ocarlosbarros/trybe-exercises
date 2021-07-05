const header = document.createElement('h1');
const divMain = document.createElement('div');
const divCenter = document.createElement('div');
const paragraph = document.createElement('p');

header.innerHTML = 'Exercício 5.2 - Javascript DOM';
divMain.className = 'main-content';
divCenter.className = 'center-content';
paragraph.innerHTML = 'Game Of Thrones';

const body = document.querySelector('body');

body.appendChild(header);
body.appendChild(divMain);
divMain.appendChild(divCenter);
divCenter.appendChild(paragraph);
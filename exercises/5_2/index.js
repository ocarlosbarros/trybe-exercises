const header = document.createElement('h1');
const body = document.querySelector('body');

const divMain = document.createElement('div');
const divCenter = document.createElement('div');
const paragraph = document.createElement('p');
const divLeftContent = document.createElement('div');
const divRightContent = document.createElement('div');
const image = document.createElement('img');
const unorderedList = document.createElement('ul');

header.innerHTML = 'Exercício 5.2 - Javascript DOM';
divMain.className = 'main-content';
divCenter.className = 'center-content';
paragraph.innerHTML = 'Game Of Thrones';
divLeftContent.className = 'left-content';
divRightContent.className = 'right-content';
image.setAttribute('src', 'https://picsum.photos/200');
image.className = 'small-image';

const listItems = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let index = 0; index < listItems.length; index += 1){
  
  let item = document.createElement('li');
  item.innerText = listItems[index];

  unorderedList.appendChild(item);
}

body.appendChild(header);
body.appendChild(divMain);
divMain.appendChild(divCenter);
divMain.appendChild(divLeftContent);
divLeftContent.appendChild(image);
divMain.appendChild(divRightContent);
divRightContent.appendChild(unorderedList);
divCenter.appendChild(paragraph);
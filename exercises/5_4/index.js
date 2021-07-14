window.onload = onloadPreferences;

const inputColor = document.getElementById('background-select');
inputColor.addEventListener('change', changeColor)
const colorText = document.getElementById('text-select');
colorText.addEventListener('change', changeColor)
const inputTextSize = document.getElementById('text-size');
inputTextSize.addEventListener('change', changeSizeText);


function onloadPreferences(){
  const backgroundColor = localStorage.getItem('background-color');
  const textColor = localStorage.getItem('text-color');
  const textSize = localStorage.getItem('text-size');
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;
  document.body.style.fontSize = `${textSize}px`;
}

function changeColor(event){
  //Pega o input e a cor selecionada
  const elementHTML = event.target;
  const color = elementHTML.value;

  if(elementHTML.id === 'background-select'){
    document.body.style.backgroundColor = color;
    localStorage.setItem('background-color', color);
  }else{
    document.body.style.color = color;
    localStorage.setItem('text-color', color);
  }
}

function changeSizeText(){
  const size = inputTextSize.value;
  document.body.style.fontSize = `${size}px`;
  localStorage.setItem('text-size', size);
}

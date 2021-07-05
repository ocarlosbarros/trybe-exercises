/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/28/2021
 */

//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(texto){
  let palavra = '';
  for(char = texto.length -1; char > -1; char -= 1){
    palavra += texto[char];
  }
  if(palavra !== texto){
    return false;
  }
  return true;
}

console.log(verificaPalindrome('kayak'));

const teste = [2, 3, 6, 7, 10, 1];

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function verificaIndiceMaiorValor(arrayValores){
  let maior = arrayValores[0];
  for (let index = 0; index < arrayValores.length; index += 1) {
    if(arrayValores[index] > maior){
      maior = arrayValores[index];
    }
  }
  return maior;
}

console.log(verificaIndiceMaiorValor(teste));
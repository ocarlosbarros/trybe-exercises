/**
 * Exercise 2
 * Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número
 * aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa
 * se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string
 * (Ex: "Tente novamente" ou "Parabéns você ganhou").
 */

const resultDraw = (betNumber, checkDraw) => {
  checkDraw(betNumber);
};

const checkDraw = (number) => {
  const randomNumber = Math.ceil(Math.random() * 5);
  return number === randomNumber ? "Parabéns você ganhou" : "Tente novamente";
};

console.log(checkDraw(1));

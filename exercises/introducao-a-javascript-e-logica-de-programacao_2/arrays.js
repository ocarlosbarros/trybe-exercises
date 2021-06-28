/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/24/2021
 */

let numbers = [5, 9, 3, 9, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let number of numbers){
  console.log(number);
}
console.log('-----------------------')

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let number of numbers){
  sum += number;
}
console.log(sum);

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let sum_2 = 0;
let arithmetic = 0;

for (let number of numbers){
  sum_2 += number;
  arithmetic = sum_2 / numbers.length;
}
console.log(arithmetic);

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let sum_3 = 0;
let arithmetic_2 = 0;

for (let number of numbers){
  sum_3 += number;
  arithmetic_2 = sum_3 / numbers.length;
}

if  (arithmetic > 20){
  console.log('valor maior que 20');
}else{
  console.log('valor menor ou igual a 20');
}

//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let bigger = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if( numbers[index] > bigger){
    bigger = numbers[index];
  }
}
console.log(bigger);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let even = 0;
for (let index = 0; index < numbers.length; index += 1){
  if( numbers[index] % 2 === 1){
    even += 1;
  }
}
console.log(even);

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let smaller = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if( numbers[index] < smaller){
    smaller = numbers[index];
  }
}
console.log(smaller);

//8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbersFor = [];
for (let index = 1; index <= 25; index += 1 ){
  numbersFor.push(index);
}
console.log(numbersFor);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

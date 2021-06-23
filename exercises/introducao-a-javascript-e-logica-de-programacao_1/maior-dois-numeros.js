/***
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/23/2021
 */

//Maior de dois números
let numero_1 = 5;
let numero_2 = 1;
let maior;

if  (numero_1 > numero_2) {
  maior = numero_1;
}else if (numero_2 > numero_1){
  maior = numero_2;
}else{
  maior = "Os números são iguais";
}

console.log(maior);
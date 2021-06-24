/***
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/23/2021
 */

//Maior de três números
let numero_1 = 1;
let numero_2 = 7;
let numero_3 = 10;
let maior;

if  (numero_1 > numero_2 && numero_1 > numero_3) {
  maior = numero_1;
}else if (numero_2 > numero_1 && numero_2 > numero_3){
  maior = numero_2;
}else{
  maior = numero_3
}

console.log(maior);
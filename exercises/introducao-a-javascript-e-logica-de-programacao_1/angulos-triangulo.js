/***
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/23/2021
 */

//Ângulos de um triângulo

let angle_a = 200;
let angle_b = -89;
let angle_c = 69;
let sum;
let isValid = false;


sum = angle_a + angle_b + angle_c;
if (angle_a > 0 && angle_b > 0 && angle_c > 0 && sum === 180){
  isValid = true;  
  console.log(isValid);
} else  {
  console.log(isValid);
}


/**
 * Exercise 3
 * Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas
 * (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa
 * estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a
 * contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o
 * total da contagem de respostas certas.

 */

const { totalmem } = require("os");

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const answers = (rightAnswers, studentAnswers, checkAnswers) =>
  checkAnswers(rightAnswers, studentAnswers);

const checkAnswers = (rightAnswers, studentsAnswers) => {
  let right = 0;
  let wrong = 0;
  for (let index = 0; index < studentsAnswers.length; index += 1) {
    if (studentsAnswers[index] === rightAnswers[index]) {
      right += 1;
    } else if (
      studentsAnswers[index] !== rightAnswers[index] &&
      studentsAnswers[index] !== "N.A"
    ) {
      wrong += 0.5;
    }
  }
  const total = right - wrong;
  return total;
};

console.log(answers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));

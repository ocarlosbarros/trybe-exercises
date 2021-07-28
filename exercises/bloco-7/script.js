const assert = require('assert');

const sum = (num1, num2) => num1 + num2;

const expected = sum(5,'4');

assert.nostrictEqual(expected, 9, 'Não pode ser igual a nove!');
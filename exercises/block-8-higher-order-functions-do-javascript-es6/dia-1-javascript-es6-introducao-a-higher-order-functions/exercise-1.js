/**
 * Exercise 1 Trybe
 * Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa *contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu *respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele *gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
 */

const assert = require("assert");

const newEmployees = (callback) => {
  const employees = {
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id1: callback("Pedro Guerra"),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id2: callback("Luiz Drumond"),
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    id3: callback("Carla Paiva"),
  };
  return employees;
};

const createEmployee = (name) => {
  return {
    name,
    email: `${name}@trybe.com`,
  };
};

const myCompanyStaff = newEmployees(createEmployee);

assert.strictEqual(typeof myCompanyStaff.id1, "object");
assert.strictEqual(typeof newEmployees, "function");
assert.strictEqual(typeof newEmployees(), "function");
assert.strictEqual(typeof createEmployee, "function");
assert.strictEqual(typeof createEmployee("Gustavo Dias"), "object");

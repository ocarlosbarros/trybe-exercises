const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addMorningShift(Obj, key, value){
  Obj[key] = value;
  return console.log(Obj);
}

addMorningShift(lesson2, 'turno', 'manhã')

function listKeysInObject(Obj){
  return console.log(Object.keys(Obj));
}
listKeysInObject(lesson2);

function showObjectLength(Obj){
  const count = Object.keys(Obj).length;
  return console.log(count);
}

showObjectLength(lesson3);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

function countNumberStudent(Obj){
  let count = 0;
  console.log(Object.keys(Obj));
}
countNumberStudent(allLessons);
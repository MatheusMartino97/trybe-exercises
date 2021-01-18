// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

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

const allLessons = {};

allLessons['lesson1'] = {};
allLessons['lesson2'] = {};
allLessons['lesson3'] = {};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

const createReport = (object, teacher) => {
  let students = 0;
  let aulas = []

  for (let lesson in object) {
    for (let atribute in object[lesson]) {
      if (object[lesson][atribute] === teacher) {
        students += object[lesson]['numeroEstudantes'];
        aulas.push(object[lesson]['materia'])
      }
    }
  }

  return {
      professor: teacher,
      aulas: aulas,
      estudantes: students  
  };
};

console.log(createReport(allLessons, 'Maria Clara'));
console.log(createReport(allLessons, 'Carlos'));
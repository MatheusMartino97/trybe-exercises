// // Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// // Crie uma função para mostrar o tamanho de um objeto.
// // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// // Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

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

const allLessons = {}

const modifyLesson = (object, key, value) => {
    object[key] = value;
};
modifyLesson(lesson2, 'turno', 'manhã')

const listKeys = object => Object.keys(object)
const objectLength = object => Object.keys(object).length
const listValues = object => Object.values(object)

allLessons['lesson1'] = {}
allLessons['lesson2'] = {}
allLessons['lesson3'] = {}

Object.assign(allLessons.lesson1, lesson1)
Object.assign(allLessons.lesson2, lesson2)
Object.assign(allLessons.lesson3, lesson3)

const numberOfStudents = object => {
    let students = 0

    for (let lesson in object) {
        for (let atribute in object[lesson]) {
            if (atribute === 'numeroEstudantes') {
                students += object[lesson][atribute]
            }
        }
    }

    return students
}

const getValueByPosition = (object, position) => {
    const values = Object.values(object)

    return values[position]
}

const verifyPair = (object, key, value) => {
    const isThereThisKey = Object.keys(object).find(element => element === key)
    const isThereThisValue = Object.values(object).find(element => element === value)

    let isTrue = true

    if (!isThereThisKey || !isThereThisValue) {
        isTrue = false
    }

    return isTrue
}

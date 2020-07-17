/*
  01
  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

// function getTwoNumbers(num1 = 1, num2 = 5) {
//   return num1 * num2
// }
// const result = getTwoNumbers(10, 6)
// console.log(result)

/*
  02
  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
// const getDivisionNumbers = function (num1 = 1, num2 = 0) {
//   return num1 / num2
// }
// const newResult = getDivisionNumbers(25, 5)
// console.log(newResult)

/*
  03
  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().
  "Esta é a Xª vez que essa string é exibida."
*/

// const repeatText = function (x = 'voce deve passar um argumento') {
//   for(let i = 0; i <= x; i++) {
//     // console.log(`Esta é a ${i} vez que essa string é exibida.`)
//   }
// }
// repeatText(7)

/*
  04
  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

// const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

// const newArrayWord = []
// const getWord = function(){
//   for(let i =0;i < millennialWords.length;i++){
//     const wordInUpperCase = millennialWords[i].toUpperCase()
//      newArrayWord.push(wordInUpperCase)
//   }
//   return newArrayWord
// }
// console.log(getWord().join(', '))

/*
  05
  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.
  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

// const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
// const isPositive = []
// const isNegativeNumber = []

// const isPositiveNumber = function() {
//   for(let i=0;i < randomNumbers.length;i++) {
//     const item = randomNumbers[i]
//     if(randomNumbers[i] >= 1){
//       isPositive.push(item)
//     }else{
//       isNegativeNumber.push(item)
//     }
//   }
//   return randomNumbers
// }
// isPositiveNumber()
// const teste = isPositive
// const negative = isNegativeNumber
// console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${teste.length} positivos e ${isNegativeNumber.length} negativos.`)


/*
  06
  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const getOddNumbers = ([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
const arrayImpares = []

const getImpares = function() {
  for(let i=0;i < getOddNumbers.length;i++){
    let numberImpar = getOddNumbers[i] % 2 === 1
    if(numberImpar){
      arrayImpares.push(getOddNumbers[i])
      // console.log(arrayImpares)
    }
  }
  return arrayImpares
}
const teste2 = getImpares()
console.log(teste2)


/*
  07
  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

// function phrases(){
//   for(let i=0; i < functions.length; i++){
//     console.log(functions[i])
//   }
// }

// phrases(0)
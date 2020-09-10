/*
  01
  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

// const getEndPoint = url => new Promise((res, req) => {
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', () => {
//         const isResquestOk = request.readyState === 4 && request.status === 200
//         const isResquestNotOk = request.readyState === 4

//         if(isResquestOk){
//             const data = JSON.parse(request.responseText)
//             res(data)
//             console.log(data)
//         }
//         if(isResquestNotOk){
//             req('Não foi possível obter os dados dos usuários.')
//         }
//     })
//     request.open('GET', url)
//     request.send()
// })

// getEndPoint('https://jsonplaceholder.typicode.com/users')
// .then(user => console.log(user))


/*
  02
  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const getOperationMessage = (num1, operator, num2, operation) =>
`Resultado da operação: ${num1} ${operator} ${num2} = ${operation}`

const calculator = operator => (num1, num2) => {
    const operations = {
        '+':getOperationMessage(num1, operator, num2, num1 + num2),
        '-':getOperationMessage(num1, operator, num2, num1 - num2),
        '*':getOperationMessage(num1, operator, num2, num1 * num2),
        '/':getOperationMessage(num1, operator, num2, num1 / num2)
    }
    return operations[operator] || 'operação invalida'
}
const sum = calculator('+')
const subtraction = calculator('-')
const mutiplication = calculator('*')
const division = calculator('/')
console.log(sum(1, 1))
console.log(subtraction(5, 4))
console.log(mutiplication(2, 2))
console.log(division(10, 2))




/*
  03
  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

const sul = ['Rio Grande do sul', 'Parana', 'Porto Alegre']
const sudeste = ['São Paulo', 'Rio de Janiero', 'Espirito Santo']

let brasil = sul.concat(sudeste)
brasil.unshift('Amapa','Fortaleza', 'Tocantins')
brasil.shift()

console.log(brasil)

const newSul = brasil.slice(2, 3)
console.log(newSul)




/*
  04
  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/

const nordeste = ['Maranhão', 'Bahia', 'Aracaju', 'Ceará', 'Sergipe', 'Fortaleza', 'Alagoas']
const newSudeste = brasil.splice(2, 5)
brasil = brasil.concat(nordeste)
console.log(brasil)

const newBrasil = brasil.map((item, index) => ({id : index, estado : item}))

const hasMoreThan7Letters = brasil.every(item => item.length > 7)
 const message = hasMoreThan7Letters
 ? 'Sim, todos os estados tem mais de 7 letras.'
 : 'Nem todos os estados tem mais de 7 letras.'
 console.log(message)
 

/*
  05
  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/

const containsCeara = brasil.includes('Ceará')

const cearaMessage = containsCeara
? 'Ceará está incluído.'
: 'Ceará não foi incluído =/'

console.log(cearaMessage)

const newBrasilArray = newBrasil.map(({ id, estado }) => ({id : id + 1, estado: `${estado} pertence ao Brasil.`}))

const estadosPar = newBrasilArray.filter(({ id }) => id % 2 === 0 )

console.log(estadosPar)


// let arr = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
    let total = 0;
   for(let i=0; i < ar.length;i++){
       total += ar[i]
   }
   return total
}
simpleArraySum([1, 2, 3, 4, 10, 11])

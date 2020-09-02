/*
  01
  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/

// const url = 'https://pokeapi.co/'

// const getResquest = (url, callback) => {
//     const resquest = new XMLHttpRequest()

//     resquest.addEventListener('click', event => {
//         const isResquestOk = request.readyState === 4 && request.status === 200
//         const isResquestNotOk = request.readyState === 4

//         if(isResquestOk){
//             callback()
//             return
//         }

//         if(isResquestNotOk){
//             callback('Não possivel fazer a requisição')
//         }
        
//     })
// }

// getResquest()
// request.open('GET', url)
// request.send()




/*
  02
  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método  
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 
        08;
    2) Pesquisar no MDN.
  
  Reforço: este tipo de exercício será frequente em etapas mais avançadas do 
  curso, onde falaremos sobre TDD. Vá se aquecendo =)
*/

/*
  03
  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/

const person = {
    name: 'Roger',
    getName: () => this.name
  }
  
  console.log(person.getName())
  
  /*
    04
    - Descomente a 2ª const abaixo e salve este arquivo;
    - Um erro será exibido no console;
    - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
      delas.
  */
  
  const x = 'x'
  const { y } = x
  
  /*
    05
    - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
      conseguir.
  */
  
  const getFullName = ({firstName, lastName}) => {
    firstName, 
    lastName

    return `${firstName} ${lastName}`
  }
  
  console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))
  
  /*
    06
    - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
      parâmetro. Exemplo: 'red';
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
      equivalente hexadecimal (pode ser qualquer tom);
    - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
      retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
      a mensagem 'Não temos o equivalente hexadecimal para COR';
    - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
  */

  const colors = [
      {
        cor : 'branco',
        hexa: '#FFFFFF'
      },
      {
        cor : 'preto',
        hexa: '#000000'
      },
      {
        cor : 'cinza',
        hexa: '#cccccc'
      }
    ]
    
  const convertToHex = color => {
    colors.forEach(item => {
        if(item.cor === color || item.hexa === color){
            console.log(`O hexadecimal para a cor ${item.cor} é ${item.hexa}`)
        }else{
            console.log(`Não temos o equivalente hexadecimal para ${color}`)
        }
    })
  }

  convertToHex('amarelo')
  
  /*
    07
    - Através do array abaixo, gere um objeto com a frequência de idades das 
      pessoas;
    - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
      uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
      o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
      diante.
    
    Resultado desejado: { 18: 3, 19: 2, 20: 1 }
    Dica: pesquise por Computed Property Names.
  */
  
  const people = [
    { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
    { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
  ]
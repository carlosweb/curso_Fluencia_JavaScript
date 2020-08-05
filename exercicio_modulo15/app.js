/*
  01
  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('.videos')

Array.from(ul.children).forEach(element => {
    element.classList.add('video')
})


/*
  02
  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const title = document.querySelector('h2')
console.log(title.parentElement)

/*
  03
  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const title2 = document.querySelector('h1')
console.log(title2.nextElementSibling)

/*
  04
  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log(ul.previousElementSibling)

/*
  05
  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/



const lis = document.querySelectorAll('li')

const showLis =  event => {
    console.log(event.target)
}

const addClickEvent = item => {
    item.addEventListener('click', showLis)
}

lis.forEach(addClickEvent)


/*
  06
  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
    name: 'Como o promise all funciona | JavaScript',
    length: '00:01:52'
  }, {
    name: 'Como refatorar um for loop | JavaScript',
    length: '00:04:18'
  }, {
    name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
    length: '00:02:55'
  }]

  const { } = {id: 1}

  const bt = document.querySelector('button')

  const insertLi = ({ name, length }) => {
    ul.innerHTML += `<li>${name} | ${length}</li>`
}

  const handleClickButton =()=>{
    videos.forEach(insertLi)
}

bt.addEventListener('click', handleClickButton)

 
//   videos.forEach(video => {
//       const list = document.createElement('li')
//       const bt = document.querySelector('button')
//       list.textContent = video.name
//       bt.addEventListener('click', ()=> {
//         ul.appendChild(list)
//       })
//   })
  
  /*
    07
    - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
      sejam removidos.
  */
 title2.addEventListener('click', ()=> {
    title2.parentElement.remove()
 })


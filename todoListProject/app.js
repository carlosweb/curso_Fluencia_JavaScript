const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

// add todos
const addTodoList = event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()
    if (inputValue.length) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `
        event.target.reset()
    }
}

// search todos
const searchTodoList = event => {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })
    Array.from(todosContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
}

// delete todos
const deleteTodosList = event => {
    const clickedElement = event.target
    const li = document.querySelector('.list-group-item')
    if (clickedElement.classList.contains('delete')) {
        li.remove()
    }
}

todosContainer.addEventListener('click', deleteTodosList)
formAddTodo.addEventListener('submit', addTodoList)
inputSearchTodo.addEventListener('input', searchTodoList)
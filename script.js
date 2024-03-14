/* ! CRIANDO ELEMENTOS DO DOM */

const form = document.querySelector('form');
const input = document.getElementById('todo');
const todoList = document.getElementById('todos');
const deleteB = document.getElementById('apagar');


// ? Criando elementos LocalStorage
const TodosExistente = JSON.parse(localStorage.getItem('todos')) || [];
const todoData= [];

// ? Adicionando os Todo's 
function addTodo(textTodo) {
    todoData.push(textTodo)
    const li = document.createElement('li');
    li.innerHTML = textTodo;
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
    input.value = '';
}

TodosExistente.forEach(todo =>{
    addTodo(todo)
});

form.onsubmit = (e)=>{
    e.preventDefault();
    addTodo(input.value)
};;

// ! Função para apagar os Todos

const apagarTodos = ()=>{
    localStorage.clear();
    location.reload();
}

deleteB.addEventListener('click', apagarTodos);

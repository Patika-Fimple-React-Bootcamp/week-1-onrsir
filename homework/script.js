document.addEventListener('DOMContentLoaded', function() {
    fetchTodos();

    const form = document.getElementById('todoForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo();
    });
});

function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById('todoList');
            todoList.innerHTML = '';
            todos.forEach(todo => {
                const todoItem = document.createElement('li');
                todoItem.textContent = `${todo.title} - ${todo.completed ? 'Tamamlandı' : 'Tamamlanmadı'}`;
                todoList.appendChild(todoItem);
            });
        });
}

function addTodo() {
    const titleInput = document.getElementById('title');
    const completedInput = document.getElementById('completed');
    const todoList = document.getElementById('todoList');

    const todoItem = document.createElement('li');
    todoItem.textContent = `${titleInput.value} - ${completedInput.checked ? 'Tamamlandı' : 'Tamamlanmadı'}`;
    todoList.appendChild(todoItem);

    titleInput.value = '';
    completedInput.checked = false;
}

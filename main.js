let todosHeadline = [];
let todosText = [];

function showAddTodoPopup() {
    document.getElementById('popupContainer').classList.remove('dp-none');
}

function closeAddTodoPopup() {
    document.getElementById('popupContainer').classList.add('dp-none');
}

function init() {
    loadTodos();
    renderTodo();
}

function renderTodo() {
    let todoContainer = document.getElementById('todos');
    todoContainer.innerHTML = '';

    for(let i = 0; i < todosHeadline.length; i++){
        const todoHeadline = todosHeadline[i]
        const todoText = todosText[i]

        todoContainer.innerHTML += `
            <div class="todo-card">
                <h2>${todoHeadline}</h2>
                <p>${todoText}</p>
                <div class="todo-card-img">
                    <img src="img/Yellow-Edit.png" alt="" onclick="()">
                    <img src="img/Red-Minus.png" alt="" onclick="removeTodoFromTodos(${i})">
                </div>
            </div>
        `
    }
    saveTodos();
}

function addTodoToTodos() {
    let addHeadline = document.getElementById('addHeadline');
    let addText = document.getElementById('addText');

    todosHeadline.push(addHeadline.value);
    todosText.push(addText.value);
    renderTodo();
    closeAddTodoPopup();
}

function removeTodoFromTodos(i) {
    todosHeadline.splice(i,1);
    todosText.splice(i,1);
    renderTodo();
}

function saveTodos() {
    let todoHeadlineAsText = JSON.stringify(todosHeadline);
    let todoTextAsText = JSON.stringify(todosText);

    localStorage.setItem('todoHeadline', todoHeadlineAsText);
    localStorage.setItem('todoText', todoTextAsText);
}

function loadTodos() {
    let todoHeadlineAsText = localStorage.getItem('todoHeadline');
    let todoTextAsText = localStorage.getItem('todoText');

    if (todoHeadlineAsText && todoTextAsText) {
        todosHeadline = JSON.parse(todoHeadlineAsText);
        todosText = JSON.parse(todoTextAsText);
    }
}
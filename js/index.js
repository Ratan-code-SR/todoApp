// select html element 
const selectedByQuerySelector = (elementID) => {
    const element = document.querySelector(elementID);
    return element;
}

// finding html element by id and class name 
const container = selectedByQuerySelector(".container");
const card = selectedByQuerySelector("#card");
const inputTodo = selectedByQuerySelector("#inputTodo");
const addTodoButton = selectedByQuerySelector("#addTodoButton");
const message = selectedByQuerySelector("#message");
const todoLists = selectedByQuerySelector("#lists");
const todoForm = selectedByQuerySelector(".todo-form");

// create todo function
const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.innerHTML = `<span>${todoValue}</span>
    <span><button class="btn" id="delete"><i class="fa fa-trash"></i></button></span>`;

    todoLists.appendChild(todoElement);

}
//create  showMassage function
const showMassage = () => {

}

// add todo 
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = inputTodo.value;



    // generate uniq id 
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);
    showMassage();
}

// adding add event listener 
todoForm.addEventListener("submit", addTodo);






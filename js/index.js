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
const messageElement = selectedByQuerySelector("#message");
const todoLists = selectedByQuerySelector("#lists");
const todoForm = selectedByQuerySelector(".todo-form");

// create todo function
const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.innerHTML = `<span>${todoValue}</span>
    <span><button class="btn" id="delete"><i class="fa fa-trash"></i></button></span>`;
    todoElement.classList.add("li-style");

    todoLists.appendChild(todoElement);

}
//create  showMassage function
const showMassage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    }, 1000);
}

// get toDos from local storage
const getToDosFromLocalStorage = () => {
    return localStorage.getItem("myToDos")?
        JSON.parse(localStorage.getItem("myToDos"))
        : [];
}

// add todo 
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = inputTodo.value;



    // generate uniq id 
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);
    showMassage('Todo is created', "success");


    // add todo localStorage
    const toDos = getToDosFromLocalStorage();
    toDos.push({ todoId, todoValue });
    localStorage.setItem("myToDos", JSON.stringify(toDos));
    inputTodo.value = "";
}

// adding add event listener 
todoForm.addEventListener("submit", addTodo);






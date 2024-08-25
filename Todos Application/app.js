let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        num: 1
    },
    {
        text: "Learn CSS",
        num: 2
    },
    {
        text: "Learn JavaScript",
        num: 3
    }
];
let count = todoList.length;

let inputText = document.getElementById('todoUserInput');
let addTodoButton = document.getElementById("addTodoButton");

function deleteitem(item) {
    let el = document.getElementById(item.getAttribute('id'));
    todoItemsContainer.removeChild(el);
}

function statuschange(id2) {
    let li = document.getElementById(id2.getAttribute("id"));
    li.classList.toggle("checked");
}

function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.setAttribute('id', "item" + todo.num);
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput" + todo.num;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput" + todo.num);
    labelElement.setAttribute('id', "item" + todo.num);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    inputElement.onclick = function() {
        statuschange(labelElement);
    };

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);

    deleteIcon.onclick = function() {
        deleteitem(todoElement);
    };
}

addTodoButton.onclick = function() {
    if (inputText.value === "") {
        alert("Enter valid Text");
        return;
    } else {
        let item = {
            text: inputText.value,
            num: count + 1
        };
        createAndAppendTodo(item);
        inputText.value = "";
    }
}
for (let todo of todoList) {
    createAndAppendTodo(todo);
}
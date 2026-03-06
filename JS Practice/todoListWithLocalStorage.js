/*
Todo List with Local Storage (Interview Level)
📌 Problem Statement

Build a Todo List Web Application using HTML, CSS, and JavaScript where users can:
1. Add new todo items.
2. Mark todos as completed.
3. Delete todos.
4. Persist todos even after refreshing the page using localStorage.

Requirements
- Input field to enter a task.
- Add button to add a task.
- Display list of todos.
- Each todo should have:
  - Checkbox (mark complete)
  - Delete button
- Data must be stored in localStorage so tasks remain after page reload.
*/

// Approach / Solution
// Step 1: Data Structure
// Store todos as an array of objects.

[
  { id: 1, text: "Learn JavaScript", completed: false },
  { id: 2, text: "Practice DSA", completed: true }
]

<!DOCTYPE html>
<html>
<head>
  <title>Todo App</title>
  <style>
    body{
      font-family: Arial;
      text-align:center;
      margin-top:50px;
    }
    li{
      list-style:none;
      margin:10px;
    }
    .completed{
      text-decoration: line-through;
      color: gray;
    }
  </style>
</head>
<body>
  <h2>Todo App</h2>
  <input id="todoInput" placeholder="Enter task"/>
  <button onclick="addTodo()">Add</button>
  <ul id="todoList"></ul>
  <script src="script.js"></script>
</body>
</html>

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos(){
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todos.forEach((todo,index)=>{
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked" : ""} 
            onchange="toggleTodo(${index})">

            <span class="${todo.completed ? "completed" : ""}">
            ${todo.text}
            </span>

            <button onclick="deleteTodo(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

function addTodo(){
    const input = document.getElementById("todoInput");

    if(input.value.trim() === "") return;

    todos.push({
        text: input.value,
        completed:false
    });

    input.value="";

    saveTodos();
    renderTodos();
}

function toggleTodo(index){
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function deleteTodo(index){
    todos.splice(index,1);
    saveTodos();
    renderTodos();
}

renderTodos();

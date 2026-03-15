/*
Drag and Drop List

Problem Statement
Create a list where users can reorder items using drag and drop.

Requirements
1. Display a list of items (Apple, Mango, Banana).
2. Users should be able to drag an item.
3. Drop the item in a new position in the list.
4. The list order should update dynamically.

Example
Initial list:

1. Apple
2. Mango
3. Banana

User drags Banana → top

Result:

1. Banana
2. Apple
3. Mango

Concepts Tested
- HTML Drag and Drop API
- Drag events
- DOM manipulation
- List reordering

- Important events used:
dragstart
dragover
drop
dragend
*/

// HTML
<!DOCTYPE html>
<html>
<head>
  <title>Drag and Drop List</title>

  <style>
    ul {
      width: 200px;
      padding: 0;
      list-style: none;
    }

    li {
      padding: 10px;
      border: 1px solid #ccc;
      margin-bottom: 5px;
      background: #f5f5f5;
      cursor: move;
    }

    .dragging {
      opacity: 0.5;
    }
  </style>
</head>

<body>

<h3>Drag and Drop List</h3>

<ul id="list">
  <li draggable="true">Apple</li>
  <li draggable="true">Mango</li>
  <li draggable="true">Banana</li>
</ul>

<script src="script.js"></script>

</body>
</html>

// JavaScript
const list = document.getElementById("list");
let draggedItem = null;

const items = document.querySelectorAll("#list li");

items.forEach(item => {

  item.addEventListener("dragstart", function () {
    draggedItem = this;
    this.classList.add("dragging");
  });

  item.addEventListener("dragend", function () {
    this.classList.remove("dragging");
  });

  item.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  item.addEventListener("drop", function () {
    if (this !== draggedItem) {

      const temp = this.innerHTML;
      this.innerHTML = draggedItem.innerHTML;
      draggedItem.innerHTML = temp;

    }
  });

});

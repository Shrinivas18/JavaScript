/*
Implement Infinite Scroll
Problem

Load more items when reaching bottom.

Example behavior:

Items 1–20
Scroll
Load 21–40
Scroll
Load 41–60

Requirements
- detect scroll
- load more data

*/

// HTML
<!DOCTYPE html>
<html>
<head>
  <title>Infinite Scroll</title>
  <style>
    .item {
      padding: 20px;
      margin: 10px;
      border: 1px solid #ccc;
      font-size: 18px;
    }
  </style>
</head>
<body>

<h2>Infinite Scroll Example</h2>

<div id="container"></div>

<script src="script.js"></script>

</body>
</html>

// JavaScript

const container = document.getElementById("container");

let page = 1;
const limit = 20;

function loadItems() {
  for (let i = 1; i <= limit; i++) {
    const div = document.createElement("div");

    const itemNumber = (page - 1) * limit + i;

    div.className = "item";
    div.textContent = "Item " + itemNumber;

    container.appendChild(div);
  }
}

loadItems();

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= documentHeight - 50) {
    page++;
    loadItems();
  }
});
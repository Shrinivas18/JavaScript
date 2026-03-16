/*
Virtualized List (Render 10,000 Items Efficiently)

Problem Statement
Build a list that contains 10,000 items, but render only the visible items on the screen to improve performance.
Rendering all 10,000 DOM nodes at once can cause slow performance and lag. Instead, implement virtualization (windowing) so that only the items currently visible in the viewport are rendered.

Requirements
1. Create a list containing 10,000 items.
2. Only render the items visible in the viewport.
3. As the user scrolls:
  -  Remove items that go out of view.
  -  Render new items that enter the viewport.
4. Maintain the correct scroll height so the scrollbar behaves normally.

Example

If the viewport can display 10 items at a time:

Total items: 10,000
Rendered items: ~10–20

Scroll down:

Old items removed
New items rendered

Concepts Tested
- Performance optimization
- Virtualization
- Windowing technique
- Scroll events
- Efficient DOM updates
*/

// HTML
<!DOCTYPE html>
<html>
<head>
  <title>Virtualized List</title>

  <style>
    #container {
      height: 400px;
      width: 300px;
      border: 1px solid #ccc;
      overflow-y: auto;
      position: relative;
    }

    #list {
      position: relative;
      width: 100%;
    }

    .item {
      height: 40px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      padding-left: 10px;
      box-sizing: border-box;
      position: absolute;
      width: 100%;
    }
  </style>
</head>

<body>

<h3>Virtualized List (10,000 items)</h3>

<div id="container">
  <div id="list"></div>
</div>

<script src="script.js"></script>

</body>
</html>

// JavaScript
const container = document.getElementById("container");
const list = document.getElementById("list");

const totalItems = 10000;
const itemHeight = 40;
const containerHeight = 400;

const visibleCount = Math.ceil(containerHeight / itemHeight);
const buffer = 5;

list.style.height = totalItems * itemHeight + "px";

function render() {
  const scrollTop = container.scrollTop;

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = startIndex + visibleCount + buffer;

  list.innerHTML = "";

  for (let i = startIndex; i < endIndex && i < totalItems; i++) {
    const div = document.createElement("div");

    div.className = "item";
    div.style.top = i * itemHeight + "px";
    div.textContent = "Item " + (i + 1);

    list.appendChild(div);
  }
}

container.addEventListener("scroll", render);

render();

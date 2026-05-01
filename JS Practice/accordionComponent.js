/*
Accordion Component
Problem Statement

Create an Accordion UI component where multiple sections can be expanded or collapsed.

Requirements
1. Display multiple accordion sections.
2. Each section contains:
  - A title/header
  - A content body
3. By default, all sections should be collapsed.
4. When the user clicks a section header:
  - The section expands and shows the content.
5. Clicking the same header again should collapse it.

Example:-

Initial state:
▶ Section 1
▶ Section 2
▶ Section 3

After clicking Section 1:
▼ Section 1
   Content of section 1
▶ Section 2
▶ Section 3

Concepts Tested
- DOM manipulation
- Event handling
- Conditional rendering
- State-like behavior in JavaScript
*/


// HTML
<!DOCTYPE html>
<html>
<head>
  <title>Accordion Example</title>
  <style>
    .accordion {
      width: 400px;
      margin: 20px;
      font-family: Arial;
    }

    .accordion-item {
      border: 1px solid #ddd;
      margin-bottom: 5px;
    }

    .accordion-header {
      padding: 10px;
      cursor: pointer;
      background: #f5f5f5;
    }

    .accordion-content {
      padding: 10px;
      display: none;
    }

    .active {
      display: block;
    }
  </style>
</head>

<body>

<div class="accordion">

  <div class="accordion-item">
    <div class="accordion-header">Section 1</div>
    <div class="accordion-content">Content of Section 1</div>
  </div>

  <div class="accordion-item">
    <div class="accordion-header">Section 2</div>
    <div class="accordion-content">Content of Section 2</div>
  </div>

  <div class="accordion-item">
    <div class="accordion-header">Section 3</div>
    <div class="accordion-content">Content of Section 3</div>
  </div>

</div>

<script src="script.js"></script>

</body>
</html>

// JavaScript

const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", function () {

    const content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

  });
});

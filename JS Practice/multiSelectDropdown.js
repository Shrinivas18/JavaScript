/*
🧩 Problem Statement

Build a multi-select dropdown component with the following features:

Functional Requirements
1. Clicking the dropdown opens a list of options
2. User can select multiple options
3. Selected options should be displayed in the dropdown
4. Clicking outside closes the dropdown
5. Ability to deselect options

Non-Functional Concepts
- Managing a list of selected items (state)
- Dynamic rendering of UI
- Event handling (including outside click)
- DOM side effects
*/

// HTML
<div class="dropdown" id="dropdown">
  <div class="dropdown-header" id="dropdown-header">
    Select options
  </div>

  <div class="dropdown-list" id="dropdown-list">
    <div class="dropdown-item" data-value="apple">Apple</div>
    <div class="dropdown-item" data-value="banana">Banana</div>
    <div class="dropdown-item" data-value="orange">Orange</div>
    <div class="dropdown-item" data-value="mango">Mango</div>
  </div>
</div>

// CSS

.dropdown {
  width: 200px;
  position: relative;
  font-family: Arial;
}

.dropdown-header {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #fff;
}

.dropdown-list {
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  display: none;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown-list.active {
  display: block;
}

.dropdown-item {
  padding: 8px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #f0f0f0;
}

.dropdown-item.selected {
  background: #2196f3;
  color: white;
}


// JavSCript
const dropdown = document.getElementById('dropdown');
const header = document.getElementById('dropdown-header');
const list = document.getElementById('dropdown-list');
const items = document.querySelectorAll('.dropdown-item');

let selectedValues = [];

// Toggle dropdown
header.addEventListener('click', () => {
  list.classList.toggle('active');
});

// Handle item selection
items.forEach(item => {
  item.addEventListener('click', () => {
    const value = item.dataset.value;

    if (selectedValues.includes(value)) {
      // Deselect
      selectedValues = selectedValues.filter(v => v !== value);
      item.classList.remove('selected');
    } else {
      // Select
      selectedValues.push(value);
      item.classList.add('selected');
    }

    updateHeader();
  });
});

// Update header text
function updateHeader() {
  if (selectedValues.length === 0) {
    header.textContent = "Select options";
  } else {
    header.textContent = selectedValues.join(', ');
  }
}

// Close on outside click
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    list.classList.remove('active');
  }
});

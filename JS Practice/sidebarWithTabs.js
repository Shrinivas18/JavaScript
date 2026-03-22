/*
🧩 Problem Statement

Build a sidebar with tabs navigation that behaves like a simple dashboard.

Functional Requirements
1. Display a sidebar with multiple tabs
2. Clicking a tab should:
  -  Highlight the active tab
  -  Show corresponding content
3. Only one tab content should be visible at a time

Non-Functional Concepts
1. Managing active state (global UI state)
2. Dynamic DOM updates
3. Separation of concerns (structure vs behavior)
*/

// HTML
<div class="container">
  <div class="sidebar">
    <button class="tab active" data-tab="home">Home</button>
    <button class="tab" data-tab="profile">Profile</button>
    <button class="tab" data-tab="settings">Settings</button>
  </div>

  <div class="content">
    <div class="tab-content active" id="home">🏠 Home Content</div>
    <div class="tab-content" id="profile">👤 Profile Content</div>
    <div class="tab-content" id="settings">⚙️ Settings Content</div>
  </div>
</div>

// CSS
.container {
  display: flex;
  height: 300px;
  border: 1px solid #ccc;
}

.sidebar {
  width: 150px;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
}

.tab {
  padding: 12px;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
}

.tab:hover {
  background: #ddd;
}

.tab.active {
  background: #2196f3;
  color: white;
}

.content {
  flex: 1;
  padding: 20px;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

// JavaScript

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));

    // Hide all content
    contents.forEach(c => c.classList.remove('active'));

    // Activate clicked tab
    tab.classList.add('active');

    // Show corresponding content
    const activeContent = document.getElementById(target);
    activeContent.classList.add('active');
  });
});

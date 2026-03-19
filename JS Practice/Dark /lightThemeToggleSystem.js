/*

🧩 Problem Statement

Build a Dark / Light theme toggle system with the following features:

Functional Requirements
1. Toggle between light mode and dark mode
2. Persist the user’s preference using localStorage
3. On page reload, apply the saved theme automatically

Non-Functional Concepts
- Global UI state (theme applied to <body>)
- Side effects (reading/writing to localStorage)
- DOM manipulation via class toggling

*/

// HTML
<button id="theme-toggle">Toggle Theme</button>

<h1>Hello World</h1>
<p>This is a theme toggle example</p>

// CSS
body {
  background-color: white;
  color: black;
  transition: all 0.3s ease;
}

body.dark {
  background-color: #121212;
  color: white;
}

button {
  padding: 10px 16px;
  cursor: pointer;
}

// JavaScript
const toggleBtn = document.getElementById('theme-toggle');

// Load theme from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Save updated theme
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

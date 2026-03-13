/*
Tabs Component
Problem Statement
Create a tab navigation component where clicking different tabs shows different content.

Requirements
1. Display multiple tabs (Home, Profile, Settings).
2. Each tab should display different content.
3. Only one tab's content should be visible at a time.
4. When a tab is clicked:
  - The selected tab becomes active.
  - The corresponding content is displayed.
  - Other contents are hidden.

Example:-
Initial view:
[Home] [Profile] [Settings]
Welcome to Home Page

Click Profile:
[Home] [Profile] [Settings]
This is Profile Page

Click Settings:
[Home] [Profile] [Settings]
Settings Page Content

Concepts Tested:-
- DOM manipulation
- Event handling
- Dynamic content rendering
- State management (active tab)
*/

// HTML

<!DOCTYPE html>
<html>
<head>
  <title>Tabs Component</title>

  <style>
    .tabs {
      display: flex;
      cursor: pointer;
      margin-bottom: 10px;
    }

    .tab {
      padding: 10px 20px;
      border: 1px solid #ccc;
      margin-right: 5px;
    }

    .active {
      background: #007bff;
      color: white;
    }

    .tab-content {
      border: 1px solid #ccc;
      padding: 10px;
      display: none;
    }

    .show {
      display: block;
    }
  </style>
</head>

<body>

<div class="tabs">
  <div class="tab active" data-tab="home">Home</div>
  <div class="tab" data-tab="profile">Profile</div>
  <div class="tab" data-tab="settings">Settings</div>
</div>

<div id="home" class="tab-content show">
  Welcome to Home Page
</div>

<div id="profile" class="tab-content">
  This is Profile Page
</div>

<div id="settings" class="tab-content">
  Settings Page Content
</div>

<script src="script.js"></script>

</body>
</html>

// JavaScript

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", function () {

    const target = this.getAttribute("data-tab");

    // remove active class from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // hide all contents
    contents.forEach(content => {
      content.classList.remove("show");
    });

    // activate clicked tab
    this.classList.add("active");

    // show correct content
    document.getElementById(target).classList.add("show");

  });
});

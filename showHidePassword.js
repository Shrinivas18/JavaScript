/*
Show / Hide Password
Problem Statement

Create a password input field with a Show / Hide toggle button.

Requirements
1. Display a password input field.
2. By default, the password should be hidden (type="password").
3. When the user clicks the Show button, the password should become visible (type="text").
4. Clicking again should hide the password.
5. Update the button text dynamically (Show ↔ Hide).

Example

Initial state:

Password: [ ******** ]   👁 Show

After clicking Show:

Password: [ password123 ]   🙈 Hide

Concepts Tested
- DOM manipulation
- Event handling
- input type toggle
- JavaScript conditional logic
*/

// html file
<!DOCTYPE html>
<html>
<head>
  <title>Show Hide Password</title>
</head>
<body>

<h3>Password</h3>

<input type="password" id="password" placeholder="Enter password">
<button id="toggleBtn">Show</button>

<script src="script.js"></script>

</body>
</html>

// script

const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Show";
  }

});

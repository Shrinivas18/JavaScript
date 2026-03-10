/*
Mini GitHub User Search (Vanilla JavaScript)
Problem Statement

Build a simple web application that allows users to search GitHub users using the GitHub API.

The application should include:
1. An input field where users type a search query.
2. Fetch users from the GitHub API.
3. Display user details including:
  - Username
  - Profile image
  - Profile link
4. Show a loading indicator while the data is being fetched.

API Example
https://api.github.com/search/users?q=react

Concepts Tested
- fetch API
- async / await
- DOM manipulation
- loading state
- event handling
*/

<!DOCTYPE html>
<html>
<head>
  <title>GitHub User Search</title>
  <style>
    body {
      font-family: Arial;
      padding: 20px;
    }

    .user {
      display: flex;
      align-items: center;
      border: 1px solid #ddd;
      padding: 10px;
      margin: 10px 0;
    }

    img {
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  </style>
</head>
<body>

<h2>GitHub User Search</h2>

<input 
  type="text" 
  id="searchInput" 
  placeholder="Search GitHub users..."
/>

<p id="loading"></p>

<div id="results"></div>

<script src="script.js"></script>

</body>
</html>

// script.js

const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const loading = document.getElementById("loading");

async function fetchUsers(query) {
  loading.textContent = "Loading...";
  results.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`
    );

    const data = await response.json();

    displayUsers(data.items);
  } catch (error) {
    results.innerHTML = "Error fetching users";
  }

  loading.textContent = "";
}

function displayUsers(users) {
  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "user";

    div.innerHTML = `
      <img src="${user.avatar_url}" />
      <div>
        <p>${user.login}</p>
        <a href="${user.html_url}" target="_blank">
          View Profile
        </a>
      </div>
    `;

    results.appendChild(div);
  });
}

input.addEventListener("keyup", function () {
  const query = input.value.trim();

  if (query.length > 2) {
    fetchUsers(query);
  }
});

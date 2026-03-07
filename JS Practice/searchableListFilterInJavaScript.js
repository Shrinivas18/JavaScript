/*
Searchable List Filter in JavaScript (Vanilla JS)
📌 Problem Statement

Create a searchable list filter using HTML + JavaScript.

Given List
const users = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve"
];

Requirements
- Display a search input box.
- Show the list of users.
- As the user types, filter the list in real time.
- Matching must be case-insensitive.
*/

// HTML

<!DOCTYPE html>
<html>
<head>
  <title>Searchable List Filter</title>
</head>
<body>

<h2>User List</h2>

<input type="text" id="searchInput" placeholder="Search user...">

<ul id="userList"></ul>

<script>
const users = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve"
];

const searchInput = document.getElementById("searchInput");
const userList = document.getElementById("userList");

// Function to render list
function renderList(list){
  userList.innerHTML = "";

  list.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user;
    userList.appendChild(li);
  });
}

// Initial render
renderList(users);

// Search event
searchInput.addEventListener("input", function(){

  const searchValue = searchInput.value.toLowerCase();

  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(searchValue)
  );

  renderList(filteredUsers);

});
</script>

</body>
</html>

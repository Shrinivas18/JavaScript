// Extract property from objects

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
];

// Use map() to return only the names.

let extractNames = users.map((item) => item.name);

console.log(extractNames);

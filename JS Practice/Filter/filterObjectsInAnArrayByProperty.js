// Filter objects in an array based on a property.

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Carol", age: 19 },
];

// Use filter() to return only users age 18+.

let filteredArray = users.filter((item) => item.age > 18);

console.log(filteredArray);

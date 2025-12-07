// Create new object from old
// Add a new property passed: true to each student object using map()

const obj = [
  { name: "X", class: 8 },
  { name: "Y", class: 9 },
];

let newObj = obj.map((item) => ({ ...item, pass: true }));

console.log(newObj);

// Count items

const fruits = ["apple", "banana", "apple"];

let count = fruits.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(count);

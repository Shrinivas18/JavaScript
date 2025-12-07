// Use map() to flatten one level

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let flattenArray = arr.map((item) => item).flat();

console.log(flattenArray);

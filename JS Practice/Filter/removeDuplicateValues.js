// Remove duplicate values from an array using filter()

const arr = [1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 7];

let filteredArray = arr.filter(
  (item, index, arr) => arr.indexOf(item) === index
);

console.log(filteredArray);

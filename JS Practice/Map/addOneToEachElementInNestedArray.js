// Add 1 to each number inside a nested array

let nestedArray = [
  [1, 2],
  [3, 4],
];

let addOneToEachElement = nestedArray.map((item) =>
  item.map((nestedItem) => nestedItem + 1)
);

console.log(addOneToEachElement);

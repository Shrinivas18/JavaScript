// Flatten an array (1 level)

const nested = [
  [1, 2],
  [3, 4],
];

const flat = nested.reduce((acc, item) => acc.concat(item), []);

console.log(flat);

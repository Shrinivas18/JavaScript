// Convert array to object

const entries = [
  ["name", "John"],
  ["age", 25],
];

const obj = entries.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

console.log(obj);

// Convert object to array of strings

let obj = [
  { name: "A", score: 50 },
  { name: "B", score: 70 },
];

let objectToArrayOfString = obj.map((item) => `${item.name}:${item.score}`);

console.log(objectToArrayOfString);

// Use map() to transform deeply nested objects

const data = [
  { name: "A", scores: [10, 20] },
  { name: "B", scores: [30, 40] },
];

let newData = data.map((item) => {
  let total = item.scores.reduce((sum, score) => sum + score, 0);
  return { name: item.name, total: total };
});

console.log(newData);

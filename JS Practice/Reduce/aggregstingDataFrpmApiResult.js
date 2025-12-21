// Aggregating data from API results

const apiData = [
  { category: "A", value: 10 },
  { category: "B", value: 5 },
  { category: "A", value: 7 },
];

const totals = apiData.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + item.value;
  return acc;
}, {});

console.log(totals); // { A: 17, B: 5 }

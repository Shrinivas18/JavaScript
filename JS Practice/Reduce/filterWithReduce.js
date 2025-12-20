// Implement filter() with reduce()

const nums = [1, 2, 3, 4];

const filtered = nums.reduce((acc, n) => {
  if (n % 2 === 0) acc.push(n);
  return acc;
}, []);

console.log(filtered);

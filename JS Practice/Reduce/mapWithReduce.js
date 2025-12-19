// Implement map() with reduce()

const nums = [1, 2, 3];

const mapped = nums.reduce((acc, n) => {
  acc.push(n * 2);
  return acc;
}, []);

console.log(mapped);

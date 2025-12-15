// Remove duplicates

const nums = [1, 2, 2, 3, 4, 4];

const unique = nums.reduce((acc, item) => {
  if (!acc.includes(item)) acc.push(item);
  return acc;
}, []);

console.log(unique);

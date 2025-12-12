// Find the maximum

const arr = [11, 12, 31, 41, 15, 16, 17, 18, 49, 10];

let maximum = arr.reduce((acc, item) => Math.max(acc, item));

console.log(maximum);

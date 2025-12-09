/*
Transform [1,2,3,4,5] → square → take values > 10 → return their sum.
Use map → filter → reduce.
*/

let arr = [1, 2, 3, 4, 5];

let transformedArray = arr
  .map((item) => item * item)
  .filter((item) => item > 10)
  .reduce((acc, curr) => acc + curr, 0);

console.log(transformedArray);

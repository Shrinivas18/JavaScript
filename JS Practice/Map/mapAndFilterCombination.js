/* 
Q: Convert an array of numbers into strings using map(), but only keep the strings 
   for even numbers.
 */

let arr = [1, 2, 3, 4, 5, 6];

let newData = arr
  .filter((item) => item % 2 === 0)
  .map((item) => item.toString());

console.log(newData);

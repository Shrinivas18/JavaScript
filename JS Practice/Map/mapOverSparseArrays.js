// Map over sparse arrays

let arr = [1, , 3];
// When using the map() method on a sparse array, map() skips over the empty slots.

const newArr = arr.map((item) => item * 2);

console.log(newArr);

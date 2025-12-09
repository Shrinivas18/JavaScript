// Use map() to compute cumulative results

let arr = [1, 2, 3, 4];
let total = 0;
let cumulative = arr.map((item, index) => {
  total = total + item;
  return total;
});

console.log(cumulative);

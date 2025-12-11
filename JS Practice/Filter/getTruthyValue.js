// Use filter() to get only truthy values.

let arr = [0, 1, false, 2, "", 3];

let filteredArray = arr.filter((item) => {
  if (item) return item;
});

console.log(filteredArray);

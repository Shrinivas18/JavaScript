// Write a function myMap(array, callback) that behaves like the built-in map().
function myMap(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
}

function square(num) {
  return num * num;
}

let arr = [2, 3, 4, 5];
console.log(myMap(arr, square));

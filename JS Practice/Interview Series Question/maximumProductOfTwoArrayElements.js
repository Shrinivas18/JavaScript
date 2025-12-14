// Maximum product of two Array elements

const arr = [1, 2, 3, 4, 5, 6];

function maxProdOfTwoElements(arr) {
  let sortedArray = arr.sort((a, b) => b - a);
  return sortedArray[0] * sortedArray[1];
}

const maxProd = maxProdOfTwoElements(arr);
console.log(maxProd);

// Rest Opeartor in Array Destructuring

let arr = [1, 2, 3, 4, 5, 6];

let [first, second, ...rest] = arr;

let sumOfFirstTwoElements = first + second;

console.log(sumOfFirstTwoElements);
console.log("unused elements - ", rest);

// Map array to a lookup object

let arr = ["a", "b", "c"];

let lookupObj = arr.map((item, index) => ({ index: index, value: item }));

console.log(lookupObj);

// Use of Rest Operator in functions

function restExampleOne(...rest) {
  let total = 0;
  for (let n of rest) {
    total += n;
  }
  return total;
}

function restExampleTwo(first, second, ...rest) {
  return `Hello ${first} and ${second}! \n Also Greetings to ${rest}`;
}

console.log(restExampleOne(1, 2));
console.log(restExampleOne(1, 2, 3, 4, 5));

console.log(restExampleTwo("Shrinivas", "Sinu", "X", "Y", "Z"));

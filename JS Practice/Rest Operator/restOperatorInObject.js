// Rest oprator in Objects

let obj = {
  name: "Shrinivas",
  age: 29,
  sex: "Male",
  hometown: "DGG",
  Nationality: "INDIAN",
};

let { name, Nationality, ...rest } = obj;

console.log(`Name: ${name} and Nationality: ${Nationality}`);
console.log(`Rest Info: ${JSON.stringify(rest)}`);

// Compose functions (functional programming)

const add5 = (x) => x + 5;
const double = (x) => x * 2;
const subtract3 = (x) => x - 3;

const pipeline = [add5, double, subtract3];

const result = pipeline.reduce((acc, fn) => fn(acc), 10);

console.log(result);

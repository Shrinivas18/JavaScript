/*
🧠 Problem: Build a Counter Using Closures
📌 Problem Statement

Create a function createCounter() that returns a function.
Each time the returned function is called, it should increment and return a counter value.

Requirements:
The counter should start from 0.
Each call should increase the value by 1.
The counter variable must be private (not directly accessible).
Multiple counters should work independently.

✅ Example
const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter1()); // 3
*/

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

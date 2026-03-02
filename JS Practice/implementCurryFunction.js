/*
🔹 Problem Statement
Implement a curry() function that transforms a normal function into a curried version.

📌 What is Currying?
Currying converts a function that takes multiple arguments into a sequence of functions that each take one (or fewer) arguments.
*/

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

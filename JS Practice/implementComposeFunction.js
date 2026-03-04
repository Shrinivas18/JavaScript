/*
🧠 Problem: Implement a compose Function in JavaScript

Problem Statement:
Write a function compose that takes multiple functions as arguments and returns a new function. The returned function should execute the given functions from right to left, passing the result of each function to the next.

In simple terms:
  compose(f, g, h)(x)
is the same as:
  f(g(h(x)))
*/

const compose = (...functions) =>
  (initialValue) =>
    functions.reduceRight((acc, fn) => fn(acc), initialValue);

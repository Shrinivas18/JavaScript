/*
🧠 Problem Statement: Implement a Memoization Function

Create a function memoize(fn) that takes another function fn as input and returns a new function that:
  - Caches the results of previous function calls.
  - If called again with the same arguments, returns the cached result instead of recomputing.
  - Works for functions with multiple arguments.

📌 Example
const slowSquare = (n) => {
  console.log("Computing...");
  return n * n;
};

const memoizedSquare = memoize(slowSquare);

memoizedSquare(5); // "Computing..." → 25
memoizedSquare(5); // (no log) → 25 (from cache)
*/

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

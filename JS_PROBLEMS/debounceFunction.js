/*
 Create a debounce function that delays the execution of a function until 
 after a specified delay.
 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function fn(message) {
  console.log("Debounced message:", message);
}

const debouncedFn = debounce(fn, 300);
debouncedFn();

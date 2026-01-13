/*
Print All Subsets (Power Set)
📘 Problem
Given an array, print all possible subsets.

🧠 Idea
At each index:
  include the element
  exclude the element
*/

function subsets(arr, index = 0, current = []) {
  if (index === arr.length) {
    console.log(current);
    return;
  }

  subsets(arr, index + 1, current);

  current.push(arr[index]);
  subsets(arr, index + 1, current);
  current.pop();
}

subsets([1, 2, 3]);

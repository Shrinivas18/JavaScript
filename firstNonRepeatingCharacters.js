// First Non-Repeating Character
/*
Problem Statement

Write a function that takes a string and returns the first character that does not repeat anywhere in the string.
 - If all characters repeat, return null
 - The function should be case-sensitive
 - Time complexity should be O(n)
*/

function firstUniqueChar(str) {
  const count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

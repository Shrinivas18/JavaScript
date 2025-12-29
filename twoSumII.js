/*
Two Sum II – Sorted Array

Problem Statement
Given a sorted array of integers numbers, find two numbers such that they add up to a specific target.
Return the 1-based indices of the two numbers.

Expected Approach
 - Two pointers
 - Time: O(n)

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
*/

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

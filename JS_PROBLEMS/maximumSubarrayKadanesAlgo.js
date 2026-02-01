/*
Maximum Subarray (Kadane’s Algorithm)

Problem Statement:
Given an integer array nums, find the contiguous subarray which has the largest sum, and return that sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

*/
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

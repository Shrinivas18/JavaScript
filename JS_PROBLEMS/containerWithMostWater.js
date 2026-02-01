/*

Container With Most Water

Problem Statement:
You are given an array height where height[i] represents the height of a vertical line at index i.
Find two lines that together with the x-axis form a container that holds the maximum water. 

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

*/

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const area = width * currentHeight;

    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));

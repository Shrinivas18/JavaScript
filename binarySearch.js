/*
Binary Search
Problem - Search a target in a sorted array using recursive binary search.
*/

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] > target)
    return binarySearch(arr, target, left, mid - 1);

  return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3

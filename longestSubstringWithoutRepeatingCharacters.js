// Longest Substring Without Repeating Characters
/*
Problem Statement
 - Given a string s, find the length of the longest substring without repeating characters.

Input:  "abcabcbb"
Output: 3   // "abc"

Input:  "bbbbb"
Output: 1   // "b"

Input:  "pwwkew"
Output: 3   // "wke"

Constraints
 - 0 ≤ s.length ≤ 10⁵
 - Must run in O(n) time
*/

function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

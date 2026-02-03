/*
📌 Problem Statement

You are climbing a staircase.
It takes n steps to reach the top.
Each time you can climb 1 or 2 steps.
Return the number of distinct ways to reach the top.
*/
function climbStairs(n) {
  if (n <= 2) return n;

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}

/*
🔵 Rate Limiter
📌 Problem Statement

Design and implement a Rate Limiter in JavaScript.

A rate limiter ensures that a function can only be executed a certain number of times within a given time window.

Requirements:
1. Allow N requests per T milliseconds.
2. If the limit is exceeded:
 - Either reject the request
  OR
 - Delay execution until allowed.
3. Should work with async functions.
4. Should be reusable.

🧠 Common Real-World Examples
- API request limiting (e.g., 5 requests per second)
- Login attempt restrictions
- Messaging systems
- Preventing brute-force attacks
Companies like GitHub and Stripe use rate limiting heavily in their APIs.
*/

// ✅ Approach 1: Sliding Window (Reject Extra Calls)
function createRateLimiter(limit, windowMs) {
  const timestamps = [];

  return async function (...args) {
    const now = Date.now();

    // Remove expired timestamps
    while (timestamps.length && now - timestamps[0] > windowMs) {
      timestamps.shift();
    }

    if (timestamps.length >= limit) {
      throw new Error("Rate limit exceeded");
    }

    timestamps.push(now);
    return Promise.resolve();
  };
}

// ✅ Approach 2: Queue-Based (Delays Instead of Rejecting)
function createQueueRateLimiter(limit, windowMs) {
  const queue = [];
  let activeCount = 0;

  setInterval(() => {
    activeCount = 0;
    processQueue();
  }, windowMs);

  function processQueue() {
    while (queue.length && activeCount < limit) {
      activeCount++;
      const { resolve, fn, args } = queue.shift();
      resolve(fn(...args));
    }
  }

  return function (fn, ...args) {
    return new Promise((resolve) => {
      queue.push({ resolve, fn, args });
      processQueue();
    });
  };
}

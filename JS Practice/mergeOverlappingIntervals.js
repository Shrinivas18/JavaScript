/*
Merge Overlapping Intervals

Problem Statement: 
Given an array of intervals where each interval is represented as [start, end], merge all overlapping intervals and return an array 
of the non-overlapping intervals that cover all the intervals in the input.

📌 Example
Input:  [[1,3],[2,6],[8,10]]
Output: [[1,6],[8,10]]

🧠 Overlapping Condition

Two intervals overlap if:
currentStart <= previousEnd
*/

function merge(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const next = intervals[i];

        if (next[0] <= current[1]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            result.push(current);
            current = next;
        }
    }

    result.push(current);

    return result;
}

/*
Eventual Safe Nodes (Advanced Graph Problem)

You are given a directed graph with n nodes labeled 0 to n - 1.
The graph is represented as an array graph, where:
graph[i] is an array of nodes that node i points to.
A node is called eventually safe if every possible path starting from that node leads to a terminal node (a node with no outgoing edges).
Nodes that are part of a cycle, or that can reach a cycle, are not safe.

🔹 Task
Write a function:
function eventualSafeNodes(graph) {}
that returns an array of all eventually safe nodes, sorted in ascending order.

🔹 Constraints
- 1 <= graph.length <= 10^4
- 0 <= graph[i].length <= 10^4
- The graph may contain cycles
- Total edges ≤ 3 * 10^4
- Your solution must be efficient (brute force DFS from every node will TLE)

🔹 Example
Input:
graph = [
  [1,2],
  [2,3],
  [5],
  [0],
  [5],
  [],
  []
]

Output:
[2,4,5,6]

*/

function eventualSafeNodes(graph) {
  const n = graph.length;
  const state = new Array(n).fill(0); 

  function dfs(node) {
    if (state[node] !== 0) {
      return state[node] === 2;
    }

    state[node] = 1; // mark as visiting

    for (const next of graph[node]) {
      if (!dfs(next)) {
        return false; // leads to cycle
      }
    }

    state[node] = 2; // mark as safe
    return true;
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (dfs(i)) result.push(i);
  }

  return result;
}


// Generate All Permutations of a String

function generatePermutations(str) {
  const result = [];
  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      result.push(path);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const current = remaining[i];
      backtrack(path + current, remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }

  backtrack("", str);

  return result;
}

console.log(generatePermutations("abc"));

// Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

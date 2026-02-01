/*
Generate All Permutations

📘 Problem
Generate all permutations of a string.
*/

function permutations(str, result = "") {
  if (str.length === 0) {
    console.log(result);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    const remaining = str.slice(0, i) + str.slice(i + 1);
    permutations(remaining, result + str[i]);
  }
}

permutations("ABC");

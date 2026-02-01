/*
Problem Statement:- Deep Transform a Nested Object
You are given a deeply nested object where every value may be: number, string, object, array
Transform all numbers by doubling them using a recursive map-like pattern.

Input
const data = {
  a: 1,
  b: { c: 2, d: [3, { e: 4 }] }
};

Output
{
  a: 2,
  b: { c: 4, d: [6, { e: 8 }] }
}
*/

function doubleNumbers(obj) {
  if (Array.isArray(obj)) {
    return obj.map(doubleNumbers);
  }

  if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const key in obj) {
      result[key] = doubleNumbers(obj[key]);
    }
    return result;
  }
  if (typeof obj === 'number') {
    return obj * 2;
  }
  return obj;
}
const data = {
  a: 1,
  b: { c: 2, d: [3, { e: 4 }] }
};

const result = doubleNumbers(data);
console.log(result);

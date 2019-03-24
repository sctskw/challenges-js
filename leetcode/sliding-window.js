#!/usr/bin/env node

const CASES = [
  [2, [100, 200, 300, 400]],
  [3, [100, 200, 300, 400]],
  [5, [100, 200, 100, 400, 500, 2, 600]]
];

function sum (arr) {
  return arr.reduce(function (total, n) {
    total += n;
    return total;
  }, 0);
}

function calculate (arr, k) {
  let curr = sum(arr.slice(0, k));
  let max = curr;
  let i = 0;

  console.log('init max: ', curr);

  for (i = k; i < arr.length; i++) {
    curr += arr[i] - arr[i - k];
    max = Math.max(curr, max);
  }

  return max;
}

CASES.forEach(function (c) {
  console.log('case: ', c);
  console.log('answer: ', calculate(c[1], c[0]));
});

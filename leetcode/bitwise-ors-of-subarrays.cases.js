#!/usr/bin/env node

const calculate = require('./bitwise-ors-of-subarrays.js');

const CASES = [
  [1],
  [1, 1, 2],
  [1, 2, 3],
  [1, 2, 3, 4]
];

CASES.forEach(function (c) {
  console.log('\n--------');
  console.log('case: ', c);
  console.log('answer: ', calculate(c));
});

#!/usr/bin/env node

const calculate = require('./add-operators.js');

const CASES = [
  ['123', 6],
  ['232', 8],
  ['105', 5],
  ['3456237490', 9191]
];

CASES.forEach(function (c) {
  console.log('\n----------------------');
  console.log('values: ', c);
  console.log('answer: ', calculate(c[0], c[1]));
});

#!/usr/bin/env node
const calculate = require('./basic-calculator-I.postfix.js');

const CASES = [
  '1 + 1',
  ' 2-1 + 2 ',
  ' (12 + 2) - 3 ',
  '(1+(4+5+2)-3)+(6+8)',
  '1',
  '(1)',
  '2-(5-6)',
  '7 - (2*3+5) * (8-4/2)'
];

CASES.forEach(function (exp) {
  console.log('\n-------------------------------');
  console.log('Case: ', exp);
  console.log('Output: ', calculate(exp));
  console.log('Expected: ', eval(exp));
});

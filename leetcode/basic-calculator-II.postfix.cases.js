#!/usr/bin/env node

// const calculate = require('./basic-calculator-II.simple.js');
const calculate = require('./basic-calculator-II.postfix.js');

const CASES = [
  '1-1+1',
  '2*3+4',
  '3+2*2',
  '3/2',
  '(3+5/2)',
  '14-3/2',
  ' 3 + 5/2 + 8*9 - 5/2 - 10',
  ' 3 + 10 + 39 - 12 + 10 - 2',
  ' 3 + 5/2 + 8*9 - 5/2*3 - 10 + 12/2*3',
  '7-(2*3+5)*(8-4/2)',
  '(3 +4)*(5-2)',
  '(3 +4)*(5-2)^2'
];

CASES.forEach(function (c) {
  console.log('\n----------------------');
  console.log('expression: ', c);
  console.log('expected: ', eval(c));
  console.log('answer: ', calculate(c));
});

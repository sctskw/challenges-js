#!/usr/bin/env node

const calculate = require('./basic-calc.js');
// const calculate = require('./basic-calc.b.js');

const CASES = [
  // " 2-1 + 2 ",
  // "(1+(4+5+2)-3)+(6+8)",
  // "1234234234",
  // "2-(5-6)",
  // "1-(5)",
  // "(5-(1+(5)))",
  // "(3-(2-(5-(9-(4)))))",
  // "(3-(5-(8)-(2+(9-(0-(8-(2))))-(4))-(4)))",
]


CASES.forEach(function(exp) {

  console.log('\n-----------------------\n');
  console.log('\nanswer: ', calculate(exp));
  console.log('expected: ', eval(exp));

});





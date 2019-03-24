#!/usr/bin/env node

/***

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5

Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.

*/

function isNumber (char) {
  return !isNaN(parseInt(char));
}

function sum (values) {
  return values.reduce(function (sum, val) {
    sum += val;
    return sum;
  });
}

function calculate (str) {
  let exp = str.replace(/\s+/ig, '');
  let stack = [];
  let num = '';
  let op = '+';
  let len = exp.length;
  let temp;

  console.log(exp);

  for (let i = 0; i <= len; i++) {
    let char = exp[i];

    console.log(op, num, stack);

    if (isNumber(char)) {
      num += char;
      continue;
    }

    switch (op) {
      case '+':
        stack.push(parseInt(num));
        break;
      case '-':
        stack.push(parseInt(num) * -1);
        break;
      case '*':
        stack.push(stack.pop() * parseInt(num));
        break;
      case '/':
        temp = stack.pop();
        stack.push(Math.floor(Math.abs(temp) / parseInt(num)) * Math.sign(temp));
        break;
      // case '^':
      //   stack.push(Math.floor(Math.pow(Math.sign(stack.pop()), parseInt(num))));
      //   break;
    }

    op = char;
    num = '';
  }

  return sum(stack);
}

module.exports = calculate;

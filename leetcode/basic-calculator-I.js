// const VALUE = '2-(5-6-7)+10';
// const VALUE = '2-(5-6)';
// const VALUE = '(1+(4+5+2)-3)+(6+8)';
const VALUE = '(5-(1+(5)))';

function isDigit (char) {
  return !isNaN(parseInt(char));
}

function sum (values) {
  return values.reduce(function (sum, val) {
    sum += val;
    return sum;
  });
}

function calculate (s) {
  let exp = s.trim().replace(/[\s]+/ig, '');
  let stack = [];
  let ops = [];
  let sign = 1;
  let num = ''; // hold the full number of digits between expressions
  let char, i;

  console.log(exp);

  for (i = 0; i <= exp.length; i++) {
    char = exp[i];

    if (isDigit(char)) {
      num += char;
      continue;
    }

    console.log('i=', i, 'char=', char, 'sign=', sign, 'num=', num, 'stack=', stack);

    if (char === '-') {
      sign = -1;
      stack.push(parseInt(num) * sign);
      num = '';
      continue;
    }

    if (char === '+') {
      sign = 1;
      stack.push(parseInt(num) * sign);
      num = '';
      continue;
    }
  }

  return sum(stack);
};

console.log(calculate(VALUE));

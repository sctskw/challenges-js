// const VALUE = '(1+2+3)';
// const VALUE = '2-(5-6-7)+10';
// const VALUE = '2-(5-6)';
// const VALUE = '(5-(1+(5)))';

const VALUE = '(1+(4+5+2)-3)+(6+8)';

function isDigit (char) {
  return !isNaN(parseInt(char));
}

function evaluate (exp, sign) {
  let num = '';
  let total = 0;
  let op = 1;
  let idx = 0;
  let char = exp[0];
  let stack = [];

  // skip first paren
  if (char === '(') {
    exp = exp.slice(1);
  }

  console.log(sign, exp);

  for (idx; idx < exp.length; idx++) {
    char = exp[idx];

    console.log(`i=${idx} c=${char} e=${exp} o=${op} s=${sign} n=${num} t=${total}`);

    if (isDigit(char)) {
      num += char;
      continue;
    }

    if (char === '+') {
      total += parseInt(num) * op;
      op = 1;
      num = '';
    }

    if (char === '-') {
      total += parseInt(num) * op;
      op = -1;
      num = '';
    }

    if (char === '(') {
      let end = exp.slice(idx).indexOf(')') + 1;
      let part = exp.substring(idx + 1, idx + end);
      total += evaluate(part, op * 1);
      idx = idx + end;
    }

    if (char === ')') break;
  }

  if (num.length) {
    console.log('left: ', num, sign, op);
    total += parseInt(num) * sign;
  }

  return total * sign;
}

function calculate (str) {
  let exp = `${str}`.replace(/\s+/ig, '');
  return evaluate(exp, 1);
}

console.log(calculate(VALUE));

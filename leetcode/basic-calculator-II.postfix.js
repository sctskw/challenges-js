function calculate (str) {
  let expr = toPostFix(str);
  let nums = [];
  let i, char, temp;

  console.log('postfix: ', expr);

  for (i = 0; i < expr.length; i++) {
    char = expr[i];

    if (isNumber(char)) {
      nums.push(parseInt(char));
      continue;
    }

    if (!nums.length) continue;

    switch (char) {
      case '+':
        // TODO: stack protection? what if we only have 1 num??
        nums.push(parseInt(nums.pop()) + parseInt(nums.pop()));
        break;
      case '-':
        // TODO: stack protection? what if we only have 1 num??
        temp = parseInt(nums.pop());
        nums.push(parseInt(nums.pop()) - temp);
        break;
      case '*':
        // TODO: stack protection? what if we only have 1 num??
        nums.push(parseInt(nums.pop()) * parseInt(nums.pop()));
        break;
      case '/':
        // TODO: stack protection? what if we only have 1 num??
        temp = parseInt(nums.pop());
        nums.push(Math.floor(parseInt(nums.pop()) / temp));
        break;
      case '^':
        // TODO: stack protection? what if we only have 1 num??
        temp = parseInt(nums.pop());
        nums.push(Math.pow(parseInt(nums.pop()), temp));
        break;
    }
  }

  // console.log(nums);

  // return sum(nums);
  return nums.pop();
}

function normalize (str) {
  return ['(', str.replace(/\s+/ig, ''), ')'].join('');
}

function toPostFix (str) {
  let expr = normalize(str);
  let stack = [];
  let result = [];
  let operand = '';
  let i, char;

  for (i = 0; i < expr.length; i++) {
    char = expr[i];

    if (isNumber(char)) {
      operand += char;
      continue;
    }

    if (isOperator(char)) {
      if (operand.length) {
        result.push(parseInt(operand));
      }

      let op = stack.pop();

      while (op && !isLeftParen(op)) {
        if (precedence(op) < precedence(char)) break;

        result.push(op);
        op = stack.pop();
      }

      // operator didn't qualify, add it back so it doesn't get lost
      if (op) stack.push(op);
      stack.push(char);
      operand = '';
    }

    if (isLeftParen(char)) {
      stack.push(char);
      continue;
    }

    if (isRightParen(char)) {
      if (operand.length) {
        result.push(parseInt(operand));
      }

      let val = stack.pop();
      while (val && !isLeftParen(val)) {
        result.push(val);
        val = stack.pop();
      }
      operand = '';
    }
  }

  return result;
}

function isNumber (char) {
  return !isNaN(parseInt(char));
}

function isOperator (char) {
  return /[-+/*^]/ig.test(char);
}

function isRightParen (char) {
  return char === ')';
}

function isLeftParen (char) {
  return char === '(';
}

// function sum (a) {
//   return a.reduce(function (total, n) {
//     total += parseInt(n);
//     return total;
//   });
// }

function precedence (op) {
  if (op === '^') return 3;
  if (op === '*') return 2;
  if (op === '/') return 2;
  if (op === '+') return 1;
  if (op === '-') return 1;
}

module.exports = calculate;

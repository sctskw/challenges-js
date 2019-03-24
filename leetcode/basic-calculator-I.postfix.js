const OPS = {
  '+': function (a, b) {
    console.log(`${a} + ${b}`);
    return parseInt(a) + parseInt(b);
  },
  '-': function (a, b) {
    console.log(`${a} - ${b}`);
    return parseInt(a) - parseInt(b);
  },
  '*': function (a, b) {
    console.log(`${a} * ${b}`);
    return parseInt(a) * parseInt(b);
  },
  '/': function (a, b) {
    console.log(`${a} / ${b}`);
    return parseInt(a) / parseInt(b);
  }
};

function calculate (str) {
  let tokens = toPostFix(str);
  let len = tokens.length;
  let stack = [];

  console.log(tokens);

  for (let i = 0; i < len; i++) {
    let val = tokens[i];

    console.log(val, 'stack: ', stack);

    if (isDigit(val)) {
      stack.push(parseInt(val));
      continue;
    }

    if (isOp(val)) {
      let op2 = stack.pop();
      let op1 = stack.pop();
      stack.push(OPS[val].call(null, op1, op2));
      continue;
    }
  }

  // leftovers
  while (stack.length > 1) {
    stack.push(OPS['+'].call(null, stack.pop(), stack.pop()));
  }

  console.log(stack);

  return stack[0];
}

function toPostFix (str) {
  let expr = str.replace(/\s+/ig, '');
  let tokens = [];
  let stack = [];
  let i = 0;
  let num = '';

  for (i; i < expr.length; i++) {
    let char = expr[i];

    console.log('char=', char);
    console.log('stack=', stack);
    console.log('postfix=', tokens);
    console.log('++++++++++++++++++++++++++++++++++++++++++');

    if (isDigit(char)) {
      num += char;
      continue;
    }

    // append the digits first
    if (num.length) {
      tokens.push(num);
      num = '';
    }

    if (isOp(char)) {
      if (!stack.length) {
        stack.push(char);
        continue;
      }

      let op = stack.pop();

      while (op !== '(' && precedence(op) >= precedence(char)) {
        tokens.push(op);
        op = stack.pop();
      }

      stack.push(char);
    }

    if (isParen(char)) {
      if (char === '(') {
        stack.push(char);
      }

      if (char === ')') {
        let op = stack.pop();

        while (op !== ')' && stack.length) {
          tokens.push(op);
          op = stack.pop();
        }

        if (isOp(op)) {
          tokens.push(op);
          op = null;
        }
      }
    }

    console.log('char=', char);
    console.log('stack=', stack);
    console.log('postfix=', tokens);
    console.log('-----------------------------------------');
  }

  if (num.length) {
    tokens.push(num);
    num = '';
  }

  while (stack.length) {
    tokens.push(stack.pop());
  }

  return tokens;
}

function precedence (op) {
  if (op === '^') return 4;
  if (op === '*') return 3;
  if (op === '/') return 2;
  if (op === '+') return 1;
  if (op === '-') return 1;
}

function isDigit (val) {
  return !isNaN(parseInt(val));
}

function isOp (val) {
  return /[-+*/]/ig.test(val);
}

function isParen (val) {
  return /[()]/ig.test(val);
}

module.exports = calculate;

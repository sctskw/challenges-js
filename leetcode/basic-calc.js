#!/usr/bin/env node

function tokenize(str) {

  let stack = [];
  let stackIdx = 0;
  let char = '';
  let num = '';
  let op = 1;
  let ops = [];

  console.log('EXP: ', str);

  function next() {
    console.log('op>>', op);
    stack.push(op);
    stack.push([0]);
    stackIdx = stack.length - 1;
  }

  function stacker(sign) {
    if(num.length) {
      if(!stack.length) next();
      console.log('stack >>', num, sign);
      stack[stackIdx].push(parseInt(num) * sign);
      num = '';
      return true;
    }
    return false;
  }

  for(let i = 0; i<str.length; i++) {


    char = str[i];

    //digit
    if(isDigit(char)) {
      num += char;
      continue;
    }


    if(char === '(') {
      stacker(op);
      next();
      op = 1;
    }

    if(char === '+') {
      stacker(op);
      op = 1;
    }

    if(char === '-') {
      stacker(op);
      op = -1;
    }

    if(char === ')') {
      stacker(op);
      next();
      op = 1;
    }

  }

  if(num.length) {
    stacker(op);
  }

  return stack;
}

function isDigit(str) {
  return !isNaN(parseInt(str));
}

function sum(items) {
  return items.reduce(function(sum, n) {
    sum += parseInt(n);
    return sum;
  });
}

// remove useless parens
function clean(exp) {
  let bs = exp.match(/\(\d+\)/ig) || [];

  bs.forEach(function(m) {
    let num = m.replace(/[()]/ig, '');
    exp = exp.replace(m, num);
  });

  return exp;
}

function calculate(str) {

  let exp = clean(str.replace(/\s+/ig, ''));
  let tokens = tokenize(exp);
  let sign = 1;

  console.log('tokens: ', tokens);

  return tokens.reduce(function(total, token) {

    if(token === 1 || token === -1) {
      sign = token * sign;
      return total;
    }

    try {

      console.log(`total = ${token} * ${sign}`);
      total += sum(token) * sign;

    } catch(err) {
      console.log('err: ', token);
    }


    return total;

  }, 0);

}

module.exports = calculate;

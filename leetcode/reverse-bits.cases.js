#!/usr/bin/env node

const reverse = require('./reverse-bits.js');

const CASES = [
  {
    input: '00000010100101000001111010011100',
    expect: '00111001011110000010100101000000'
  },
  {
    input: '11111111111111111111111111111101',
    expect: '10111111111111111111111111111111'
  }
];



CASES.forEach(function(c) {
  console.log('\ninput: ', c.input);
  console.log('expected: ', c.expect);
  console.log('ouput: ', reverse(c.input));
});

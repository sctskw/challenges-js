#!/usr/bin/env node
// const find = require('./longest-substring-without-repeats.brute.js');
const find = require('./longest-substring-without-repeats.js');

const CASES = [
  'abcabcbb',
  'bbbbb',
  'pwwkew',
  'aa',
  'au',
  'aab',
  'dvdf',
  'nfpdmpi',
  'tmmzuxt',
  'bbtablud'
];

CASES.forEach(function (exp) {
  console.log('\n-------------------------------');
  console.log('Case: ', exp);
  console.log('Output: ', find(exp));
});

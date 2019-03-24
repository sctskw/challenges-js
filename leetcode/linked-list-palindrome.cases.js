#!/usr/bin/env node

const solver = require('./linked-list-palindrome.js').solve;
const Node = require('./linked-list-palindrome.js').Node;

const CASES = [
  new Node(1, new Node(2, new Node(3, new Node(2, new Node(1))))),
  new Node(1),
  new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))),
  new Node(1, new Node(2)),
];

CASES.forEach(function (c) {
  // console.log(c);
  console.log(solver(c));
});

#!/usr/bin/env node

const add = require('./add-two-numbers.js');


function ListNode(val, next) {
  this.val = val;
  this.next = next;
  return this;
}

const CASES = [
  [
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
  ],
  [
    new ListNode(5),
    new ListNode(5)
  ],
  [
    new ListNode(9),
    new ListNode(9)
  ],
  [
    new ListNode(1, new ListNode(8)),
    new ListNode(0)
  ],
  [
    new ListNode(0),
    new ListNode(7, new ListNode(3)),
  ],

];


CASES.forEach(function(values) {
  console.log('\ncase: >>>', values)

  let result = add(values[0], values[1]);

  let out = [];

  while(result) {
    out.push(result.val);
    result = result.next;
  }

  console.log(out);

})

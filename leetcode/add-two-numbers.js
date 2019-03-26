/*

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a
single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the
number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

function ListNode(val, next) {
  this.val = val;
  this.next = next;
  return this;
}

function addTwoNumbers (l1, l2) {

  let n = 0;
  let carry = 0;
  let result = new ListNode();
  let head = result;

  while(l1 || l2 || n) {

    if(l1) {
      n += l1.val;
      l1 = l1.next;
    }

    if(l2) {
      n += l2.val;
      l2 = l2.next;
    }

    // save the carry
    if(n >= 10) {
      carry = 1;
      n -= 10;
    }

    head.next = new ListNode(n);
    head = head.next;

    n = carry;
    carry = 0;

  }

  return result.next;

}

module.exports = addTwoNumbers;

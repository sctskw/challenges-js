function ListNode (value, next) {
  this.val = value;
  this.next = next || null;
}

function reverse (head) {
  let prev = null;
  let curr = head;
  let follow = head;

  while (curr) {
    follow = follow.next;
    curr.next = prev;
    prev = curr;
    curr = follow;
  }

  return prev;
}

function copy (node) {
  let start = new ListNode();
  let head = start;
  let curr = node;

  while (head && curr) {
    head.next = new ListNode(curr.val);
    curr = curr.next;
    head = head.next;
  }

  return start.next;
}

function solve (head) {
  let curr = copy(head); // have to copy because... references
  let rhead = reverse(head);
  let result = true;

  while (curr) {
    result = (curr.val === rhead.val);
    curr = curr.next;
    rhead = rhead.next;
  }

  return result;
}

module.exports.solve = solve;
module.exports.Node = ListNode;

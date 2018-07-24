
class Node {
  constructor(value, next) {
    this.next = next || null;
    this.value = value || 'N/A';
  }

  toString() {
    return `[${this.value}]`;
  }
}


class Stack {

  constructor() {
    this.top = null;
  }

  pop() {

    if(this.empty()) return null;

    let node = this.top;
    this.top = node.next;
    return node;
  }

  peek() {
    return this.top;
  }

  push(node) {
    node.next = this.top;
    this.top = node;
    return this;
  }

  empty() {
    return this.top === null;
  }
}

let s = new Stack();

s.push(new Node('a'));
s.push(new Node('b'));
s.push(new Node('c'));

let node = null;

while(node = s.pop()) {
  console.log(node.toString());
}

console.log(s.peek());


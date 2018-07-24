class Node {
  constructor(value, next) {
    this.value = value || 'N/A';
    this.next = next || null;
  }

  toString() {
    return `{${this.value}}`;
  }
}


class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(node) {

    if(this.empty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  remove() {

    var node = this.head;

    if(!node) {
      this.tail = null;
    } else {
      this.head = node.next;
    }

    return node;
  }

  peek() {
    return this.head;
  }

  empty() {
    return this.head === null && this.tail === null;
  }

}


var q = new Queue();

q.add(new Node('a'));
q.add(new Node('b'));
q.add(new Node('c'));

let node = null;

while(node = q.remove()) {
  console.log(node.toString());
}

console.log(q.empty());


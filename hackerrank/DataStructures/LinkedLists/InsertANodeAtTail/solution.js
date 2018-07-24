var Node = function(data) {
  this.data = data;
  this.next = null;
}

function insert(head, data) {

  let node = new Node(data);

  //force null
  node.next = null;

  if(!head) return node;

  let tail = head; //start at head

  while(tail.next) {
    tail = tail.next;
  }

  tail.next = node;

  return head;

}

let data = [3, 247, 678, 159, 17];
let head = null;

data.forEach(function(val) {

  head = insert(head, val);

})

console.log(head);

let curr = head;

while(curr) {
  console.log(curr.data);
  curr = curr.next;
}

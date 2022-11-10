function Node(data) {
  this.data = data;
  this.next = null;
};

function length(head) {
  let count = 0;
  let node = head
  while (node) {
    count++;
    node = node.next;
  }
  return count;
};

function count(head, data) {
  let count = 0;
  let node = head
  while (node) {
    if (data === node.data) {
      count++;
    }
    node = node.next;
  }
  return count;
};
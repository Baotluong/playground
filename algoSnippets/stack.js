class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push (value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const nextNode = this.first;
      this.first = newNode;
      newNode.next = nextNode;
    }
    return this.size++;
  }

  pop () {
    if (!this.first) return null;
    const poppedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = poppedNode.next;
    }
    this.size--;
    return poppedNode;
  }
}

const stack = new Stack;
stack.push(0);
stack.push(1);
stack.push(2);

module.exports = Stack;

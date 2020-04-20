class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0; 
  }

  enqueue (value) {
    const newNode = new Node(value);
    if (!this.head)  {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    return ++this.size;
  }

  dequeue () {
    if (!this.head) return null;
    if (this.size === 1) {
      this.tail = null;
    }
    const dequeueNode = this.head;
    this.head = this.head.next;
    this.size--;
    return dequeueNode
  }
}

const q = new Queue();
q.enqueue(0);
q.enqueue(1);
q.enqueue(2);

console.log(q);

module.exports = Queue;
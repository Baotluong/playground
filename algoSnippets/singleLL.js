class Node {
  constructor (value) {
    this.value = value
    this.next = null;
  }
}

class SingleLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;
    if (!this.head.next) {
      const head = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return head;
    }
    let node = this.head;
    let prev = null;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    this.tail = prev;
    prev.next = null;
    this.length--;
    return node;
  }

  shift() {
    if (!this.head) return;
    
    const head = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return head;
  }

  unshift(value) {
    const head = this.head;
    this.head = new Node(value);
    this.head.next = head;
    if (!this.tail) this.tail = this.head;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let node = this.head;
    let counter = 0;
    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if(foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const prev = this.get(index - 1);
    const newNode = new Node(value);
    const next = prev.next;
    prev.next = newNode;
    newNode.next = next;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index-1);
    const next = prev.next;
    prev.next = next.next;
    this.length--;
    return next;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SingleLinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)

console.log('end')
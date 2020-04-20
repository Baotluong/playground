class Node {
  constructor (value) {
    this.value = value
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return ++this.length;
  }

  pop () {
    if (!this.head) return null;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }
    poppedNode.prev = null;
    this.length--
    return poppedNode;
  }

  shift () {
    if (!this.head) return null;
    const shiftNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftNode.next;
      this.head.prev = null;
    }
    shiftNode.next = null;
    this.length--
    return shiftNode;
  }

  unshift (value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const next = this.head;
      this.head = newNode;
      newNode.next = next;
      next.prev = newNode;
    }
    return ++this.length;
  }

  get (index) {
    if (index < 0 || index >= this.length) return null;
    if (index < this.length / 2) {
      let counter = 0;
      let node = this.head;
      while (counter !== index) {
        node = node.next;
        counter++
      }
      return node;
    } else {
      let counter = this.length - 1;
      let node = this.tail;
      while (counter !== index) {
        node = node.prev;
        counter--
      }
      return node;
    }
  }

  set (index, value) {
    if (index < 0 || index >= this.length) return null;
    const getNode = this.get(index);
    getNode.value = value;
    return getNode;
  }

  insert (index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    const nextNode = this.get(index);
    const prevNode = nextNode.prev;
    const newNode = new Node(value);
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++
    return true;
  }

  remove (index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removeNode = this.get(index);
    removeNode.prev.next = removeNode.next;
    removeNode.next.prev = removeNode.prev;
    removeNode.next = null
    removeNode.prev = null
    this.length--
    return removeNode
  }

  reverse () {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    while (node) {
      const next = node.next;
      node.next = node.prev;
      node.prev = next;
      node = node.prev;
    }
    return this.print();
  }

  print () {
    let node = this.head;
    let output = '';
    while (node) {
      output += ` ${node.value}`
      node = node.next
    }
    console.log(output);
  }

  printRev () {
    let node = this.tail;
    let output = '';
    while (node) {
      output += ` ${node.value}`;
      node = node.prev
    }
    console.log(output)
  }
}

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.insert(1, 'mid')
list.print();
list.printRev();
console.log(list);

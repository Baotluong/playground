class Node {
  constructor (val) {
    this.val = val;
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
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
    }
    this.tail = newNode
    this.length++;
    return this;
  }

  pop () {
    if(!this.tail) return;
    const tail = this.tail;
    
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      tail.prev.next = null;
      this.tail = tail.prev;
      tail.prev = null;
    }
    
    this.length--;
    return tail;
  }

  shift () {
    if(!this.head) return;
    const prevHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = prevHead.next;
      this.head.prev = null;
      prevHead.next = null;
    }
    this.length--
    return prevHead;
  }

  unshift (value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get (index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let node = this.head;
      let counter = 0;
      while (index !== counter) {
        node = node.next;
        counter++
      }
      return node;
    } else {
      let node = this.tail;
      let counter = this.length - 1;
      while (index !== counter) {
        node = node.prev;
        counter--;
      }
      return node;
    }
  }

  set (index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return foundNode;
    }
    return null;
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
    this.length++;

    return true;
  }

  remove (index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  reverse () {
    const node = this.head;
    this.head = this.tail;
    this.tail = node;

    while (head.next) {

    }
  }
}

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);

console.log(list);

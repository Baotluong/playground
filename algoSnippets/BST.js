const Queue = require('./queue');
const Stack = require('./stack');

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor (queue, stack) {
    this.root = null;
    this.Queue = queue;
    this.Stack = stack;
  }

  insertR (value, node = this.root) {
    if (!this.root) return this.root = new Node(value);
    if (value === node.value) return undefined;
    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.insert(value, node.left);
      }
    } else {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.insert(value, node.right);
      }
    }
  }

  insertI (value) {
    const newNode = new Node(value);
    if (!this.root) {
      return this.root = newNode;
    }
    let node = this.root;
    while (true) {
      if (value === node.value) return undefined;
      if (value < node.value) {
        if (node.left === null) {
          return node.left = newNode;
        } else {
          node = node.left;
        }
      } else {
        if (node.right === null) {
          return node.right = newNode
        } else {
          node = node.right;
        }
      }
    }
  }

  searchI (value) {
    if (!this.root) return false;
    let node = this.root;
    while (true) {
      if (node.value === value) return true;
      if (value < node.value) {
        if (!node.left) return false;
        node = node.left
      } else {
        if (!node.right) return false;
        node = node.right
      }
    }
  }

  searchR (value, node = this.root) {
    if (!this.root) return false;
    if (node.value === value) return true;
    if (value < node.value) {
      if (node.left) return this.searchR(value, node.left)
      return false;
    } else {
      if (node.right) return this.searchR(value, node.right)
      return false
    }
  }

  traverseBF () {
    if (!this.root) return null;
    const q = new this.Queue();
    const data = [];
    q.enqueue(this.root)
    while (q.size) {
      const node = q.dequeue();
      data.push(node.value.value);
      if (node.value.left) q.enqueue(node.value.left);
      if (node.value.right) q.enqueue(node.value.right);
    }
    return data;
  }

  traverseDFpre () {
    if (!this.root) return null;
    const data = [];
    
    const helper = (node) => {
      data.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }

    helper(this.root);
    return data;
  }

  traverseDFpost () {
    if (!this.root) return null;
    const data = [];
    
    const helper = (node) => {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      data.push(node.value);
    }

    helper(this.root);
    return data;
  }

  traverseDFin () {
    if (!this.root) return null;
    const data = [];
    
    const helper = (node) => {
      if (node.left) helper(node.left);
      data.push(node.value);
      if (node.right) helper(node.right);
    }

    helper(this.root);
    return data;
  }
}

const bts = new BinarySearchTree(Queue, Stack);
bts.insertI(10);
bts.insertI(6);
bts.insertI(15);
bts.insertI(3);
bts.insertI(8);
bts.insertI(20);
console.log(bts.traverseBF())
console.log(bts.traverseDFpre())
console.log(bts.traverseDFpost())
console.log(bts.traverseDFin())
// console.log(bts);

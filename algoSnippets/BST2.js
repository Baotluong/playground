class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert = (value) => {
    if (!this.root) {
      this.root = new Node(value);
      return console.log(this);
    }
    var current = this.root;
    while (true) {
      if (value <= current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return console.log(this);
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return console.log(this);
        }
      }
    }
  }

  insertR = (value, current = this.root) => {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    if (value < current.value) {
      if (current.left) {
        this.insertR(value, current.left);
      } else {
        current.left = new Node(value);
      }
    } else {
      if (current.right) {
        this.insertR(value, current.right);
      } else {
        current.right = new Node(value);
      }
    }
  }

  search = (value) => {
    var current = this.root;
    while (true) {
      if (current.value === value) return current;
      if (value < current.value) {
        if (!current.left) return null;
        current = current.left;
      } else {
        if (!current.right) return null;
        current = current.right;
      }
    }
  }

  searchR = (value, current = this.root) => {
    if (value === current.value) return current;
    if (value < current.value) {
      if (!current.left) return null;
      return this.searchR(value, current.left);
    } else {
      if (!current.right) return null;
      return this.searchR(value, current.right);
    }
  }
  
  traverseBF = () => {
    if (!this.root) return null;
    const queue = [];
    const data = [];
    queue.push(this.root);
    while (queue.length > 0) {
      var current = queue.shift();
      data.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  traverseDFpre = () => {
    if (!this.root) return null;
    const data = [];

    const helper = (node) => {
      data.push(node.value)
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }

    helper(this.root);
    return data;
  }

  traverseDFpost = () => {
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

  traverseDFin = () => {
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

const tree = new Tree();
tree.insertR(10);
tree.insertR(6);
tree.insertR(15);
tree.insertR(3);
tree.insertR(8);
tree.insertR(20);
console.log(tree.traverseBF())
console.log(tree.traverseDFpre())
console.log(tree.traverseDFpost())
console.log(tree.traverseDFin())

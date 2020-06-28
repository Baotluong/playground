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

  insertI = (value) => {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    var current = this.root;
    while(true) {
      if(value === current.value) return this;
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return this;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return this;
        }
      }
    }
  }

  insertR = (value, current = this.root) => {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    if (value === current.value) return this;
    if (value < current.value) {
      if (current.left) return this.insertR(value, current.left);
      current.left = new Node(value);
      return this;
    } else {
      if (current.right) return this.insertR(value, current.right);
      current.right = new Node(value);
      return this;
    }
  }

  search = (value) => {
    if (!this.root) return null;
    var current = this.root;
    while(true) {
      if (value === current.value) return current;
      if (value < current) {
        if (!current.left) return null;
        current = current.left;
      } else {
        if  (!current.right) return null;
        current = current.right;
      }
    }
  }

  searchR = (value, current = this.root) => {
    if (!this.root) return null;
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
    const data = [];
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      data.push(current.value);
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    return data;
  }

  traverseDFpre = () => {
    if (!this.root) return null;
    const data = [];
    
    const helper = (current) => {
      data.push(current.value);
      current.left && helper(current.left);
      current.right && helper(current.right);
    }

    helper(this.root);
    return data;
  }

  traverseDFpost = () => {
    if (!this.root) return null;
    const data = [];
    const helper = (current) => {
      current.left && helper(current.left);
      current.right && helper(current.right);
      data.push(current.value);
    }

    helper(this.root)
    return data;
  }

  traverseDFin = () => {
    if (!this.root) return null;
    const data = [];
    const helper = (current) => {
      current.left && helper(current.left)
      data.push(current.value)
      current.right && helper(current.right)
    }
    helper(this.root)
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
console.log(tree.searchR(20));
console.log(tree.searchR(10));
console.log(tree.searchR(30));
console.log(tree.traverseBF());
console.log(tree.traverseDFpre());
console.log(tree.traverseDFpost())
console.log(tree.traverseDFin())

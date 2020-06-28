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
    var node = this.root;
    while (true) {
      if (value < node.value) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = new Node(value);
          return;
        }
      } else {
        if (node.right) {
          node = node.right;
        } else {
          node.right = new Node(value);
          return this;
        }
      }
    }
  }

  insertR = (value, node = this.root) => {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    if (value < node.value) {
      if (node.left) {
        this.insertR(value, node.left);
      } else {
        node.left = new Node(value);
        return this;
      }
    } else {
      if (node.right) {
        this.insertR(value, node.right);
      } else {
        node.right = new Node(value);
        return this;
      }
    }
  }

  search = (value) => {
    if (!this.root) return null;
    let node = this.root;
    while (true) {
      if (value === node.value) return node;
      if (value < node.value) {
        if (node.left) {
          node = node.left;
        } else {
          return null;
        }
      } else {
        if (node.right) {
          node = node.right;
        } else {
          return null;
        }
      }

    }
  }

  searchR = (value, node = this.root) => {
    if (!this.root) return null;
    if (value === node.value) return node;
    if (value < node.value) {
      if (node.left) return this.searchR(value, node.left);
      return null;
    } else {
      if (node.right) return this.searchR(value, node.right);
      return null;
    }
  }
  
  traverseBF = () => {
    if (!this.root) return null;
    const queue = [this.root];
    const data = [];
    while (queue.length) {
      const node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  traverseDFpre = () => {
    if (!this.root) return null;
    const data = [];
    const helper = (node) => {
      data.push(node.value);
      node.left && helper(node.left);
      node.right && helper(node.right);
    }
    helper(this.root);
    return data;
  }

  traverseDFpost = () => {
    if (!this.root) return null;
    const data = [];
    const helper = (node) => {
      node.left && helper(node.left);
      node.right && helper(node.right);
      data.push(node.value);
    }
    helper(this.root);
    return data;
  }

  traverseDFin = () => {
    if(!this.root) return null;
    const data = [];
    const helper = (node) => {
      node.left && helper(node.left)
      data.push(node.value)
      node.right && helper(node.right)
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
console.log(tree.insertR(20));
// tree.insertI(10);
// tree.insertI(6);
// tree.insertI(15);
// tree.insertI(3);
// tree.insertI(8);
// tree.insertI(20);
console.log(tree.searchR(20));
console.log(tree.searchR(10));
console.log(tree.searchR(30));
console.log(tree.search(20));
console.log(tree.search(10));
console.log(tree.search(30));
console.log(tree.traverseBF());
console.log(tree.traverseDFpre());
console.log(tree.traverseDFpost())
console.log(tree.traverseDFin())

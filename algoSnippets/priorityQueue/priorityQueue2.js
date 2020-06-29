class Node {
  constructor (value, priority) {
    this.priority = priority
    this.value = value
  }
}

class PriorityQueue {
  constructor () {
    this.values = []
  }

  enqueue (value, priority) {
    const newNode = new Node(value, priority)
    this.values.push(newNode)
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentNode = this.values[parentIdx];
      if (priority < parentNode.priority) {
        this.values[idx] = parentNode
        this.values[parentIdx] = newNode;
        idx = parentIdx;
      } else break;
    }
  }

  dequeue () {
    const min = this.values[0];
    this.values[0] = this.values[this.values.length - 1]
    this.values.pop();
    
    let idx = 0;
    let node = this.values[idx];
    
    while (true) {
      let leftChildIdx = idx * 2 + 1
      let rightChildIdx = idx * 2 + 2
      let swap = null
      let leftChild, rightChild
      
      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx]
        if (node.priority > leftChild.priority) swap = leftChildIdx
      }
      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx]
        if (node.priority > rightChild.priority && rightChild.priority < leftChild.priority) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap]
      this.values[swap] = node
      idx = swap
    }

    return min;
  }
}

const pq = new PriorityQueue();
pq.enqueue(0, 33)
pq.enqueue(0, 41)
pq.enqueue(0, 55)
pq.enqueue(0, 39)
pq.enqueue(0, 18)
pq.enqueue(0, 27)
pq.enqueue(0, 12)

pq.dequeue()
pq.dequeue()

module.exports = { PriorityQueue, Node };
// 12 33 18 41 39 55 27
// 18 33 27 41 39 55
// 27 33 55 41 39
// 33 39 55 41
// 39 41 55
// 41 55
// 55
// undefined
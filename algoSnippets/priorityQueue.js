class Node {
  constructor (priority, value) {
    this.priority = priority,
    this.value = value
  }
}

class PriorityQueue {
  constructor () {
    this.values = [];
  }

  enqueue (value, priority) {
    const newNode = new Node(priority, value)
    this.values.push(newNode)
    let idx = this.values.length - 1;
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2)
      if (this.values[parentIdx] && priority < this.values[parentIdx].priority) {
        this.values[idx] = this.values[parentIdx]
        this.values[parentIdx] = newNode;
        idx = parentIdx
      } else {
        break;
      }
    }
    console.log('you did it. good boy')
  }

  dequeue () {
    const min = this.values[0];
    const last = this.values[this.values.length - 1]
    this.values[0] = last
    this.values.pop();

    let idx = 0;
    while (true) {
      let leftChildIdx = idx * 2 + 1
      let rightChildIdx = idx * 2 + 2
      let swapIdx = null

      if (leftChildIdx < this.values.length) {
        var leftChildPriority = this.values[leftChildIdx].priority
        if (leftChildPriority <= last.priority) swapIdx = leftChildIdx
      }
      if (rightChildIdx < this.values.length) {
        var rightChildPriority = this.values[rightChildIdx].priority
        if (
          rightChildPriority <= last.priority &&
          rightChildPriority < leftChildPriority
        ) swapIdx = rightChildIdx
      }
      if (swapIdx === null) break
      this.values[idx] = this.values[swapIdx]
      this.values[swapIdx] = last
      idx = swapIdx
    }

    return min
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

console.log(pq.values)

// 12 33 18 41 39 55 27
// 18 33 27 41 39 55
// 27 33 55 41 39
// 33 39 55 41
// 39 41 55
// 41 55
// 55
// undefined
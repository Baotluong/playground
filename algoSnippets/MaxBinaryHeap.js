class MaxBinaryHeap {
  constructor () {
    this.data = [];
  }

  insert2 (value) {
    this.data.push(value);
    let index = this.data.length - 1;
    while (true) {
      const parent = Math.floor((index - 1)/2)
      if (this.data[parent] < value) {
        this.data[index] = this.data[parent]
        this.data[parent] = value
        index = parent;
      } else {
        return;
      }
    }
  }

  insert (value) {
    this.data.push(value);
    let idx = this.data.length - 1;
    while (true) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.data[parentIdx];
      if (parent < value) {
        this.data[idx] = parent
        this.data[parentIdx] = value
        idx = parentIdx
      } else {
        return;
      }
    }
  }

  extractMax () {
    const max = this.data[0]
    this.data[0] = this.data[this.data.length - 1]
    this.data.pop();
    this.sinkDown2();
    return max;
  }

  // Just slightly more coherent
  sinkDown () {
    let idx = 0;
    let value = this.data[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let swapIdx = null

      if (leftChildIdx < this.data.length) {
        const leftChild = this.data[leftChildIdx]
        if (leftChild > value) swapIdx = leftChildIdx
      }
      if (rightChildIdx < this.data.length) {
        const rightChild = this.data[leftChildIdx]
        if (rightChild > value && rightChild > leftChild) swapIdx = rightChildIdx
      }

      if (swapIdx === null) break;
      const temp = this.data[idx]
      this.data[idx] = this.data[swapIdx]
      this.data[swapIdx] = temp;
      idx = swapIdx
    }
  }

  sinkDown2 () {
    let idx = 0;
    const length = this.data.length;
    const element = this.data[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.data[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.data[rightChildIdx];
        if ((rightChild > element && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.data[idx] = this.data[swap];
      this.data[swap] = element;
      idx = swap;
    }
  }
}

const mbh = new MaxBinaryHeap();
mbh.insert(33)
mbh.insert(41)
mbh.insert(55)
mbh.insert(39)
mbh.insert(18)
mbh.insert(27)
mbh.insert(12)
mbh.extractMax()
mbh.extractMax()

var c
// [55, 39, 41, 33, 18, 27, 12]
// [41, 39, 27, 33, 18, 12]
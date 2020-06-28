class MaxBinaryHeap {
  constructor () {
    this.data = [];
  }

  insert (value) {
    this.data.push(value);
    let index = this.data.length - 1;
    while (true) {
      let parent = Math.floor((index - 1) / 2);
      if (value > this.data[parent]) {
        this.data[index] = this.data[parent];
        this.data[parent] = value;
        index = parent;
      } else break;
    }
  }

  extractMax () {
    const max = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();
    this.sinkDown();
    return max;
  }

  sinkDown () {
    let idx = 0;
    let value = this.data[idx];

    while (true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let swap = null;

      if (leftIdx < this.data.length) {
        if (this.data[leftIdx] > value) {
          swap = leftIdx;
        }
      }
      if (rightIdx < this.data.length) {
        if (this.data[rightIdx] > value && this.data[rightIdx] > this.data[leftIdx]) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.data[idx] = this.data[swap];
      this.data[swap] = value;
      idx = swap;
    }
  }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(33)
maxBinaryHeap.insert(41)
maxBinaryHeap.insert(55)
maxBinaryHeap.insert(39)
maxBinaryHeap.insert(18)
maxBinaryHeap.insert(27)
maxBinaryHeap.insert(12)
maxBinaryHeap.extractMax()
maxBinaryHeap.extractMax()

// [55, 39, 41, 33, 18, 27, 12]
// [41, 39, 27, 33, 18, 12]
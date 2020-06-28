const MaxBinaryHeap = require('./MaxBinaryHeap');

describe('MaxBinaryHeap', () => {
  let maxBinaryHeap
  beforeAll(() => {
    maxBinaryHeap = new MaxBinaryHeap();
    console.log('Im making a heap');
  })
  beforeEach(() => {
    maxBinaryHeap.insert(33)
    maxBinaryHeap.insert(41)
    maxBinaryHeap.insert(55)
    maxBinaryHeap.insert(39)
    maxBinaryHeap.insert(18)
    maxBinaryHeap.insert(27)
    maxBinaryHeap.insert(12)
  })
  afterEach(() => {
    maxBinaryHeap.data = [];
  })

  it('should have an insert function', () => {
    expect(typeof maxBinaryHeap.insert).toBe('function');
  })

  it('should insert the new node', () => {
    expect(maxBinaryHeap.data).toContain(12);
  })

  it('should reorder after inserting new node', () => {
    expect(maxBinaryHeap.data).toEqual([55, 39, 41, 33, 18, 27, 12]);
  });

  it('should correctly extract the max node', () => {
    expect(maxBinaryHeap.extractMax()).toBe(55);
  })

  it('should reorder after extracting max node', () => {
    maxBinaryHeap.extractMax()
    expect(maxBinaryHeap.data).toEqual([41, 39, 27, 33, 18, 12])
  })
})
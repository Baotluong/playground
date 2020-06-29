const pq = require('./priorityQueue2');
describe('priorityQueue2', () => {
  let priorityQueue;
  const defaultResult = [
    { value: 0, priority: 12 },
    { value: 0, priority: 33 },
    { value: 0, priority: 18 },
    { value: 0, priority: 41 },
    { value: 0, priority: 39 },
    { value: 0, priority: 55 },
    { value: 0, priority: 27 },
  ]
  beforeAll(() => {
    priorityQueue = new pq.PriorityQueue();
  })
  beforeEach(() => {
    priorityQueue.enqueue(0, 33)
    priorityQueue.enqueue(0, 41)
    priorityQueue.enqueue(0, 55)
    priorityQueue.enqueue(0, 39)
    priorityQueue.enqueue(0, 18)
    priorityQueue.enqueue(0, 27)
    priorityQueue.enqueue(0, 12)
  })
  afterEach(() => {
    priorityQueue.values = []
  })
  it('should insert enqueue a new node and reorder', () => {
    expect(priorityQueue.values).toEqual(defaultResult);
  })
  it('should remove lowest priority node when dequeueing', () => {
    expect(priorityQueue.values).not.toContain({ value: 0, priority: 12 })
  })
  it('should return the lowest priority node when dequeueing', () => {
    expect(priorityQueue.dequeue()).toEqual({ value: 0, priority: 12 })
  })
  it('should reorder the heap after dequeueing', () => {
    // 18 33 27 41 39 55
    const expectedResults = [18, 33, 27, 41, 39, 55];
    priorityQueue.dequeue();
    const actualResults = priorityQueue.values.map(node => node.priority)
    console.log(actualResults)
    expect(actualResults).toEqual(expectedResults);
  })
})
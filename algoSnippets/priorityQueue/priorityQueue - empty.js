class Node {
  constructor () {
   
  }
}

class PriorityQueue {
  constructor () {
  }

  enqueue (value, priority) {
  }

  dequeue () {
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

module.exports.pq = PriorityQueue;
// 12 33 18 41 39 55 27
// 18 33 27 41 39 55
// 27 33 55 41 39
// 33 39 55 41
// 39 41 55
// 41 55
// 55
// undefined